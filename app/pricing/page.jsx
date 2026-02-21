"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, CalendarIcon, ClockIcon, MapPinIcon } from 'lucide-react';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/Button';
import { PricingCard } from '@/components/PricingCard'; // Assure-toi de le créer ci-dessous

export default function PricingPage() {
    const pricingTiers = [
        {
            title: 'Basic',
            price: '50€',
            period: 'heure',
            features: [
                'Enregistrement studio 1 heure',
                'Microphones professionnels',
                'Isolation acoustique',
                'Fichier audio brut',
                'Support technique',
            ],
        },
        {
            title: 'Pro',
            price: '200€',
            period: 'jour',
            highlighted: true,
            features: [
                'Session complète (4 heures)',
                'Équipement premium',
                'Mixage et montage inclus',
                'Mastering professionnel',
                'Fichiers optimisés',
                'Support prioritaire',
            ],
        },
        {
            title: 'Premium',
            price: '800€',
            period: 'semaine',
            features: [
                'Accès studio illimité (5 jours)',
                'Post-production complète',
                'Montage vidéo inclus',
                'Distribution assistée',
                'Visuels professionnels',
                'Stratégie de lancement',
            ],
        },
    ];

    const bookingSteps = [
        { icon: CalendarIcon, title: 'Date', desc: 'Choisissez votre créneau' },
        { icon: ClockIcon, title: 'Durée', desc: 'Définissez le temps nécessaire' },
        { icon: MapPinIcon, title: 'Accès', desc: 'Recevez vos codes de studio' },
    ];

    return (
        <main className="min-h-screen w-full pt-32 pb-20 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Hero Pricing */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
                        Tarifs & <span className="bg-gradient-to-r from-neon-violet to-neon-blue bg-clip-text text-transparent">Réservation</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Des formules flexibles pour tous les créateurs, de l'indépendant au studio de production.
                    </p>
                </motion.div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {pricingTiers.map((tier, index) => (
                        <PricingCard key={tier.title} {...tier} index={index} />
                    ))}
                </div>

                {/* Calendar Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <h2 className="font-heading text-4xl font-bold text-center mb-12">Disponibilités en Direct</h2>
                    <GlassCard glow className="max-w-4xl mx-auto p-8">
                        <div className="flex flex-col md:flex-row gap-8">
                            {/* Calendrier visuel simplifié */}
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="font-bold text-xl">Mars 2024</h3>
                                    <div className="flex gap-2">
                                        <button className="p-2 glass rounded-lg hover:text-neon-violet">←</button>
                                        <button className="p-2 glass rounded-lg hover:text-neon-violet">→</button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-7 gap-2 text-center text-xs mb-4 text-gray-500">
                                    {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map(d => <div key={d}>{d}</div>)}
                                </div>
                                <div className="grid grid-cols-7 gap-2">
                                    {Array.from({ length: 31 }, (_, i) => (
                                        <button
                                            key={i}
                                            className={`aspect-square rounded-lg flex items-center justify-center text-sm transition-all
                        ${(i + 1) === 14 ? 'bg-neon-violet text-white shadow-neon-violet' : 'glass hover:border-neon-violet'}`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Sélection d'heure */}
                            <div className="w-full md:w-64 space-y-4">
                                <h4 className="font-bold text-gray-300">Heures disponibles</h4>
                                <div className="grid grid-cols-2 gap-2">
                                    {['09:00', '11:00', '14:00', '16:00', '18:00', '20:00'].map(time => (
                                        <button key={time} className="py-2 glass text-sm rounded-lg hover:bg-neon-violet/20 hover:border-neon-violet transition-colors">
                                            {time}
                                        </button>
                                    ))}
                                </div>
                                <Button className="w-full mt-4">Confirmer le créneau</Button>
                            </div>
                        </div>
                    </GlassCard>
                </motion.div>

                {/* Booking Process Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {bookingSteps.map((step, i) => (
                        <div key={i} className="text-center space-y-4">
                            <div className="w-16 h-16 bg-neon-violet/10 border border-neon-violet rounded-full flex items-center justify-center mx-auto shadow-glow-sm">
                                <step.icon className="text-neon-violet w-8 h-8" />
                            </div>
                            <h3 className="font-heading text-xl font-bold">{step.title}</h3>
                            <p className="text-gray-400">{step.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}