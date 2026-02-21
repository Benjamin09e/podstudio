"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/Button';
import { ClockIcon, ArrowRightIcon } from 'lucide-react';

export default function BlogPage() {
    const articles = [
        {
            title: 'Choisir le Bon Micro en 2024',
            excerpt: "Guide complet pour sélectionner l'équipement audio adapté à votre budget.",
            image: 'https://images.unsplash.com/photo-1590602846989-e99596d2a6ee?w=800&fit=crop',
            category: 'Équipement',
            date: '15 Fév 2024'
        },
        {
            title: '10 Conseils pour un Son Parfait',
            excerpt: "Les meilleures pratiques pour obtenir une qualité studio dès l'enregistrement.",
            image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&fit=crop',
            category: 'Production',
            date: '12 Fév 2024'
        },
        {
            title: 'Monétiser son Podcast',
            excerpt: "Comment transformer votre audience en source de revenus durable.",
            image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&fit=crop',
            category: 'Business',
            date: '10 Fév 2024'
        }
    ];

    return (
        <main className="min-h-screen pt-32 pb-20 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-16">
                    <h1 className="font-heading text-5xl font-bold mb-6">Blog & <span className="bg-gradient-to-r from-neon-violet to-neon-blue bg-clip-text text-transparent">Ressources</span></h1>
                    <p className="text-gray-400 text-xl">Apprenez à maîtriser l'art du podcasting.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((post, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                            <GlassCard className="h-full flex flex-col p-0 overflow-hidden">
                                <div className="relative h-48 w-full">
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                                    <div className="absolute top-4 left-4 bg-neon-violet px-3 py-1 rounded-full text-xs font-bold">{post.category}</div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center text-xs text-gray-500 mb-3">
                                        <ClockIcon className="w-3 h-3 mr-1" /> {post.date}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-white leading-tight">{post.title}</h3>
                                    <p className="text-gray-400 text-sm mb-6 flex-1">{post.excerpt}</p>
                                    <button className="flex items-center text-neon-violet font-bold text-sm hover:text-neon-blue transition-colors">
                                        Lire la suite <ArrowRightIcon className="w-4 h-4 ml-2" />
                                    </button>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}