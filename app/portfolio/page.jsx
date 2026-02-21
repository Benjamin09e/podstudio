"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '@/components/GlassCard';
import { PodcastCard } from '@/components/PodcastCard'; // Assure-toi d'avoir ce composant

export default function PortfolioPage() {
    const [activeFilter, setActiveFilter] = useState('all');

    const categories = [
        { id: 'all', label: 'Tous' },
        { id: 'business', label: 'Business' },
        { id: 'tech', label: 'Technologie' },
        { id: 'culture', label: 'Culture' },
        { id: 'education', label: 'Éducation' },
    ];

    const podcasts = [
        {
            title: 'Le Futur du Marketing',
            description: "Découvrez les tendances qui transforment le marketing digital en 2024.",
            coverImage: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=800&fit=crop',
            category: 'business',
        },
        {
            title: 'Tech & Innovation',
            description: "L'intelligence artificielle et son impact sur nos vies quotidiennes.",
            coverImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=800&fit=crop',
            category: 'tech',
        },
        {
            title: 'Entrepreneuriat 2024',
            description: 'Les clés pour réussir son entreprise dans un monde en mutation.',
            coverImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=800&fit=crop',
            category: 'business',
        },
        {
            title: 'Culture Numérique',
            description: "Comment la technologie transforme notre rapport à l'art et à la culture.",
            coverImage: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=800&fit=crop',
            category: 'culture',
        },
        {
            title: 'Apprendre Autrement',
            description: "Les nouvelles méthodes d'apprentissage à l'ère du numérique.",
            coverImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=800&fit=crop',
            category: 'education',
        },
        {
            title: 'Blockchain & Web3',
            description: "Comprendre les technologies décentralisées et leur impact sur l'économie.",
            coverImage: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=800&fit=crop',
            category: 'tech',
        },
    ];

    const filteredPodcasts = activeFilter === 'all'
        ? podcasts
        : podcasts.filter((p) => p.category === activeFilter);

    return (
        <main className="min-h-screen w-full pt-32 pb-20 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
                        Notre <span className="bg-gradient-to-r from-neon-violet to-neon-blue bg-clip-text text-transparent">Portfolio</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Découvrez les productions audiovisuelles réalisées dans nos studios par nos experts.
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveFilter(category.id)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border ${activeFilter === category.id
                                    ? 'bg-neon-violet border-neon-violet text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]'
                                    : 'glass border-glass-border text-gray-300 hover:text-white hover:border-neon-violet'
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Dynamic Grid with Framer Motion Layout */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredPodcasts.map((podcast) => (
                            <motion.div
                                key={podcast.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <PodcastCard {...podcast} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Stats Section */}
                <GlassCard glow className="p-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div className="space-y-2">
                            <div className="text-5xl font-heading font-bold text-neon-violet">150+</div>
                            <div className="text-gray-400 uppercase tracking-widest text-sm font-semibold">Podcasts Produits</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-5xl font-heading font-bold text-neon-blue">50+</div>
                            <div className="text-gray-400 uppercase tracking-widest text-sm font-semibold">Clients Satisfaits</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-5xl font-heading font-bold text-neon-violet">5M+</div>
                            <div className="text-gray-400 uppercase tracking-widest text-sm font-semibold">Écoutes Totales</div>
                        </div>
                    </div>
                </GlassCard>

            </div>
        </main>
    );
}