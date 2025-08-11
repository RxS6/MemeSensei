import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY_ENV_VAR || "default_key"
});

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
      'ar': 'Arabic'
    };

    const targetLanguage = languageNames[language] || 'English';

    const systemPrompt = `You are an expert meme analyst who understands internet culture, humor, and memes across different platforms and cultures. Analyze the provided meme image and explain it in ${targetLanguage}.

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

    const userContent = [
      {
        type: "text" as const,
        text: `Please analyze this meme and explain it in ${targetLanguage}. ${memeUrl ? `The meme was found at: ${memeUrl}` : 'This meme was uploaded by the user.'}`
      },
      {
        type: "image_url" as const,
        image_url: {
          url: `data:image/jpeg;base64,${imageBase64}`
        }
      }
    ];

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        {
          role: "user", 
          content: userContent
        }
      ],
      response_format: { type: "json_object" },
      max_tokens: 1000,
    });

    const result = JSON.parse(response.choices[0].message.content || '{}');
    
    return {
      explanation: result.explanation || 'Unable to analyze this meme.',
      culturalContext: result.culturalContext || undefined,
      confidence: Math.max(0, Math.min(1, result.confidence || 0.5))
    };
  } catch (error) {
    console.error('OpenAI API error:', error);
    throw new Error('Failed to analyze meme with AI: ' + (error as Error).message);
  }
}
