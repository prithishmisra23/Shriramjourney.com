import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ramLocations } from "@shared/locations";
import { MapPin, BookOpen, Sparkles, Users, Calendar, Share2, ChevronLeft, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function LocationDetail() {
  const { id } = useParams<{ id: string }>();
  const location = ramLocations.find((loc) => loc.id === id);
  const [copied, setCopied] = useState(false);

  if (!location) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <h1 className="text-3xl font-playfair font-bold text-amber-950 mb-4">Location Not Found</h1>
          <p className="text-amber-900 mb-6">The location you're looking for doesn't exist.</p>
          <Link to="/map">
            <Button className="bg-amber-700 hover:bg-amber-800">
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back to Map
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        {/* Header */}
        <div className="mb-8">
          <Link to="/map">
            <Button variant="ghost" className="text-amber-700 hover:bg-amber-50 mb-4">
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back to Map
            </Button>
          </Link>

          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="font-playfair font-bold text-5xl text-amber-950 mb-2">
                  {location.name}
                </h1>
                <div className="flex items-center gap-2 text-amber-900 text-lg mb-2">
                  <MapPin className="w-5 h-5" />
                  <span>{location.state}, {location.country}</span>
                </div>
                <div className="inline-block px-3 py-1 bg-amber-700 text-white rounded-full text-sm font-semibold">
                  {location.phase}
                </div>
              </div>
              <Button
                variant="outline"
                className="border-amber-700 text-amber-700"
                onClick={copyToClipboard}
              >
                <Share2 className="w-5 h-5" />
                {copied ? "Copied!" : "Share"}
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="border-amber-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-amber-900 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Best Time to Visit
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-amber-800">
              {location.bestTimeToVisit}
            </CardContent>
          </Card>

          <Card className="border-amber-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-amber-900 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Nearest City
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-amber-800">
              {location.nearestCity}
              {location.distance && <p className="text-xs mt-1">{location.distance}</p>}
            </CardContent>
          </Card>

          <Card className="border-amber-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-amber-900 flex items-center gap-2">
                🏛️
                Main Temple
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-amber-800">
              {location.temple || "Multiple temples"}
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Description */}
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-950">About This Place</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-900 text-lg leading-relaxed mb-6">
                {location.description}
              </p>
            </CardContent>
          </Card>

          {/* History */}
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="text-xl text-amber-950 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Historical Significance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-900 leading-relaxed">
                {location.history}
              </p>
            </CardContent>
          </Card>

          {/* Spiritual */}
          <Card className="border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50">
            <CardHeader>
              <CardTitle className="text-xl text-amber-950 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Spiritual Significance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-900 leading-relaxed">
                {location.spiritual}
              </p>
            </CardContent>
          </Card>

          {/* Cultural */}
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="text-xl text-amber-950 flex items-center gap-2">
                🎭
                Cultural Heritage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-900 leading-relaxed">
                {location.cultural}
              </p>
            </CardContent>
          </Card>

          {/* Highlights */}
          {location.highlights && location.highlights.length > 0 && (
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-xl text-amber-950">Key Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {location.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg"
                    >
                      <span className="text-amber-700 font-bold text-lg">✓</span>
                      <span className="text-amber-900">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Events */}
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="text-xl text-amber-950">Events & Celebrations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-900 mb-4">
                {location.events}
              </p>
            </CardContent>
          </Card>

          {/* Travel Booking */}
          <Card className="border-amber-700 bg-gradient-to-r from-amber-50 to-orange-50">
            <CardHeader>
              <CardTitle className="text-xl text-amber-950 flex items-center gap-2">
                ✈️
                Plan Your Visit
              </CardTitle>
              <CardDescription>
                Book accommodations and travel for your journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href="https://linksredirect.com/?cid=241531&source=linkkit&url=https%3A%2F%2Fwww.airindia.com%2Fen-in%2Fbook-flights"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white border-2 border-amber-200 rounded-lg hover:border-amber-700 transition text-center"
                >
                  <div className="text-2xl mb-2">✈️</div>
                  <p className="font-semibold text-amber-900">Flights</p>
                  <p className="text-xs text-amber-800 mt-1">Book Air India</p>
                  <ExternalLink className="w-4 h-4 inline mt-2 text-amber-700" />
                </a>

                <a
                  href="https://www.oyorooms.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white border-2 border-amber-200 rounded-lg hover:border-amber-700 transition text-center"
                >
                  <div className="text-2xl mb-2">🏨</div>
                  <p className="font-semibold text-amber-900">Hotels</p>
                  <p className="text-xs text-amber-800 mt-1">Book via OYO</p>
                  <ExternalLink className="w-4 h-4 inline mt-2 text-amber-700" />
                </a>

                <a
                  href="https://www.irctc.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white border-2 border-amber-200 rounded-lg hover:border-amber-700 transition text-center"
                >
                  <div className="text-2xl mb-2">🚂</div>
                  <p className="font-semibold text-amber-900">Trains</p>
                  <p className="text-xs text-amber-800 mt-1">Book via IRCTC</p>
                  <ExternalLink className="w-4 h-4 inline mt-2 text-amber-700" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <Link to="/map">
            <Button variant="outline" className="border-amber-700 text-amber-700">
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back to Map
            </Button>
          </Link>
          <Link to="/itinerary">
            <Button className="bg-amber-700 hover:bg-amber-800">
              Add to Itinerary
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
