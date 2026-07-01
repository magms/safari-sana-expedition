import { motion } from 'motion/react';
import { ArrowRight, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { kiliPackages } from '../data/kiliPackages';

export default function KilimanjaroRoutes() {
  return (
    <section id="kili" className="py-20 bg-olive-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-sans font-bold text-savannah-600 uppercase tracking-widest mb-3">
              Kilimanjaro Climbs
            </h2>
            <h3 className="text-3xl md:text-4xl font-sans font-bold text-olive-900 tracking-tight mb-4">
              Conquer Africa's Roof
            </h3>
            <p className="text-olive-700 font-serif leading-relaxed">
              Expert-guided Kilimanjaro treks via all major routes. All inclusive packages with professional mountain crew, equipment, and full support.
            </p>
          </div>
          <Link
            to="/kili"
            className="font-sans font-bold text-olive-800 hover:text-savannah-600 transition-colors border border-olive-300 hover:border-savannah-500 px-5 py-2.5 rounded-full whitespace-nowrap shrink-0"
          >
            All Kili Routes →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {kiliPackages.slice(0, 6).map((route, idx) => (
            <Link to={`/package/${route.id}`} key={route.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-olive-100 hover:shadow-xl hover:border-savannah-200 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={route.imgUrl}
                    alt={route.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 bg-blue-100 text-blue-800 font-sans font-semibold text-xs px-3 py-1 rounded-full">
                    Kilimanjaro
                  </span>
                  {route.popular && (
                    <span className="absolute top-3 right-3 bg-savannah-500 text-white font-sans font-semibold text-xs px-3 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <span className="text-xs opacity-80">From</span>
                    <span className="font-bold text-lg ml-1">${route.price.toLocaleString()}</span>
                    <span className="text-xs opacity-80"> /person</span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h4 className="font-sans font-bold text-olive-900 text-lg leading-snug mb-2 group-hover:text-savannah-600 transition-colors">
                    {route.title}
                  </h4>
                  <p className="font-serif text-olive-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                    {route.desc}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-olive-500 mb-4 border-t border-olive-100 pt-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {route.days} Days / {route.days - 1} Nights
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" /> Max {(route as any).maxGroup || 12}
                    </span>
                  </div>

                  {(route as any).highlights && (
                    <div className="mb-4 space-y-1">
                      {(route as any).highlights.map((h: string, i: number) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-olive-600">
                          <span className="text-savannah-500 mt-0.5 shrink-0">✓</span>
                          <span className="line-clamp-1">{h}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 flex-wrap">
                      <span className="bg-olive-100 text-olive-700 text-xs font-sans px-2 py-1 rounded-full">
                        {route.successRate} Success
                      </span>
                      <span className="bg-olive-100 text-olive-700 text-xs font-sans px-2 py-1 rounded-full">
                        {route.difficulty}
                      </span>
                    </div>
                    <span className="text-savannah-600 font-sans font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      View <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-olive-900 text-white rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { value: '7', label: 'Climbing Routes' },
            { value: '5,895m', label: 'Uhuru Peak Height' },
            { value: '95%+', label: 'Summit Success Rate' },
            { value: 'All-In', label: 'Inclusive Packages' },
          ].map((stat, idx) => (
            <div key={idx}>
              <div className="font-sans text-2xl md:text-3xl font-bold text-savannah-500">{stat.value}</div>
              <div className="text-sm text-olive-300 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
