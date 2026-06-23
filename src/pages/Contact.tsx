import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h1 className="text-sm font-sans font-bold text-savannah-600 uppercase tracking-widest mb-3">Get in Touch</h1>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-olive-900 tracking-tight">Plan Your Journey.</h2>
          <p className="mt-4 text-olive-700 font-serif leading-relaxed text-lg">
            Our safari and climbing experts are ready to help you craft the perfect Tanzanian adventure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-sans font-bold text-olive-900 mb-8">Contact Information</h3>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-olive-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-savannah-600" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-olive-900 text-lg">Our Office</h4>
                  <p className="font-serif text-olive-600 mt-1">
                    Kilimanjaro Commercial Complex, 3rd Floor<br />
                    Moshi, Kilimanjaro Region, Tanzania
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-olive-50 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-savannah-600" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-olive-900 text-lg">Call or WhatsApp</h4>
                  <a href="tel:+255763768472" className="font-serif text-olive-600 mt-1 hover:text-savannah-600 transition-colors block">
                    +255 763 768 472
                  </a>
                  <a
                    href="https://wa.me/255763768472?text=Hello! I'm interested in booking a safari or Kilimanjaro trek."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 bg-green-500 hover:bg-green-600 text-white text-sm font-sans font-semibold px-4 py-2 rounded-lg transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-olive-50 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-savannah-600" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-olive-900 text-lg">Email Us</h4>
                  <a href="mailto:info@safarisanaexpeditions.com" className="font-serif text-olive-600 mt-1 hover:text-savannah-600 transition-colors block">
                    info@safarisanaexpeditions.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-olive-900 rounded-2xl text-white">
              <h4 className="font-sans font-bold text-xl mb-3">Office Hours</h4>
              <p className="font-serif text-olive-200">
                Monday – Saturday: 08:00 – 22:00 (East Africa Time, UTC +3).<br />
                We strive to respond to all inquiries within 24 hours.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-olive-50 p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-sans font-bold text-olive-900 mb-6">Send an Inquiry</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-sans text-sm font-bold text-olive-900">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-olive-200 focus:outline-none focus:ring-2 focus:ring-savannah-500 bg-white"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-sm font-bold text-olive-900">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-olive-200 focus:outline-none focus:ring-2 focus:ring-savannah-500 bg-white"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-sans text-sm font-bold text-olive-900">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-olive-200 focus:outline-none focus:ring-2 focus:ring-savannah-500 bg-white"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="font-sans text-sm font-bold text-olive-900">Interested In</label>
                <select className="w-full px-4 py-3 rounded-xl border border-olive-200 focus:outline-none focus:ring-2 focus:ring-savannah-500 bg-white">
                  <option>Kilimanjaro Climb</option>
                  <option>Wildlife Safari</option>
                  <option>Day Trip from Moshi</option>
                  <option>Beach Holiday – Zanzibar</option>
                  <option>Full Custom Package</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-sans text-sm font-bold text-olive-900">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-olive-200 focus:outline-none focus:ring-2 focus:ring-savannah-500 bg-white"
                  placeholder="Tell us about your estimated dates, group size, and any special requirements..."
                ></textarea>
              </div>

              <button className="w-full bg-savannah-500 hover:bg-savannah-600 text-white font-sans font-bold px-8 py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
