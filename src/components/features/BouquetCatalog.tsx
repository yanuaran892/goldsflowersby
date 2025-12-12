import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const bouquets = [
  {
    name: 'Buket Vas Bunga Premium',
    description: 'Buket mawar merah segar dengan 12 tangkai mawar pilihan, sempurna untuk ungkapan cinta',
    price: 'Rp 450.000',
    image: 'ttps://i.ibb.co.com/8DPKK2nS/Gemini-Generated-Image-dupi5odupi5odupi.png',
  },
  {
    name: 'Buket Mawar Pink Romantic',
    description: 'Kombinasi mawar pink lembut dengan baby breath, cocok untuk anniversary',
    price: 'Rp 225.000',
    image: 'https://images.unsplash.com/photo-1591886960571-74d43a9d4166?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Buket Bunga Matahari',
    description: 'Buket bunga matahari ceria yang menghadirkan kehangatan dan kebahagiaan',
    price: 'Rp 200.000',
    image: 'https://images.unsplash.com/photo-1597848212624-e530bb5d4ab7?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Buket Mixed Pastel',
    description: 'Perpaduan bunga pastel dengan rose, carnation, dan eustoma yang elegan',
    price: 'Rp 275.000',
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Buket Graduation Special',
    description: 'Buket spesial wisuda dengan kombinasi warna cerah dan pita emas',
    price: 'Rp 180.000',
    image: 'https://images.unsplash.com/photo-1594241228624-3a6d6161f8f1?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Buket Tulip Colorful',
    description: 'Buket tulip warna-warni yang fresh dan menarik, simbol cinta sejati',
    price: 'Rp 300.000',
    image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Buket White Elegance',
    description: 'Buket putih elegan dengan lily dan rose putih, sempurna untuk pernikahan',
    price: 'Rp 350.000',
    image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Buket Valentine Deluxe',
    description: 'Buket mawar merah mewah dengan 24 tangkai dan wrapping premium',
    price: 'Rp 450.000',
    image: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Buket Mini Cute',
    description: 'Buket mini lucu dengan mixed flowers, cocok untuk hadiah kecil yang manis',
    price: 'Rp 100.000',
    image: 'https://images.unsplash.com/photo-1487070183336-b863922373d4?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Buket Rainbow Mix',
    description: 'Kombinasi bunga warna pelangi yang ceria dan menyenangkan',
    price: 'Rp 225.000',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Buket Carnation Premium',
    description: 'Buket carnation segar dengan berbagai warna, tahan lama dan harum',
    price: 'Rp 175.000',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Buket Rustic Garden',
    description: 'Buket bergaya rustic dengan kombinasi wildflowers dan greenery alami',
    price: 'Rp 260.000',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=600&auto=format&fit=crop',
  },
];

export function BouquetCatalog() {
  const handleOrder = (bouquetName: string) => {
    const message = `Halo Golds Flowers, saya tertarik dengan ${bouquetName}. Apakah masih tersedia?`;
    const whatsappUrl = `https://wa.me/6282233035319?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="catalog" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent-foreground mb-4">
            Katalog Bouquet
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilihan lengkap bouquet bunga segar untuk setiap momen spesial Anda
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {bouquets.map((bouquet, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-border hover:shadow-xl transition-all duration-300 group bg-card"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={bouquet.image} 
                  alt={bouquet.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-5">
                <h3 className="text-xl font-serif font-semibold text-card-foreground mb-2 line-clamp-1">
                  {bouquet.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2 min-h-[40px]">
                  {bouquet.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {bouquet.price}
                  </span>
                </div>
                <Button 
                  onClick={() => handleOrder(bouquet.name)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Pesan Sekarang
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Tidak menemukan yang Anda cari? Kami juga menerima custom order!
          </p>
          <Button 
            onClick={() => {
              const message = 'Halo Golds Flowers, saya ingin membuat custom bouquet. Bisa dibantu?';
              window.open(`https://wa.me/6282233035319?text=${encodeURIComponent(message)}`, '_blank');
            }}
            size="lg" 
            variant="outline"
            className="gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Custom Bouquet
          </Button>
        </div>
      </div>
    </section>
  );
}
