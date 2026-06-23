import { motion } from 'motion/react';
import { Heart, Users, Leaf, Award, Shield, MapPin } from 'lucide-react';

const features = [
  {
    icon: Heart,
    color: 'text-rose-500 bg-rose-50',
    title: 'Travel That Transforms Lives',
    description:
      'Every booking directly funds wheelchairs, school fees, and educational materials for children with disabilities in Tanzania. Your adventure creates real, lasting change.'
  },
  {
    icon: Users,
    color: 'text-savannah-600 bg-savannah-50',
    title: 'Together for Change',
    description:
      'We collaborate with local families, schools, and communities on disability awareness and inclusive education programs — tourism that truly gives back.'
  },
  {
    icon: Leaf,
    color: 'text-green-600 bg-green-50',
    title: 'Ethical & Sustainable Tourism',
    description:
      "Our operations follow strict environmental and ethical guidelines. We use responsible practices that protect Tanzania's wildlife and support conservation."
  },
  {
    icon: Award,
    color: 'text-blue-600 bg-blue-50',
    title: '5.0 Stars on TripAdvisor',
    description:
      'Over 245,000 five-star reviews from travellers worldwide. Our expert local guides and personalised service consistently exceed expectations.'
  },
  {
    icon: Shield,
    color: 'text-purple-600 bg-purple-50',
    title: 'Safe & Licensed Operator',
    description:
      'Fully licensed by Tanzania Tourism Authority. Our guides are certified, our vehicles are maintained to the highest safety standards, and your safety is always our priority.'
  },
  {
    icon: MapPin,
    color: 'text-orange-600 bg-orange-50',
    title: 'Truly Local Expertise',
    description:
      "Born and raised in Tanzania, our team has unmatched knowledge of the parks, wildlife patterns, and hidden gems that make for an extraordinary safari experience."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-olive-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-sans font-bold text-savannah-600 uppercase tracking-widest mb-3">
            Why Safari Sana
          </h2>
          <h3 className="text-3xl md:text-4xl font-sans font-bold text-olive-900 tracking-tight">
            We're Different — Here's Why
          </h3>
          <p className="mt-4 text-olive-700 font-serif leading-relaxed text-lg">
            We combine world-class safari experiences with a genuine social mission, ensuring your trip creates positive impact for Tanzania's most vulnerable communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-olive-100 hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${feature.color}`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h4 className="font-sans font-bold text-olive-900 text-lg mb-3">{feature.title}</h4>
              <p className="font-serif text-olive-600 leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 bg-olive-900 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="font-sans text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
          <p className="max-w-3xl mx-auto text-lg text-olive-200 leading-relaxed font-serif">
            "To create access to education for children with disabilities in Tanzania through responsible,
            community-based tourism. Every safari booked is a step towards mobility, learning, and dignity
            for the next generation."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
