import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Link, Globe, Upload, Sparkles, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

interface MemeInputSectionProps {
  onResult: (result: any) => void;
  onError: (error: string) => void;
  onClear: () => void;
}

const languages = [
  { value: "en", label: "🇺🇸 English", name: "English" },
  { value: "hi", label: "🇮🇳 Hindi", name: "Hindi" },
  { value: "hi-en", label: "🇮🇳 Hinglish", name: "Hinglish" },
  { value: "es", label: "🇪🇸 Spanish", name: "Spanish" },
  { value: "fr", label: "🇫🇷 French", name: "French" },
  { value: "de", label: "🇩🇪 German", name: "German" },
  { value: "it", label: "🇮🇹 Italian", name: "Italian" },
  { value: "pt", label: "🇧🇷 Portuguese", name: "Portuguese" },
  { value: "ru", label: "🇷🇺 Russian", name: "Russian" },
  { value: "ja", label: "🇯🇵 Japanese", name: "Japanese" },
  { value: "ko", label: "🇰🇷 Korean", name: "Korean" },
  { value: "zh", label: "🇨🇳 Chinese", name: "Chinese" },
  { value: "ar", label: "🇸🇦 Arabic", name: "Arabic" }
];

export function MemeInputSection({ onResult, onError, onClear }: MemeInputSectionProps) {
  const [inputMethod, setInputMethod] = useState<'url' | 'upload'>('url');
  const [memeUrl, setMemeUrl] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        onError('Please select a valid image file.');
        return;
      }
      
      // Validate file size (10MB)
      if (file.size > 10 * 1024 * 1024) {
        onError('File size must be less than 10MB.');
        return;
      }
      
      setSelectedFile(file);
      onClear();
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      onClear();
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleSubmit = async () => {
    onClear();
    
    if (inputMethod === 'url' && !memeUrl.trim()) {
      onError('Please enter a meme URL.');
      return;
    }
    
    if (inputMethod === 'upload' && !selectedFile) {
      onError('Please select an image file.');
      return;
    }

    setIsLoading(true);

    try {
      let result;
      
      if (inputMethod === 'url') {
        // Send URL request
        result = await apiRequest('POST', '/api/explain-meme', {
          memeUrl: memeUrl.trim(),
          language: selectedLanguage
        });
      } else {
        // Send file upload request
        const formData = new FormData();
        formData.append('memeFile', selectedFile!);
        formData.append('language', selectedLanguage);
        
        const response = await fetch('/api/explain-meme', {
          method: 'POST',
          body: formData,
          credentials: 'include'
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to analyze meme');
        }
        
        result = response;
      }

      const data = await result.json();
      onResult(data);
      
      toast({
        title: "Meme explained successfully!",
        description: `Analysis completed in ${languages.find(l => l.value === selectedLanguage)?.name || 'selected language'}.`,
      });

    } catch (error) {
      console.error('Error explaining meme:', error);
      onError((error as Error).message || 'Failed to explain meme. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="max-w-4xl mx-auto">
      <Card className="bg-white shadow-lg border border-slate-200">
        <CardContent className="p-6 sm:p-8">
          
          {/* Input Method Tabs */}
          <div className="flex space-x-1 bg-slate-100 rounded-lg p-1 mb-6">
            <Button
              variant={inputMethod === 'url' ? 'default' : 'ghost'}
              className={`flex-1 transition-all duration-200 transform hover:scale-105 ${inputMethod === 'url' 
                ? 'bg-white text-slate-900 shadow-sm' 
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
              onClick={() => setInputMethod('url')}
              data-testid="button-url-tab"
            >
              <Link className="w-4 h-4 mr-2 transition-transform duration-200 group-hover:rotate-12" />
              Paste URL
            </Button>
            <Button
              variant={inputMethod === 'upload' ? 'default' : 'ghost'}
              className={`flex-1 transition-all duration-200 transform hover:scale-105 ${inputMethod === 'upload' 
                ? 'bg-white text-slate-900 shadow-sm' 
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
              onClick={() => setInputMethod('upload')}
              data-testid="button-upload-tab"
            >
              <Upload className="w-4 h-4 mr-2 transition-transform duration-200 group-hover:rotate-12" />
              Upload Image
            </Button>
          </div>

          {/* URL Input Section */}
          {inputMethod === 'url' && (
            <div className="space-y-6">
              <div>
                <Label htmlFor="memeUrl" className="block text-sm font-medium text-slate-700 mb-2">
                  Meme URL
                </Label>
                <div className="relative">
                  <Input
                    id="memeUrl"
                    type="url"
                    placeholder="https://example.com/meme.jpg or YouTube/Instagram/TikTok link..."
                    value={memeUrl}
                    onChange={(e) => setMemeUrl(e.target.value)}
                    className="pr-12"
                    data-testid="input-meme-url"
                  />
                  <div className="absolute right-3 top-3 text-slate-400">
                    <Globe className="w-5 h-5" />
                  </div>
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  Supports images and videos from Instagram, TikTok, YouTube Shorts, Twitter, Reddit, and direct links
                </p>
              </div>
            </div>
          )}

          {/* Upload Section */}
          {inputMethod === 'upload' && (
            <div className="space-y-6">
              <div>
                <Label className="block text-sm font-medium text-slate-700 mb-2">
                  Upload Meme Image
                </Label>
                <div 
                  className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 cursor-pointer transform hover:scale-105"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onClick={() => fileInputRef.current?.click()}
                  data-testid="area-file-drop"
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                    data-testid="input-file"
                  />
                  <div className="space-y-2">
                    <Upload className="w-12 h-12 text-slate-400 mx-auto" />
                    <div>
                      {selectedFile ? (
                        <div className="text-sm">
                          <span className="text-blue-600 font-medium">
                            {selectedFile.name}
                          </span>
                          <p className="text-slate-500 text-xs mt-1">
                            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      ) : (
                        <>
                          <button type="button" className="text-blue-600 hover:text-blue-500 font-medium">
                            Click to upload
                          </button>
                          <span className="text-slate-500"> or drag and drop</span>
                        </>
                      )}
                    </div>
                    {!selectedFile && (
                      <p className="text-xs text-slate-500">
                        PNG, JPG, GIF, WEBP up to 10MB
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Language Selection */}
          <div>
            <Label htmlFor="language" className="block text-sm font-medium text-slate-700 mb-2">
              Explanation Language
            </Label>
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger className="w-full" data-testid="select-language">
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value}>
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Submit Button */}
          <Button 
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-4 px-6 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            data-testid="button-explain-meme"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Analyzing meme...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 mr-2" />
                Explain This Meme
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
