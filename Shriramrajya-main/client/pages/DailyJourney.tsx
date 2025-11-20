import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin, Calendar, BookOpen, Share2, Heart } from "lucide-react";
import { useState, useMemo } from "react";

// Journey timeline mapped to calendar days
const journeyTimeline = [
  {
    day: "Jan 1-14",
    phase: "Birth & Early Life",
    location: "Ayodhya",
    event: "Ram's early childhood in Ayodhya",
    description:
      "Ram grows up in the palace learning ethics, dharma, and warfare",
    coordinates: { lat: 26.8124, lng: 82.0011 },
  },
  {
    day: "Jan 15-Feb 14",
    phase: "Birth & Early Life",
    location: "Ayodhya (Marriage Preparation)",
    event: "Ram reaches marriageable age, preparations for union with Sita",
    description: "Ram becomes the ideal prince, winning hearts of all citizens",
    coordinates: { lat: 26.8124, lng: 82.0011 },
  },
  {
    day: "Feb 15-Mar 14",
    phase: "Birth & Early Life",
    location: "Janakpur",
    event: "Ram travels to Janakpur for the Swayamvar",
    description:
      "Ram meets Sita and breaks the divine Shiva bow, winning her hand",
    coordinates: { lat: 26.9124, lng: 85.9253 },
  },
  {
    day: "Mar 15-Apr 14",
    phase: "Birth & Early Life",
    location: "Janakpur (Marriage Ceremony)",
    event: "Grand wedding ceremonies and celebrations",
    description: "The divine wedding unites the kingdoms of Kosala and Videha",
    coordinates: { lat: 26.9124, lng: 85.9253 },
  },
  {
    day: "Apr 15-May 14",
    phase: "Birth & Early Life",
    location: "Return to Ayodhya",
    event: "Ram returns to Ayodhya with Sita",
    description: "The newlyweds return to the palace amid great celebrations",
    coordinates: { lat: 26.8124, lng: 82.0011 },
  },
  {
    day: "May 15-Jun 14",
    phase: "Birth & Early Life",
    location: "Ayodhya",
    event: "Establishment as heir apparent",
    description:
      "Ram proves his worthiness as future king through righteous acts",
    coordinates: { lat: 26.8124, lng: 82.0011 },
  },
  {
    day: "Jun 15-Jul 14",
    phase: "Vanvās Begins",
    location: "Departure from Ayodhya",
    event: "Exile order fulfilled - Ram begins his 14-year exile",
    description:
      "Despite becoming king, Ram honors his father's word and leaves for exile",
    coordinates: { lat: 26.8124, lng: 82.0011 },
  },
  {
    day: "Jul 15-Aug 14",
    phase: "Vanvās Begins",
    location: "Chitrakoot",
    event: "Ram establishes hermitage at Chitrakoot",
    description:
      "Ram and Sita settle in the forest of Chitrakoot with Lakshman",
    coordinates: { lat: 25.2083, lng: 80.8017 },
  },
  {
    day: "Aug 15-Sep 14",
    phase: "Vanvās Begins",
    location: "Chitrakoot",
    event: "Bharat visits seeking Ram's return",
    description:
      "Ram's brother Bharat comes to convince Ram to return to Ayodhya",
    coordinates: { lat: 25.2083, lng: 80.8017 },
  },
  {
    day: "Sep 15-Oct 14",
    phase: "Deep Forest Journey",
    location: "Panchavati",
    event: "Ram moves deeper into the forest",
    description:
      "Ram, Sita, and Lakshman travel to Panchavati in Nashik region",
    coordinates: { lat: 19.8975, lng: 75.3281 },
  },
  {
    day: "Oct 15-Nov 14",
    phase: "Deep Forest Journey",
    location: "Panchavati",
    event: "Sita's abduction by Ravana",
    description: "Ravana abducts Sita from the banks of Godavari River",
    coordinates: { lat: 19.8975, lng: 75.3281 },
  },
  {
    day: "Nov 15-Dec 14",
    phase: "Search for Sita",
    location: "Hampi & Kishkindha",
    event: "Ram meets Hanuman and Sugriva",
    description:
      "Ram forms alliance with monkey king Sugriva to search for Sita",
    coordinates: { lat: 15.335, lng: 76.4789 },
  },
  {
    day: "Dec 15-Dec 31",
    phase: "Search for Sita",
    location: "Southern Journey",
    event: "Extended search for Sita in southern regions",
    description:
      "Ram and his army travel through southern forests seeking Lanka",
    coordinates: { lat: 11.8116, lng: 79.7625 },
  },
];

export default function DailyJourney() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  // Get current day's journey event
  const currentJourneyEvent = useMemo(() => {
    const today = new Date();
    const dayOfYear = Math.floor(
      (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) /
        86400000,
    );
    const monthDay = `${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

    // Find matching event based on calendar
    for (const event of journeyTimeline) {
      const [startMonth, startDay] = event.day
        .split("-")[0]
        .split("-")
        .map(Number);
      const [endMonth, endDay] = event.day.split("-")[1].split("-").map(Number);

      const currentMonth = today.getMonth() + 1;
      const currentDay = today.getDate();

      if (currentMonth === startMonth && currentDay >= startDay) {
        if (
          endMonth > currentMonth ||
          (endMonth === currentMonth && currentDay <= endDay)
        ) {
          return event;
        }
      }
    }

    return journeyTimeline[dayOfYear % journeyTimeline.length];
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navigation />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        {/* Hero Section */}
        <div className="mb-12 bg-gradient-to-r from-amber-700 to-amber-900 text-white rounded-lg p-8 md:p-12">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="font-playfair font-bold text-5xl mb-4">
                Where Was Shri Ram Today?
              </h1>
              <p className="text-2xl font-light mb-4">
                Follow the Divine Journey of Lord Ram
              </p>
              <p className="text-amber-100">
                Explore Ram's sacred journey through 14 years of exile, mapped
                to the calendar year
              </p>
            </div>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="p-3 hover:bg-amber-800 rounded-full transition"
            >
              <Heart className={`w-8 h-8 ${isFavorite ? "fill-white" : ""}`} />
            </button>
          </div>
        </div>

        {/* Today's Event Card */}
        {currentJourneyEvent && (
          <Card className="border-amber-200 mb-8 bg-gradient-to-br from-amber-50 to-orange-50 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-950 flex items-center gap-2">
                <Calendar className="w-6 h-6" />
                Today's Journey -{" "}
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-4 border border-amber-200">
                  <p className="text-sm text-amber-800 font-semibold">PHASE</p>
                  <p className="text-xl font-bold text-amber-950">
                    {currentJourneyEvent.phase}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-amber-200">
                  <p className="text-sm text-amber-800 font-semibold">
                    LOCATION
                  </p>
                  <p className="text-xl font-bold text-amber-950">
                    {currentJourneyEvent.location}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-amber-200">
                  <p className="text-sm text-amber-800 font-semibold">
                    CALENDAR DAYS
                  </p>
                  <p className="text-xl font-bold text-amber-950">
                    {currentJourneyEvent.day}
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border-2 border-amber-300">
                <h3 className="text-2xl font-bold text-amber-950 mb-3">
                  ✨ {currentJourneyEvent.event}
                </h3>
                <p className="text-lg text-amber-900 leading-relaxed mb-4">
                  {currentJourneyEvent.description}
                </p>
                <div className="flex gap-4">
                  <Link to="/map">
                    <Button className="bg-amber-700 hover:bg-amber-800">
                      <MapPin className="w-4 h-4 mr-2" />
                      See on Map
                    </Button>
                  </Link>
                  <button className="px-6 py-2 border-2 border-amber-700 text-amber-700 hover:bg-amber-50 rounded-lg transition font-semibold flex items-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Journey Overview */}
        <Card className="border-amber-200 mb-8">
          <CardHeader>
            <CardTitle className="text-3xl text-amber-950">
              The Complete 14-Year Journey
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-amber-900 leading-relaxed">
              Ram's 14-year exile was not a punishment but a spiritual odyssey
              that shaped his character and led to the triumph of dharma
              (righteousness) over adharma (unrighteousness). This calendar maps
              the significant events of his journey to specific periods of the
              year, allowing you to connect with each phase of his sacred path.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="border-l-4 border-amber-700 pl-4">
                <h3 className="font-bold text-amber-950 text-lg mb-2">
                  Phase 1: Birth & Early Life
                </h3>
                <p className="text-sm text-amber-900">
                  Ram's childhood in Ayodhya, his meeting with Sita in Janakpur,
                  and his divine marriage - establishing the foundation of his
                  character as the ideal prince and husband.
                </p>
              </div>

              <div className="border-l-4 border-amber-700 pl-4">
                <h3 className="font-bold text-amber-950 text-lg mb-2">
                  Phase 2: Vanvās Begins
                </h3>
                <p className="text-sm text-amber-900">
                  The beginning of exile with the visit to Chitrakoot, Bharat's
                  emotional plea for Ram's return, and Ram's unwavering
                  commitment to dharma despite familial bonds.
                </p>
              </div>

              <div className="border-l-4 border-amber-700 pl-4">
                <h3 className="font-bold text-amber-950 text-lg mb-2">
                  Phase 3: Deep Forest Journey
                </h3>
                <p className="text-sm text-amber-900">
                  Ram's retreat to Panchavati, the tragic abduction of Sita by
                  Ravana, and the emotional trial that would define the rest of
                  his journey.
                </p>
              </div>

              <div className="border-l-4 border-amber-700 pl-4">
                <h3 className="font-bold text-amber-950 text-lg mb-2">
                  Phase 4: Search for Sita
                </h3>
                <p className="text-sm text-amber-900">
                  Ram's alliance with Hanuman and the monkey kingdom, the
                  legendary bridge to Lanka, and the final battle against Ravana
                  - the climax of good versus evil.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* All Journey Events Timeline */}
        <Card className="border-amber-200 mb-8">
          <CardHeader>
            <CardTitle className="text-3xl text-amber-950 flex items-center gap-2">
              <BookOpen className="w-8 h-8" />
              Year-Round Journey Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {journeyTimeline.map((event, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition ${
                    selectedDate === event.day
                      ? "border-amber-700 bg-amber-50"
                      : "border-amber-200 hover:border-amber-400"
                  }`}
                  onClick={() =>
                    setSelectedDate(
                      selectedDate === event.day ? null : event.day,
                    )
                  }
                >
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-amber-800">
                        CALENDAR DAYS
                      </p>
                      <p className="font-bold text-amber-950">{event.day}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-amber-800">
                        LOCATION
                      </p>
                      <p className="font-bold text-amber-950">
                        {event.location}
                      </p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm font-semibold text-amber-800">
                        EVENT
                      </p>
                      <p className="font-bold text-amber-950">{event.event}</p>
                    </div>
                  </div>
                  {selectedDate === event.day && (
                    <div className="mt-4 pt-4 border-t border-amber-300">
                      <p className="text-amber-900 leading-relaxed">
                        {event.description}
                      </p>
                      <Link
                        to={`/location/${event.location.toLowerCase().replace(/ /g, "-")}`}
                      >
                        <Button className="mt-3 bg-amber-700 hover:bg-amber-800 text-sm">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Spiritual Insights */}
        <Card className="border-amber-200 mb-8">
          <CardHeader>
            <CardTitle className="text-3xl text-amber-950">
              Spiritual Insights from the Journey
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-amber-900">
            <p className="leading-relaxed">
              Ram's exile journey teaches profound spiritual lessons applicable
              to every individual's life. Each phase represents different
              aspects of human experience and spiritual growth.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <p className="font-bold text-amber-950 mb-2">
                  💪 Facing Trials
                </p>
                <p className="text-sm">
                  Ram's exile teaches that accepting difficult circumstances
                  with grace is the path to spiritual growth.
                </p>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <p className="font-bold text-amber-950 mb-2">
                  🤝 Building Alliances
                </p>
                <p className="text-sm">
                  Ram's friendship with Hanuman shows the power of true devotion
                  and loyalty in achieving impossible goals.
                </p>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <p className="font-bold text-amber-950 mb-2">
                  ⚖️ Upholding Dharma
                </p>
                <p className="text-sm">
                  Despite personal suffering, Ram prioritizes righteousness -
                  the core principle of Hindu philosophy.
                </p>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <p className="font-bold text-amber-950 mb-2">✨ Divine Love</p>
                <p className="text-sm">
                  The devotion between Ram and Sita represents the highest form
                  of human connection and spiritual partnership.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/map">
            <Button className="w-full bg-amber-700 hover:bg-amber-800 h-12">
              <MapPin className="w-5 h-5 mr-2" />
              View Full Map
            </Button>
          </Link>
          <Link to="/itinerary">
            <Button
              variant="outline"
              className="w-full border-amber-700 text-amber-700 h-12"
            >
              Create Itinerary
            </Button>
          </Link>
          <Link to="/quiz">
            <Button
              variant="outline"
              className="w-full border-amber-700 text-amber-700 h-12"
            >
              Take Quiz
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
