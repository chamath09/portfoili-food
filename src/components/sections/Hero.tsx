import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroImage from '../../assets/hero.jpg';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-100/50 dark:from-emerald-950/30 dark:to-teal-900/30 backdrop-blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-emerald-600 dark:text-emerald-400 font-semibold tracking-wide uppercase mb-4">
            Food Science Undergraduate
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Innovating the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
              Future of Food
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Hi, I'm <span className="font-semibold text-gray-900 dark:text-white">Chathumi Sewwandhi</span>.
            A final year undergraduate at the Faculty of Technology, University of Sri Jayewardenepura.
            Exploring the intersection of culinary art and scientific innovation.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-emerald-500/30"
            >
              Get in Touch <ArrowRight size={20} />
            </a>
            <a
              href="#about"
              className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-all hover:scale-105"
            >
              View Portfolio
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 0.8,
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="relative flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white/50 dark:border-gray-800/50 backdrop-blur-sm z-10">
            <img
              src={heroImage} 
              alt="Chathumi Sewwandhi"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Decorative circles behind */}
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl -z-10 transform scale-110" />
          
          {/* Glassmorphism Card Overlay - Floating separately */}
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 -right-4 md:bottom-0 md:right-10 p-4 bg-white/10 dark:bg-black/40 backdrop-blur-md rounded-xl border border-white/20 text-white z-20 shadow-xl"
          >
            <p className="font-semibold text-lg">Chathumi Sewwandhi</p>
            <p className="text-xs text-white/80">B.Tech in Food Science</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
