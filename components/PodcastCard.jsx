"use client";
import { GlassCard } from './GlassCard';
import { AudioPlayer } from './AudioPlayer';

export function PodcastCard({ title, description, coverImage, audioUrl }) {
    return (
        <GlassCard glow className="p-4">
            <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
                <img src={coverImage} alt={title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <h3 className="font-heading text-lg font-bold text-white mb-2 line-clamp-1">{title}</h3>
            <p className="text-gray-400 text-xs mb-6 line-clamp-2">{description}</p>
            <AudioPlayer title={title} audioUrl={audioUrl} />
        </GlassCard>
    );
}