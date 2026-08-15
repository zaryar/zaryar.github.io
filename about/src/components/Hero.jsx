import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code2, Gamepad2, GraduationCap } from 'lucide-react';
import ParticleHero from './ParticleHero';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* 3D Three.js Particle Mesh Background */}
      <ParticleHero />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Animated Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-white/10 text-xs sm:text-sm font-mono text-[#00f0ff] mb-6 shadow-[0_0_20px_rgba(0,240,255,0.2)]"
        >
          <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
          <span>Computer Science @ Universität Tübingen</span>
        </motion.div>

        {/* Massive Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tight mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            MARTIN
          </span>
          <span className="block text-2xl sm:text-4xl md:text-5xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#00f0ff] via-[#ffb347] to-[#8b5cf6]">
            zaryar
          </span>
        </motion.h1>

        {/* Core Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-300 text-lg sm:text-2xl font-normal max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          C++ Developer, Reverse Engineer & Student. Building high-performance systems and exploring the depths of software.
        </motion.p>

        {/* Feature Highlights Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-300">
            <Code2 className="w-4 h-4 text-[#ffb347]" />
            <span>C++ Since 14</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-300">
            <Gamepad2 className="w-4 h-4 text-[#00f0ff]" />
            <span>Game Hacking & Memory</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-300">
            <GraduationCap className="w-4 h-4 text-[#8b5cf6]" />
            <span>Uni Tübingen CS</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#about"
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#00a8ff] text-black font-bold text-sm sm:text-base hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all hover:scale-105 active:scale-95"
          >
            Über mich
          </a>
          <a
            href="#journey"
            className="px-8 py-3.5 rounded-xl glass-card text-white font-semibold text-sm sm:text-base hover:bg-white/10 border-white/15 transition-all hover:scale-105 active:scale-95"
          >
            Timeline & Journey
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-[#00f0ff]" />
      </motion.div>
    </section>
  );
}
