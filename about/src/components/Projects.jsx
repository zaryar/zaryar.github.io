import React from 'react';
import { Github, PlayCircle, Eye, Code2, Gamepad2, Layers, Smartphone, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: '1Skin / HexSkin Studio',
    icon: Sparkles,
    color: '#e5c07b', // Hextech Gold
    description:
      'Ein Hextech-Dashboard für League of Legends zum intelligenten Loot-Craften, Entzaubern und automatischen Ausrüsten von Lieblingsskins über die lokale LCU-API.',
    languages: ['Python', 'LCU REST API', 'Automation', 'git'],
    links: [
      {
        label: 'GitHub Repository',
        url: 'https://github.com/zaryar/1Skin',
        icon: Github,
        primary: true,
      },
    ],
  },
  {
    id: 2,
    title: 'AquaDefender GameProject',
    icon: Gamepad2,
    color: '#00f0ff', // Cyan
    description:
      'Ein 3D-Game mit 2D-Maus- & Tastatursteuerung, präziser Bildschirm-zu-Welt-Berechnung und handgefertigten Modellen und Texturen im 8-Personen-Team.',
    languages: ['Unity', 'Blender', 'C#', 'git'],
    links: [
      {
        label: 'GitHub Repository',
        url: 'https://github.com/zaryar',
        icon: Github,
        primary: false,
      },
      {
        label: 'Trailer',
        url: 'https://www.youtube.com/watch?v=znaJVWQ1Jd8',
        icon: PlayCircle,
        primary: true,
      },
    ],
  },
  {
    id: 3,
    title: 'Song / Sorting Visualizer',
    icon: Layers,
    color: '#ffb347', // Amber
    description:
      'Ein Java-Projekt mit JFrame und MIDI-Audio, das Sortier- und Audiodaten visuell und synchron mit Ton darstellt.',
    languages: ['Java', 'JFrame', 'midi'],
    links: [
      {
        label: 'GitHub Repository',
        url: 'https://github.com/zaryar',
        icon: Github,
        primary: false,
      },
      {
        label: 'Showcase Video',
        url: 'https://www.youtube.com/watch?v=c_XRpWT7Q9c',
        icon: Eye,
        primary: true,
      },
    ],
  },
  {
    id: 4,
    title: 'SleepSpeak',
    icon: Smartphone,
    color: '#a855f7', // Purple
    description:
      'Mein erstes gevibecodetes Projekt: Eine Cross-Platform Mobile-App zur Audio- und Sprachverarbeitung (inkl. kleiner Web-Demo zum Ausprobieren).',
    languages: ['Flutter', 'Dart', 'Audio Processing', 'git'],
    links: [
      {
        label: 'GitHub Repository',
        url: 'https://github.com/zaryar/SleepSpeak',
        icon: Github,
        primary: false,
      },
      {
        label: 'Live Demo',
        url: 'https://zaryar.github.io/SleepSpeak/',
        icon: ExternalLink,
        primary: true,
      },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-8 px-4 max-w-4xl mx-auto">
      {/* Section Headline */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
          <span>Meine letzten Projekte</span>
        </h2>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-6">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <article
              key={project.id}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-[#111624]/90 shadow-xl group"
            >
              {/* Top: Title & Icon */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3
                  className="text-xl sm:text-2xl font-bold tracking-tight transition-colors"
                  style={{ color: project.color }}
                >
                  {project.title}
                </h3>
                <div
                  className="p-2.5 rounded-xl border shrink-0"
                  style={{
                    borderColor: `${project.color}30`,
                    backgroundColor: `${project.color}10`,
                    color: project.color,
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              {/* 1-Sentence Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {project.description}
              </p>

              {/* Platform / Programming Language Used Box */}
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 mb-6">
                <div className="text-xs font-mono text-slate-400 mb-2 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-[#00f0ff]" />
                  <span className="font-semibold text-slate-300">
                    Platform / Programming Language Used:
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.languages.map((lang) => (
                    <span
                      key={lang}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-200"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {project.links.map((link) => {
                  const LinkIcon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all hover:scale-105 active:scale-95 ${
                        link.primary
                          ? 'bg-[#00f0ff] hover:bg-[#38f4ff] text-black font-bold shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                          : 'bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 hover:border-white/25'
                      }`}
                    >
                      <LinkIcon className="w-4 h-4" />
                      <span>{link.label}</span>
                    </a>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
