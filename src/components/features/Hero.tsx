import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2000&auto=format&fit=crop')`,
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 animate-slide-up">
          Golds Flowers
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Di Mana Setiap Bunga Bercerita
        </p>
        <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
          Rangkaian bunga buatan tangan untuk pernikahan, acara, dan momen berharga dalam hidup
        </p>
        <div className="flex gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button asChild size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="#flowers">
              Lihat Koleksi Bunga
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
            <a href="https://wa.me/6282233035319?text=Halo%20Golds%20Flowers%2C%20saya%20ingin%20bertanya%20tentang%20rangkaian%20bunga" target="_blank" rel="noopener noreferrer">
              Hubungi Kami
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
