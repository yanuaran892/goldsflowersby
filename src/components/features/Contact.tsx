import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: Phone,
    title: 'Telepon',
    content: '+62 822-3303-5319',
    link: 'https://wa.me/6282233035319',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'goldsflowersby@gmail.com',
    link: 'mailto:goldsflowersby@gmail.com',
  },
  {
    icon: MapPin,
    title: 'Lokasi',
    content: 'Pasar Bunga Kayoon Dalam Stand C-7',
    link: null,
  },
  {
    icon: Clock,
    title: 'Jam Buka',
    content: 'Buka 24 Jam',
    link: null,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
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
            <span className="gold-gradient">Hubungi Kami</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Siap menciptakan sesuatu yang indah? Kami ingin mendengar dari Anda
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="border-2 border-primary/20 hover:border-primary transition-all duration-500 bg-gradient-to-b from-gray-900 to-black hover:shadow-xl hover:shadow-primary/30 group transform hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border-2 border-primary/30 group-hover:border-primary transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-8 h-8 text-primary group-hover:animate-bounce" />
                    </div>
                    <h3 className="font-serif font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm text-gray-400 hover:text-primary transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className={`text-sm ${info.title === 'Jam Buka' ? 'text-primary font-semibold' : 'text-gray-400'}`}>
                        {info.content}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-transparent via-primary/10 to-transparent p-12 rounded-2xl border border-primary/20">
            <h3 className="text-3xl font-serif font-bold gold-gradient mb-4">
              Jadwalkan Konsultasi Gratis
            </h3>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Tim kami siap membantu Anda mewujudkan rangkaian bunga impian. Hubungi kami sekarang!
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-primary via-yellow-400 to-primary hover:shadow-xl hover:shadow-primary/50 text-black font-bold gap-2 transition-all duration-300 hover:scale-110 px-10"
            >
              <a href="https://wa.me/6282233035319?text=Halo%20Golds%20Flowers%2C%20saya%20ingin%20menjadwalkan%20konsultasi" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5" />
                Hubungi Via WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
