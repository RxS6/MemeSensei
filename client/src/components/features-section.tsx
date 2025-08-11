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
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Brain className="text-white text-2xl w-8 h-8" />
          </div>
          <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
            AI-Powered Understanding
          </h4>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Uses advanced multimodal AI to understand context, humor, and cultural references in memes.
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Globe className="text-white text-2xl w-8 h-8" />
          </div>
          <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
            50+ Languages
          </h4>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Get explanations in your preferred language, from English to Japanese to Arabic.
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Rocket className="text-white text-2xl w-8 h-8" />
          </div>
          <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
            Lightning Fast
          </h4>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Get detailed explanations in seconds, not minutes. Perfect for staying up-to-date with internet culture.
          </p>
        </div>
      </div>
    </section>
  );
}
