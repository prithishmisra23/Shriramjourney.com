import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 text-center">
        <div className="text-6xl font-playfair font-bold text-amber-950 mb-4">404</div>
        <h1 className="font-playfair font-bold text-3xl text-amber-950 mb-2">
          Page Not Found
        </h1>
        <p className="text-lg text-amber-900 mb-8">
          The sacred path you're looking for doesn't exist. Let's guide you back to the journey.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="bg-amber-700 hover:bg-amber-800">
              Return to Home
            </Button>
          </Link>
          <Link to="/map">
            <Button variant="outline" className="border-amber-700 text-amber-700">
              Explore Map
            </Button>
          </Link>
        </div>

        <div className="mt-12 text-4xl">🏰</div>
      </div>

      <Footer />
    </div>
  );
}
