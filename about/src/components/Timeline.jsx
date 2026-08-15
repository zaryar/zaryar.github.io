import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Terminal, Gamepad2, GraduationCap, Rocket, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const steps = [
    {
      year: 'Alter 14',
      badge: 'Der Funke',
      icon: Terminal,
      color: '#00f0ff',
      title: 'Die erste Zeile C++',
      desc: 'Faszination für Computer & Videospiele. Erste eigene Programme in C++ geschrieben und die Grundlagen von Datenstrukturen und Speicherverwaltung gelernt.',
      tags: ['C++', 'Pointers', 'First Console Apps'],
    },
    {
      year: 'Game Hacking',
      badge: 'Deep Dive',
      icon: Gamepad2,
      color: '#ffb347',
      title: 'Memory & Reverse Engineering',
      desc: 'Verbindung der Leidenschaft für Gaming und Code: Analyse von Spielprozessen, DLL-Injection, Function Hooking (MinHook/Detours) und Disassembling.',
      tags: ['Cheat Engine', 'Reverse Engineering', 'DLL Injection', 'Assembly'],
    },
    {
      year: 'Uni Tübingen',
      badge: 'Akademische Basis',
      icon: GraduationCap,
      color: '#8b5cf6',
      title: 'Informatik-Studium',
      desc: 'Vertiefung in theoretische Informatik, Rechnerarchitektur, Algorithmen, Datenbanksysteme und moderne Softwareentwicklung an der Universität Tübingen.',
      tags: ['Algorithmen', 'Betriebssysteme', 'Architecture', 'Computer Science'],
    },
    {
      year: 'Heute & Zukunft',
      badge: 'Creative Tech',
      icon: Rocket,
      color: '#00f0ff',
      title: 'High-Performance & Web',
      desc: 'Kombination von systemnaher C++-Effizienz mit modernem, interaktivem Frontend (React, GSAP, 3D Canvas) und ständiger Weiterentwicklung.',
      tags: ['Full Stack', 'GSAP & Three.js', 'High Performance', 'Open Source'],
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 80);

    const tween = gsap.to(track, {
      x: getScrollAmount,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        start: 'top top',
        end: () => `+=${track.scrollWidth - window.innerWidth + 600}`,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === section) st.kill();
      });
    };
  }, []);

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative min-h-screen bg-[#07090e] overflow-hidden flex flex-col justify-center py-16"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Header of Pinned Section */}
      <div className="px-6 md:px-16 mb-8 relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 max-w-7xl mx-auto w-full">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#8b5cf6] bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 px-3.5 py-1 rounded-full">
            Journey & Evolution
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold mt-3 tracking-tight">
            Mein Weg als Entwickler
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <span>Scroll weiter für die Timeline</span>
          <ArrowRight className="w-4 h-4 text-[#00f0ff] animate-pulse" />
        </div>
      </div>

      {/* Horizontal Sliding Track */}
      <div className="relative w-full overflow-visible">
        <div
          ref={trackRef}
          className="flex gap-8 px-6 md:px-16 items-center w-max"
          style={{ willChange: 'transform' }}
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.year}
                className="w-[320px] sm:w-[420px] glass-card rounded-3xl p-8 border border-white/10 relative shadow-2xl shrink-0 group hover:border-white/25 transition-all"
              >
                {/* Step Number & Year */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-lg border"
                    style={{
                      color: step.color,
                      borderColor: `${step.color}40`,
                      backgroundColor: `${step.color}15`,
                    }}
                  >
                    {step.badge}
                  </span>
                  <span className="text-2xl font-mono font-extrabold text-white/40 group-hover:text-white transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="p-3 rounded-2xl border"
                    style={{
                      borderColor: `${step.color}30`,
                      backgroundColor: `${step.color}10`,
                      color: step.color,
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    <span className="text-xs font-mono text-slate-400">{step.year}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {step.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-xs font-mono text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
