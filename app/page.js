"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { WaveformAnimation } from '@/components/WaveformAnimation';
import { PodcastCard } from '@/components/PodcastCard';
import { Button } from '@/components/Button';
import { MicIcon, HeadphonesIcon, RadioIcon, ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const features = [
    {
      icon: MicIcon,
      title: 'Équipement Pro',
      description: 'Micros Shure SM7B et isolation acoustique de classe mondiale.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Post-Production',
      description: 'Mixage, montage et mastering pour un rendu radio professionnel.',
    },
    {
      icon: RadioIcon,
      title: 'Distribution',
      description: 'Publication automatique sur Spotify, Apple et Google Podcasts.',
    },
  ];

  const previewEpisodes = [
    {
      title: 'Le Futur du Marketing',
      description: 'Découvrez les tendances qui transforment le digital en 2026.',
      coverImage: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&fit=crop',
    },
    {
      title: 'Tech & Innovation',
      description: "L'impact de l'IA sur la création de contenu moderne.",
      coverImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&fit=crop',
    }
  ];

  return (
    <main className="min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-4">
        {/* Effet de lueur en arrière-plan */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-violet/10 rounded-full blur-[120px] -z-10" />

        <div className="max-w-5xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <WaveformAnimation />
          </motion.div>

          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-8xl font-heading font-bold tracking-tighter leading-none"
            >
              VOTRE VOIX, <br />
              <span className="bg-gradient-to-r from-neon-violet via-neon-blue to-neon-violet bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
                NOTRE EXPERTISE
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto font-light"
            >
              Studio d'enregistrement premium pour podcasts, voix-off et créations sonores haute fidélité.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/pricing">
              <Button size="lg" className="w-full sm:w-auto">Réserver une session</Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">Découvrir le studio</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="py-24 px-4 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl border-glass-border hover:border-neon-violet/50 transition-colors group"
              >
                <div className="w-14 h-14 bg-neon-violet/10 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-neon-violet transition-all">
                  <feature.icon className="text-neon-violet w-7 h-7" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PREVIEW PORTFOLIO --- */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-heading font-bold">DERNIÈRES <span className="text-neon-blue">PRODUCTIONS</span></h2>
              <p className="text-gray-400">Ils nous ont fait confiance pour leur identité sonore.</p>
            </div>
            <Link href="/portfolio" className="group flex items-center gap-2 text-neon-violet font-bold uppercase tracking-widest text-sm">
              Voir tout le portfolio <ArrowRightIcon className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {previewEpisodes.map((ep, i) => (
              <PodcastCard key={i} {...ep} />
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-24 px-4">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="max-w-5xl mx-auto glass p-12 md:p-20 rounded-[40px] text-center border-neon-violet shadow-glow-lg relative overflow-hidden"
        >
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-heading font-bold italic text-white">PRÊT À FAIRE DU BRUIT ?</h2>
            <p className="text-xl text-gray-300">Rejoignez la nouvelle génération de podcasters professionnels.</p>
            <Link href="/pricing">
              <Button size="lg" className="px-12 py-6 text-xl">Lancer mon projet</Button>
            </Link>
          </div>
          {/* Décoration d'arrière-plan */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/20 blur-[100px] -z-0" />
        </motion.div>
      </section>
    </main>
  );
}