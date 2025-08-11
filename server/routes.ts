import type { Express, Request } from "express";
import { createServer, type Server } from "http";
import multer from "multer";
import { storage } from "./storage";
import { analyzeMeme } from "./services/openai";
import { fetchMemeFromUrl, validateImageData } from "./services/meme-fetcher";
import { explainMemeRequestSchema } from "@shared/schema";
import { z } from "zod";

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req: any, file: any, cb: any) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Explain meme endpoint
  app.post("/api/explain-meme", upload.single('memeFile'), async (req: Request & { file?: Express.Multer.File }, res) => {
    try {
      let requestData;
      
      if (req.file) {
        // Handle file upload
        const fileBase64 = req.file.buffer.toString('base64');
        
        if (!validateImageData(fileBase64)) {
          return res.status(400).json({ 
            message: "Invalid image file. Please upload a valid image." 
          });
        }

        requestData = {
          language: req.body.language,
          fileData: fileBase64,
          fileName: req.file.originalname,
        };
      } else {
        // Handle URL or JSON request
        requestData = req.body;
      }

      // Validate request data
      const validatedData = explainMemeRequestSchema.parse(requestData);

      let imageBase64: string;
      let fileName: string;
      let memeUrl: string | undefined;

      if (validatedData.fileData) {
        // Use uploaded file data
        imageBase64 = validatedData.fileData;
        fileName = validatedData.fileName || 'uploaded-meme.jpg';
      } else if (validatedData.memeUrl) {
        // Fetch from URL
        try {
          const memeData = await fetchMemeFromUrl(validatedData.memeUrl);
          imageBase64 = memeData.imageBase64;
          fileName = memeData.fileName;
          memeUrl = validatedData.memeUrl;
        } catch (error) {
          return res.status(400).json({
            message: `Failed to fetch meme from URL: ${(error as Error).message}`
          });
        }
      } else {
        return res.status(400).json({
          message: "Please provide either a meme URL or upload an image file."
        });
      }

      // Analyze meme with OpenAI
      let analysisResult;
      try {
        analysisResult = await analyzeMeme(imageBase64, validatedData.language, memeUrl);
      } catch (error) {
        console.error('AI analysis failed:', error);
        return res.status(500).json({
          message: "Failed to analyze meme. Please try again later."
        });
      }

      // Store the explanation
      const memeExplanation = await storage.createMemeExplanation({
        memeUrl: memeUrl,
        memeType: memeUrl ? 'url' : 'upload',
        fileName: fileName,
        language: validatedData.language,
        explanation: analysisResult.explanation,
        culturalContext: analysisResult.culturalContext,
      });

      res.json({
        id: memeExplanation.id,
        explanation: analysisResult.explanation,
        culturalContext: analysisResult.culturalContext,
        language: validatedData.language,
        confidence: analysisResult.confidence,
        memeUrl: memeUrl,
        fileName: fileName,
        memeType: memeUrl ? 'url' : 'upload'
      });

    } catch (error) {
      console.error('Explain meme error:', error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          message: "Invalid request data.",
          errors: error.errors
        });
      }

      res.status(500).json({
        message: "Internal server error. Please try again later."
      });
    }
  });

  // Get recent meme explanations
  app.get("/api/recent-memes", async (req, res) => {
    try {
      const recentMemes = await storage.getRecentMemeExplanations(9);
      res.json(recentMemes);
    } catch (error) {
      console.error('Get recent memes error:', error);
      res.status(500).json({
        message: "Failed to fetch recent memes."
      });
    }
  });

  // Get meme explanation by ID
  app.get("/api/meme/:id", async (req, res) => {
    try {
      const meme = await storage.getMemeExplanation(req.params.id);
      if (!meme) {
        return res.status(404).json({
          message: "Meme explanation not found."
        });
      }
      res.json(meme);
    } catch (error) {
      console.error('Get meme error:', error);
      res.status(500).json({
        message: "Failed to fetch meme explanation."
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
