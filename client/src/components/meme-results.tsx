import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, Share, RotateCcw, Volume2, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface MemeResultsProps {
  explanation: {
    id: string;
    explanation: string;
    culturalContext?: string;
    language: string;
    confidence: number;
    memeUrl?: string;
    fileName: string;
    memeType: 'url' | 'upload';
  };
}

const languageLabels: Record<string, string> = {
  en: "🇺🇸 English",
  es: "🇪🇸 Spanish", 
  fr: "🇫🇷 French",
  de: "🇩🇪 German",
  it: "🇮🇹 Italian",
  pt: "🇧🇷 Portuguese",
  ru: "🇷🇺 Russian",
  ja: "🇯🇵 Japanese",
  ko: "🇰🇷 Korean",
  zh: "🇨🇳 Chinese",
  hi: "🇮🇳 Hindi",
  ar: "🇸🇦 Arabic"
};

export function MemeResults({ explanation }: MemeResultsProps) {
  const { toast } = useToast();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      let textToCopy = explanation.explanation;
      if (explanation.culturalContext) {
        textToCopy += `\n\nCultural Context: ${explanation.culturalContext}`;
      }
      
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      
      toast({
        title: "Copied to clipboard!",
        description: "The meme explanation has been copied to your clipboard.",
      });
      
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Unable to copy to clipboard. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Meme Explanation',
          text: explanation.explanation,
          url: window.location.href,
        });
      } catch (error) {
        // User cancelled or error occurred
      }
    } else {
      // Fallback to copying URL
      await navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Share link has been copied to your clipboard.",
      });
    }
  };

  const handleExplainAgain = () => {
    window.location.reload();
  };

  const handleVoiceExplanation = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(explanation.explanation);
      utterance.lang = explanation.language === 'en' ? 'en-US' : explanation.language;
      speechSynthesis.speak(utterance);
      
      toast({
        title: "Reading explanation",
        description: "The explanation is being read aloud.",
      });
    } else {
      toast({
        title: "Voice not supported",
        description: "Your browser doesn't support text-to-speech.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="max-w-4xl mx-auto mt-8">
      <Card className="bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
        
        {/* Results Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-blue-500 p-4">
          <h3 className="text-lg font-semibold text-white flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" />
            Meme Explained
          </h3>
        </div>

        <CardContent className="p-6 sm:p-8">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Meme Display */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Original Meme
              </h4>
              
              {/* Image Display */}
              <div className="relative bg-slate-100 dark:bg-slate-700 rounded-lg overflow-hidden aspect-square max-w-md mx-auto">
                {explanation.memeUrl ? (
                  <img 
                    src={explanation.memeUrl}
                    alt="Meme being explained" 
                    className="w-full h-full object-cover"
                    data-testid="img-meme"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-slate-300 dark:bg-slate-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <svg className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Uploaded Image</p>
                      <p className="text-xs text-slate-400 dark:text-slate-500">{explanation.fileName}</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Meme Source */}
              <div className="text-center">
                <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  {explanation.memeType === 'url' ? new URL(explanation.memeUrl!).hostname : 'Uploaded file'}
                </Badge>
              </div>
            </div>

            {/* Explanation */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    AI Explanation
                  </h4>
                  <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                    {languageLabels[explanation.language] || explanation.language}
                  </Badge>
                </div>
                
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                  <p className="text-slate-800 dark:text-slate-200 leading-relaxed" data-testid="text-explanation">
                    {explanation.explanation}
                  </p>
                </div>
              </div>

              {/* Cultural Context */}
              {explanation.culturalContext && (
                <div>
                  <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3">
                    Cultural Context
                  </h4>
                  <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                    <div className="flex items-start space-x-2">
                      <svg className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <p className="text-amber-800 dark:text-amber-200 text-sm leading-relaxed" data-testid="text-cultural-context">
                        {explanation.culturalContext}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  variant="outline"
                  onClick={handleCopy}
                  className="flex-1 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600"
                  data-testid="button-copy"
                >
                  {isCopied ? (
                    <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4 mr-2" />
                  )}
                  {isCopied ? 'Copied!' : 'Copy Explanation'}
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={handleShare}
                  className="flex-1 bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-300"
                  data-testid="button-share"
                >
                  <Share className="w-4 h-4 mr-2" />
                  Share
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={handleExplainAgain}
                  className="flex-1 bg-emerald-100 dark:bg-emerald-900 hover:bg-emerald-200 dark:hover:bg-emerald-800 text-emerald-700 dark:text-emerald-300"
                  data-testid="button-explain-again"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Explain Again
                </Button>
              </div>

              {/* Voice Explanation */}
              <div className="border-t border-slate-200 dark:border-slate-600 pt-4">
                <Button 
                  onClick={handleVoiceExplanation}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                  data-testid="button-voice"
                >
                  <Volume2 className="w-4 h-4 mr-2" />
                  Listen to Explanation
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
