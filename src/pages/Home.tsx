import { Link } from 'react-router-dom';
import { Mountain, Binoculars, Waves, MapPin, Heart, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import KilimanjaroRoutes from '../components/KilimanjaroRoutes';
import Safaris from '../components/Safaris';
import MoshiExperience from '../components/MoshiExperience';

const offerings = [
  {
    icon: Mountain,
    color: 'bg-blue-50 text-blue-600',
    title: 'Kilimanjaro Trekking',
    desc: 'Conquer Africa\'s highest peak via 7 iconic routes. Expert guides, full equipment, and unmatched support.',
    link: '/kili',
  },
  {
    icon: Binoculars,
    color: 'bg-amber-50 text-amber-600',
    title: 'Wildlife Safaris',
    desc: 'Experience the Big Five across Serengeti, Ngorongoro, Tarangire, and Lake Manyara in private 4x4 vehicles.',
    link: '/safaris',
  },
  {
    icon: Waves,
    color: 'bg-cyan-50 text-cyan-600',
    title: 'Beach Holidays',
    desc: "Combine your safari with a relaxing beach escape on Zanzibar's pristine white-sand shores.",
    link: '/safaris',
  },
  {
    icon: MapPin,
    color: 'bg-green-50 text-green-600',
    title: 'Day Trips',
    desc: 'Explore waterfalls, hot springs, crater lakes, and national parks on single-day adventures from Moshi.',
    link: '/moshi',
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* What We Offer */}
      <section className="py-20 bg-olive-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-sans font-bold text-savannah-600 uppercase tracking-widest mb-3">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-olive-900 tracking-tight">
              Explore Tanzania Your Way
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-olive-700 font-serif text-base">
              From the snows of Kilimanjaro to the plains of the Serengeti and the beaches of Zanzibar — we make it unforgettable.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-olive-100 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="font-sans font-semibold text-lg text-olive-900 mb-2">{item.title}</h3>
                <p className="font-serif text-sm text-olive-600 leading-relaxed">{item.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-savannah-600 group-hover:gap-2 transition-all">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Safaris />

      {/* Tourism That Changes Lives */}
      <section className="py-16 bg-savannah-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Heart className="w-8 h-8 mx-auto mb-4 fill-white" />
          <h2 className="font-sans text-2xl md:text-3xl font-bold mb-4">Tourism That Changes Lives</h2>
          <p className="max-w-2xl mx-auto text-white/90 text-lg leading-relaxed font-serif mb-8">
            Safari Sana Expeditions was founded on a simple but powerful belief: responsible travel can create access to education for children with disabilities in Tanzania. Every booking funds wheelchairs, school fees, and inclusive learning materials.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 bg-white text-savannah-600 font-sans font-bold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors"
          >
            Learn About Our Mission
          </Link>
        </div>
      </section>

      <Features />
      <KilimanjaroRoutes />
      <MoshiExperience />
    </>
  );
}
