"use client";
import { motion } from 'framer-motion';

export function Button({ children, variant = 'primary', size = 'md', className = '', ...props }) {
    const variants = {
        primary: "bg-neon-violet text-white shadow-neon-violet",
        outline: "border-2 border-neon-violet text-neon-violet hover:bg-neon-violet hover:text-white",
    };
    const sizes = { sm: 'px-4 py-2', md: 'px-6 py-3', lg: 'px-8 py-4' };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`font-semibold rounded-lg transition-all ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
}