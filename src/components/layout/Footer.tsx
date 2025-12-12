import { Flower2, Phone, Mail, MapPin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-primary/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-2 mb-4">
              <Flower2 className="w-6 h-6 text-primary" />
              <span className="text-xl font-serif font-bold gold-gradient">
                Golds Flowers
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Menciptakan momen indah dengan rangkaian bunga segar buatan tangan sejak 2020.
            </p>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-serif font-semibold mb-4 text-primary">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm group">
                <Phone className="w-4 h-4 text-primary group-hover:animate-bounce" />
                <a href="https://wa.me/6282233035319" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                  +62 822-3303-5319
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm group">
                <Mail className="w-4 h-4 text-primary group-hover:animate-bounce" />
                <a href="mailto:goldsflowersby@gmail.com" className="text-foreground hover:text-primary transition-colors">
                  goldsflowersby@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Pasar Bunga Kayoon Dalam Stand C-7</span>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-lg font-serif font-semibold mb-4 text-primary">Ikuti Kami</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm group">
                <Instagram className="w-4 h-4 text-primary group-hover:animate-bounce" />
                <a href="https://www.instagram.com/golds_flowersby" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                  @golds_flowersby
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm group">
                <svg className="w-4 h-4 text-primary group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                <a href="https://www.tiktok.com/@goldsflowersby" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                  @goldsflowersby
                </a>
              </div>
              <div className="text-sm mt-4">
                <p className="text-lg font-semibold gold-gradient">Buka 24 Jam</p>
                <p className="text-muted-foreground">Setiap Hari</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary/20 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Golds Flowers. Hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
