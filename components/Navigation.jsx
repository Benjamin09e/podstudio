"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon, RadioIcon } from 'lucide-react';

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const links = [
        { path: '/', label: 'Accueil' },
        { path: '/services', label: 'Services' },
        { path: '/portfolio', label: 'Portfolio' },
        { path: '/pricing', label: 'Tarifs' },
        { path: '/blog', label: 'Blog' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-glass-border">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <RadioIcon className="text-neon-violet w-8 h-8" />
                    <span className="font-heading font-bold text-xl bg-gradient-to-r from-neon-violet to-neon-blue bg-clip-text text-transparent">PodStudio</span>
                </Link>
                <div className="hidden md:flex space-x-8">
                    {links.map((link) => (
                        <Link key={link.path} href={link.path} className={`text-sm transition-colors ${pathname === link.path ? 'text-neon-violet' : 'text-gray-300 hover:text-white'}`}>
                            {link.label}
                        </Link>
                    ))}
                </div>
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <XIcon /> : <MenuIcon />}
                </button>
            </div>
        </nav>
    );
}