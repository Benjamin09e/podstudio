import Link from 'next/link';
import { RadioIcon, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="glass border-t border-glass-border py-12 px-4 mt-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <RadioIcon className="text-neon-violet" />
                        <span className="font-heading font-bold text-xl">PodStudio</span>
                    </div>
                    <p className="text-gray-500 text-sm">Le futur du podcasting commence ici. Qualité premium garantie.</p>
                </div>

                <div>
                    <h4 className="font-bold mb-4">Lien rapides</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link href="/services" className="hover:text-neon-violet">Services</Link></li>
                        <li><Link href="/portfolio" className="hover:text-neon-violet">Portfolio</Link></li>
                        <li><Link href="/pricing" className="hover:text-neon-violet">Tarifs</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-4">Contact</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li className="flex items-center gap-2"><Mail size={14} /> studio@podstudio.fr</li>
                        <li>Paris, France</li>
                    </ul>
                </div>

                <div className="flex gap-4">
                    <Instagram className="cursor-pointer hover:text-neon-violet" />
                    <Twitter className="cursor-pointer hover:text-neon-violet" />
                    <Youtube className="cursor-pointer hover:text-neon-violet" />
                </div>
            </div>
            <div className="text-center mt-12 text-xs text-gray-600">
                © 2026 PodStudio. Design Ultra Moderne.
            </div>
        </footer>
    );
}