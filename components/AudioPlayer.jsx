"use client";
import { useState, useRef } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function AudioPlayer({ title }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(30); // Exemple statique

    return (
        <div className="glass bg-white/5 rounded-xl p-3 flex items-center gap-4">
            <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-10 h-10 rounded-full bg-neon-violet flex items-center justify-center shadow-neon-violet"
            >
                {isPlaying ? <Pause size={18} fill="white" /> : <Play size={18} fill="white" className="ml-1" />}
            </motion.button>

            <div className="flex-1">
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        className="h-full bg-gradient-to-r from-neon-violet to-neon-blue"
                    />
                </div>
            </div>

            <Volume2 size={16} className="text-gray-500" />
        </div>
    );
}