'use client';

export default function ComingSoon({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="text-center max-w-2xl">
        <div className="text-6xl mb-6">🚀</div>
        <h1 className="text-5xl font-bold text-white mb-4">{title}</h1>
        <p className="text-xl text-white/60 mb-8">Coming Soon - Under Development</p>
        <div className="flex gap-4 justify-center">
          <a href="/dashboard" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition">
            Dashboard
          </a>
          <a href="/" className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition">
            Home
          </a>
        </div>
      </div>
    </div>
  );
}
