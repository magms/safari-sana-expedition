import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-sans font-bold text-olive-900 tracking-tight mb-8">Privacy Policy</h1>
          
          <div className="prose prose-olive max-w-none font-serif text-olive-700 space-y-6">
            <p><strong>Last Updated: [Current Date]</strong></p>
            
            <h2 className="text-2xl font-sans font-bold text-olive-900 mt-8 mb-4">1. Information We Collect</h2>
            <p>At Safari Sana Expedition, we collect personal information required to book and manage your tour safely and efficiently. This includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Names, contact details, and passport information of all travelers.</li>
              <li>Flight details and accommodation preferences.</li>
              <li>Dietary requirements and relevant medical conditions (especially required for Kilimanjaro climbs to ensure your safety).</li>
            </ul>

            <h2 className="text-2xl font-sans font-bold text-olive-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <p>We use your personal data to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reserve National Park permits (Tanzania National Parks Authority requires passport details).</li>
              <li>Book domestic flights and lodge/hotel accommodations.</li>
              <li>Ensure our expedition guides and chefs can cater to your specific physical and dietary needs.</li>
              <li>Communicate directly with you regarding your itinerary and booking.</li>
            </ul>

            <h2 className="text-2xl font-sans font-bold text-olive-900 mt-8 mb-4">3. Data Sharing and Protection</h2>
            <p>We only share your information with trusted third-party partners who are essential in delivering your tour locally (such as hotels, airlines, and government park authorities). We do not sell or rent your personal information to marketing agencies.</p>

            <h2 className="text-2xl font-sans font-bold text-olive-900 mt-8 mb-4">4. Photography</h2>
            <p>During our expeditions, our guides may take photographs for promotional use on our website or social media. We will always verbally ask for your consent before taking photos. If you prefer not to be photographed, let your guide know, and your decision will be fully respected.</p>

            <h2 className="text-2xl font-sans font-bold text-olive-900 mt-8 mb-4">5. Contact Us</h2>
            <p>If you have any questions regarding how we handle your data, please contact us at <strong>karibu@safarisana.com</strong>.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
