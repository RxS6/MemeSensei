import { Laugh, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Privacy() {
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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-slate max-w-none">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
          <p className="text-slate-600 mb-8">Last updated: January 11, 2025</p>

          {/* Table of Contents */}
          <div className="bg-slate-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
            <nav className="space-y-2">
              <a href="#information-collection" className="block text-blue-600 hover:text-blue-700">1. Information We Collect</a>
              <a href="#how-we-use" className="block text-blue-600 hover:text-blue-700">2. How We Use Information</a>
              <a href="#information-sharing" className="block text-blue-600 hover:text-blue-700">3. Information Sharing</a>
              <a href="#data-security" className="block text-blue-600 hover:text-blue-700">4. Data Security</a>
              <a href="#your-rights" className="block text-blue-600 hover:text-blue-700">5. Your Rights</a>
              <a href="#contact-us" className="block text-blue-600 hover:text-blue-700">6. Contact Us</a>
            </nav>
          </div>

          <section id="information-collection" className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Information We Collect</h2>
            <div className="space-y-4 text-slate-700">
              <p><strong>Images and URLs:</strong> We process meme images and URLs you submit for analysis. These are processed temporarily and not stored permanently.</p>
              <p><strong>Usage Data:</strong> We collect basic analytics about how our service is used, including language preferences and general usage patterns.</p>
              <p><strong>Technical Data:</strong> We automatically collect technical information such as IP addresses, browser type, and device information for security and performance purposes.</p>
            </div>
          </section>

          <section id="how-we-use" className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. How We Use Information</h2>
            <div className="space-y-4 text-slate-700">
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide meme explanation services using AI</li>
                <li>Improve our service quality and accuracy</li>
                <li>Ensure service security and prevent abuse</li>
                <li>Analyze usage patterns to enhance user experience</li>
              </ul>
            </div>
          </section>

          <section id="information-sharing" className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Information Sharing</h2>
            <div className="space-y-4 text-slate-700">
              <p>We do not sell, rent, or share your personal information with third parties except:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With AI service providers (Google Gemini) for processing explanations</li>
                <li>When required by law or legal process</li>
                <li>To protect our rights, property, or safety</li>
              </ul>
            </div>
          </section>

          <section id="data-security" className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Data Security</h2>
            <div className="space-y-4 text-slate-700">
              <p>We implement appropriate security measures to protect your information, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encrypted data transmission</li>
                <li>Secure server infrastructure</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to personal data</li>
              </ul>
            </div>
          </section>

          <section id="your-rights" className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Your Rights</h2>
            <div className="space-y-4 text-slate-700">
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request access to your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
              </ul>
            </div>
          </section>

          <section id="contact-us" className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Contact Us</h2>
            <div className="space-y-4 text-slate-700">
              <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
              <p><strong>Email:</strong> <a href="mailto:notrxs@gmail.com" className="text-blue-600 hover:text-blue-700">notrxs@gmail.com</a></p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}