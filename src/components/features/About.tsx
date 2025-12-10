import { Leaf, Award, Users } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Segar & Lokal',
    description: 'Kami mendapatkan bunga paling segar dari petani lokal dan pemasok internasional',
  },
  {
    icon: Award,
    title: 'Florist Ahli',
    description: 'Tim ahli kami menciptakan setiap rangkaian dengan penuh semangat dan presisi',
  },
  {
    icon: Users,
    title: 'Pelanggan Utama',
    description: 'Kepuasan Anda adalah prioritas kami, dari pemilihan hingga pengiriman',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent-foreground mb-6">
              Menghadirkan Keindahan Sejak 2020
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Di Golds Flowers, kami percaya bahwa setiap rangkaian bunga menceritakan kisah yang unik. 
              Semangat kami untuk seni bunga mendorong kami menciptakan buket dan rangkaian memukau 
              yang menangkap esensi dari momen spesial dalam hidup.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Dari pertemuan intim hingga perayaan besar, kami menuangkan hati kami ke setiap kelopak, 
              memastikan setiap kreasi menghadirkan kegembiraan dan keindahan ke dunia Anda.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold text-accent-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1487070183336-b863922373d4?q=80&w=600&auto=format&fit=crop"
                alt="Flower arrangement"
                className="rounded-lg shadow-lg w-full h-64 object-cover animate-float"
              />
              <img 
                src="https://images.unsplash.com/photo-1455659817273-f96807779a8a?q=80&w=600&auto=format&fit=crop"
                alt="Flower bouquet"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8 animate-float"
                style={{ animationDelay: '1s' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
