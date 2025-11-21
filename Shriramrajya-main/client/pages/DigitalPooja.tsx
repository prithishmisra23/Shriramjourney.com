import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, MapPin, Users, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

interface Temple {
  id: string;
  name: string;
  location: string;
  image: string;
  icon: string;
  rating: number;
  reviews: number;
}

interface PoojaPackage {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  benefits: string[];
  templeId: string;
  icon: string;
}

export default function DigitalPooja() {
  const [selectedTemple, setSelectedTemple] = useState<string>("ayodhya");
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [bookingStep, setBookingStep] = useState<"select" | "details" | "confirm">(
    "select"
  );
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const temples: Temple[] = [
    {
      id: "ayodhya",
      name: "Ram Mandir, Ayodhya",
      location: "Ayodhya, Uttar Pradesh",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fd90bbe9fa7e84f6aa0f8e85ef524c7ad%2Fe979eeb96fea4ee6953e61b1e2cdcae4?format=webp&width=600",
      icon: "🏰",
      rating: 4.9,
      reviews: 1247,
    },
    {
      id: "janakpur",
      name: "Janaki Mandir, Janakpur",
      location: "Janakpur, Nepal",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fd90bbe9fa7e84f6aa0f8e85ef524c7ad%2F53edc8ffe1d842dc993dac967c348eda?format=webp&width=600",
      icon: "👑",
      rating: 4.8,
      reviews: 856,
    },
    {
      id: "rameswaram",
      name: "Ramanathaswamy Temple, Rameswaram",
      location: "Rameswaram, Tamil Nadu",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fd90bbe9fa7e84f6aa0f8e85ef524c7ad%2F7e979eeb96fea4ee6953e61b1e2cdcae4?format=webp&width=600",
      icon: "🌉",
      rating: 4.7,
      reviews: 923,
    },
    {
      id: "nashik",
      name: "Panchavati Temples, Nashik",
      location: "Nashik, Maharashtra",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fd90bbe9fa7e84f6aa0f8e85ef524c7ad%2F53edc8ffe1d842dc993dac967c348eda?format=webp&width=600",
      icon: "🌊",
      rating: 4.6,
      reviews: 654,
    },
  ];

  const poojaPackages: PoojaPackage[] = [
    {
      id: "daily-pooja",
      name: "Daily Pooja",
      description: "Daily morning prayers and offerings performed on your behalf",
      price: 501,
      duration: "15 minutes",
      benefits: [
        "Morning prayers and rituals",
        "Offerings to deity",
        "Blessing and prasad delivery",
        "Certificate via email",
      ],
      templeId: "ayodhya",
      icon: "🕉️",
    },
    {
      id: "rudrabhishek",
      name: "Rudrabhishek Pooja",
      description: "Sacred ritual with holy water and flowers for ultimate blessings",
      price: 2101,
      duration: "1 hour",
      benefits: [
        "Rudrabhishek ritual",
        "Vedic chanting",
        "Sacred offerings",
        "Prasad delivery",
        "Digital recording",
      ],
      templeId: "ayodhya",
      icon: "⚡",
    },
    {
      id: "anniversary-special",
      name: "Marriage Anniversary Pooja",
      description: "Special blessing ceremony for married couples",
      price: 3501,
      duration: "45 minutes",
      benefits: [
        "Couple blessing ritual",
        "Sacred offerings",
        "Marriage vow renewal",
        "Premium prasad box",
        "Photo and certificate",
      ],
      templeId: "janakpur",
      icon: "💑",
    },
    {
      id: "cosmic-havan",
      name: "Cosmic Havan (Fire Ritual)",
      description: "Purification through sacred fire ceremony",
      price: 4501,
      duration: "1.5 hours",
      benefits: [
        "Fire ritual performance",
        "Vedic chanting",
        "Sacred ash delivery",
        "Video recording",
        "Detailed report",
      ],
      templeId: "rameswaram",
      icon: "🔥",
    },
    {
      id: "naming-ceremony",
      name: "Naming Ceremony Pooja",
      description: "Traditional naming ceremony for newborns",
      price: 2501,
      duration: "1 hour",
      benefits: [
        "Naming ritual",
        "Vedic blessings",
        "Birth chart reading",
        "Premium gifts",
        "Certificate",
      ],
      templeId: "nashik",
      icon: "👶",
    },
    {
      id: "annual-peace",
      name: "Annual Peace Ritual",
      description: "Year-long spiritual protection and peace blessings",
      price: 5001,
      duration: "2 hours",
      benefits: [
        "Comprehensive ritual",
        "Monthly check-ins",
        "Seasonal ceremonies",
        "Monthly prasad delivery",
        "Spiritual guidance",
      ],
      templeId: "ayodhya",
      icon: "☮️",
    },
  ];

  const currentTemple = temples.find((t) => t.id === selectedTemple);
  const templePackages = poojaPackages.filter(
    (p) => p.templeId === selectedTemple
  );
  const currentPackage = selectedPackage
    ? poojaPackages.find((p) => p.id === selectedPackage)
    : null;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({ ...prev, [name]: value }));
  };

  const handleConfirmBooking = () => {
    if (
      bookingData.name &&
      bookingData.email &&
      bookingData.phone &&
      bookingData.date
    ) {
      setBookingStep("confirm");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-700 to-amber-900 text-white">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <h1 className="font-playfair font-bold text-5xl sm:text-6xl">
            🙏 Digital Pooja & Prasad
          </h1>
          <p className="text-lg sm:text-xl text-amber-100 max-w-2xl mx-auto">
            Connect with the divine from anywhere in the world. Book sacred
            ceremonies performed by certified priests at renowned temples
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Temple Selection */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-amber-950 mb-8">
              🏛️ Select a Sacred Temple
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {temples.map((temple) => (
                <button
                  key={temple.id}
                  onClick={() => {
                    setSelectedTemple(temple.id);
                    setSelectedPackage(null);
                    setBookingStep("select");
                  }}
                  className={`rounded-xl overflow-hidden transition transform hover:scale-105 border-2 ${
                    selectedTemple === temple.id
                      ? "border-amber-700 shadow-xl"
                      : "border-amber-200"
                  }`}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={temple.image}
                      alt={temple.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <p className="text-3xl mb-2">{temple.icon}</p>
                    <h3 className="font-bold text-amber-950 text-sm">
                      {temple.name}
                    </h3>
                    <p className="text-xs text-amber-700 mt-1">
                      {temple.location}
                    </p>
                    <div className="mt-2 text-xs text-amber-700">
                      ⭐ {temple.rating} ({temple.reviews} reviews)
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Pooja Packages */}
          {currentTemple && (
            <div className="space-y-12">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-amber-950 mb-2">
                  {currentTemple.icon} {currentTemple.name}
                </h2>
                <p className="text-amber-800">{currentTemple.location}</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-amber-950 mb-8">
                  Sacred Pooja Packages
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {templePackages.map((pkg) => (
                    <Card
                      key={pkg.id}
                      className={`border-2 hover:shadow-lg transition cursor-pointer ${
                        selectedPackage === pkg.id
                          ? "border-amber-700 bg-amber-50"
                          : "border-amber-200"
                      }`}
                      onClick={() => {
                        setSelectedPackage(pkg.id);
                        setBookingStep("details");
                      }}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="text-4xl">{pkg.icon}</span>
                            <CardTitle className="text-amber-950 mt-2">
                              {pkg.name}
                            </CardTitle>
                          </div>
                        </div>
                        <CardDescription className="text-amber-900">
                          {pkg.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-amber-800">
                            <Clock className="w-4 h-4" />
                            {pkg.duration}
                          </div>
                          <div className="text-2xl font-bold text-amber-700">
                            ₹{pkg.price.toLocaleString()}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <p className="font-semibold text-amber-950 text-sm">
                            What's Included:
                          </p>
                          {pkg.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-amber-700 flex-shrink-0" />
                              <span className="text-amber-900">{benefit}</span>
                            </div>
                          ))}
                        </div>

                        <Button
                          className="w-full bg-amber-700 hover:bg-amber-800 text-white font-semibold"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedPackage(pkg.id);
                            setBookingStep("details");
                          }}
                        >
                          Book Now
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Booking Form */}
              {selectedPackage && currentPackage && (
                <div className="bg-white border-2 border-amber-200 rounded-xl p-8 space-y-8">
                  <h3 className="text-2xl font-bold text-amber-950">
                    Complete Your Booking
                  </h3>

                  {bookingStep === "details" && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block font-semibold text-amber-950 mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={bookingData.name}
                            onChange={handleInputChange}
                            placeholder="Your name"
                            className="w-full px-4 py-2 border-2 border-amber-200 rounded-lg focus:border-amber-700 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block font-semibold text-amber-950 mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={bookingData.email}
                            onChange={handleInputChange}
                            placeholder="Your email"
                            className="w-full px-4 py-2 border-2 border-amber-200 rounded-lg focus:border-amber-700 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block font-semibold text-amber-950 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={bookingData.phone}
                            onChange={handleInputChange}
                            placeholder="Your phone"
                            className="w-full px-4 py-2 border-2 border-amber-200 rounded-lg focus:border-amber-700 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block font-semibold text-amber-950 mb-2">
                            Preferred Date
                          </label>
                          <input
                            type="date"
                            name="date"
                            value={bookingData.date}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border-2 border-amber-200 rounded-lg focus:border-amber-700 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-semibold text-amber-950 mb-2">
                          Special Requests or Intentions
                        </label>
                        <textarea
                          name="message"
                          value={bookingData.message}
                          onChange={handleInputChange}
                          placeholder="Share your intentions or special requests..."
                          rows={4}
                          className="w-full px-4 py-2 border-2 border-amber-200 rounded-lg focus:border-amber-700 focus:outline-none"
                        />
                      </div>

                      <Button
                        className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 text-lg"
                        onClick={handleConfirmBooking}
                      >
                        Review Booking
                      </Button>
                    </div>
                  )}

                  {bookingStep === "confirm" && (
                    <div className="space-y-6">
                      <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6 space-y-4">
                        <h4 className="font-bold text-amber-950 text-lg">
                          Booking Summary
                        </h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-amber-800">Temple:</span>
                            <span className="font-semibold text-amber-950">
                              {currentTemple.name}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-amber-800">Pooja Package:</span>
                            <span className="font-semibold text-amber-950">
                              {currentPackage.name}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-amber-800">Duration:</span>
                            <span className="font-semibold text-amber-950">
                              {currentPackage.duration}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-amber-800">Name:</span>
                            <span className="font-semibold text-amber-950">
                              {bookingData.name}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-amber-800">Date:</span>
                            <span className="font-semibold text-amber-950">
                              {bookingData.date}
                            </span>
                          </div>
                          <div className="border-t border-amber-200 pt-3 flex justify-between">
                            <span className="text-amber-950 font-bold">
                              Amount to Pay:
                            </span>
                            <span className="text-2xl font-bold text-amber-700">
                              ₹{currentPackage.price.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>

                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 text-lg">
                        Proceed to Payment
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-amber-700 text-amber-700 font-bold py-3"
                        onClick={() => setBookingStep("details")}
                      >
                        Edit Details
                      </Button>
                    </div>
                  )}
                </div>
              )}

              {/* How It Works */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-amber-950 mb-8">
                  📋 How It Works
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    {
                      step: "1",
                      title: "Select Temple & Pooja",
                      desc: "Choose your temple and preferred pooja package",
                    },
                    {
                      step: "2",
                      title: "Book & Pay Online",
                      desc: "Secure online payment with multiple options",
                    },
                    {
                      step: "3",
                      title: "Priest Performs Ritual",
                      desc: "Certified priest performs pooja on your date",
                    },
                    {
                      step: "4",
                      title: "Receive Prasad & Video",
                      desc: "Get prasad delivered and video of ceremony",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="text-center">
                      <div className="w-12 h-12 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                        {item.step}
                      </div>
                      <h4 className="font-bold text-amber-950 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-amber-900">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
