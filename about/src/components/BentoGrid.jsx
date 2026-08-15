import React from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  Layers,
  GraduationCap,
  Activity,
  Gamepad2,
  Terminal,
  Binary,
  Code2,
  Zap,
} from 'lucide-react';

export default function BentoGrid() {
  return (
    <section id="skills" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#ffb347] bg-[#ffb347]/10 border border-[#ffb347]/20 px-3.5 py-1 rounded-full">
            Tech & Focus
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold mt-3 tracking-tight">
            Skillset & Interessengebiete
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Von hardwarenaher Speicher-Manipulation in C++ bis hin zu modernen, flüssigen Webanwendungen.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Low Level & Game Hacking (Large 2-column on desktop) */}
          <motion.div
            whileHover={{ y: -4 }}
            className="md:col-span-2 glass-card rounded-3xl p-8 border border-white/10 relative overflow-hidden group shadow-xl"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Binary className="w-36 h-36 text-[#00f0ff]" />
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-[#00f0ff]">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Systems & Reverse Engineering</h3>
                <p className="text-xs font-mono text-slate-400">Low-Level & Memory Manipulation</p>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
              Angefangen mit 14 Jahren: Tiefes Verständnis für Prozessarchitektur, Virtual Memory, DLL Injection,
              Funktions-Hooking (MinHook/Detours) und Analyse von Bytecode in Disassemblern.
            </p>

            <div className="flex flex-wrap gap-2">
              {['C++', 'x86/x64 Assembly', 'Memory Hooking', 'Reverse Engineering', 'Cheat Engine', 'Ghidra / IDA'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-[#00f0ff]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Uni Tübingen (1 column) */}
          <motion.div
            whileHover={{ y: -4 }}
            className="glass-card rounded-3xl p-8 border border-white/10 relative overflow-hidden group shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 text-[#8b5cf6]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Uni Tübingen</h3>
                  <p className="text-xs font-mono text-slate-400">Informatik-Studium</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Fundierte akademische Ausbildung in Algorithmen, Datenstrukturen, Rechnerarchitektur und theoretischer Informatik.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Algorithmen', 'Betriebssysteme', 'Computer Architecture', 'Software Engineering'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-[#8b5cf6]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 3: Modern Web & Creative Frontend (1 column) */}
          <motion.div
            whileHover={{ y: -4 }}
            className="glass-card rounded-3xl p-8 border border-white/10 relative overflow-hidden group shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-[#ffb347]/10 border border-[#ffb347]/20 text-[#ffb347]">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Creative Web Tech</h3>
                  <p className="text-xs font-mono text-slate-400">Frontend & 3D Visuals</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Entwicklung von dynamischen, hardwarebeschleunigten UIs mit flüssigen Animationen und 3D-Canvas-Elementen.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {['React', 'Vite', 'Tailwind CSS', 'GSAP', 'Lenis', 'Three.js'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-[#ffb347]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 4: Sports, Gaming & Mindset (2 columns on desktop) */}
          <motion.div
            whileHover={{ y: -4 }}
            className="md:col-span-2 glass-card rounded-3xl p-8 border border-white/10 relative overflow-hidden group shadow-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Sports & Gaming 🏃‍♂️🎮</h3>
                <p className="text-xs font-mono text-slate-400">Balance, Disziplin & Fokus</p>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Der ideale Ausgleich zum Programmieren: Regelmäßiger Sport und Laufen für mentale Frische und Ausdauer,
              kombiniert mit der Leidenschaft für Gaming, wo die Faszination für Code und Spielemechaniken ihren Ursprung nahm.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center gap-2">
                <span className="text-lg">🏃‍♂️</span>
                <span className="text-xs font-medium text-slate-300">Laufen & Fitness</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center gap-2">
                <span className="text-lg">🎮</span>
                <span className="text-xs font-medium text-slate-300">Gaming & Mechanics</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center gap-2 col-span-2 sm:col-span-1">
                <span className="text-lg">💡</span>
                <span className="text-xs font-medium text-slate-300">Continuous Learning</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
