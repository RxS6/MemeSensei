import { useState } from "react";
import { MemeInputSection } from "@/components/meme-input-section";
import { MemeResults } from "@/components/meme-results";
import { RecentMemes } from "@/components/recent-memes";
import { FeaturesSection } from "@/components/features-section";
import { Button } from "@/components/ui/button";
import { Laugh } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { MemeExplanation } from "@shared/schema";

export default function Home() {
  const [currentExplanation, setCurrentExplanation] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const { data: recentMemes } = useQuery<MemeExplanation[]>({
    queryKey: ["/api/recent-memes"],
  });

  const handleExplanationResult = (result: any) => {
    setCurrentExplanation(result);
    setError(null);
  };

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
    setCurrentExplanation(null);
  };

  const clearResults = () => {
    setCurrentExplanation(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <Laugh className="text-white text-lg" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Meme Explainer AI</h1>
                <p className="text-xs text-slate-500">Understand memes in any language</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Decode Any Meme
            </h2>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Paste a meme link or upload an image, and our AI will explain the joke, cultural references, and humor in your chosen language.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
            <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-200">
              <div className="text-2xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors">13</div>
              <div className="text-xs text-slate-500 group-hover:text-slate-600">Languages</div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs text-slate-400 mt-1">Including Hindi & Hinglish</div>
            </div>
            <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-200">
              <div className="text-2xl font-bold text-indigo-600 group-hover:text-indigo-700 transition-colors">Gemini</div>
              <div className="text-xs text-slate-500 group-hover:text-slate-600">AI Powered</div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs text-slate-400 mt-1">Google's latest AI</div>
            </div>
            <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-200">
              <div className="text-2xl font-bold text-purple-600 group-hover:text-purple-700 transition-colors">Fast</div>
              <div className="text-xs text-slate-500 group-hover:text-slate-600">Analysis</div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs text-slate-400 mt-1">Instant explanations</div>
            </div>
          </div>
        </section>

        {/* Meme Input Section */}
        <MemeInputSection 
          onResult={handleExplanationResult} 
          onError={handleError}
          onClear={clearResults}
        />

        {/* Results Section */}
        {currentExplanation && (
          <MemeResults explanation={currentExplanation} />
        )}

        {/* Error Section */}
        {error && (
          <section className="max-w-4xl mx-auto mt-8">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-red-900 mb-2">
                    Unable to Process Meme
                  </h3>
                  <p className="text-red-700 mb-4">
                    {error}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      onClick={clearResults}
                      className="bg-red-600 hover:bg-red-700 text-white"
                      data-testid="button-retry"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Try Again
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Recent Memes Section */}
        <RecentMemes memes={recentMemes || []} />

        {/* Features Section */}
        <FeaturesSection />

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Laugh className="text-white w-4 h-4" />
                </div>
                <span className="font-semibold text-slate-900">Meme Explainer AI</span>
              </div>
              <p className="text-sm text-slate-600 max-w-xs">
                Making internet culture accessible through AI-powered meme explanations in multiple languages.
              </p>
            </div>
            
            {/* Product */}
            <div className="space-y-3">
              <h4 className="font-medium text-slate-900">Product</h4>
              <nav className="space-y-2 text-sm">
                <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors">How it Works</a>
                <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors">Languages</a>
                <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors">API Access</a>
                <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors">Pricing</a>
              </nav>
            </div>
            
            {/* Support */}
            <div className="space-y-3">
              <h4 className="font-medium text-slate-900">Support</h4>
              <nav className="space-y-2 text-sm">
                <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors">Help Center</a>
                <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
                <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors">Privacy Policy</a>
                <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors">Terms of Service</a>
              </nav>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="mt-8 pt-8 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-sm text-slate-500">
                © 2025 Meme Explainer AI. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
