import { motion } from 'motion/react';
import { Filter, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { kiliPackages } from '../data/kiliPackages';

export default function ClimbKili() {
  const [filterDuration, setFilterDuration] = useState("All");
  const [filterDifficulty, setFilterDifficulty] = useState("All");

  const filteredRoutes = kiliPackages.filter(route => {
    // Duration filter
    if (filterDuration === "6 Days" && route.days !== 6) return false;
    if (filterDuration === "7 Days" && route.days !== 7) return false;
    if (filterDuration === "8+ Days" && route.days < 8) return false;

    // Difficulty filter
    if (filterDifficulty !== "All" && route.difficulty !== filterDifficulty) return false;

    return true;
  });

  return (
    <div className="pt-24 pb-24 bg-olive-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-sm font-sans font-bold text-savannah-600 uppercase tracking-widest mb-3">Kilimanjaro Treks</h1>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-olive-900 tracking-tight">Conquer the Roof of Africa.</h2>
          <p className="mt-4 text-olive-700 font-serif leading-relaxed text-lg">
            We provide the most comprehensive altitude safety protocols, premium gear, and expert Moshi-based guides to ensure your success.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white border border-olive-200 shadow-sm rounded-2xl p-6 mb-12 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between"
        >
          <div className="flex items-center gap-3 text-olive-900 font-bold font-sans">
            <Filter className="w-5 h-5" /> Filter Routes:
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <label className="text-xs font-sans text-olive-500 uppercase tracking-wider">Duration</label>
              <select 
                value={filterDuration}
                onChange={(e) => setFilterDuration(e.target.value)}
                className="bg-olive-50 border border-olive-200 text-olive-900 font-sans rounded-lg px-4 py-2 focus:ring-2 focus:ring-savannah-500 outline-none"
              >
                <option value="All">Any Duration</option>
                <option value="6 Days">6 Days</option>
                <option value="7 Days">7 Days</option>
                <option value="8+ Days">8+ Days</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <label className="text-xs font-sans text-olive-500 uppercase tracking-wider">Difficulty</label>
              <select 
                value={filterDifficulty}
                onChange={(e) => setFilterDifficulty(e.target.value)}
                className="bg-olive-50 border border-olive-200 text-olive-900 font-sans rounded-lg px-4 py-2 focus:ring-2 focus:ring-savannah-500 outline-none"
              >
                <option value="All">All Difficulties</option>
                <option value="Medium">Medium</option>
                <option value="Medium-Hard">Medium-Hard</option>
                <option value="Hard">Hard</option>
                <option value="Very Hard">Very Hard</option>
              </select>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRoutes.length === 0 ? (
            <div className="col-span-full text-center py-20">
              <p className="font-serif text-olive-700 text-lg">No routes match your selected filters. Try adjusting your preferences.</p>
              <button 
                onClick={() => { setFilterDuration("All"); setFilterDifficulty("All"); }}
                className="mt-4 px-6 py-2 border border-savannah-600 text-savannah-600 rounded-full font-bold font-sans hover:bg-savannah-600 hover:text-white transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            filteredRoutes.map((route, idx) => (
              <Link to={`/package/${route.id}`} key={route.id}>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: (idx % 12) * 0.05 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm border border-olive-200 flex flex-col group h-full hover:shadow-xl hover:border-savannah-500 transition-all duration-300"
                >
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img 
                      src={route.imgUrl} 
                      alt={route.title}
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute top-4 left-4 bg-savannah-500 text-white font-sans text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      {route.days} Days
                    </div>
                    {route.popular && (
                      <div className="absolute top-4 right-4 bg-white text-olive-900 font-sans text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                        Popular
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-2">
                      <span className="font-sans text-xs uppercase tracking-widest text-savannah-600 font-bold">
                        {route.difficulty}
                      </span>
                    </div>
                    <h4 className="text-xl font-sans font-bold text-olive-900 mb-3 group-hover:text-savannah-600 transition-colors">
                      {route.title}
                    </h4>
                    <p className="font-serif text-olive-700 text-sm mb-6 flex-grow line-clamp-3">
                      {route.desc}
                    </p>
                    
                    <div className="flex gap-4 mb-6 text-sm">
                      <div className="flex items-center gap-1.5 text-olive-600 font-sans px-2 py-1 bg-olive-50 rounded-md border border-olive-100">
                        <TrendingUp className="w-3.5 h-3.5 text-savannah-600" />
                        <span>{route.successRate} Success</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-olive-600 font-sans px-2 py-1 bg-olive-50 rounded-md border border-olive-100">
                        <Users className="w-3.5 h-3.5 text-savannah-600" />
                        <span>{route.scenery}</span>
                      </div>
                    </div>
                    
                    <div className="mt-auto border-t border-olive-100 pt-5 flex items-center justify-between">
                      <div>
                        <span className="text-olive-500 text-xs font-sans block uppercase mb-1">From</span>
                        <div className="text-2xl font-sans font-bold text-olive-900">${route.price}</div>
                      </div>
                      <button className="px-5 py-2.5 bg-olive-900 text-white font-sans text-sm font-bold rounded-full hover:bg-savannah-600 transition-colors">
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
