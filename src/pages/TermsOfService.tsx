import { motion } from 'motion/react';

export default function TermsOfService() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-sans font-bold text-olive-900 tracking-tight mb-8">Terms of Service</h1>
          
          <div className="prose prose-olive max-w-none font-serif text-olive-700 space-y-6">
            <p><strong>Last Updated: [Current Date]</strong></p>

            <h2 className="text-2xl font-sans font-bold text-olive-900 mt-8 mb-4">1. Booking and Payment</h2>
            <p>A deposit of 20% to 30% of the total tour cost is required to secure your booking, covering initial expenses such as domestic flights or hotel reservations. The remaining balance must be paid 30 days prior to the start of the tour or in cash upon arrival in Moshi, depending on prior agreement.</p>
            <p>Payments can be made via bank transfer or approved credit card services. Transaction fees are generally borne by the client unless specified otherwise.</p>

            <h2 className="text-2xl font-sans font-bold text-olive-900 mt-8 mb-4">2. Cancellation Policy</h2>
            <p>Cancellations must be made in writing. If you cancel your trip:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>More than 60 days before start: Full deposit refund minus any non-refundable costs (e.g., flight reservations).</li>
              <li>30 to 60 days before start: 50% of the deposit is forfeited.</li>
              <li>Less than 30 days: 100% of the tour total might be forfeited.</li>
            </ul>

            <h2 className="text-2xl font-sans font-bold text-olive-900 mt-8 mb-4">3. Travel Insurance</h2>
            <p>Comprehensive travel insurance is mandatory for all clients. Your insurance must cover personal injury, medical expenses, repatriation, and, specifically for Mount Kilimanjaro climbers, high-altitude trekking up to 6,000 meters including helicopter rescue if necessary. Clients without proper insurance will not be permitted on the mountain.</p>

            <h2 className="text-2xl font-sans font-bold text-olive-900 mt-8 mb-4">4. Liability and Assumptions of Risk</h2>
            <p>Travel in Africa and climbing high-altitude mountains inherently involve unforeseen risks, including wildlife encounters, unpredictable weather, and altitude sickness. By booking with Safari Sana Expedition, you acknowledge these risks and agree that the company and its employees are not liable for injury, loss, or damage to personal property.</p>

            <h2 className="text-2xl font-sans font-bold text-olive-900 mt-8 mb-4">5. Itinerary Changes</h2>
            <p>While we endeavor to stick faithfully to all itineraries, local conditions (weather, road conditions, park authority rules) may occasionally necessitate changes. Our lead guides have full authority to alter routes or accommodations to ensure the safety and best possible experience for our clients.</p>

            <h2 className="text-2xl font-sans font-bold text-olive-900 mt-8 mb-4">6. Jurisdiction</h2>
            <p>These terms and any disputes arising from them are governed by the laws of the United Republic of Tanzania and fall under the jurisdiction of Tanzanian courts.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
