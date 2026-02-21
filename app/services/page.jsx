"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/GlassCard';
import {
    MicIcon,
    SlidersIcon,
    RadioIcon,
    VideoIcon,
    SettingsIcon,
    BoxIcon,
    CheckCircle2
} from 'lucide-react';

export default function ServicesPage() {
    const mainServices = [
        {
            icon: MicIcon,
            title: 'Équipement Professionnel',
            description: "Un environnement acoustique traité et des micros de légende pour capturer chaque nuance de votre voix.",
            features: ['Shure SM7B & Neumann U87', 'Interface Apollo x8p', 'Cabine insonorisée', 'Monitoring Focal'],
        },
        {
            icon: SlidersIcon,
            title: 'Post-Production',
            description: 'Donnez à votre podcast le son des plus grandes productions mondiales grâce à notre mixage expert.',
            features: ['Nettoyage audio (IA)', 'Mixage multipiste', 'Mastering LUFS', 'Sound Design & Intro'],
        },
        {
            icon: VideoIcon,
            title: 'Vidéo-Podcast',
            description: 'Filmez vos sessions en 4K pour une diffusion multicanale sur YouTube, TikTok et Instagram.',
            features: ['Multi-caméras Sony 4K', 'Éclairage cinéma', 'Réalisation en direct', 'Montage Shorts/Reels'],
        }
    ];

    const techSpecs = [
        { icon: BoxIcon, name: 'Hardware', desc: 'Préamplis Neve & SSL' },
        { icon: SettingsIcon, name: 'Logiciels', desc: 'Pro Tools & Izotope RX' },
        { icon: RadioIcon, name: 'Distribution', desc: 'RSS, Spotify, Apple' },
        { icon: CheckCircle2, name: 'Qualité', desc: 'Export Haute Fidélité' },
    ];

    return (
        <main className="min-h-screen w-full pt-32 pb-20 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
                        Nos <span className="bg-gradient-to-r from-neon-violet to-neon-blue bg-clip-text text-transparent">Services</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Une solution clé en main : de l'idée initiale à la diffusion sur toutes les plateformes mondiales.
                    </p>
                </motion.div>

                {/* Detailed Services List */}
                <div className="space-y-12 mb-24">
                    {mainServices.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <GlassCard glow className="p-8 md:p-12 overflow-hidden relative">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                    <div className="space-y-6">
                                        <div className="w-16 h-16 bg-neon-violet/20 border border-neon-violet rounded-2xl flex items-center justify-center">
                                            <service.icon className="text-neon-violet w-8 h-8" />
                                        </div>
                                        <h2 className="text-3xl font-heading font-bold text-white">{service.title}</h2>
                                        <p className="text-gray-300 text-lg leading-relaxed">{service.description}</p>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {service.features.map((feature, i) => (
                                            <div key={i} className="flex items-center space-x-3 glass p-4 rounded-xl border-glass-border">
                                                <div className="w-2 h-2 rounded-full bg-neon-blue shadow-[0_0_8px_#3b82f6]" />
                                                <span className="text-sm text-gray-200">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Effet décoratif en arrière-plan */}
                                <div className="absolute -right-10 -bottom-10 opacity-5">
                                    <service.icon size={200} />
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>

                {/* Quick Tech Specs Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {techSpecs.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <GlassCard className="text-center p-6 space-y-4 border-none bg-white/5">
                                <item.icon className="mx-auto text-neon-blue w-6 h-6" />
                                <div>
                                    <h4 className="font-bold text-white">{item.name}</h4>
                                    <p className="text-xs text-gray-500">{item.desc}</p>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>

                {/* Process Section */}
                <div className="text-center space-y-12">
                    <h2 className="font-heading text-4xl font-bold">Notre Processus</h2>
                    <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
                        {['Concept', 'Enregistrement', 'Montage', 'Publication'].map((step, i) => (
                            <div key={i} className="relative z-10">
                                <div className="w-12 h-12 rounded-full bg-neon-violet text-white font-bold flex items-center justify-center mx-auto mb-4 shadow-neon-violet">
                                    {i + 1}
                                </div>
                                <h3 className="font-bold mb-2">{step}</h3>
                                <div className="hidden md:block absolute top-6 left-[60%] w-full h-[2px] bg-gradient-to-r from-neon-violet/50 to-transparent -z-10" />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </main>
    );
}