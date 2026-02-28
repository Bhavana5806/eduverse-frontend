'use client';

import { useState } from 'react';
import { translations, Language } from '@/lib/translations';
import Link from 'next/link';

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];

  const features = [
    { icon: '🧠', title: t.feature1, color: 'from-blue-500 to-cyan-500' },
    { icon: '🏗️', title: t.feature2, color: 'from-purple-500 to-pink-500' },
    { icon: '🔬', title: t.feature3, color: 'from-green-500 to-emerald-500' },
    { icon: '🎯', title: t.feature4, color: 'from-orange-500 to-red-500' },
    { icon: '📝', title: t.feature5, color: 'from-indigo-500 to-blue-500' },
    { icon: '🎓', title: t.feature6, color: 'from-pink-500 to-rose-500' },
    { icon: '💼', title: t.feature7, color: 'from-yellow-500 to-orange-500' },
    { icon: '🌍', title: t.feature8, color: 'from-teal-500 to-cyan-500' },
    { icon: '🏢', title: t.feature9, color: 'from-violet-500 to-purple-500' },
    { icon: '💡', title: t.feature10, color: 'from-amber-500 to-yellow-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/20 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-3xl">🌍</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                EduVerse AI
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-white/80 hover:text-white transition">{t.features}</a>
              <a href="#about" className="text-white/80 hover:text-white transition">{t.about}</a>
              <Link href="/dashboard" className="text-white/80 hover:text-white transition">{t.dashboard}</Link>
            </div>

            <div className="flex items-center space-x-4">
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="bg-white/10 text-white px-3 py-1 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="en">English</option>
                <option value="ta">தமிழ்</option>
                <option value="hi">हिंदी</option>
                <option value="ml">മലയാളം</option>
                <option value="te">తెలుగు</option>
                <option value="kn">ಕನ್ನಡ</option>
              </select>
              
              <Link href="/dashboard">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                  {t.getStarted}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              {t.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              {t.heroSubtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/dashboard">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:scale-105">
                {t.getStarted} →
              </button>
            </Link>
            <button className="bg-white/10 backdrop-blur-lg text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all">
              {t.learnMore}
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: '10', label: 'AI Engines' },
              { number: '6', label: 'Languages' },
              { number: '50+', label: 'Features' },
              { number: '100%', label: 'Adaptive' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-white/60 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            {t.featuresTitle}
          </h2>
          <p className="text-center text-white/60 mb-16 text-lg">
            Complete AI-powered educational ecosystem
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all hover:scale-105 cursor-pointer"
              >
                <div className={`text-5xl mb-4 bg-gradient-to-r ${feature.color} bg-clip-text`}>
                  {feature.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <div className={`h-1 w-12 bg-gradient-to-r ${feature.color} rounded-full group-hover:w-full transition-all`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/20 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Join thousands of students using AI-powered education
          </p>
          <Link href="/dashboard">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-12 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:scale-105">
              Start Your Journey →
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-lg border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-3xl">🌍</span>
            <span className="text-2xl font-bold text-white">EduVerse AI</span>
          </div>
          <p className="text-white/60 mb-4">
            Global Intelligent Learning Ecosystem
          </p>
          <p className="text-white/40 text-sm">
            © 2024 EduVerse AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
