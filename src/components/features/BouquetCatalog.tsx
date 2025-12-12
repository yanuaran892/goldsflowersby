import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const bouquets = [
  {
    name: 'Buket Vas Bunga Premium',
    description: 'Buket mawar merah segar dengan 12 tangkai mawar pilihan, sempurna untuk ungkapan cinta',
    price: 'Rp 450.000',
    image: 'https://i.ibb.co.com/8DPKK2nS/Gemini-Generated-Image-dupi5odupi5odupi.png',
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export function BouquetCatalog() {
  const handleOrder = (bouquetName: string) => {
    const message = `Halo Golds Flowers, saya tertarik dengan ${bouquetName}. Apakah masih tersedia?`;
    const whatsappUrl = `https://wa.me/6282233035319?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="catalog" className="py-20 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float-slow"></div>
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
            <span className="gold-gradient">Katalog Bouquet</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Pilihan lengkap bouquet bunga segar untuk setiap momen spesial Anda
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {bouquets.map((bouquet, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card 
                className="overflow-hidden border-2 border-primary/20 hover:border-primary transition-all duration-500 group bg-gradient-to-b from-gray-900 to-black hover:shadow-2xl hover:shadow-primary/20 transform hover:scale-105"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={bouquet.image} 
                    alt={bouquet.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                  
                  {/* Price badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-primary via-yellow-400 to-primary text-black font-bold px-3 py-1 rounded-full text-sm shadow-lg">
                    {bouquet.price}
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                    {bouquet.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2 min-h-[40px]">
                    {bouquet.description}
                  </p>
                  <Button 
                    onClick={() => handleOrder(bouquet.name)}
                    className="w-full bg-gradient-to-r from-primary/80 via-yellow-400/80 to-primary/80 hover:from-primary hover:via-yellow-400 hover:to-primary text-black font-bold gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Pesan Sekarang
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-transparent via-primary/10 to-transparent p-8 rounded-2xl border border-primary/20">
            <p className="text-gray-400 mb-4 text-lg">
              Tidak menemukan yang Anda cari? Kami juga menerima custom order!
            </p>
            <Button 
              onClick={() => {
                const message = 'Halo Golds Flowers, saya ingin membuat custom bouquet. Bisa dibantu?';
                window.open(`https://wa.me/6282233035319?text=${encodeURIComponent(message)}`, '_blank');
              }}
              size="lg" 
              className="gap-2 bg-gradient-to-r from-primary via-yellow-400 to-primary hover:shadow-xl hover:shadow-primary/50 text-black font-bold transition-all duration-300 hover:scale-110"
            >
              <MessageCircle className="w-5 h-5" />
              Custom Bouquet
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
