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
import { Globe, MapPin, Users, Calendar } from "lucide-react";
import { useState } from "react";

interface Country {
  id: string;
  name: string;
  emoji: string;
  description: string;
  coverage: string;
  locations: Location[];
  culturalSignificance: string;
  bestTime: string;
  image: string;
}

interface Location {
  name: string;
  place: string;
  significance: string;
  icon: string;
}

export default function InternationalRamayana() {
  const [selectedCountry, setSelectedCountry] = useState<string>("sri-lanka");

  const countries: Country[] = [
    {
      id: "sri-lanka",
      name: "Sri Lanka",
      emoji: "🇱🇰",
      description:
        "The land where Sita Mata was held captive in Lanka. Experience the epic tale of rescue and devotion across pristine beaches and ancient temples.",
      coverage:
        "Home to several Ramayana heritage sites, including Ravana's fortress and sacred temples dedicated to Ram and Sita.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fd90bbe9fa7e84f6aa0f8e85ef524c7ad%2F7e979eeb96fea4ee6953e61b1e2cdcae4?format=webp&width=800",
      culturalSignificance:
        "Sri Lanka holds immense significance in the Ramayana as the kingdom of Ravana. The island preserves numerous temples and sites mentioned in the epic.",
      bestTime: "December to February (cooler and less humid)",
      locations: [
        {
          name: "Nuwara Eliya",
          place: "Central Highlands",
          significance:
            "Believed to be location of Ashoka Vana where Sita was held",
          icon: "🏞️",
        },
        {
          name: "Kandy",
          place: "Central Province",
          significance: "Temple city with significant Buddhist and Hindu heritage",
          icon: "🏛️",
        },
        {
          name: "Ruwanwella",
          place: "Western Region",
          significance:
            "Ancient stupa with connections to Ramayana traditions",
          icon: "🗿",
        },
        {
          name: "Jaffna",
          place: "Northern Region",
          significance:
            "Home to temples dedicated to Lord Rama and Hanuman",
          icon: "🏰",
        },
      ],
    },
    {
      id: "nepal",
      name: "Nepal",
      emoji: "🇳🇵",
      description:
        "The birthplace of Sita Mata in Janakpur and the sacred peaks where Ram spent his exile. Discover spiritual enlightenment in the land of gods.",
      coverage:
        "Nepal contains crucial locations from Ramayana including Janakpur (Sita's birthplace) and the forests where Ram wandered during exile.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fd90bbe9fa7e84f6aa0f8e85ef524c7ad%2F53edc8ffe1d842dc993dac967c348eda?format=webp&width=800",
      culturalSignificance:
        "Nepal is deeply connected to the Ramayana, with Janakpur being Sita's sacred birthplace and the Himalayas forming the backdrop of Ram's exile.",
      bestTime: "October to November (clear skies and pleasant weather)",
      locations: [
        {
          name: "Janakpur",
          place: "Mithila Region",
          significance: "Birthplace of Goddess Sita, the divine consort of Ram",
          icon: "👑",
        },
        {
          name: "Kathmandu",
          place: "Kathmandu Valley",
          significance: "Ancient temples with Ramayana murals and sculptures",
          icon: "🏛️",
        },
        {
          name: "Chitwan",
          place: "Sagarmatha Region",
          significance: "Forested region reminiscent of Ram's exile journey",
          icon: "🌲",
        },
        {
          name: "Pokhara",
          place: "Lake Region",
          significance:
            "Spiritual hub near the sacred peaks associated with Ram",
          icon: "🏔️",
        },
      ],
    },
    {
      id: "thailand",
      name: "Thailand",
      emoji: "🇹🇭",
      description:
        "Where the Ramayana evolved into the magnificent Thai epic 'Ramakien'. Experience the story through stunning temples, dance, and art.",
      coverage:
        "Thailand has deeply integrated the Ramayana into its culture through the Ramakien, with numerous temples and cultural performances.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fd90bbe9fa7e84f6aa0f8e85ef524c7ad%2Fe979eeb96fea4ee6953e61b1e2cdcae4?format=webp&width=800",
      culturalSignificance:
        "The Thai version of Ramayana (Ramakien) is deeply embedded in Thai culture, with the story depicted in temples, dance performances, and royal palaces.",
      bestTime: "November to February (cool and dry season)",
      locations: [
        {
          name: "Grand Palace",
          place: "Bangkok",
          significance:
            "Features Ramakien murals and architectural designs inspired by Ramayana",
          icon: "🏰",
        },
        {
          name: "Wat Phra Kaew",
          place: "Bangkok",
          significance: "Temple with intricate Ramakien bas-reliefs",
          icon: "🕉️",
        },
        {
          name: "Ayutthaya",
          place: "Central Thailand",
          significance:
            "Ancient capital with temples depicting Ramakien stories",
          icon: "🏛️",
        },
        {
          name: "Sukhothai",
          place: "Northern Thailand",
          significance: "Historical park with Ramayana-inspired sculptures",
          icon: "🗿",
        },
      ],
    },
    {
      id: "indonesia",
      name: "Indonesia",
      emoji: "🇮🇩",
      description:
        "The realm where the Ramayana flourishes in art, shadow puppet theatre (Wayang), and intricate carvings. Witness ancient traditions come alive.",
      coverage:
        "Indonesia has transformed Ramayana into unique cultural expressions, particularly through Javanese and Balinese traditions.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fd90bbe9fa7e84f6aa0f8e85ef524c7ad%2F7e979eeb96fea4ee6953e61b1e2cdcae4?format=webp&width=800",
      culturalSignificance:
        "Indonesia has uniquely adapted Ramayana through Wayang Kulit (shadow puppets), temple reliefs, and performing arts, creating a distinct cultural identity.",
      bestTime: "April to October (dry season)",
      locations: [
        {
          name: "Borobudur",
          place: "Java",
          significance:
            "Buddhist temple with Ramayana bas-reliefs covering the walls",
          icon: "🏛️",
        },
        {
          name: "Prambanan",
          place: "Yogyakarta",
          significance:
            "Hindu temple with intricate Ramayana stone carvings",
          icon: "⛩️",
        },
        {
          name: "Bali",
          place: "Bali",
          significance:
            "Centre of Wayang Kulit performances and Ramayana traditions",
          icon: "🎭",
        },
        {
          name: "Jakarta",
          place: "Java",
          significance:
            "National Museum houses ancient Ramayana sculptures and manuscripts",
          icon: "🏛️",
        },
      ],
    },
  ];

  const currentCountry = countries.find((c) => c.id === selectedCountry);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-700 to-amber-900 text-white">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <h1 className="font-playfair font-bold text-5xl sm:text-6xl">
            🌍 Ramayana Beyond Bharat
          </h1>
          <p className="text-lg sm:text-xl text-amber-100 max-w-2xl mx-auto">
            Discover how the eternal tale of Lord Rama transcended borders and
            shaped civilizations across Asia
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Country Selection */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-amber-950 mb-8 flex items-center gap-2">
              <Globe className="w-8 h-8 text-amber-700" />
              Explore Sacred Lands
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {countries.map((country) => (
                <button
                  key={country.id}
                  onClick={() => setSelectedCountry(country.id)}
                  className={`p-6 rounded-xl font-bold text-lg transition transform hover:scale-105 ${selectedCountry === country.id
                      ? "bg-gradient-to-br from-amber-700 to-amber-900 text-white shadow-lg scale-105"
                      : "bg-white border-2 border-amber-200 text-amber-900 hover:border-amber-400"
                    }`}
                >
                  <span className="text-4xl mb-2 block">{country.emoji}</span>
                  {country.name}
                </button>
              ))}
            </div>
          </div>

          {/* Country Details */}
          {currentCountry && (
            <div className="space-y-12">
              {/* Hero Image & Description */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="overflow-hidden rounded-xl border-2 border-amber-200 h-96">
                  <img
                    src={currentCountry.image}
                    alt={currentCountry.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="font-playfair font-bold text-4xl text-amber-950">
                    {currentCountry.emoji} {currentCountry.name}
                  </h2>
                  <p className="text-xl text-amber-900 leading-relaxed">
                    {currentCountry.description}
                  </p>
                  <p className="text-lg text-amber-800 leading-relaxed">
                    {currentCountry.coverage}
                  </p>

                  <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6 space-y-4">
                    <div>
                      <h3 className="font-bold text-amber-950 mb-2 flex items-center gap-2">
                        <span className="text-xl">🏛️</span> Cultural Significance
                      </h3>
                      <p className="text-amber-900">
                        {currentCountry.culturalSignificance}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-amber-950 mb-2 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-amber-700" /> Best Time
                        to Visit
                      </h3>
                      <p className="text-amber-900">{currentCountry.bestTime}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sacred Locations */}
              <div>
                <h3 className="text-3xl font-bold text-amber-950 mb-8 flex items-center gap-2">
                  <MapPin className="w-8 h-8 text-amber-700" />
                  Sacred Locations in {currentCountry.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {currentCountry.locations.map((location, idx) => (
                    <Card
                      key={idx}
                      className="border-2 border-amber-200 hover:shadow-lg transition"
                    >
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <span className="text-4xl">{location.icon}</span>
                          <div>
                            <CardTitle className="text-amber-950">
                              {location.name}
                            </CardTitle>
                            <CardDescription className="text-amber-700">
                              {location.place}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-amber-900">
                          {location.significance}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Travel Guide */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-8 space-y-6">
                <h3 className="text-2xl font-bold text-amber-950">
                  📋 Travel Guide
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-bold text-amber-950 text-lg">
                      ✈️ Getting There
                    </h4>
                    <p className="text-amber-900">
                      International flights connect major cities. Direct flights
                      available from major Indian hubs.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-amber-950 text-lg">
                      🏨 Accommodation
                    </h4>
                    <p className="text-amber-900">
                      Wide range of options from budget temples stays to luxury
                      resorts near sacred sites.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-amber-950 text-lg">
                      🎫 Visa Requirements
                    </h4>
                    <p className="text-amber-900">
                      Check specific requirements for Indian citizens visiting{" "}
                      {currentCountry.name}.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-amber-950 text-lg">
                      🗣️ Local Customs
                    </h4>
                    <p className="text-amber-900">
                      Respect local traditions, dress modestly at temples, and
                      learn basic local phrases.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-amber-950">
                  Ready for Your International Pilgrimage?
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/itinerary">
                    <Button className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 px-8 rounded-full">
                      Plan Your Journey
                    </Button>
                  </Link>
                  <Link to="/community">
                    <Button
                      variant="outline"
                      className="border-amber-700 text-amber-700 font-bold py-3 px-8 rounded-full"
                    >
                      Share Your Experience
                    </Button>
                  </Link>
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
