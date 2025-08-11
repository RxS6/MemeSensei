import { Brain, Globe, Rocket } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="max-w-4xl mx-auto mt-16 mb-16">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          Why Choose Meme Explainer AI?
        </h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
            <Brain className="text-white text-2xl w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            AI-Powered Understanding
          </h4>
          <p className="text-slate-600 dark:text-slate-400 text-sm group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
            Uses Google Gemini AI to understand context, humor, and cultural references in memes with deep cultural awareness.
          </p>
        </div>

        <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300">
            <Globe className="text-white text-2xl w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            Hindi & Hinglish Support
          </h4>
          <p className="text-slate-600 dark:text-slate-400 text-sm group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
            Get explanations in Hindi, Hinglish, and 11+ other languages. Perfect for Indian meme culture and desi humor.
          </p>
        </div>

        <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
            <Rocket className="text-white text-2xl w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            Lightning Fast
          </h4>
          <p className="text-slate-600 dark:text-slate-400 text-sm group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
            Get detailed explanations in seconds. Perfect for understanding trending memes and staying current with internet culture.
          </p>
        </div>
      </div>
    </section>
  );
}
