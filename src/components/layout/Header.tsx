import { Flower2, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flower2 className="w-8 h-8 text-primary" />
            <span className="text-2xl font-serif font-semibold text-foreground">
              Golds Flowers
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Beranda
            </a>
            <a href="#flowers" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Koleksi
            </a>
            <a href="#catalog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Katalog
            </a>
            <a href="#custom-order" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Custom Order
            </a>
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Tentang
            </a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Kontak
            </a>
            <Button 
              onClick={() => window.open('https://wa.me/6282233035319?text=Halo%20Golds%20Flowers', '_blank')}
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
