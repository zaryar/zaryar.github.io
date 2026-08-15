import React from 'react';
import { MapPin, Code2, GraduationCap, Gamepad2 } from 'lucide-react';

export default function ProfileHeader() {
  return (
    <section className="pt-24 pb-8 px-4 max-w-4xl mx-auto">
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#00f0ff]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Profile Picture */}
        <div className="relative shrink-0">
          <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-[#00f0ff]/40 shadow-[0_0_25px_rgba(0,240,255,0.2)]">
            <img
              src="img.jpg"
              alt="Martin"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <span className="absolute -bottom-2 -right-2 bg-emerald-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full border border-black shadow">
            ONLINE
          </span>
        </div>

        {/* Bio Text (Kurz & Authentisch gehalten) */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Martin <span className="text-[#00f0ff] text-2xl font-mono">(@zaryar)</span>
            </h1>
            <span className="text-xs font-mono bg-white/5 border border-white/10 text-slate-300 px-2.5 py-1 rounded-lg">
              Student @ Uni Tübingen
            </span>
          </div>

          <div className="text-slate-300 text-base sm:text-lg leading-relaxed space-y-2 max-w-2xl">
            <p>
              👋 My name is Martin. I am a student at the <strong className="text-white">University of Tübingen</strong>. 
              I love <span className="text-[#ffb347] font-medium">sports 🏃‍♂️</span>, <span className="text-[#8b5cf6] font-medium">video games 🎮</span>, and <span className="text-[#00f0ff] font-medium">coding 💻</span>.
            </p>
            <p className="text-sm sm:text-base text-slate-400">
              I started coding in <strong className="text-[#00f0ff]">C++</strong> when I was 14 years old. 
              I was drawn to <strong className="text-[#ffb347]">game hacking</strong> because it combined my love for video games and coding 🕹️💡.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
