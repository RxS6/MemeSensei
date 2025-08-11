import { Laugh, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Terms() {
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
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
          <p className="text-slate-600 mb-8">Last updated: January 11, 2025</p>

          {/* Table of Contents */}
          <div className="bg-slate-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
            <nav className="space-y-2">
              <a href="#acceptance" className="block text-blue-600 hover:text-blue-700">1. Acceptance of Terms</a>
              <a href="#service-description" className="block text-blue-600 hover:text-blue-700">2. Service Description</a>
              <a href="#user-responsibilities" className="block text-blue-600 hover:text-blue-700">3. User Responsibilities</a>
              <a href="#prohibited-uses" className="block text-blue-600 hover:text-blue-700">4. Prohibited Uses</a>
              <a href="#intellectual-property" className="block text-blue-600 hover:text-blue-700">5. Intellectual Property</a>
              <a href="#limitation-liability" className="block text-blue-600 hover:text-blue-700">6. Limitation of Liability</a>
              <a href="#termination" className="block text-blue-600 hover:text-blue-700">7. Termination</a>
              <a href="#contact" className="block text-blue-600 hover:text-blue-700">8. Contact Information</a>
            </nav>
          </div>

          <section id="acceptance" className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <div className="space-y-4 text-slate-700">
              <p>By accessing and using Meme Explainer AI, you accept and agree to be bound by the terms and provision of this agreement.</p>
              <p>If you do not agree to abide by the above, please do not use this service.</p>
            </div>
          </section>

          <section id="service-description" className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Service Description</h2>
            <div className="space-y-4 text-slate-700">
              <p>Meme Explainer AI is an artificial intelligence-powered service that provides explanations and cultural context for internet memes in multiple languages.</p>
              <p>The service uses Google Gemini AI to analyze images and provide explanations. Results may vary in accuracy and completeness.</p>
            </div>
          </section>

          <section id="user-responsibilities" className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. User Responsibilities</h2>
            <div className="space-y-4 text-slate-700">
              <p>As a user of our service, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the service in accordance with applicable laws and regulations</li>
                <li>Not upload content that violates intellectual property rights</li>
                <li>Not use the service for illegal or harmful purposes</li>
                <li>Respect the rights and dignity of others</li>
              </ul>
            </div>
          </section>

          <section id="prohibited-uses" className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Prohibited Uses</h2>
            <div className="space-y-4 text-slate-700">
              <p>You may not use our service:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>For any unlawful purpose or to solicit others to unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
              </ul>
            </div>
          </section>

          <section id="intellectual-property" className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Intellectual Property</h2>
            <div className="space-y-4 text-slate-700">
              <p>The service and its original content, features, and functionality are and will remain the exclusive property of Meme Explainer AI and its licensors.</p>
              <p>The service is protected by copyright, trademark, and other laws.</p>
            </div>
          </section>

          <section id="limitation-liability" className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Limitation of Liability</h2>
            <div className="space-y-4 text-slate-700">
              <p>In no event shall Meme Explainer AI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
              <p>The information on this service is provided on an "as is" basis.</p>
            </div>
          </section>

          <section id="termination" className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Termination</h2>
            <div className="space-y-4 text-slate-700">
              <p>We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
              <p>Upon termination, your right to use the service will cease immediately.</p>
            </div>
          </section>

          <section id="contact" className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Contact Information</h2>
            <div className="space-y-4 text-slate-700">
              <p>If you have any questions about these Terms of Service, please contact us:</p>
              <p><strong>Email:</strong> <a href="mailto:notrxs@gmail.com" className="text-blue-600 hover:text-blue-700">notrxs@gmail.com</a></p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}