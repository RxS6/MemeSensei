import { Laugh, ArrowLeft, Mail, MessageCircle, Clock, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function Contact() {
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
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Have questions, feedback, or need help? We're here to assist you with anything related to Meme Explainer AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="text-blue-600 w-5 h-5" />
                </div>
                <h2 className="text-xl font-semibold text-slate-900">Email Us</h2>
              </div>
              <p className="text-slate-600 mb-4">
                For general inquiries, support requests, bug reports, or feature suggestions:
              </p>
              <a 
                href="mailto:notrxs@gmail.com" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                notrxs@gmail.com
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Clock className="text-emerald-600 w-5 h-5" />
                </div>
                <h2 className="text-xl font-semibold text-slate-900">Response Time</h2>
              </div>
              <p className="text-slate-600">
                We typically respond to emails within 24-48 hours during business days. 
                For urgent issues, please mention "URGENT" in your subject line.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-2">What types of memes can you explain?</h3>
                <p className="text-slate-600">
                  We can explain any visual meme, including image macros, reaction GIFs, viral videos, screenshots, and social media posts from platforms like Instagram, TikTok, Twitter, and more.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-2">How accurate are the explanations?</h3>
                <p className="text-slate-600">
                  Our Google Gemini AI provides highly accurate explanations by understanding cultural context, internet trends, and humor patterns. However, interpretation of humor can be subjective.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-2">Is my data stored or shared?</h3>
                <p className="text-slate-600">
                  We process images temporarily for analysis and don't store them permanently. Check our Privacy Policy for detailed information about data handling.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-2">Can I request new languages?</h3>
                <p className="text-slate-600">
                  Yes! Email us with language requests. We're always looking to expand our language support based on user demand.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Reasons */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-slate-900 mb-8 text-center">What Can We Help You With?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">General Questions</h3>
              <p className="text-sm text-slate-600">How the service works, features, capabilities</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-red-600 text-sm font-bold">!</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Bug Reports</h3>
              <p className="text-sm text-slate-600">Issues with uploads, errors, or unexpected behavior</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="text-emerald-600 w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Feature Requests</h3>
              <p className="text-sm text-slate-600">New languages, features, or improvements</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="text-purple-600 w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Feedback</h3>
              <p className="text-sm text-slate-600">Share your experience and suggestions</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Still have questions?</h2>
          <p className="text-slate-600 mb-6">
            Don't hesitate to reach out. We're always happy to help and improve our service based on your feedback.
          </p>
          <a 
            href="mailto:notrxs@gmail.com?subject=Meme Explainer AI - Question"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition-all"
          >
            <Mail className="w-5 h-5 mr-2" />
            Send us an Email
          </a>
        </div>
      </main>
    </div>
  );
}