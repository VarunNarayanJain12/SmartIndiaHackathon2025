import React from 'react';
import { Sparkles, Shield, ShoppingBag } from 'lucide-react';

export default function FeatureHighlights() {
  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Itinerary',
      description: 'Get personalized travel plans based on your preferences, time, and budget using advanced AI algorithms.',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Shield,
      title: 'Verified Local Guides',
      description: 'Connect with certified local guides who know the hidden gems and cultural stories of Jharkhand.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      icon: ShoppingBag,
      title: 'Marketplace for Tribal Handicrafts',
      description: 'Support local artisans by purchasing authentic tribal handicrafts and staying in community homestays.',
      color: 'text-amber-600',
      bgColor: 'bg-amber-100'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Platform</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience Jharkhand like never before with our innovative features designed for modern travelers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-200">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}