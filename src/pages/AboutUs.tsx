import { motion } from 'motion/react';
import { ShieldCheck, HeartHandshake, Tent, Users } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 mt-8"
        >
          <h1 className="text-sm font-sans font-bold text-savannah-600 uppercase tracking-widest mb-3">About Safari Sana</h1>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-olive-900 tracking-tight">The Heart of Moshi.</h2>
          <p className="mt-6 text-olive-700 font-serif leading-relaxed text-lg">
            We are a team of local experts dedicated to providing authentic, safe, and premium expeditions across Tanzania. Our name, "Sana", means very or exactly in Swahili, reflecting our commitment to the highest standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <motion.img
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src="https://images.unsplash.com/photo-1547471080-7fc2caa6f17f?q=80&w=2940&auto=format&fit=crop"
            alt="Our Team"
            className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
          />
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-sans font-bold text-olive-900 mb-6">Built on Local Expertise</h3>
            <p className="text-olive-700 font-serif leading-relaxed mb-6">
              Unlike international agencies, we are rooted right here in Moshi, at the foothills of Mount Kilimanjaro. This means we have direct control over the quality of your equipment, the training of our guides, and the fairness of our employment practices.
            </p>
            <p className="text-olive-700 font-serif leading-relaxed">
              When you book with Safari Sana, you're directly supporting the local economy while ensuring your adventure is guided by those who know this land best.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Users, title: "100+ Local Staff", desc: "Guides, porters, and chefs born and raised in Tanzania." },
            { icon: ShieldCheck, title: "Uncompromising Safety", desc: "Wilderness First Responder certified lead guides." },
            { icon: Tent, title: "Premium Gear", desc: "Top-tier four-season mountain tents and sleeping bags." },
            { icon: HeartHandshake, title: "KPAP Partner", desc: "Audited member ensuring fair and ethical treatment of porters." }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-olive-50 p-8 rounded-2xl text-center"
            >
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                <stat.icon className="w-8 h-8 text-savannah-500" />
              </div>
              <h4 className="font-sans font-bold text-olive-900 text-lg mb-2">{stat.title}</h4>
              <p className="font-serif text-olive-600 text-sm">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
