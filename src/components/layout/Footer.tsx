import { Flower2, Phone, Mail, MapPin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Flower2 className="w-6 h-6 text-primary" />
              <span className="text-xl font-serif font-semibold text-foreground">
                Golds Flowers
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Menciptakan momen indah dengan rangkaian bunga segar buatan tangan sejak 2020.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-foreground">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <a href="https://wa.me/6282233035319" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  +62 822-3303-5319
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <a href="mailto:goldsflowersby@gmail.com" className="text-primary hover:underline">
                  goldsflowersby@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Pasar Bunga Kayoon Dalam Stand C-7 (Sebrang Kantor Pajak)</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-foreground">Ikuti Kami</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Instagram className="w-4 h-4 text-muted-foreground" />
                <a href="https://www.instagram.com/golds_flowersby" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  @golds_flowersby
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                <a href="https://www.tiktok.com/@goldsflowersby" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  @goldsflowersby
                </a>
              </div>
              <div className="text-sm text-muted-foreground mt-4">
                <p className="text-lg font-semibold text-primary">Buka 24 Jam</p>
                <p>Setiap Hari</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Golds Flowers. Hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
