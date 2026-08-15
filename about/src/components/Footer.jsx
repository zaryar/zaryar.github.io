import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 border-t border-white/10 max-w-5xl mx-auto mt-12 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
      <p>© {new Date().getFullYear()} Martin (@zaryar) • Universität Tübingen</p>

      <button
        onClick={scrollToTop}
        className="flex items-center gap-1.5 text-slate-400 hover:text-[#00f0ff] transition-colors cursor-pointer"
      >
        <span>Nach oben</span>
        <ArrowUp className="w-3.5 h-3.5" />
      </button>
    </footer>
  );
}
