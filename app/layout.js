import './globals.css';
import { Orbitron, Inter } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '700', '900']
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

export const metadata = {
  title: 'PodStudio | Studio d’Enregistrement Podcast Pro',
  description: 'Créez des podcasts de qualité exceptionnelle avec notre équipement professionnel.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${orbitron.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-[#0a0a0a] text-white font-body antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}