import { motion } from 'motion/react';
import { Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { safariPackages } from '../data/safariPackages';

export default function SafarisPage() {
  const [filterDuration, setFilterDuration] = useState("All");
  const [filterStyle, setFilterStyle] = useState("All");

  const filteredPackages = safariPackages.filter(pkg => {
    // Duration filter
    if (filterDuration === "1-3 Days" && pkg.days > 3) return false;
    if (filterDuration === "4-7 Days" && (pkg.days < 4 || pkg.days > 7)) return false;
    if (filterDuration === "8+ Days" && pkg.days < 8) return false;

    // Style filter
    if (filterStyle !== "All" && pkg.style !== filterStyle) return false;

    return true;
  });

  return (
    <div className="pt-24 pb-24 bg-olive-900 min-h-screen text-olive-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-sm font-sans font-bold text-savannah-500 uppercase tracking-widest mb-3">Wildlife Encounters</h1>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white tracking-tight">Tanzania Safari Circuits.</h2>
          <p className="mt-4 text-olive-200 font-serif leading-relaxed text-lg">
            Track the migration or explore hidden gems in our specially outfitted vehicles with charging ports, fridges, and pop-up roofs.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-olive-800 border border-olive-700 rounded-2xl p-6 mb-12 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between"
        >
          <div className="flex items-center gap-3 text-savannah-500 font-bold font-sans">
            <Filter className="w-5 h-5" /> Filter Safaris:
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <label className="text-xs font-sans text-olive-300 uppercase tracking-wider">Duration</label>
              <select 
                value={filterDuration}
                onChange={(e) => setFilterDuration(e.target.value)}
                className="bg-olive-900 border border-olive-600 text-white font-sans rounded-lg px-4 py-2 focus:ring-2 focus:ring-savannah-500 outline-none"
              >
                <option value="All">Any Duration</option>
                <option value="1-3 Days">1-3 Days</option>
                <option value="4-7 Days">4-7 Days</option>
                <option value="8+ Days">8+ Days</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <label className="text-xs font-sans text-olive-300 uppercase tracking-wider">Safari Style</label>
              <select 
                value={filterStyle}
                onChange={(e) => setFilterStyle(e.target.value)}
                className="bg-olive-900 border border-olive-600 text-white font-sans rounded-lg px-4 py-2 focus:ring-2 focus:ring-savannah-500 outline-none"
              >
                <option value="All">All Styles</option>
                <option value="Classic">Classic Safari</option>
                <option value="Great Migration">Great Migration</option>
                <option value="Luxury">Luxury & Premium</option>
                <option value="Honeymoon">Honeymoon</option>
                <option value="Family">Family Friendly</option>
              </select>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPackages.length === 0 ? (
            <div className="col-span-full text-center py-20">
              <p className="font-serif text-olive-300 text-lg">No safaris match your selected filters. Try adjusting your preferences.</p>
              <button 
                onClick={() => { setFilterDuration("All"); setFilterStyle("All"); }}
                className="mt-4 px-6 py-2 border border-savannah-500 text-savannah-500 rounded-full font-bold font-sans hover:bg-savannah-500 hover:text-white transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            filteredPackages.map((pkg, idx) => (
              <Link to={`/package/${pkg.id}`} key={pkg.id}>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: (idx % 12) * 0.05 }}
                  className="bg-olive-800 rounded-3xl overflow-hidden shadow-xl border border-olive-700 flex flex-col group h-full hover:border-savannah-500 transition-colors"
                >
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img 
                      src={pkg.imgUrl} 
                      alt={pkg.title}
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-savannah-500 text-white font-sans text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      {pkg.days} Days
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-2">
                      <span className="font-sans text-xs uppercase tracking-widest text-savannah-400 font-bold">
                        {pkg.style}
                      </span>
                    </div>
                    <h4 className="text-xl font-sans font-bold text-white mb-3 group-hover:text-savannah-400 transition-colors">
                      {pkg.title}
                    </h4>
                    <p className="font-serif text-olive-200 text-sm mb-6 flex-grow line-clamp-3">
                      {pkg.desc}
                    </p>
                    
                    <div className="flex gap-2 flex-wrap mb-6">
                      {pkg.parks.slice(0, 3).map(park => (
                        <span key={park} className="bg-olive-900 px-2 py-1 rounded-md text-xs font-sans text-olive-300 border border-olive-700">
                          {park}
                        </span>
                      ))}
                      {pkg.parks.length > 3 && (
                        <span className="bg-olive-900 px-2 py-1 rounded-md text-xs font-sans text-olive-300 border border-olive-700">
                          +{pkg.parks.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="mt-auto border-t border-olive-700 pt-5 flex items-center justify-between">
                      <div>
                        <span className="text-olive-400 text-xs font-sans block uppercase mb-1">From</span>
                        <div className="text-2xl font-sans font-bold text-white">${pkg.price}</div>
                      </div>
                      <button className="px-5 py-2.5 bg-white text-olive-900 font-sans text-sm font-bold rounded-full hover:bg-savannah-500 hover:text-white transition-colors">
                        View
                      </button>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
