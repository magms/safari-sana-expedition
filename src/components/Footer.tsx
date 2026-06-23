import { Compass, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-olive-900 text-olive-100 pt-20 pb-10 border-t border-olive-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="p-2 rounded-lg bg-savannah-500 group-hover:bg-savannah-600 transition-colors">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-lg tracking-tight leading-tight text-white group-hover:text-savannah-500 transition-colors">
                  SAFARI SANA
                </span>
              </div>
            </Link>
            <p className="font-serif text-olive-300 text-sm leading-relaxed mb-6">
              Authentic excellence in Tanzania. Professional Mount Kilimanjaro climbs, wildlife safaris, and local Moshi experiences. Your adventure funds education for children with disabilities.
            </p>
            <div className="space-y-3 font-sans text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-savannah-500 mt-0.5 shrink-0" />
                <span>Kilimanjaro Commercial Complex, 3rd Floor, Moshi, Tanzania</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-savannah-500 shrink-0" />
                <a href="tel:+255763768472" className="hover:text-savannah-400 transition-colors">+255 763 768 472</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-savannah-500 shrink-0" />
                <a href="mailto:info@safarisanaexpeditions.com" className="hover:text-savannah-400 transition-colors">info@safarisanaexpeditions.com</a>
              </div>
            </div>
          </div>

          {/* Kilimanjaro */}
          <div>
            <h4 className="font-sans font-bold text-white mb-6 uppercase tracking-wider text-sm">Kilimanjaro</h4>
            <ul className="space-y-3 font-serif text-sm">
              <li><Link to="/kili" className="hover:text-savannah-400 transition-colors">All Routes</Link></li>
              <li><Link to="/package/6-day-kilimanjaro-climb-machame-route" className="hover:text-savannah-400 transition-colors">6-Day Machame Route</Link></li>
              <li><Link to="/package/7-days-kilimanjaro-climb-machame-route" className="hover:text-savannah-400 transition-colors">7-Day Machame Route</Link></li>
              <li><Link to="/package/8-days-kilimanjaro-climb-rongai-route" className="hover:text-savannah-400 transition-colors">8-Day Rongai Route</Link></li>
              <li><Link to="/contact" className="hover:text-savannah-400 transition-colors">Group Climb Calendar</Link></li>
            </ul>
          </div>

          {/* Safaris & Day Trips */}
          <div>
            <h4 className="font-sans font-bold text-white mb-6 uppercase tracking-wider text-sm">Safaris & Day Trips</h4>
            <ul className="space-y-3 font-serif text-sm">
              <li><Link to="/safaris" className="hover:text-savannah-400 transition-colors">View All Safaris</Link></li>
              <li><Link to="/package/7-day-mid-range-tanzania-safari" className="hover:text-savannah-400 transition-colors">7-Day Mid-Range Safari</Link></li>
              <li><Link to="/package/5-day-safari-in-tanzania" className="hover:text-savannah-400 transition-colors">5-Day Serengeti Safari</Link></li>
              <li><Link to="/package/4-day-tanzania-safari" className="hover:text-savannah-400 transition-colors">4-Day Tanzania Safari</Link></li>
              <li><Link to="/moshi" className="hover:text-savannah-400 transition-colors">Day Trips from Moshi</Link></li>
            </ul>
          </div>

          {/* Map Location */}
          <div>
            <h4 className="font-sans font-bold text-white mb-6 uppercase tracking-wider text-sm">Find Us in Moshi</h4>
            <div className="w-full h-40 rounded-xl overflow-hidden shadow-lg border border-olive-700 bg-olive-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127533.15379963842!2d37.2604812328125!3d-3.35122114757279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1839d3753fcba9bd%3A0xcda8ddda52cfca4e!2sMoshi%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Moshi Map"
              ></iframe>
            </div>
            <p className="font-serif text-[11px] text-olive-400 mt-4 leading-relaxed">
              Kilimanjaro Commercial Complex, 3rd Floor<br />
              Moshi, Kilimanjaro Region, Tanzania<br />
              Open Mon–Sat, 08:00–22:00
            </p>
          </div>

        </div>

        <div className="pt-8 border-t border-olive-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-serif text-xs text-olive-400">
            &copy; {new Date().getFullYear()} Safari Sana Expeditions. All rights reserved.
          </p>
          <div className="flex gap-6 font-sans text-xs text-olive-400">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
