import { Flower2 } from 'lucide-react';

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
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Beranda
            </a>
            <a href="#flowers" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Bunga
            </a>
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Tentang
            </a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Kontak
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
