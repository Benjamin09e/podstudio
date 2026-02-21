"use client";
import { motion } from 'framer-motion';

export function WaveformAnimation() {
    const bars = Array.from({ length: 40 }, (_, i) => i);
    return (
        <div className="flex items-center justify-center space-x-1 h-24">
            {bars.map((bar) => (
                <motion.div
                    key={bar}
                    className="w-1 bg-gradient-to-t from-neon-violet to-neon-blue rounded-full"
                    animate={{ height: [20, Math.random() * 60 + 20, 20] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: bar * 0.05 }}
                />
            ))}
        </div>
    );
}