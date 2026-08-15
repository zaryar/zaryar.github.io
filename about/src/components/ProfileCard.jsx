import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, MapPin, Sparkles, Activity, Gamepad2, Code, Heart } from 'lucide-react';

export default function ProfileCard() {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-y * 0.03);
    setRotateY(x * 0.03);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section id="about" className="py-24 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00f0ff] bg-[#00f0ff]/10 border border-[#00f0ff]/20 px-3.5 py-1 rounded-full">
            Profile & Bio
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold mt-3 tracking-tight">
            Wer ich bin & Was mich antreibt
          </h2>
        </div>

        {/* 3D Tilt Card */}
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transition: 'transform 0.15s ease-out',
          }}
          className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden group"
        >
          {/* Subtle Ambient Background Glow */}
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#00f0ff]/15 blur-[100px] pointer-events-none group-hover:bg-[#00f0ff]/25 transition-all" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#ffb347]/10 blur-[100px] pointer-events-none group-hover:bg-[#ffb347]/20 transition-all" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            {/* Image Column */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] group-hover:border-[#00f0ff]/50 transition-all">
                <img
                  src="img.jpg"
                  alt="Martin Selfie"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#ffb347]" />
                    Tübingen, DE
                  </span>
                  <span className="text-[#00f0ff]">@zaryar</span>
                </div>
              </div>
            </div>

            {/* Text & Content Column (Original Text Preserved & Highlighted) */}
            <div className="md:col-span-7 flex flex-col gap-6">
              {/* Terminal-like Window Header */}
              <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-slate-400 ml-2">bio.cpp — Martin</span>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-4 text-slate-200 text-base sm:text-lg leading-relaxed">
                <p className="p-4 rounded-xl bg-white/[0.03] border border-white/5 shadow-inner">
                  👋 <strong>My name is Martin.</strong> I am a student at the{' '}
                  <span className="text-[#00f0ff] font-semibold">University of Tübingen</span>. I love{' '}
                  <span className="text-[#ffb347] font-semibold">sports 🏃‍♂️</span>,{' '}
                  <span className="text-[#8b5cf6] font-semibold">video games 🎮</span>, and{' '}
                  <span className="text-emerald-400 font-semibold">coding 💻</span>.
                </p>

                <p className="p-4 rounded-xl bg-white/[0.03] border border-white/5 shadow-inner">
                  I started coding in <strong className="text-[#00f0ff]">C++</strong> when I was{' '}
                  <span className="font-semibold text-white">14 years old</span>. I was drawn to{' '}
                  <strong className="text-[#ffb347]">game hacking</strong> because it combined my love for video
                  games and coding 🕹️💡.
                </p>
              </div>

              {/* Key Quick Facts Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                  <span className="block text-xl font-bold text-[#00f0ff]">14 J.</span>
                  <span className="text-xs text-slate-400 font-mono">Erste C++ Zeile</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                  <span className="block text-xl font-bold text-[#ffb347]">CS @ Uni</span>
                  <span className="text-xs text-slate-400 font-mono">Tübingen</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center col-span-2 sm:col-span-1">
                  <span className="block text-xl font-bold text-[#8b5cf6]">Reverse Eng.</span>
                  <span className="text-xs text-slate-400 font-mono">& Game Internals</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
