import { motion } from 'motion/react';
import { Coffee, Droplets, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MoshiExperience() {
  return (
    <section id="moshi" className="py-24 bg-olive-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-sans font-bold text-savannah-600 uppercase tracking-widest mb-3">Our Hometown Advantage</h2>
            <h3 className="text-3xl md:text-4xl font-sans font-bold text-olive-900 tracking-tight mb-6">The True Moshi Experience.</h3>
            <p className="text-olive-700 font-serif leading-relaxed mb-8 text-lg">
              International agencies fly in. We live here. Discover the heart of Moshi before or after your climb with our exclusive day trips, curated to support local communities.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-olive-100 flex items-center justify-center shrink-0 mt-1">
                  <Coffee className="w-5 h-5 text-olive-700" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-olive-900 text-lg">Materuni Waterfalls & Coffee</h4>
                  <p className="font-serif text-olive-600 text-sm mt-1">Hike to a stunning 80m falls and roast your own coffee with the local Chagga cooperative.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-olive-100 flex items-center justify-center shrink-0 mt-1">
                  <Droplets className="w-5 h-5 text-olive-700" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-olive-900 text-lg">Kikuletwa Hot Springs</h4>
                  <p className="font-serif text-olive-600 text-sm mt-1">Swim in the crystal clear, geothermal oasis hidden in the arid scrublands.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-savannah-50 flex items-center justify-center shrink-0 mt-1">
                  <Heart className="w-5 h-5 text-savannah-600" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-olive-900 text-lg">Lake Chala & Safari Day Trips</h4>
                  <p className="font-serif text-olive-600 text-sm mt-1">From crater lakes to Arusha NP safaris, let us show you what the area has to offer.</p>
                </div>
              </div>
            </div>
            
            <Link to="/moshi" className="inline-block mt-10">
              <button className="font-sans font-bold text-white bg-olive-900 hover:bg-olive-800 px-8 py-4 rounded-full transition-colors flex items-center gap-2">
                <MapPin className="w-5 h-5" /> View Moshi Pre-Trek Guide
              </button>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-olive-200 translate-x-4 translate-y-4 rounded-3xl -z-10"></div>
            <img 
              src="/images/moshi/materuni-waterfalls.jpg"
              alt="Moshi Local Culture"
              className="rounded-3xl shadow-xl w-full h-[600px] object-cover"
            />
            
            {/* Overlay card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-olive-50 max-w-xs">
              <div className="flex -space-x-3 mb-3">
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="/images/team/guide1.jpg" alt="Guide" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="/images/team/guide2.jpg" alt="Guide" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="/images/team/guide3.jpg" alt="Guide" />
              </div>
              <p className="font-sans font-bold text-olive-900 text-sm">Guided by Locals</p>
              <p className="font-serif text-olive-600 text-xs mt-1">Meet our team of 50+ trained Mosley residents.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
