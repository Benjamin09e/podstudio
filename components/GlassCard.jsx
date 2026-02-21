"use client";
import { motion } from 'framer-motion';

export function GlassCard({ children, className = '', glow = false }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className={`glass rounded-2xl p-6 transition-all duration-300 ${glow ? 'border-neon-violet shadow-glow-md' : ''} ${className}`}
        >
            {children}
        </motion.div>
    );
}