import React from 'react';
import { ArrowLeft, Github, Youtube, MessageSquare } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <nav className="w-full max-w-5xl flex items-center justify-between px-5 py-3 rounded-2xl glass-card bg-[#07090e]/85 backdrop-blur-xl border border-white/10 shadow-2xl">
        {/* Back to Home */}
        <a
          href="../index.html"
          className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-xl transition-all hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4 text-[#00f0ff]" />
          <span>Startseite</span>
        </a>

        {/* Brand */}
        <div className="font-bold text-white text-sm sm:text-base tracking-tight">
          MARTIN <span className="text-[#00f0ff]">/ PORTFOLIO</span>
        </div>

        {/* Direct Social Links */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/zaryar"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all hover:scale-105"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.youtube.com/@ZaryarWasTaken"
            target="_blank"
            rel="noopener noreferrer"
            title="YouTube"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-[#ff0033] transition-all hover:scale-105"
          >
            <Youtube className="w-4 h-4" />
          </a>
          <a
            href="../discord.html"
            title="Discord"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-[#5865F2] transition-all hover:scale-105"
          >
            <MessageSquare className="w-4 h-4" />
          </a>
        </div>
      </nav>
    </header>
  );
}
