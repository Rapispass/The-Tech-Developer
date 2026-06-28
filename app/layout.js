"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Layout, Rocket, Zap, Settings2, Moon, Sun } from 'lucide-react';
import { useTheme } from './context/ThemeContext';

export default function ChromaCore() {
  const { theme, updateTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden opacity-40">
        <motion.div animate={{ x: [0, 100, 0], y: [0, 50, 0] }} transition={{ duration: 20, repeat: Infinity }} className="absolute -top-20 -left-20 w-96 h-96 bg-purple-400 rounded-full blur-[120px]" />
        <motion.div animate={{ x: [0, -100, 0], y: [0, -50, 0] }} transition={{ duration: 15, repeat: Infinity }} className="absolute top-1/2 -right-20 w-80 h-80 bg-blue-400 rounded-full blur-[120px]" />
      </div>
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Nav */}
      <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto">
        <div className="text-2xl font-black tracking-tighter">CHROMA<span style={{ color: 'var(--primary)' }}>CORE</span></div>
        <button onClick={() => setIsOpen(true)} className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:scale-110 transition-transform">
          <Palette size={20} />
        </button>
      </nav>

      {/* Hero */}
      <header className="max-w-7xl mx-auto px-8 py-32 text-center">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-7xl md:text-9xl font-bold tracking-tighter leading-none mb-8">
          Engineering <br /> <span style={{ color: 'var(--primary)' }}>Systemic Beauty.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-xl opacity-60 max-w-2xl mx-auto mb-12">
          A high-performance modular system designed for the next generation of the web. 
          Fully customizable, buttery smooth, and mathematically precise.
        </motion.p>
      </header>

      {/* Bento Grid */}
      <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
        <BentoCard className="md:col-span-2" icon={<Zap />} title="Hyper-Speed" desc="Next.js 14 App Router for instant loads." />
        <BentoCard icon={<Rocket />} title="Fluidity" desc="Lenis + Framer Motion integration." />
        <BentoCard icon={<Layout />} title="Modular" desc="Atomic design components." />
        <BentoCard className="md:col-span-2" icon={<Palette />} title="Live DNA" desc="Change the entire site's look in real-time." />
      </section>

      {/* Core Configurator */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="fixed right-0 top-0 h-full w-96 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl z-[100] p-8 border-l border-white/20 shadow-2xl overflow-y-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-2xl font-bold flex items-center gap-2"><Settings2 /> Core Configurator</h2>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-slate-200 rounded-full">✕</button>
            </div>
            <div className="space-y-8">
              <div>
                <label className="text-xs font-bold uppercase opacity-50 mb-3 block">Brand Color</label>
                <div className="flex gap-3">
                  <input type="color" value={theme.primaryColor} onChange={(e) => updateTheme('primaryColor', e.target.value)} className="w-12 h-12 rounded-lg cursor-pointer bg-transparent" />
                  <input type="text" value={theme.primaryColor} onChange={(e) => updateTheme('primaryColor', e.target.value)} className="flex-1 bg-transparent border-b border-slate-300 outline-none px-2" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label className="font-medium flex items-center gap-2"><Moon size={16}/> Dark Mode</label>
                <button onClick={() => updateTheme('darkMode', !theme.darkMode)} className={`w-12 h-6 rounded-full transition-colors ${theme.darkMode ? 'bg-indigo-600' : 'bg-slate-300'} relative`}>
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${theme.darkMode ? 'left-7' : 'left-1'}`} />
                </button>
              </div>
              <div>
                <label className="text-xs font-bold uppercase opacity-50 mb-3 block">Corner Radius</label>
                <input type="range" min="0" max="50" onChange={(e) => updateTheme('borderRadius', `${e.target.value}px`)} className="w-full accent-indigo-600" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function BentoCard({ icon, title, desc, className = "" }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} style={{ borderRadius: 'var(--radius)' }} className={`p-8 bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm shadow-sm ${className}`}>
      <div className="mb-4 p-3 w-fit rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600">{icon}</div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="opacity-60">{desc}</p>
    </motion.div>
  );
}
