import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Palette, MessageSquare, Package, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Konsultasi',
    description: 'Hubungi kami via WhatsApp untuk diskusi kebutuhan Anda',
  },
  {
    icon: Palette,
    title: 'Desain',
    description: 'Kami akan membantu merancang bouquet sesuai keinginan Anda',
  },
  {
    icon: Package,
    title: 'Proses',
    description: 'Tim florist kami akan merangkai dengan penuh perhatian',
  },
  {
    icon: CheckCircle,
    title: 'Selesai',
    description: 'Bouquet siap diambil atau dikirim ke lokasi Anda',
  },
];

const customOptions = [
  {
    title: 'Pilih Jenis Bunga',
    description: 'Mawar, Lily, Tulip, Bunga Matahari, atau kombinasi favorit Anda',
  },
  {
    title: 'Tentukan Warna',
    description: 'Merah, Pink, Putih, Kuning, atau warna lain sesuai tema acara',
  },
  {
    title: 'Ukuran & Budget',
    description: 'Dari bouquet mini hingga grand bouquet, sesuai budget Anda',
  },
  {
    title: 'Tambahan Spesial',
    description: 'Pita, kartu ucapan, balon, boneka, atau cokelat',
  },
];

export function CustomOrder() {
  const handleCustomOrder = () => {
    const message = `Halo Golds Flowers! Saya ingin membuat custom bouquet dengan detail berikut:

🌸 Jenis Bunga: [sebutkan jenis bunga]
🎨 Warna: [sebutkan warna]
💰 Budget: [sebutkan budget]
📅 Tanggal Dibutuhkan: [sebutkan tanggal]
📝 Tambahan: [sebutkan tambahan jika ada]

Mohon informasi lebih lanjut. Terima kasih!`;
    
    const whatsappUrl = `https://wa.me/6282233035319?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="custom-order" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Custom Order Bouquet
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ciptakan bouquet impian Anda! Kami siap mewujudkan rangkaian bunga sesuai keinginan untuk momen spesial Anda
          </p>
        </div>

        {/* Custom Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {customOptions.map((option, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-card-foreground mb-2">
                  {option.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {option.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Steps */}
        <div className="mb-12">
          <h3 className="text-3xl font-serif font-bold text-center text-foreground mb-8">
            Cara Pesan Custom Bouquet
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-serif font-semibold text-foreground mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-primary/20" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent border-primary/20">
          <CardContent className="p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Siap Membuat Bouquet Impian Anda?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Tim florist profesional kami siap membantu mewujudkan rangkaian bunga yang sempurna untuk momen spesial Anda. Konsultasi gratis!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={handleCustomOrder}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5" />
                Mulai Custom Order via WhatsApp
              </Button>
              <a href="tel:+6282233035319" className="text-muted-foreground hover:text-foreground">
                atau hubungi: <span className="text-primary font-semibold">+62 822-3303-5319</span>
              </a>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">
                <strong className="text-foreground">💡 Tips:</strong> Pesan minimal 1-2 hari sebelum acara untuk hasil terbaik
              </p>
              <div className="flex flex-wrap gap-4 justify-center text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Bunga Segar</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Harga Fleksibel</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Gratis Konsultasi</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Layanan Cepat</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Gallery Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-serif font-bold text-center text-foreground mb-8">
            Galeri Custom Order Kami
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1591886960571-74d43a9d4166?q=80&w=600&auto=format&fit=crop"
              alt="Custom bouquet 1"
              className="rounded-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <img 
              src="https://images.unsplash.com/photo-1455659817273-f96807779a8a?q=80&w=600&auto=format&fit=crop"
              alt="Custom bouquet 2"
              className="rounded-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <img 
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=600&auto=format&fit=crop"
              alt="Custom bouquet 3"
              className="rounded-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <img 
              src="https://images.unsplash.com/photo-1487070183336-b863922373d4?q=80&w=600&auto=format&fit=crop"
              alt="Custom bouquet 4"
              className="rounded-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
