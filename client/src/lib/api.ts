import { apiRequest } from "./queryClient";

export interface ExplainMemeResponse {
  id: string;
  explanation: string;
  culturalContext?: string;
  language: string;
  confidence: number;
  memeUrl?: string;
  fileName: string;
  memeType: 'url' | 'upload';
}

export async function explainMemeFromUrl(memeUrl: string, language: string): Promise<ExplainMemeResponse> {
  const response = await apiRequest('POST', '/api/explain-meme', {
    memeUrl,
    language
  });
  return response.json();
}

export async function explainMemeFromFile(file: File, language: string): Promise<ExplainMemeResponse> {
  const formData = new FormData();
  formData.append('memeFile', file);
  formData.append('language', language);
  
  const response = await fetch('/api/explain-meme', {
    method: 'POST',
    body: formData,
    credentials: 'include'
  });
  
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to analyze meme');
  }
  
  return response.json();
}
