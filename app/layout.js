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
  title: 'PodStudio | Studio d’Enregistrement Podcast à Paris',
  description: 'Enregistrez vos podcasts dans un studio pro avec matériel haut de gamme. Mixage, montage et distribution sur Spotify et Apple Podcasts.',
  keywords: ['studio podcast paris', 'enregistrement audio pro', 'montage podcast', 'vidéo podcast studio'],
  openGraph: {
    title: 'PodStudio - Créez votre Podcast Pro',
    description: 'Équipement premium et post-production pour podcasters exigeants.',
    images: ['/og-image.jpg'], // Ajoute une image de ton studio dans le dossier public
  },
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