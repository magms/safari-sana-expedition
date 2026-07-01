import { motion } from 'motion/react';
import { ArrowRight, Star, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/hero-serengeti.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6"
        >
          <Star className="w-4 h-4 text-savannah-500 fill-savannah-500" />
          <span className="font-sans text-xs uppercase tracking-widest text-white font-semibold">
            Rated 5.0 by 245,000+ Travellers on TripAdvisor
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-white tracking-tight leading-tight mb-6"
        >
          Discover the Heart of<br className="hidden md:block" />
          <span className="text-savannah-500">Tanzania &amp; Kilimanjaro</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-4 font-serif leading-relaxed"
        >
          Private tailor-made safaris in Serengeti, Ngorongoro &amp; Tarangire. Kilimanjaro treks. Beach holidays in Zanzibar.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-sm text-savannah-400 font-sans font-medium max-w-xl mx-auto mb-10"
        >
          Expert guides. Unforgettable wildlife. Authentic Tanzania.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/safaris"
            className="w-full sm:w-auto bg-savannah-500 hover:bg-savannah-600 text-white font-sans font-bold px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2 group shadow-lg shadow-savannah-500/30"
          >
            Explore Safari Packages
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="https://wa.me/255763768472?text=Hello! I would like to plan a Tanzania safari."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-white font-sans font-semibold px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            Plan Your Trip on WhatsApp
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: "245K+", label: "Happy Travellers" },
            { value: "5.0★", label: "TripAdvisor Rating" },
            { value: "14+", label: "Tour Packages" },
            { value: "100%", label: "Ethical Tourism" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="font-sans text-2xl font-bold text-savannah-500">{stat.value}</div>
              <div className="text-xs text-gray-300 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown className="w-7 h-7" />
      </motion.div>
    </div>
  );
}
