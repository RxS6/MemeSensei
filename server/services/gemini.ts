import * as fs from "fs";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export interface MemeAnalysisResult {
  explanation: string;
  culturalContext?: string;
  confidence: number;
}

export async function analyzeMeme(
  imageBase64: string, 
  language: string,
  memeUrl?: string
): Promise<MemeAnalysisResult> {
  try {
    const languageNames: Record<string, string> = {
      'en': 'English',
      'es': 'Spanish', 
      'fr': 'French',
      'de': 'German',
      'it': 'Italian',
      'pt': 'Portuguese',
      'ru': 'Russian',
      'ja': 'Japanese',
      'ko': 'Korean',
      'zh': 'Chinese',
      'hi': 'Hindi',
      'hi-en': 'Hinglish (Hindi-English mix)',
      'ar': 'Arabic'
    };

    const targetLanguage = languageNames[language] || 'English';

    const systemPrompt = `You are an expert meme analyst who understands internet culture, humor, and memes across different platforms and cultures. Analyze the provided meme image and explain it in ${targetLanguage}.

${language === 'hi-en' ? 'For Hinglish responses, mix Hindi and English naturally as people do in conversation. Use Hindi words for emotions, expressions, and cultural references while keeping technical terms in English.' : ''}

Your response must be in JSON format with the following structure:
{
  "explanation": "A clear, detailed explanation of the meme in ${targetLanguage}. Explain the visual elements, the joke, and why it's funny. Keep it conversational and easy to understand.",
  "culturalContext": "Optional additional context about cultural references, origins, or background that would help someone understand the meme better. Only include if relevant.",
  "confidence": "A number between 0 and 1 indicating how confident you are in this analysis"
}

Focus on:
- What the image shows
- The joke or humor being conveyed
- Any cultural or internet references
- Why this format/template is popular
- Make it accessible to someone who might not be familiar with internet culture`;

    const imageBytes = Buffer.from(imageBase64, 'base64');
    
    const contents = [
      {
        inlineData: {
          data: imageBase64,
          mimeType: "image/jpeg",
        },
      },
      `Please analyze this meme and explain it in ${targetLanguage}. ${memeUrl ? `The meme was found at: ${memeUrl}` : 'This meme was uploaded by the user.'}`
    ];

    const response = await ai.models.generateContent({
      model: "gemini-2.5-pro",
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: "application/json",
        responseSchema: {
          type: "object",
          properties: {
            explanation: { type: "string" },
            culturalContext: { type: "string" },
            confidence: { type: "number" },
          },
          required: ["explanation", "confidence"],
        },
      },
      contents: contents,
    });

    const rawJson = response.text;
    console.log(`Gemini Raw JSON: ${rawJson}`);

    if (rawJson) {
      const data: MemeAnalysisResult = JSON.parse(rawJson);
      return {
        explanation: data.explanation || 'Unable to analyze this meme.',
        culturalContext: data.culturalContext || undefined,
        confidence: Math.max(0, Math.min(1, data.confidence || 0.5))
      };
    } else {
      throw new Error("Empty response from Gemini model");
    }
  } catch (error) {
    console.error('Gemini API error:', error);
    throw new Error('Failed to analyze meme with AI: ' + (error as Error).message);
  }
}