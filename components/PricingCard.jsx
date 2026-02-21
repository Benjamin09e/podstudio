"use client";
import { motion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { Button } from './Button';

export function PricingCard({ title, price, period, features, highlighted, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
        >
            <GlassCard
                glow={highlighted}
                className={`h-full flex flex-col ${highlighted ? 'border-2 border-neon-violet scale-105' : ''}`}
            >
                {highlighted && (
                    <div className="bg-neon-violet text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full self-start mb-4">
                        Plus Populaire
                    </div>
                )}
                <h3 className="text-2xl font-heading font-bold mb-2">{title}</h3>
                <div className="mb-6">
                    <span className="text-4xl font-bold">{price}</span>
                    <span className="text-gray-400 ml-2">/ {period}</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                    {features.map((f, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                            <CheckIcon className="w-5 h-5 text-neon-violet shrink-0" />
                            {f}
                        </li>
                    ))}
                </ul>
                <Button variant={highlighted ? 'primary' : 'outline'} className="w-full">
                    Choisir cette offre
                </Button>
            </GlassCard>
        </motion.div>
    );
}