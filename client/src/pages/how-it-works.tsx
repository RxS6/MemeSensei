import { Laugh, ArrowLeft, Upload, Globe, Brain, Sparkles, Languages, Zap } from "lucide-react";
import { Link } from "wouter";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/">
              <div className="flex items-center space-x-3 cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Laugh className="text-white text-lg" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-slate-900">Meme Explainer AI</h1>
                  <p className="text-xs text-slate-500">Understand memes in any language</p>
                </div>
              </div>
            </Link>
            
            <Link href="/">
              <div className="flex items-center text-blue-600 hover:text-blue-700 transition-colors cursor-pointer">
                <ArrowLeft className="w-4 h-4 mr-1" />
                <span className="text-sm">Back to Home</span>
              </div>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">How It Works</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Understanding memes has never been easier. Our AI-powered system breaks down internet humor into clear, cultural explanations.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Upload className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">1. Upload Your Meme</h3>
            <p className="text-slate-600">
              Upload an image or paste a URL from Instagram, TikTok, YouTube Shorts, Twitter, Reddit, or any direct link. We support all major image formats.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Languages className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">2. Choose Your Language</h3>
            <p className="text-slate-600">
              Select from 13 supported languages including English, Hindi, Hinglish (Hindi-English mix), Spanish, French, German, and more.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Sparkles className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">3. Get Instant Explanation</h3>
            <p className="text-slate-600">
              Our Google Gemini AI analyzes the meme and provides a concise 2-3 sentence explanation with cultural context and humor breakdown.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Powered by Advanced AI</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Brain className="text-blue-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Google Gemini 2.5 Pro</h3>
                <p className="text-slate-600">
                  Leverages Google's most advanced multimodal AI to understand visual content, text, cultural references, and internet humor patterns.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="text-emerald-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Cultural Awareness</h3>
                <p className="text-slate-600">
                  Understands regional humor, cultural references, slang, and internet trends across different countries and communities.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="text-purple-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Lightning Fast</h3>
                <p className="text-slate-600">
                  Get explanations in seconds, not minutes. Our optimized processing pipeline ensures quick turnaround times.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Languages className="text-orange-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Multilingual Support</h3>
                <p className="text-slate-600">
                  Natural language explanations in your preferred language, including code-switching languages like Hinglish.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Supported Sources */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Supported Platforms</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl mb-2">📸</div>
              <p className="font-medium">Instagram</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl mb-2">🎵</div>
              <p className="font-medium">TikTok</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl mb-2">▶️</div>
              <p className="font-medium">YouTube</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl mb-2">🐦</div>
              <p className="font-medium">Twitter</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl mb-2">🤖</div>
              <p className="font-medium">Reddit</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl mb-2">🔗</div>
              <p className="font-medium">Direct Links</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl mb-2">📱</div>
              <p className="font-medium">Screenshots</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl mb-2">🖼️</div>
              <p className="font-medium">Image Files</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition-all cursor-pointer">
              <Sparkles className="w-5 h-5 mr-2" />
              Try It Now
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}