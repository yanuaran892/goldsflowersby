import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/features/Hero';
import { FeaturedFlowers } from '@/components/features/FeaturedFlowers';
import { About } from '@/components/features/About';
import { Contact } from '@/components/features/Contact';

export function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedFlowers />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
