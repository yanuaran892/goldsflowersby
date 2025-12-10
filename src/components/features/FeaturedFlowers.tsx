import { Card, CardContent } from '@/components/ui/card';
import { Heart, Sparkles, Calendar } from 'lucide-react';

const categories = [
  {
    title: 'Buket Romantis',
    description: 'Ungkapkan cinta Anda dengan mawar memukau dan rangkaian elegan',
    image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?q=80&w=800&auto=format&fit=crop',
    icon: Heart,
  },
  {
    title: 'Acara Spesial',
    description: 'Rangkaian sempurna untuk ulang tahun, anniversary, dan perayaan',
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=800&auto=format&fit=crop',
    icon: Sparkles,
  },
  {
    title: 'Bunga Pernikahan',
    description: 'Bunga memukau untuk membuat hari istimewa Anda tak terlupakan',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop',
    icon: Calendar,
  },
];

export function FeaturedFlowers() {
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
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
