import { useState, useEffect } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleComplete();
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleComplete = () => {
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 800);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-amber-700 via-amber-800 to-amber-950 transition-opacity duration-800 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-amber-600 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-500 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-yellow-400 rounded-full opacity-5 blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center space-y-8 px-6">
        {/* Namaste */}
        <div className="space-y-4">
          <div
            className="text-7xl md:text-9xl font-bold animate-float"
            style={{
              animation: "slideDown 1s ease-out",
            }}
          >
            🙏
          </div>
          <h1
            className="font-playfair font-bold text-5xl md:text-7xl text-white leading-tight animate-slideDown"
            style={{
              animation: "slideDown 1.2s ease-out 0.2s both",
              textShadow: "0 4px 20px rgba(0,0,0,0.4)",
            }}
          >
            Namaste
          </h1>
        </div>

        {/* Jai Shree Ram */}
        <div
          className="font-playfair font-bold text-5xl md:text-7xl bg-gradient-to-r from-amber-200 via-yellow-100 to-orange-200 bg-clip-text text-transparent animate-slideUp"
          style={{
            animation: "slideUp 1s ease-out 0.6s both",
            textShadow: "0 0 30px rgba(255,215,0,0.3)",
          }}
        >
          Jai Shree Ram
        </div>

        {/* Divider */}
        <div
          className="h-1 w-24 mx-auto bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-300 rounded-full animate-slideInRight"
          style={{
            animation: "slideInRight 1s ease-out 1s both",
          }}
        ></div>

        {/* Subtitle */}
        <p
          className="font-light text-lg md:text-xl text-amber-100 max-w-md animate-fadeIn"
          style={{
            animation: "fadeIn 1s ease-out 1.4s both",
          }}
        >
          Welcome to the sacred journey of Shri Ram
        </p>

        {/* Click to continue */}
        <button
          onClick={handleComplete}
          className="mt-8 px-8 py-3 bg-white text-amber-700 rounded-full font-bold text-lg hover:bg-amber-50 transition-all transform hover:scale-105 animate-fadeIn"
          style={{
            animation: "fadeIn 1s ease-out 1.8s both",
          }}
        >
          Enter →
        </button>
      </div>

      {/* Spiritual elements - animated lines */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-40px);
            width: 0;
          }
          to {
            opacity: 1;
            transform: translateX(0);
            width: 6rem;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
