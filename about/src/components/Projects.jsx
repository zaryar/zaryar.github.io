import React, { useState, useEffect } from 'react';
import {
  Github,
  PlayCircle,
  Eye,
  Code2,
  Gamepad2,
  Layers,
  Smartphone,
  ExternalLink,
  Sparkles,
  Image as ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const projects = [
  {
    id: 1,
    title: '1Skin / HexSkin Studio',
    icon: Sparkles,
    color: '#e5c07b', // Hextech Gold
    description:
      'Ein Hextech-Dashboard für League of Legends zum intelligenten Loot-Craften, Entzaubern und automatischen Ausrüsten von Lieblingsskins über die lokale LCU-API.',
    languages: ['Python', 'LCU REST API', 'Automation', 'git'],
    screenshots: [
      {
        title: 'Skin Crafter (Missing Skins)',
        desc: 'Findet Champions ohne Skins und schaltet sie mit 1 Klick mit Orange Essence frei.',
        url: 'https://raw.githubusercontent.com/zaryar/1Skin/master/docs/screenshots/crafter.png',
      },
      {
        title: 'Smart Disenchanter (Extra Shards)',
        desc: 'Identifiziert doppelte Shards und entzaubert sie für maximale Orange Essence.',
        url: 'https://raw.githubusercontent.com/zaryar/1Skin/master/docs/screenshots/disenchanter.png',
      },
      {
        title: 'Auto-Equipper Loadouts',
        desc: 'Wählt Lieblingsskins aus, die in der Champion-Select automatisch ausgerüstet werden.',
        url: 'https://raw.githubusercontent.com/zaryar/1Skin/master/docs/screenshots/loadouts.png',
      },
      {
        title: 'Arena Bravery Skin Sync',
        desc: 'Automatisierter Custom-Lobby-Loop zur Synchronisation von Skins auf den Riot-Servern.',
        url: 'https://raw.githubusercontent.com/zaryar/1Skin/master/docs/screenshots/bravery_sync.png',
      },
    ],
    links: [
      {
        label: 'GitHub Repository',
        url: 'https://github.com/zaryar/1Skin',
        icon: Github,
        primary: false,
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
    screenshots: [],
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
    screenshots: [],
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
    screenshots: [],
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
  const [activeGallery, setActiveGallery] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const openGallery = (projectScreenshots, projectTitle) => {
    setActiveGallery({ list: projectScreenshots, title: projectTitle });
    setCurrentImgIndex(0);
  };

  const closeGallery = () => {
    setActiveGallery(null);
    setCurrentImgIndex(0);
  };

  const nextImage = () => {
    if (!activeGallery) return;
    setCurrentImgIndex((prev) => (prev + 1) % activeGallery.list.length);
  };

  const prevImage = () => {
    if (!activeGallery) return;
    setCurrentImgIndex((prev) => (prev - 1 + activeGallery.list.length) % activeGallery.list.length);
  };

  // Keyboard navigation for gallery
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!activeGallery) return;
      if (e.key === 'Escape') closeGallery();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeGallery]);

  return (
    <section id="projects" className="py-8 px-4 max-w-4xl mx-auto relative">
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
          const hasScreenshots = project.screenshots && project.screenshots.length > 0;

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

              {/* Action Links & Bilder Button */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {/* Bilder Button (wenn Screenshots vorhanden) */}
                {hasScreenshots && (
                  <button
                    onClick={() => openGallery(project.screenshots, project.title)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-[#e5c07b] hover:bg-[#f3d395] text-black shadow-[0_0_20px_rgba(229,192,123,0.35)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <ImageIcon className="w-4 h-4" />
                    <span>Bilder ({project.screenshots.length})</span>
                  </button>
                )}

                {/* Other Project Links */}
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

      {/* Screenshot Lightbox Modal */}
      {activeGallery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          {/* Modal Card */}
          <div className="relative w-full max-w-4xl bg-[#0d111a] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#e5c07b]" />
                  <span>{activeGallery.title} — Screenshots</span>
                </h4>
                <p className="text-xs text-slate-400 font-mono">
                  Bild {currentImgIndex + 1} von {activeGallery.list.length}
                </p>
              </div>

              <button
                onClick={closeGallery}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all cursor-pointer"
                title="Schließen (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Viewport */}
            <div className="relative aspect-[16/10] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeGallery.list[currentImgIndex].url}
                alt={activeGallery.list[currentImgIndex].title}
                className="w-full h-full object-contain"
              />

              {/* Prev / Next Buttons */}
              {activeGallery.list.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 transition-all hover:scale-110 cursor-pointer"
                    title="Vorheriges Bild (Pfeil links)"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 transition-all hover:scale-110 cursor-pointer"
                    title="Nächstes Bild (Pfeil rechts)"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Image Description & Thumbnails */}
            <div className="p-4 sm:p-6 bg-black/40 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h5 className="text-sm sm:text-base font-bold text-[#e5c07b]">
                  {activeGallery.list[currentImgIndex].title}
                </h5>
                <p className="text-xs sm:text-sm text-slate-300">
                  {activeGallery.list[currentImgIndex].desc}
                </p>
              </div>

              {/* Thumbnail Strip */}
              <div className="flex gap-2 shrink-0">
                {activeGallery.list.map((img, idx) => (
                  <button
                    key={img.title}
                    onClick={() => setCurrentImgIndex(idx)}
                    className={`w-12 h-8 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      currentImgIndex === idx
                        ? 'border-[#e5c07b] scale-110 shadow-[0_0_10px_rgba(229,192,123,0.5)]'
                        : 'border-white/20 opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img src={img.url} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
