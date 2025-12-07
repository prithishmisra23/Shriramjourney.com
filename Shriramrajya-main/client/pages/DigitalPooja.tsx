import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail } from "lucide-react";

export default function DigitalPooja() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50 flex flex-col">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        {/* Hero Section */}
        <div className="mb-16 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white rounded-lg p-8 md:p-12 text-center">
          <h1 className="font-playfair font-bold text-5xl md:text-6xl mb-4">
            🙏 Digital Pooja Services
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 font-light">
            Book sacred ceremonies performed by experienced priests at temples across India
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-200 mb-12">
          <h2 className="font-playfair font-bold text-3xl text-purple-950 mb-4">
            Experience Sacred Rituals from Home
          </h2>
          <p className="text-lg text-purple-900 leading-relaxed mb-4">
            Bhagwan Shri Ram Journey brings the sacred experience of pooja to your doorstep. Our Digital Pooja service allows you to book authentic ceremonies performed by trained, experienced priests at major temples across India. Whether you seek blessings for a special occasion, daily spiritual connection, or wish to perform rituals in honor of Lord Rama, our service provides a seamless, meaningful experience.
          </p>
          <p className="text-lg text-purple-900 leading-relaxed">
            We have partnered with temples across India to offer personalized ceremonies that honor traditional rituals while embracing modern convenience. Every pooja is performed with utmost devotion and authenticity, ensuring that your spiritual intentions reach the divine.
          </p>
        </div>

        {/* Available Services */}
        <div className="mb-12">
          <h2 className="font-playfair font-bold text-3xl text-purple-950 mb-8">
            📿 Available Pooja Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🕉️",
                title: "Daily Aarti Booking",
                description: "Participate in daily aarti ceremonies at Ram Mandir, Janaki Mandir, and other sacred temples. Witness the divine ritual and receive blessings from expert priests performing authentic aarti services.",
              },
              {
                icon: "💒",
                title: "Special Occasion Ceremonies",
                description: "Book customized poojas for birthdays, anniversaries, marriages, housewarmings, and other significant life events. Each ceremony is personalized to your specific intentions and traditions.",
              },
              {
                icon: "📞",
                title: "Live Streaming Service",
                description: "Watch your booked pooja live-streamed directly to your home. Participate in real-time with family members anywhere in the world and receive live blessings from the performing priests.",
              },
              {
                icon: "🎁",
                title: "Prasad Delivery",
                description: "Receive blessed prasad (sacred offering) delivered to your home after your pooja. Each package includes authentic temple prasad prepared with devotion and care.",
              },
              {
                icon: "🙏",
                title: "Personal Spiritual Guidance",
                description: "Consult with experienced temple scholars about which pooja would best suit your spiritual needs and intentions. Receive personalized recommendations based on your beliefs.",
              },
              {
                icon: "📜",
                title: "Pooja Certificates",
                description: "Receive official certificates from the temple confirming the completion of your pooja. Certificates include details of the ceremony, date, and signatures of performing priests.",
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200 hover:shadow-lg transition">
                <p className="text-4xl mb-4">{service.icon}</p>
                <h3 className="font-bold text-purple-950 text-lg mb-3">{service.title}</h3>
                <p className="text-purple-900 leading-relaxed text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Temples Network */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-200 mb-12">
          <h2 className="font-playfair font-bold text-3xl text-purple-950 mb-4">
            🏛️ Our Temple Network
          </h2>
          <p className="text-lg text-purple-900 leading-relaxed mb-6">
            We have established partnerships with major temples dedicated to Lord Rama across India, including Ram Mandir in Ayodhya, Janaki Mandir in Janakpur, Ramanathaswamy Temple in Rameswaram, and numerous other sacred sites. Each temple in our network has been carefully selected for its authenticity, architectural significance, and commitment to traditional rituals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {["Ram Mandir, Ayodhya", "Janaki Mandir, Janakpur", "Ramanathaswamy, Rameswaram", "Trimbakeshwar, Nashik"].map((temple, idx) => (
              <div key={idx} className="bg-purple-50 rounded-lg p-4 text-center border border-purple-200">
                <p className="font-semibold text-purple-950">{temple}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Expert Priests */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200 mb-12">
          <h2 className="font-playfair font-bold text-3xl text-purple-950 mb-4">
            👨‍⚛️ Our Experienced Priests
          </h2>
          <p className="text-lg text-purple-900 leading-relaxed mb-6">
            All priests in our network are highly trained with decades of experience in performing authentic Vedic rituals. They have studied traditional Vedas and temple protocols, ensuring that every ceremony adheres to proper procedures and spiritual principles. Our priests are committed to maintaining the sanctity and authenticity of each pooja.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-purple-200">
              <h3 className="font-bold text-purple-950 mb-3">✓ Vedic Expertise</h3>
              <p className="text-purple-900 text-sm">Trained in Vedic rituals with proper understanding of mantras, procedures, and spiritual significance</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-purple-200">
              <h3 className="font-bold text-purple-950 mb-3">✓ Temple Authorized</h3>
              <p className="text-purple-900 text-sm">Officially authorized by major temples with certificates and verified credentials</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-purple-200">
              <h3 className="font-bold text-purple-950 mb-3">✓ Experienced</h3>
              <p className="text-purple-900 text-sm">Average 15-30 years of experience performing ceremonies for thousands of devotees</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-purple-200">
              <h3 className="font-bold text-purple-950 mb-3">✓ Devoted</h3>
              <p className="text-purple-900 text-sm">Deeply spiritual individuals committed to maintaining sacred traditions and authentic practices</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-200 mb-12">
          <h2 className="font-playfair font-bold text-3xl text-purple-950 mb-8">
            🎯 How to Book Your Pooja
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Select Your Pooja",
                description: "Browse our catalog of available poojas and select the one that matches your spiritual needs and occasion. We offer services for all life events and daily spiritual practices."
              },
              {
                step: "2",
                title: "Choose Temple & Date",
                description: "Select your preferred temple from our network and pick a convenient date. We show available time slots and special packages for each temple."
              },
              {
                step: "3",
                title: "Customize Your Ceremony",
                description: "Personalize your pooja with specific intentions, mantras, and offerings. You can include personal details, family names, and special requests for the ceremony."
              },
              {
                step: "4",
                title: "Complete Booking",
                description: "Secure your booking with a deposit. You'll receive confirmation with ceremony details, priest information, and live-stream access credentials if selected."
              },
              {
                step: "5",
                title: "Receive Prasad",
                description: "After the ceremony, receive your blessed prasad delivery and official certificate. Access full video recording of your ceremony for future reference."
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 pb-6 border-b border-purple-200 last:border-0">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-purple-950 text-lg mb-2">{item.title}</h3>
                  <p className="text-purple-900">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 border-2 border-purple-300 mb-12">
          <h2 className="font-playfair font-bold text-3xl text-purple-950 mb-6">
            💰 Pooja Packages & Pricing
          </h2>
          <p className="text-lg text-purple-900 leading-relaxed mb-8">
            Our packages are designed to be accessible to devotees of all means. Prices vary based on the type of ceremony, temple location, and additional services like live-streaming and prasad delivery. Basic poojas start from ₹501 for daily aarti participation, while special occasion ceremonies range from ₹2,001 to ₹10,001+ depending on customization.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border-2 border-purple-300">
              <h3 className="font-bold text-purple-950 text-lg mb-4">🙏 Basic Aarti</h3>
              <p className="text-3xl font-bold text-purple-600 mb-4">₹501</p>
              <p className="text-purple-900 text-sm mb-4">Daily aarti participation with live-stream access</p>
              <Link to="/digital-pooja"><Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Book Now</Button></Link>
            </div>
            <div className="bg-white rounded-lg p-6 border-2 border-purple-300">
              <h3 className="font-bold text-purple-950 text-lg mb-4">💒 Special Ceremony</h3>
              <p className="text-3xl font-bold text-purple-600 mb-4">₹2,001</p>
              <p className="text-purple-900 text-sm mb-4">Customized pooja with prasad delivery and certificate</p>
              <Link to="/digital-pooja"><Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Book Now</Button></Link>
            </div>
            <div className="bg-white rounded-lg p-6 border-2 border-purple-300">
              <h3 className="font-bold text-purple-950 text-lg mb-4">⭐ Premium Package</h3>
              <p className="text-3xl font-bold text-purple-600 mb-4">₹5,001+</p>
              <p className="text-purple-900 text-sm mb-4">Full customization with personal guidance and extras</p>
              <Link to="/digital-pooja"><Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Book Now</Button></Link>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/digital-pooja">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg px-12 py-4">
              🙏 Book Your Pooja Today
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
