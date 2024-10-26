import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 opacity-70"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-purple-100 mb-6">
              <Sparkles className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-600">AI-Powered Marketing Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Marketing with
              <span className="gradient-text block mt-2">Intelligent Insights</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl">
              Leverage the power of AI to understand and connect with India's diverse market. Get real-time insights, personalized recommendations, and cultural intelligence.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="button-gradient px-8 py-3 text-white rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all flex items-center justify-center gap-2">
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-3 bg-white/80 backdrop-blur-sm text-gray-700 rounded-xl border border-purple-100 hover:bg-white hover:border-purple-200 transition-all">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20 rounded-2xl blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
              alt="AI Marketing Dashboard"
              className="relative rounded-2xl shadow-2xl float-animation"
            />
          </div>
        </div>
      </div>
    </div>
  );
}