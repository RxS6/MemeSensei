import { Buffer } from 'buffer';

export interface MemeData {
  imageBase64: string;
  contentType: string;
  fileName: string;
}

export async function fetchMemeFromUrl(url: string): Promise<MemeData> {
  try {
    // Validate URL
    const urlObj = new URL(url);
    
    // Support for various platforms - extract direct image URLs where possible
    let imageUrl = url;
    
    // For social media platforms, we'll try to fetch the URL directly
    // In a production app, you might need specific APIs for each platform
    
    const response = await fetch(imageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch meme: ${response.status} ${response.statusText}`);
    }

    const contentType = response.headers.get('content-type') || '';
    
    // Check if it's an image
    if (!contentType.startsWith('image/')) {
      throw new Error('URL does not point to an image. Please provide a direct image URL.');
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const imageBase64 = buffer.toString('base64');
    
    // Extract filename from URL
    const urlPath = urlObj.pathname;
    const fileName = urlPath.split('/').pop() || 'meme.jpg';

    return {
      imageBase64,
      contentType,
      fileName
    };
  } catch (error) {
    console.error('Error fetching meme:', error);
    throw new Error(`Failed to fetch meme from URL: ${(error as Error).message}`);
  }
}

export function validateImageData(base64Data: string): boolean {
  try {
    // Check if it's valid base64
    const buffer = Buffer.from(base64Data, 'base64');
    
    // Check for common image file signatures
    const signatures = [
      [0xFF, 0xD8, 0xFF], // JPEG
      [0x89, 0x50, 0x4E, 0x47], // PNG
      [0x47, 0x49, 0x46], // GIF
      [0x52, 0x49, 0x46, 0x46], // WEBP (starts with RIFF)
    ];

    return signatures.some(sig => 
      sig.every((byte, index) => buffer[index] === byte)
    );
  } catch {
    return false;
  }
}
