import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Users, MapPin, Heart } from "lucide-react";

export default function AboutRamayana() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-playfair font-bold text-5xl text-amber-950 mb-4">
            The Ramayana
          </h1>
          <p className="text-xl text-amber-900">
            One of humanity's greatest epics - a spiritual journey of dharma, devotion, and love
          </p>
        </div>

        {/* Overview */}
        <Card className="border-amber-200 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-950">Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-amber-900">
            <p className="leading-relaxed">
              The Ramayana is one of the two major epics of ancient India, traditionally attributed to the poet Valmiki. 
              It is the longest poem ever written, containing approximately 24,000 verses organized in seven books (Kands), 
              describing the lives of Rama, Sita, Lakshman, and the celestial and supernatural beings.
            </p>
            <p className="leading-relaxed">
              The epic has been a touchstone of Hinduism and Indian culture for thousands of years, offering moral and 
              spiritual guidance through the narrative of Lord Rama's life and his adherence to dharma (righteousness) even 
              in the most challenging circumstances.
            </p>
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mt-4">
              <p className="font-semibold text-amber-950 mb-2">Key Facts:</p>
              <ul className="text-sm space-y-1 text-amber-800">
                <li>📚 <strong>24,000 verses</strong> (Slokas) in 7 books</li>
                <li>🕉️ <strong>Author:</strong> Maharishi Valmiki</li>
                <li>⏰ <strong>Composed:</strong> Estimated 500 BCE - 200 CE</li>
                <li>🌍 <strong>Influence:</strong> Foundational to Hindu, Buddhist, Jain traditions</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* The Seven Books */}
        <div className="mb-8">
          <h2 className="font-playfair font-bold text-3xl text-amber-950 mb-6">The Seven Books (Kands)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                number: "1",
                name: "Bala Kand",
                subtitle: "Book of Childhood",
                description: "Birth of Rama in Ayodhya, his education under Sage Vashistha, and the fateful Swayamvar of Sita in Janakpur where Rama wins her hand by breaking Shiva's bow."
              },
              {
                number: "2",
                name: "Ayodhya Kand",
                subtitle: "Book of Ayodhya",
                description: "Rama's exile following his father's vow, his departure from Ayodhya with Sita and Lakshman, and Bharat's unwavering loyalty during Rama's 14-year absence."
              },
              {
                number: "3",
                name: "Aranya Kand",
                subtitle: "Book of the Forest",
                description: "Rama's 12 years in exile in the Dandakaranya forest, his encounters with various sages and demons, and the tragic abduction of Sita by Ravana."
              },
              {
                number: "4",
                name: "Kishkindha Kand",
                subtitle: "Book of Kishkindha",
                description: "Rama's alliance with monkey king Sugriva, the discovery of Hanuman's extraordinary devotion, and the formation of the Vanara army to rescue Sita."
              },
              {
                number: "5",
                name: "Sundara Kand",
                subtitle: "Book of Hanuman",
                description: "Hanuman's legendary journey to Lanka, his encounter with Sita in Ashok Vatika, and his daring escape after confronting Ravana. The most popular section among devotees."
              },
              {
                number: "6",
                name: "Yuddha Kand",
                subtitle: "Book of War",
                description: "The great battle between Rama's forces and Ravana's army, the death of Ravana, Sita's vindication, and Rama's triumph of dharma over adharma."
              }
            ].map((kand, idx) => (
              <Card key={idx} className="border-amber-200 hover:shadow-lg transition">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg text-amber-950">{kand.name}</CardTitle>
                      <p className="text-sm text-amber-700 italic">{kand.subtitle}</p>
                    </div>
                    <span className="text-3xl font-playfair font-bold text-amber-700">{kand.number}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-amber-900">{kand.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Main Characters */}
        <Card className="border-amber-200 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-950 flex items-center gap-2">
              <Users className="w-6 h-6" />
              Principal Characters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: "Rama",
                  role: "The Hero",
                  description: "The seventh Avatar of Vishnu. Rama embodies all virtues - compassion, courage, righteousness, and absolute devotion to dharma. His life is the supreme example of how to live righteously."
                },
                {
                  name: "Sita",
                  role: "The Heroine",
                  description: "The ideal of womanly virtue, loyalty, and sacrifice. Born from the earth, Sita's unwavering devotion to Rama through trials symbolizes the soul's devotion to the divine."
                },
                {
                  name: "Lakshman",
                  role: "The Devoted Brother",
                  description: "Rama's younger brother who follows him into exile, serving with absolute dedication. Lakshman represents the ideal of selfless service and brotherhood."
                },
                {
                  name: "Hanuman",
                  role: "The Eternal Devotee",
                  description: "The monkey deity of unparalleled devotion and strength. Hanuman's unwavering faith and service to Rama symbolize the ultimate model of devotion to the divine."
                },
                {
                  name: "Ravana",
                  role: "The Antagonist",
                  description: "The ten-headed demon king of Lanka. Though evil, Ravana is portrayed as a complex character - a scholar, musician, and devotee of Shiva, yet destroyed by pride and lust."
                },
                {
                  name: "Bharat",
                  role: "The Loyal Brother",
                  description: "Rama's half-brother who refuses the throne in Rama's absence and rules as regent, placing Rama's wooden sandals on the seat. Symbol of selfless duty and loyalty."
                }
              ].map((char, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-amber-50 border-2 border-amber-200">
                  <p className="font-bold text-amber-950 text-lg">{char.name}</p>
                  <p className="text-sm text-amber-700 font-semibold mb-2">{char.role}</p>
                  <p className="text-sm text-amber-900">{char.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Spiritual Teachings */}
        <Card className="border-amber-200 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-950 flex items-center gap-2">
              <Heart className="w-6 h-6" />
              Core Spiritual Teachings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Dharma (Righteousness)",
                  content: "The central theme of the Ramayana. Rama's unwavering adherence to dharma even when it causes personal suffering teaches that righteous living is the highest good."
                },
                {
                  title: "Bhakti (Devotion)",
                  content: "Through Hanuman's example, the epic demonstrates that pure devotion to the divine is the path to liberation and brings superhuman strength and wisdom."
                },
                {
                  title: "Duty and Sacrifice",
                  content: "The epic teaches the importance of fulfilling one's duties and making sacrifices for the greater good, as demonstrated by Rama accepting exile to keep his father's vow."
                },
                {
                  title: "Divine Incarnation",
                  content: "Rama's life demonstrates how the divine takes human form to restore dharma and defeat evil. His incarnation serves a cosmic purpose beyond individual desires."
                },
                {
                  title: "Karma and Consequences",
                  content: "The epic illustrates that actions have consequences and that one must face the results of past deeds with grace and wisdom."
                },
                {
                  title: "The Goal of Life",
                  content: "The Ramayana teaches that the ultimate goal is Moksha (liberation) achieved through dharma, devotion, knowledge, and selfless service."
                }
              ].map((teaching, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200">
                  <p className="font-bold text-amber-950 mb-2">{teaching.title}</p>
                  <p className="text-sm text-amber-900">{teaching.content}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Cultural Impact */}
        <Card className="border-amber-200 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-950">Global Impact and Legacy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-amber-900">
            <p>
              The Ramayana has profoundly influenced Asian cultures for millennia. Versions of the Ramayana exist across:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="font-bold text-amber-950 mb-2">🇮🇳 Hindu Tradition</p>
                <p className="text-sm">Foundational text of Hinduism; celebrated annually during Diwali and Ram Navami</p>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="font-bold text-amber-950 mb-2">🇧🇩 Bengali Ramayana</p>
                <p className="text-sm">Krittibasi Ojha's version in Bengali is deeply revered in Eastern India and Bangladesh</p>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="font-bold text-amber-950 mb-2">🇹🇭 Thai Ramakien</p>
                <p className="text-sm">Thai adaptation with unique cultural elements, celebrated in art, theater, and dance</p>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="font-bold text-amber-950 mb-2">🇱🇰 Sri Lankan Ramayana</p>
                <p className="text-sm">Deeply integrated into Sri Lankan culture with temples and pilgrimage sites across the island</p>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="font-bold text-amber-950 mb-2">🇮🇩 Indonesian Ramayana</p>
                <p className="text-sm">Influences Balinese culture, dance, and the famous Ramayana Ballet of Yogyakarta</p>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="font-bold text-amber-950 mb-2">🇲🇾 Malaysian Hikayat Rama</p>
                <p className="text-sm">Adapted into local literature and performing arts with Malay cultural elements</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Link to="/timeline">
            <Button className="w-full bg-amber-700 hover:bg-amber-800 h-12">
              <BookOpen className="w-5 h-5 mr-2" />
              Explore Timeline
            </Button>
          </Link>
          <Link to="/map">
            <Button variant="outline" className="w-full border-amber-700 text-amber-700 h-12">
              <MapPin className="w-5 h-5 mr-2" />
              Sacred Locations
            </Button>
          </Link>
          <Link to="/quiz">
            <Button variant="outline" className="w-full border-amber-700 text-amber-700 h-12">
              📚 Take Quiz
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
