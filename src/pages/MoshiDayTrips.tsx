import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { moshiPackages } from '../data/moshiPackages';

export default function MoshiDayTrips() {
  return (
    <div className="pt-24 pb-24 bg-olive-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-sm font-sans font-bold text-savannah-600 uppercase tracking-widest mb-3">The True Moshi Experience</h1>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-olive-900 tracking-tight">Our Hometown Advantage.</h2>
          <p className="mt-4 text-olive-700 font-serif leading-relaxed text-lg">
            Immerse yourself in the local culture before or after your climb. These exclusive day trips are guided by true Moshi residents.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {moshiPackages.map((trip, idx) => (
            <Link to={`/package/${trip.id}`} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                  <img src={trip.img} alt={trip.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-olive-100 flex items-center justify-center shrink-0 mb-6 group-hover:bg-savannah-500 transition-colors">
                    <trip.icon className="w-6 h-6 text-olive-700 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-sans font-bold text-2xl text-olive-900 mb-4">{trip.title}</h3>
                  <p className="font-serif text-olive-600 leading-relaxed mb-8 flex-1">{trip.desc}</p>
                  
                  <div className="mt-auto">
                    <button className="text-savannah-600 font-sans font-bold group-hover:text-savannah-700 transition-colors">
                      View Details &rarr;
                    </button>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        
      </div>
    </div>
  );
}
