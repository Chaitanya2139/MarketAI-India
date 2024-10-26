import React from 'react';
import { Brain, Users, BarChart3, Globe2, MessageSquare, Shield } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Data Analysis & Insights',
    description: 'This will analyze your behavior across different regions and demographics.',
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Users,
    title: 'Personalization Engine',
    description: 'Tailored recommendations and campaigns that resonate with local cultures and preferences.',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: BarChart3,
    title: 'Sentiment Analysis',
    description: 'Real-time analysis of social media and reviews to gauge consumer sentiment.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Globe2,
    title: 'Multilingual NLP',
    description: 'Communicate effectively in multiple Indian languages using advanced NLP.',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbots',
    description: '24/7 multilingual customer support with cultural awareness.',
    gradient: 'from-rose-500 to-orange-500'
  },
  {
    icon: Shield,
    title: 'Cultural Sensitivity',
    description: 'AI-powered content screening for cultural appropriateness and relevance.',
    gradient: 'from-orange-500 to-amber-500'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block">
            Powerful Features for the Indian Market
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform provides comprehensive tools to help you navigate India's diverse market landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} 
                 className="group relative p-8 rounded-2xl card-gradient border border-white/50 hover:border-purple-200 transition-all duration-300">
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-2.5 mb-4`}>
                <feature.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}