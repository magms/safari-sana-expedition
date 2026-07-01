import { motion } from 'motion/react';
import { ArrowRight, Clock, Users, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { safariPackages } from '../data/safariPackages';

export default function Safaris() {
  return (
    <section id="safaris" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-sm font-sans font-bold text-savannah-600 uppercase tracking-widest mb-3">
              Popular Packages
            </h2>
            <h3 className="text-3xl md:text-4xl font-sans font-bold text-olive-900 tracking-tight">
              Top Safari Packages
            </h3>
            <p className="mt-3 max-w-xl text-olive-700 font-serif">
              Handpicked wildlife adventures across Tanzania's most spectacular national parks, tailored to your group size and budget.
            </p>
          </div>
          <Link
            to="/safaris"
            className="font-sans font-bold text-olive-800 hover:text-savannah-600 transition-colors border border-olive-300 hover:border-savannah-500 px-5 py-2.5 rounded-full whitespace-nowrap shrink-0"
          >
            View All Safaris →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {safariPackages.slice(0, 6).map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-olive-100 hover:shadow-xl hover:border-savannah-200 transition-all duration-300 group flex flex-col"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={pkg.imgUrl}
                  alt={pkg.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 bg-amber-100 text-amber-800 font-sans font-semibold text-xs px-3 py-1 rounded-full">
                  Safari
                </span>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <span className="text-xs opacity-80">From</span>
                  <span className="font-bold text-lg ml-1">${pkg.price.toLocaleString()}</span>
                  <span className="text-xs opacity-80"> /person</span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h4 className="font-sans font-bold text-olive-900 text-lg leading-snug mb-2 group-hover:text-savannah-600 transition-colors">
                  {pkg.title}
                </h4>
                <p className="font-serif text-olive-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                  {pkg.desc}
                </p>

                <div className="flex items-center gap-4 text-xs text-olive-500 mb-4 border-t border-olive-100 pt-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {pkg.days} Days / {pkg.days - 1} Nights
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" /> Max {pkg.maxGroup || 7}
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="w-3 h-3" /> All inclusive
                  </span>
                </div>

                {pkg.highlights && (
                  <div className="mb-4 space-y-1">
                    {pkg.highlights.map((h: string, i: number) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-olive-600">
                        <span className="text-savannah-500 mt-0.5 shrink-0">✓</span>
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>
                )}

                <Link
                  to={`/package/${pkg.id}`}
                  className="mt-auto flex items-center justify-between w-full bg-savannah-500 hover:bg-savannah-600 text-white font-sans font-semibold px-5 py-3 rounded-xl transition-colors text-sm group/btn"
                >
                  <span>View Tour Details</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
