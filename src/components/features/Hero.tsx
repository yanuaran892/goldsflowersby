import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2000&auto=format&fit=crop')`,
        }}
      />
      
      {/* Gold shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-30 animate-shimmer" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <Sparkles className="w-12 h-12 text-primary mx-auto animate-bounce-slow" />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-serif font-bold mb-6"
        >
          <span className="gold-gradient drop-shadow-2xl">Golds Flowers</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-4"
        >
          <p className="text-2xl md:text-3xl text-white font-serif italic">
            Di Mana Setiap Bunga Bercerita
          </p>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-gray-300 mb-10 max-w-xl mx-auto"
        >
          Rangkaian bunga buatan tangan untuk pernikahan, acara, dan momen berharga dalam hidup
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <Button 
            asChild 
            size="lg" 
            className="gap-2 bg-gradient-to-r from-primary via-yellow-400 to-primary hover:shadow-xl hover:shadow-primary/50 text-black font-bold transition-all duration-300 hover:scale-110 animate-glow px-8 py-6 text-lg"
          >
            <a href="#flowers">
              Lihat Koleksi Bunga
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          <Button 
            asChild 
            size="lg" 
            variant="outline" 
            className="bg-black/30 border-2 border-primary/50 text-white hover:bg-primary/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-primary px-8 py-6 text-lg font-semibold"
          >
            <a href="https://wa.me/6282233035319?text=Halo%20Golds%20Flowers%2C%20saya%20ingin%20bertanya%20tentang%20rangkaian%20bunga" target="_blank" rel="noopener noreferrer">
              Hubungi Kami
            </a>
          </Button>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary rounded-full p-1"
          >
            <motion.div 
              className="w-1 h-2 bg-primary rounded-full mx-auto"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
