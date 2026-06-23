import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowLeft, CheckCircle, XCircle, Clock, Users, CalendarDays,
  MapPin, ChevronDown, ChevronUp, MessageCircle, Star, Plus
} from 'lucide-react';

import { safariPackages } from '../data/safariPackages';
import { kiliPackages } from '../data/kiliPackages';
import { moshiPackages } from '../data/moshiPackages';

export default function PackageDetail() {
  const { id } = useParams();
  const [openDay, setOpenDay] = useState<number | null>(0);

  // ── resolve package ──────────────────────────────────────────────────
  let pkg: any = null;
  let pkgType: 'safari' | 'kili' | 'daytrip' = 'safari';

  const safariPkg = safariPackages.find(p => p.id === id);
  if (safariPkg) { pkg = safariPkg; pkgType = 'safari'; }

  if (!pkg) {
    const kiliPkg = kiliPackages.find(p => p.id === id);
    if (kiliPkg) { pkg = kiliPkg; pkgType = 'kili'; }
  }

  if (!pkg) {
    const moshiPkg = moshiPackages.find(p => p.id === id);
    if (moshiPkg) {
      pkg = {
        ...moshiPkg,
        price: 0,
        days: 1,
        availability: "Year-round",
        departure: "Moshi",
        maxGroup: 8,
        highlights: moshiPkg.desc ? [moshiPkg.desc] : [],
        included: ["Expert local guide", "Round-trip transport from Moshi", "Authentic Tanzanian experience"],
        excluded: ["Personal items", "Gratuities"],
        groupPricing: [],
        itinerary: [],
        addOns: [],
        imgUrl: moshiPkg.img,
      };
      pkgType = 'daytrip';
    }
  }

  if (!pkg) {
    return (
      <div className="pt-32 text-center min-h-screen">
        <h1 className="text-2xl font-sans font-bold text-olive-900">Package not found</h1>
        <Link to="/safaris" className="mt-4 inline-block text-savannah-600 underline">Back to Safaris</Link>
      </div>
    );
  }

  const imgUrl = pkg.imgUrl || pkg.img;
  const price = pkg.price || 0;
  const days = pkg.days || 1;
  const duration = pkgType === 'kili'
    ? `${days} Days / ${days - 1} Nights`
    : pkgType === 'daytrip'
    ? '1 Day'
    : `${days} Days / ${days - 1} Nights`;

  const tagLabel = pkgType === 'kili' ? 'Kilimanjaro Climb' : pkgType === 'daytrip' ? 'Day Trip' : 'Wildlife Safari';
  const backLink = pkgType === 'kili' ? '/kili' : pkgType === 'daytrip' ? '/moshi' : '/safaris';

  const whatsappMsg = encodeURIComponent(`Hello! I'm interested in the ${pkg.title}. Please send me more details.`);

  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero ── */}
      <div className="relative h-[55vh] min-h-[380px] w-full overflow-hidden">
        <img src={imgUrl} alt={pkg.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
        <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <Link
            to={backLink}
            className="inline-flex items-center gap-1.5 text-white/80 hover:text-white font-sans text-sm mb-4 transition-colors w-fit"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
          <span className="inline-block bg-savannah-500 text-white font-sans font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-3 w-fit">
            {tagLabel}
          </span>
          <h1 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight leading-tight mb-4 max-w-3xl">
            {pkg.title}
          </h1>
          {/* Key stats bar */}
          <div className="flex flex-wrap gap-4 text-white/90 text-sm font-sans">
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-savannah-400" /> {duration}</span>
            <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-savannah-400" /> Max {pkg.maxGroup || 12} per group</span>
            <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4 text-savannah-400" /> {pkg.availability || 'Year-round'}</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-savannah-400" /> Departs from {pkg.departure || 'Moshi'}</span>
            {pkgType === 'kili' && pkg.successRate && (
              <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-savannah-400 fill-savannah-400" /> {pkg.successRate} Summit Success</span>
            )}
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* ── LEFT: main content ── */}
          <div className="flex-1 min-w-0 space-y-14">

            {/* Tour Overview */}
            <section>
              <h2 className="text-2xl font-sans font-bold text-olive-900 mb-4">Tour Overview</h2>
              <p className="font-serif text-olive-700 leading-relaxed text-base">{pkg.desc}</p>
            </section>

            {/* Tour Highlights */}
            {pkg.highlights && pkg.highlights.length > 0 && (
              <section>
                <h2 className="text-2xl font-sans font-bold text-olive-900 mb-5">Tour Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {pkg.highlights.map((h: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 bg-olive-50 rounded-xl p-4">
                      <CheckCircle className="w-5 h-5 text-savannah-500 shrink-0 mt-0.5" />
                      <span className="font-serif text-olive-800 text-sm leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Day-by-Day Itinerary */}
            {pkg.itinerary && pkg.itinerary.length > 0 ? (
              <section>
                <h2 className="text-2xl font-sans font-bold text-olive-900 mb-5">Day-by-Day Itinerary</h2>
                <div className="space-y-3">
                  {pkg.itinerary.map((item: any, idx: number) => (
                    <div
                      key={idx}
                      className="border border-olive-200 rounded-2xl overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenDay(openDay === idx ? null : idx)}
                        className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-olive-50 transition-colors text-left"
                      >
                        <div className="flex items-center gap-4">
                          <span className="w-9 h-9 rounded-full bg-savannah-500 text-white font-sans font-bold text-sm flex items-center justify-center shrink-0">
                            {item.day}
                          </span>
                          <div>
                            <span className="font-sans font-bold text-olive-900">{item.title}</span>
                            {item.elevation && (
                              <span className="ml-3 text-xs text-olive-500 font-sans">{item.elevation}</span>
                            )}
                          </div>
                        </div>
                        {openDay === idx
                          ? <ChevronUp className="w-5 h-5 text-olive-400 shrink-0" />
                          : <ChevronDown className="w-5 h-5 text-olive-400 shrink-0" />
                        }
                      </button>
                      {openDay === idx && (
                        <div className="px-6 pb-6 bg-white border-t border-olive-100">
                          <p className="font-serif text-olive-700 leading-relaxed mt-4 text-sm">{item.description}</p>
                          <div className="mt-4 flex flex-wrap gap-4">
                            {item.meals && (
                              <span className="bg-amber-50 text-amber-800 font-sans text-xs px-3 py-1.5 rounded-full">
                                🍽 Meals: {item.meals}
                              </span>
                            )}
                            {item.accommodation && (
                              <span className="bg-blue-50 text-blue-800 font-sans text-xs px-3 py-1.5 rounded-full">
                                🏕 Stay: {item.accommodation}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            ) : (
              <section>
                <h2 className="text-2xl font-sans font-bold text-olive-900 mb-4">Day-by-Day Itinerary</h2>
                <div className="bg-olive-50 border border-olive-200 rounded-2xl p-8 text-center">
                  <p className="font-serif text-olive-600">
                    Detailed itinerary coming soon. Contact us on WhatsApp for the full day-by-day breakdown.
                  </p>
                  <a
                    href={`https://wa.me/255763768472?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 bg-green-500 hover:bg-green-600 text-white font-sans font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
                  >
                    <MessageCircle className="w-4 h-4" /> Ask on WhatsApp
                  </a>
                </div>
              </section>
            )}

            {/* Included / Excluded */}
            {(pkg.included?.length > 0 || pkg.excluded?.length > 0) && (
              <section>
                <h2 className="text-2xl font-sans font-bold text-olive-900 mb-6">What's Included & Excluded</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pkg.included?.length > 0 && (
                    <div className="bg-green-50 rounded-2xl p-6">
                      <h3 className="font-sans font-bold text-green-800 text-base mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" /> Included
                      </h3>
                      <ul className="space-y-2.5">
                        {pkg.included.map((item: string, i: number) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-green-900 font-serif">
                            <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {pkg.excluded?.length > 0 && (
                    <div className="bg-red-50 rounded-2xl p-6">
                      <h3 className="font-sans font-bold text-red-800 text-base mb-4 flex items-center gap-2">
                        <XCircle className="w-5 h-5" /> Not Included
                      </h3>
                      <ul className="space-y-2.5">
                        {pkg.excluded.map((item: string, i: number) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-red-900 font-serif">
                            <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Optional Add-ons */}
            {pkg.addOns && pkg.addOns.length > 0 && (
              <section>
                <h2 className="text-2xl font-sans font-bold text-olive-900 mb-5">Optional Add-Ons</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pkg.addOns.map((addon: any, i: number) => (
                    <div key={i} className="flex items-center justify-between bg-olive-50 border border-olive-200 rounded-xl px-5 py-4">
                      <div className="flex items-center gap-3">
                        <Plus className="w-4 h-4 text-savannah-500 shrink-0" />
                        <span className="font-sans font-medium text-olive-900 text-sm">{addon.name}</span>
                      </div>
                      <span className="font-sans font-bold text-savannah-600 text-sm whitespace-nowrap ml-3">
                        {typeof addon.price === 'number' ? `$${addon.price}` : addon.price}
                        {addon.per ? ` / ${addon.per}` : ''}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* ── RIGHT: sticky booking sidebar ── */}
          <div className="lg:w-80 xl:w-96 shrink-0">
            <div className="sticky top-28 space-y-4">

              {/* Starting From card */}
              <div className="bg-white border border-olive-200 rounded-2xl shadow-md p-6">
                <p className="font-sans text-xs text-olive-500 uppercase tracking-widest mb-1">Starting From</p>
                {price > 0 ? (
                  <div className="flex items-end gap-1 mb-1">
                    <span className="font-sans font-bold text-4xl text-olive-900">${price.toLocaleString()}</span>
                    <span className="font-sans text-olive-500 text-sm pb-1">/ person</span>
                  </div>
                ) : (
                  <p className="font-sans font-bold text-xl text-olive-900 mb-1">Contact for pricing</p>
                )}
                <p className="font-serif text-xs text-olive-500 mb-5">All-inclusive. No hidden fees.</p>

                <div className="space-y-3 mb-5">
                  <div className="flex items-center justify-between text-sm border-b border-olive-100 pb-2">
                    <span className="font-sans text-olive-600 flex items-center gap-2"><Clock className="w-4 h-4 text-savannah-500" /> Duration</span>
                    <span className="font-sans font-semibold text-olive-900">{duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm border-b border-olive-100 pb-2">
                    <span className="font-sans text-olive-600 flex items-center gap-2"><Users className="w-4 h-4 text-savannah-500" /> Max Group</span>
                    <span className="font-sans font-semibold text-olive-900">{pkg.maxGroup || 12} persons</span>
                  </div>
                  <div className="flex items-center justify-between text-sm border-b border-olive-100 pb-2">
                    <span className="font-sans text-olive-600 flex items-center gap-2"><CalendarDays className="w-4 h-4 text-savannah-500" /> Availability</span>
                    <span className="font-sans font-semibold text-olive-900">{pkg.availability || 'Year-round'}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-sans text-olive-600 flex items-center gap-2"><MapPin className="w-4 h-4 text-savannah-500" /> Departure</span>
                    <span className="font-sans font-semibold text-olive-900">{pkg.departure || 'Moshi'}</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/255763768472?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-sans font-bold py-3.5 rounded-xl transition-colors mb-3"
                >
                  <MessageCircle className="w-5 h-5" /> Plan on WhatsApp
                </a>
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center bg-savannah-500 hover:bg-savannah-600 text-white font-sans font-bold py-3.5 rounded-xl transition-colors"
                >
                  Send an Inquiry
                </Link>
              </div>

              {/* Group Pricing table */}
              {pkg.groupPricing && pkg.groupPricing.length > 0 && (
                <div className="bg-olive-50 border border-olive-200 rounded-2xl p-5">
                  <h3 className="font-sans font-bold text-olive-900 text-sm mb-3 uppercase tracking-wide">Group Pricing</h3>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-olive-200">
                        <th className="text-left font-sans font-semibold text-olive-700 pb-2">Group Size</th>
                        <th className="text-right font-sans font-semibold text-olive-700 pb-2">Per Person</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pkg.groupPricing.map((row: any, i: number) => (
                        <tr key={i} className="border-b border-olive-100 last:border-0">
                          <td className="font-serif text-olive-700 py-2">{row.size}</td>
                          <td className="font-sans font-bold text-savannah-600 text-right py-2">
                            ${row.pricePerPerson.toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Trust badges */}
              <div className="bg-olive-900 rounded-2xl p-5 text-white text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-savannah-400 text-savannah-400" />)}
                </div>
                <p className="font-sans font-bold text-sm">5.0 on TripAdvisor</p>
                <p className="font-serif text-olive-300 text-xs mt-1">245,000+ happy travellers</p>
                <p className="font-sans text-xs text-olive-400 mt-3">Licensed by Tanzania Tourism Authority</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
