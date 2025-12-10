import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Hubungi Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Siap menciptakan sesuatu yang indah? Kami ingin mendengar dari Anda
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="border-border hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-card-foreground mb-2">Telepon</h3>
              <a href="https://wa.me/6282233035319" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                +62 822-3303-5319
              </a>
            </CardContent>
          </Card>
          
          <Card className="border-border hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-card-foreground mb-2">Email</h3>
              <a href="mailto:goldsflowersby@gmail.com" className="text-sm text-primary hover:underline">
                goldsflowersby@gmail.com
              </a>
            </CardContent>
          </Card>
          
          <Card className="border-border hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-card-foreground mb-2">Lokasi</h3>
              <p className="text-sm text-muted-foreground">Pasar Bunga Kayoon Dalam Stand C-7 (Sebrang Kantor Pajak)</p>
            </CardContent>
          </Card>
          
          <Card className="border-border hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-card-foreground mb-2">Jam Buka</h3>
              <p className="text-sm text-muted-foreground font-semibold text-primary">Buka 24 Jam</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="https://wa.me/6282233035319?text=Halo%20Golds%20Flowers%2C%20saya%20ingin%20menjadwalkan%20konsultasi" target="_blank" rel="noopener noreferrer">
              Jadwalkan Konsultasi
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
