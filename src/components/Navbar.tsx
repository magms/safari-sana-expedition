import { Menu, X, MapPin, Phone, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = `font-sans text-sm font-medium transition-colors ${
    isScrolled ? 'text-olive-700 hover:text-savannah-600' : 'text-white/90 hover:text-white'
  }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top info bar — desktop only, hidden after scroll */}
      <div
        className={`hidden md:block bg-olive-900 text-olive-200 text-xs transition-all duration-300 overflow-hidden ${
          isScrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-savannah-500" />
              Kilimanjaro Commercial Complex, 3rd Floor, Moshi, Tanzania
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href="tel:+255763768472" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3 h-3 text-savannah-500" /> +255 763 768 472
            </a>
            <a
              href="https://wa.me/255763768472?text=Hello! I'm interested in booking a safari or Kilimanjaro trek."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <svg className="w-3 h-3 text-green-400 fill-green-400" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            <a href="mailto:karibu@safarisana.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3 h-3 text-savannah-500" /> karibu@safarisana.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-md py-3'
            : 'bg-gradient-to-b from-black/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/logo.png"
              alt="Safari Sana Expeditions"
              className={`transition-all duration-300 ${isScrolled ? 'h-16 brightness-100' : 'h-20 brightness-0 invert'}`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            <Link to="/" className={navLinkClass}>Home</Link>
            <Link to="/safaris" className={navLinkClass}>Safari Packages</Link>
            <Link to="/kili" className={navLinkClass}>Kilimanjaro</Link>
            <Link to="/moshi" className={navLinkClass}>Day Trips</Link>
            <Link to="/about" className={navLinkClass}>About</Link>
            <Link to="/contact" className={navLinkClass}>Contact</Link>
            <a
              href="https://wa.me/255763768472?text=Hello! I'm interested in booking a safari or Kilimanjaro trek."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white font-sans text-sm font-bold px-4 py-2 rounded-full transition-colors"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            <Link to="/contact">
              <button className={`font-sans text-sm font-bold px-5 py-2 rounded-full transition-all ${
                isScrolled
                  ? 'bg-savannah-500 text-white hover:bg-savannah-600'
                  : 'bg-savannah-500 text-white hover:bg-savannah-600'
              }`}>
                Book Now
              </button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={isScrolled ? 'text-olive-900' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-olive-900' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl py-5 flex flex-col items-center gap-5 border-t border-olive-100">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="font-sans font-medium text-olive-800">Home</Link>
          <Link to="/safaris" onClick={() => setMobileMenuOpen(false)} className="font-sans font-medium text-olive-800">Safari Packages</Link>
          <Link to="/kili" onClick={() => setMobileMenuOpen(false)} className="font-sans font-medium text-olive-800">Kilimanjaro</Link>
          <Link to="/moshi" onClick={() => setMobileMenuOpen(false)} className="font-sans font-medium text-olive-800">Day Trips</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="font-sans font-medium text-olive-800">About</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="font-sans font-medium text-olive-800">Contact</Link>
          <div className="flex flex-col items-center gap-3 mt-2 w-full px-8">
            <a
              href="https://wa.me/255763768472?text=Hello! I'm interested in booking a safari or Kilimanjaro trek."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-green-500 text-white font-sans font-bold py-3 rounded-full"
            >
              WhatsApp Us
            </a>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="w-full">
              <button className="w-full font-sans font-bold bg-savannah-500 text-white px-8 py-3 rounded-full">
                Book Now
              </button>
            </Link>
          </div>
          <div className="text-xs text-olive-500 text-center pb-2">
            <p>+255 763 768 472</p>
            <p>karibu@safarisana.com</p>
          </div>
        </div>
      )}
    </header>
  );
}
