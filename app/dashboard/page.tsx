'use client';

import { useState, useEffect } from 'react';
import { api } from '@/lib/api';
import { translations, Language } from '@/lib/translations';
import Link from 'next/link';

export default function Dashboard() {
  const [language, setLanguage] = useState<Language>('en');
  const [studentId, setStudentId] = useState(1);
  const [weaknessData, setWeaknessData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  
  const t = translations[language];

  const loadWeaknessAnalysis = async () => {
    setLoading(true);
    try {
      const data = await api.getWeaknessAnalysis(studentId);
      setWeaknessData(data);
    } catch (error) {
      console.error('Error loading data:', error);
    }
    setLoading(false);
  };

  const engines = [
    { id: 1, name: 'Assessment', icon: '🧠', color: 'from-blue-500 to-cyan-500', path: '/assessment' },
    { id: 2, name: 'Foundation', icon: '🏗️', color: 'from-purple-500 to-pink-500', path: '/foundation' },
    { id: 3, name: 'Simulation', icon: '🔬', color: 'from-green-500 to-emerald-500', path: '/simulation' },
    { id: 4, name: 'Exam Predict', icon: '🎯', color: 'from-orange-500 to-red-500', path: '/predict' },
    { id: 5, name: 'Mock Tests', icon: '📝', color: 'from-indigo-500 to-blue-500', path: '/mock-test' },
    { id: 6, name: 'College', icon: '🎓', color: 'from-pink-500 to-rose-500', path: '/college' },
    { id: 7, name: 'Career', icon: '💼', color: 'from-yellow-500 to-orange-500', path: '/career' },
    { id: 8, name: 'Translate', icon: '🌍', color: 'from-teal-500 to-cyan-500', path: '/translate' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <nav className="bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-3xl">🌍</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                EduVerse AI
              </span>
            </Link>

            <div className="flex items-center space-x-4">
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="bg-white/10 text-white px-3 py-1 rounded-lg border border-white/20"
              >
                <option value="en">English</option>
                <option value="ta">தமிழ்</option>
                <option value="hi">हिंदी</option>
                <option value="ml">മലയാളം</option>
                <option value="te">తెలుగు</option>
                <option value="kn">ಕನ್ನಡ</option>
              </select>
              
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
                S
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Dashboard
          </h1>
          <p className="text-white/60">
            Your personalized learning journey powered by AI
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Assessments', value: '12', icon: '📊', color: 'from-blue-500 to-cyan-500' },
            { label: t.weaknesses || 'Weaknesses', value: '3', icon: '⚠️', color: 'from-red-500 to-orange-500' },
            { label: t.strengths || 'Strengths', value: '8', icon: '✨', color: 'from-green-500 to-emerald-500' },
            { label: t.myProgress || 'Progress', value: '75%', icon: '📈', color: 'from-purple-500 to-pink-500' },
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{stat.icon}</span>
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
              </div>
              <div className="text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Engines Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">AI Engines</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {engines.map((engine) => (
              <Link key={engine.id} href={engine.path}>
                <div className="group bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all hover:scale-105 cursor-pointer">
                  <div className="text-4xl mb-3">{engine.icon}</div>
                  <h3 className="text-white font-semibold">{engine.name}</h3>
                  <div className={`h-1 w-8 bg-gradient-to-r ${engine.color} rounded-full mt-2 group-hover:w-full transition-all`}></div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t.startAssessment || 'Start Assessment'}
            </h3>
            <p className="text-white/60 mb-6">
              Take an adaptive test to identify your strengths and weaknesses
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
              Begin Test →
            </button>
          </div>

          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Autonomous Agent
            </h3>
            <p className="text-white/60 mb-6">
              Let AI analyze your performance and create personalized learning path
            </p>
            <button 
              onClick={loadWeaknessAnalysis}
              disabled={loading}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50"
            >
              {loading ? 'Analyzing...' : 'Analyze Now →'}
            </button>
          </div>
        </div>

        {/* Weakness Analysis Results */}
        {weaknessData && (
          <div className="mt-8 bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Analysis Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Weak Topics</h4>
                <div className="space-y-2">
                  {weaknessData.weak_topics?.map((topic: string, i: number) => (
                    <div key={i} className="bg-red-500/20 text-red-300 px-4 py-2 rounded-lg">
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Strong Topics</h4>
                <div className="space-y-2">
                  {weaknessData.strong_topics?.map((topic: string, i: number) => (
                    <div key={i} className="bg-green-500/20 text-green-300 px-4 py-2 rounded-lg">
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
