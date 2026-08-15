import React from 'react';
import Navbar from './components/Navbar';
import ProfileHeader from './components/ProfileHeader';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 bg-cyber-grid selection:bg-[#00f0ff]/30 selection:text-white">
      {/* Background Ambient Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-[#00f0ff]/10 via-[#8b5cf6]/5 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[300px] bg-[#ffb347]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Navigation */}
      <Navbar />

      {/* Main Sections: Profile & Projects */}
      <main>
        <ProfileHeader />
        <Projects />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
