"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { WaveformAnimation } from '@/components/WaveformAnimation'
import { PodcastCard } from '@/components/PodcastCard'
import { Button } from '@/components/Button'
import { MicIcon, HeadphonesIcon, RadioIcon } from 'lucide-react'

export default function Home() {
  const latestEpisodes = [
    {
      title: 'Le Futur du Marketing',
      description: 'Découvrez les tendances qui transforment le marketing digital en 2024',
      coverImage: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=800&fit=crop',
    },
    {
      title: 'Tech & Innovation',
      description: "L'intelligence artificielle et son impact sur nos vies quotidiennes",
      coverImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=800&fit=crop',
    },
    {
      title: 'Entrepreneuriat 2024',
      description: 'Les clés pour réussir son entreprise dans un monde en mutation',
      coverImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=800&fit=crop',
    },
  ]

  const features = [
    {
      icon: MicIcon,
      title: 'Équipement Professionnel',
      description: 'Micros haut de gamme et isolation acoustique parfaite',
    },
    {
      icon: HeadphonesIcon,
      title: 'Post-Production',
      description: 'Mixage, montage et mastering de qualité studio',
    },
    {
      icon: RadioIcon,
      title: 'Distribution',
      description: 'Aide à la publication sur toutes les plateformes',
    },
  ]

  return (
    <main className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-violet/10 via-transparent to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <WaveformAnimation />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-5xl md:text-7xl font-bold text-white leading-tight"
          >
            Studio d'Enregistrement<br />
            <span className="bg-gradient-to-r from-neon-violet to-neon-blue bg-clip-text text-transparent">
              Podcast Professionnel
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Créez des podcasts de qualité exceptionnelle avec notre équipement professionnel et notre expertise en post-production
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" variant="primary">Réserver le Studio</Button>
            <Button size="lg" variant="outline">Découvrir nos Services</Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Pourquoi Choisir PodStudio ?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Tout ce dont vous avez besoin pour créer un podcast professionnel</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-8 text-center space-y-4 hover:border-neon-violet transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neon-violet/20 border border-neon-violet">
                  <feature.icon className="w-8 h-8 text-neon-violet" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Design Original Magic Patterns */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 text-center space-y-6 border-2 border-neon-violet shadow-[0_0_30px_rgba(139,92,246,0.5)]"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">Prêt à Créer Votre Podcast ?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Réservez votre session d'enregistrement dès aujourd'hui et donnez vie à vos idées</p>
            <Button size="lg" variant="primary">Réserver Maintenant</Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}