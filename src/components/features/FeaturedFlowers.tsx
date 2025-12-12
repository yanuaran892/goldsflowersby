import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Sparkles, Calendar, MessageCircle } from 'lucide-react';

const categories = [
  {
    title: 'Buket Romantis',
    description: 'Ungkapkan cinta Anda dengan mawar memukau dan rangkaian elegan',
    image: 'https://i.ibb.co.com/SDnRdb7n/Whats-App-Image-2025-12-12-at-14-34-58-113e50d8.jpg',
    icon: Heart,
  },
  {
    title: 'Acara Spesial',
    description: 'Rangkaian sempurna untuk ulang tahun, anniversary, dan perayaan',
    image: 'https://i.ibb.co.com/DPfTsKkn/Whats-App-Image-2025-12-12-at-14-34-58-1fa8ee4f.jpg',
    icon: Sparkles,
  },
  {
    title: 'Bunga Pernikahan',
    description: 'Bunga memukau untuk membuat hari istimewa Anda tak terlupakan',
    image: 'https://i.ibb.co.com/n8Q43Dcy/Whats-App-Image-2025-12-12-at-14-34-59-bef2c259.jpg',
    icon: Calendar,
  },
];

export function FeaturedFlowers() {
  const handleCategoryOrder = (categoryName: string) => {
    const message = `Halo Golds Flowers, saya tertarik dengan ${categoryName}. Bisa tolong berikan info lebih lanjut?`;
    const whatsappUrl = `https://wa.me/6282233035319?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="flowers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Koleksi Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Temukan pilihan bunga segar dan rangkaian custom yang kami kurasi dengan cermat
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="overflow-hidden border-border hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Icon className="w-8 h-8 text-white mb-2" />
                  </div>
                </div>
                <CardContent className="p-6 bg-card">
                  <h3 className="text-2xl font-serif font-semibold text-card-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <Button 
                    onClick={() => handleCategoryOrder(category.title)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Pesan Sekarang
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
