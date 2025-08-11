import { Laugh, ArrowLeft, Globe, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function Languages() {
  const languages = [
    { code: "en", name: "English", flag: "🇺🇸", description: "Native English explanations with cultural context" },
    { code: "hi", name: "Hindi", flag: "🇮🇳", description: "देवनागरी में पूर्ण व्याख्या सांस्कृतिक संदर्भ के साथ" },
    { code: "hi-en", name: "Hinglish", flag: "🇮🇳", description: "Hindi-English mix for Indian internet culture" },
    { code: "es", name: "Spanish", flag: "🇪🇸", description: "Explicaciones completas en español con contexto cultural" },
    { code: "fr", name: "French", flag: "🇫🇷", description: "Explications complètes en français avec contexte culturel" },
    { code: "de", name: "German", flag: "🇩🇪", description: "Vollständige Erklärungen auf Deutsch mit kulturellem Kontext" },
    { code: "it", name: "Italian", flag: "🇮🇹", description: "Spiegazioni complete in italiano con contesto culturale" },
    { code: "pt", name: "Portuguese", flag: "🇧🇷", description: "Explicações completas em português com contexto cultural" },
    { code: "ru", name: "Russian", flag: "🇷🇺", description: "Полные объяснения на русском языке с культурным контекстом" },
    { code: "ja", name: "Japanese", flag: "🇯🇵", description: "文化的背景を含む日本語での完全な説明" },
    { code: "ko", name: "Korean", flag: "🇰🇷", description: "문화적 맥락을 포함한 한국어 완전 설명" },
    { code: "zh", name: "Chinese", flag: "🇨🇳", description: "包含文化背景的完整中文解释" },
    { code: "ar", name: "Arabic", flag: "🇸🇦", description: "شرح كامل باللغة العربية مع السياق الثقافي" }
  ];

  const specialFeatures = [
    {
      title: "Hindi Support",
      description: "Full Devanagari script support with Indian cultural references and context understanding",
      icon: "🇮🇳"
    },
    {
      title: "Hinglish (Code-Switching)",
      description: "Natural Hindi-English mixing that reflects how Indians actually communicate online",
      icon: "💬"
    },
    {
      title: "Cultural Adaptation",
      description: "Explanations adapted to local humor styles, references, and cultural norms",
      icon: "🌍"
    },
    {
      title: "Internet Slang",
      description: "Understanding of platform-specific slang, abbreviations, and meme formats",
      icon: "📱"
    }
  ];

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
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Supported Languages</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Get meme explanations in your preferred language with cultural context and local humor understanding.
          </p>
        </div>

        {/* Language Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {languages.map((lang) => (
            <div key={lang.code} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 hover:shadow-md transition-all">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">{lang.flag}</span>
                <div>
                  <h3 className="font-semibold text-slate-900">{lang.name}</h3>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">{lang.code}</p>
                </div>
                <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
              </div>
              <p className="text-sm text-slate-600">{lang.description}</p>
            </div>
          ))}
        </div>

        {/* Special Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Language Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {specialFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How Language Selection Works */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">How Language Selection Works</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Choose Your Language</h3>
              <p className="text-sm text-slate-600">Select from 13 supported languages in the dropdown menu</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-emerald-600 font-bold">AI</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Cultural Processing</h3>
              <p className="text-sm text-slate-600">Our AI adapts explanations to your cultural context and humor style</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="text-purple-600 w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Native-Style Output</h3>
              <p className="text-sm text-slate-600">Get explanations that sound natural and culturally appropriate</p>
            </div>
          </div>
        </div>

        {/* Example Output */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Example Explanations</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-medium text-slate-900 mb-1">🇺🇸 English</p>
              <p className="text-slate-600">"This meme uses the 'Distracted Boyfriend' format to show someone being tempted by a new technology while their current setup looks disapproving."</p>
            </div>
            
            <div className="border-l-4 border-emerald-500 pl-4">
              <p className="font-medium text-slate-900 mb-1">🇮🇳 Hinglish</p>
              <p className="text-slate-600">"Yeh meme 'Distracted Boyfriend' template use kar raha hai to show kaise koi new technology se attract ho raha hai while purana setup jealous look de raha hai."</p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4">
              <p className="font-medium text-slate-900 mb-1">🇮🇳 Hindi</p>
              <p className="text-slate-600">"यह मीम 'डिस्ट्रैक्टेड बॉयफ्रेंड' प्रारूप का उपयोग करके दिखाता है कि कैसे कोई व्यक्ति नई तकनीक से आकर्षित हो रहा है जबकि उसका पुराना सेटअप नाराज़ नज़र आ रहा है।"</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}