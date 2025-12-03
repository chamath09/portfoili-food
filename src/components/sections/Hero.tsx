import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Scene3D } from '../ui/Scene3D';
import { Hero3DImage } from '../ui/Hero3DImage';
import heroImage from '../../assets/hero.jpg';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex justify-center pt-28 relative overflow-hidden bg-gray-50 dark:bg-gray-950">
      <Scene3D />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <div className="inline-block px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-xs font-medium mb-4">
              Food Science Undergraduate
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Innovating the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Food Technology</span>
            </h1>
            <p className="text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed max-w-2xl mx-auto md:mx-0">
              Hi, I'm Chathumi Sewwandhi. I combine scientific principles with culinary innovation to create sustainable, nutritious, and delicious food solutions for the modern world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 group text-sm"
              >
                Let's Talk <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/cv.pdf"
                className="px-6 py-3 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-full font-bold hover:border-emerald-500 hover:text-emerald-500 transition-all flex items-center justify-center gap-2 text-sm"
              >
                Download CV <Download size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-teal-500 rounded-full blur-3xl opacity-20 animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <Hero3DImage imageUrl={heroImage} />
              </div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -right-6 top-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-2 rounded-lg shadow-lg border border-white/20"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center text-emerald-600">
                    <span className="text-sm">🔬</span>
                  </div>
                  <div>
                    <p className="text-[8px] text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">Research</p>
                    <p className="text-xs font-bold text-gray-900 dark:text-white">Food Safety</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -left-6 bottom-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-2 rounded-lg shadow-lg border border-white/20"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-teal-100 dark:bg-teal-900/50 rounded-full flex items-center justify-center text-teal-600">
                    <span className="text-sm">🌱</span>
                  </div>
                  <div>
                    <p className="text-[8px] text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">Passion</p>
                    <p className="text-xs font-bold text-gray-900 dark:text-white">Sustainability</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
