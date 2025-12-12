import { Flower2, MessageCircle, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 animate-fade-in">
            <Flower2 className="w-8 h-8 text-primary animate-glow" />
            <span className="text-2xl font-serif font-bold gold-gradient">
              Golds Flowers
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
              Beranda
            </a>
            <a href="#flowers" className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
              Koleksi
            </a>
            <a href="#catalog" className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
              Katalog
            </a>
            <a href="#custom-order" className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
              Custom Order
            </a>
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
              Tentang
            </a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
              Kontak
            </a>
            <Button 
              onClick={() => window.open('https://wa.me/6282233035319?text=Halo%20Golds%20Flowers', '_blank')}
              size="sm"
              className="bg-gradient-to-r from-primary via-yellow-400 to-primary hover:shadow-lg hover:shadow-primary/50 text-black font-semibold gap-2 transition-all duration-300 hover:scale-105 animate-glow"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>

        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in-up">
            <a href="#home" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              Beranda
            </a>
            <a href="#flowers" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              Koleksi
            </a>
            <a href="#catalog" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              Katalog
            </a>
            <a href="#custom-order" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              Custom Order
            </a>
            <a href="#about" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              Tentang
            </a>
            <a href="#contact" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              Kontak
            </a>
            <Button 
              onClick={() => {
                window.open('https://wa.me/6282233035319?text=Halo%20Golds%20Flowers', '_blank');
                setIsOpen(false);
              }}
              size="sm"
              className="w-full bg-gradient-to-r from-primary via-yellow-400 to-primary text-black font-semibold gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
