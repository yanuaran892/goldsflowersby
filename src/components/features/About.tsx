import { Leaf, Award, Users, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

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
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                <span className="gold-gradient">Menghadirkan Keindahan</span>
                <br />
                <span className="text-white">Sejak 2020</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mb-6"></div>
            </div>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Di Golds Flowers, kami percaya bahwa setiap rangkaian bunga menceritakan kisah yang unik. 
              Semangat kami untuk seni bunga mendorong kami menciptakan buket dan rangkaian memukau 
              yang menangkap esensi dari momen spesial dalam hidup.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Dari pertemuan intim hingga perayaan besar, kami menuangkan hati kami ke setiap kelopak, 
              memastikan setiap kreasi menghadirkan kegembiraan dan keindahan ke dunia Anda.
            </p>
            
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="flex gap-4 group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/30 group-hover:border-primary transition-all duration-300 group-hover:scale-110">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                onClick={() => {
                  const message = 'Halo Golds Flowers, saya ingin konsultasi tentang rangkaian bunga untuk acara saya';
                  window.open(`https://wa.me/6282233035319?text=${encodeURIComponent(message)}`, '_blank');
                }}
                size="lg" 
                className="bg-gradient-to-r from-primary via-yellow-400 to-primary hover:shadow-xl hover:shadow-primary/50 text-black font-bold gap-2 transition-all duration-300 hover:scale-110 px-8"
              >
                <MessageCircle className="w-5 h-5" />
                Konsultasi Gratis via WhatsApp
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-lg transform group-hover:scale-105 transition-transform duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1487070183336-b863922373d4?q=80&w=600&auto=format&fit=crop"
                  alt="Flower arrangement"
                  className="rounded-lg shadow-2xl w-full h-80 object-cover border-2 border-primary/30 group-hover:border-primary transition-all duration-500 relative z-10"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative group mt-12"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-lg transform group-hover:scale-105 transition-transform duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1455659817273-f96807779a8a?q=80&w=600&auto=format&fit=crop"
                  alt="Flower bouquet"
                  className="rounded-lg shadow-2xl w-full h-80 object-cover border-2 border-primary/30 group-hover:border-primary transition-all duration-500 relative z-10"
                />
              </motion.div>
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-4 -left-4 bg-gradient-to-br from-primary via-yellow-400 to-primary p-6 rounded-2xl shadow-2xl shadow-primary/50 text-black text-center border-4 border-black"
            >
              <p className="text-4xl font-bold font-serif">5+</p>
              <p className="text-sm font-semibold">Tahun Pengalaman</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
