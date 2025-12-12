import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Sparkles, Calendar, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function FeaturedFlowers() {
  const handleCategoryOrder = (categoryName: string) => {
    const message = `Halo Golds Flowers, saya tertarik dengan ${categoryName}. Bisa tolong berikan info lebih lanjut?`;
    const whatsappUrl = `https://wa.me/6282233035319?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="flowers" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            <span className="gold-gradient">Koleksi Kami</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Temukan pilihan bunga segar dan rangkaian custom yang kami kurasi dengan cermat
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div key={index} variants={cardVariants}>
                <Card 
                  className="overflow-hidden border-2 border-primary/20 hover:border-primary transition-all duration-500 group cursor-pointer bg-black/40 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/30 transform hover:scale-105"
                >
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                    
                    {/* Icon overlay */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/30 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    {/* Bottom content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-3xl font-serif font-bold text-white mb-2 gold-gradient">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                  <CardContent className="p-6 bg-gradient-to-b from-gray-900 to-black">
                    <p className="text-gray-400 mb-4">
                      {category.description}
                    </p>
                    <Button 
                      onClick={() => handleCategoryOrder(category.title)}
                      className="w-full bg-gradient-to-r from-primary via-yellow-400 to-primary hover:shadow-lg hover:shadow-primary/50 text-black font-bold gap-2 transition-all duration-300 hover:scale-105"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Pesan Sekarang
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
