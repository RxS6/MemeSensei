import { useState } from "react";
import { MemeInputSection } from "@/components/meme-input-section";
import { MemeResults } from "@/components/meme-results";
import { RecentMemes } from "@/components/recent-memes";
import { FeaturesSection } from "@/components/features-section";
import { Button } from "@/components/ui/button";
import { Laugh } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
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
                <Link href="/how-it-works">
                  <span className="block text-slate-600 hover:text-blue-600 transition-colors cursor-pointer">How it Works</span>
                </Link>
                <Link href="/languages">
                  <span className="block text-slate-600 hover:text-blue-600 transition-colors cursor-pointer">Languages</span>
                </Link>
                <Link href="/contact">
                  <span className="block text-slate-600 hover:text-blue-600 transition-colors cursor-pointer">API Access</span>
                </Link>
                <Link href="/contact">
                  <span className="block text-slate-600 hover:text-blue-600 transition-colors cursor-pointer">Pricing</span>
                </Link>
              </nav>
            </div>
            
            {/* Support */}
            <div className="space-y-3">
              <h4 className="font-medium text-slate-900">Support</h4>
              <nav className="space-y-2 text-sm">
                <Link href="/contact">
                  <span className="block text-slate-600 hover:text-blue-600 transition-colors cursor-pointer">Help Center</span>
                </Link>
                <Link href="/contact">
                  <span className="block text-slate-600 hover:text-blue-600 transition-colors cursor-pointer">Contact</span>
                </Link>
                <Link href="/privacy">
                  <span className="block text-slate-600 hover:text-blue-600 transition-colors cursor-pointer">Privacy Policy</span>
                </Link>
                <Link href="/terms">
                  <span className="block text-slate-600 hover:text-blue-600 transition-colors cursor-pointer">Terms of Service</span>
                </Link>
              </nav>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="mt-8 pt-8 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-sm text-slate-500">
                © 2025 Meme Explainer AI. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm">
                <a href="mailto:notrxs@gmail.com" className="text-slate-500 hover:text-blue-600 transition-colors">
                  Contact: notrxs@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
