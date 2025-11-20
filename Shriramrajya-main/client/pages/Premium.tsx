import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Check, Star, Zap, Gift, Mail, Lock } from "lucide-react";
import { useState } from "react";

export default function Premium() {
  const [email, setEmail] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(
        `Thank you for subscribing with ${email}! Check your inbox for updates.`,
      );
      setEmail("");
    }
  };

  const premiumFeatures = [
    {
      icon: "📚",
      title: "Exclusive Ramayana Archives",
      description: "Access to rare manuscripts and interpretations",
    },
    {
      icon: "🎧",
      title: "Audio Book Collection",
      description: "Listen to Ramayana narrated by renowned scholars",
    },
    {
      icon: "📱",
      title: "Offline Yatra App",
      description: "Download maps and guides for offline access",
    },
    {
      icon: "☎️",
      title: "Temple Contact List",
      description: "Direct contacts for all 50+ sacred temples",
    },
    {
      icon: "🎯",
      title: "Priority Support",
      description: "24/7 customer support for premium members",
    },
    {
      icon: "🌍",
      title: "Global Access",
      description: "Extended content in 8 languages",
    },
  ];

  const plans = [
    {
      name: "Explorer",
      price: "₹299",
      period: "/month",
      description: "Perfect for casual explorers",
      features: [
        "Access to location stories",
        "Interactive map features",
        "Basic itinerary builder",
        "Community access",
      ],
      highlighted: false,
    },
    {
      name: "Devotee",
      price: "₹799",
      period: "/month",
      description: "For serious pilgrims",
      features: [
        "All Explorer features",
        "Exclusive Ramayana Archives",
        "Audio book collection",
        "Offline map access",
        "Priority support",
        "Advanced itinerary customization",
      ],
      highlighted: true,
    },
    {
      name: "Lifetime Yatri",
      price: "₹9,999",
      period: "lifetime",
      description: "Complete spiritual collection",
      features: [
        "All Devotee features",
        "Lifetime access guarantee",
        "Personal digital guide",
        "Exclusive merchandise",
        "VIP community badge",
        "Annual temple tour discount",
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        {/* Hero Section */}
        <div className="mb-16 bg-gradient-to-r from-amber-700 to-amber-900 text-white rounded-lg p-8 md:p-12 text-center">
          <h1 className="font-playfair font-bold text-5xl mb-4">
            ✨ Unlock the Full Experience
          </h1>
          <p className="text-2xl font-light mb-6 text-amber-100">
            Premium membership for deeper spiritual connection
          </p>
          <p className="text-lg text-amber-100 max-w-2xl mx-auto">
            Enhance your Ram Yatra journey with exclusive content, offline
            access, and premium features
          </p>
        </div>

        {/* Premium Features Grid */}
        <section className="mb-16">
          <h2 className="font-playfair font-bold text-3xl text-amber-950 mb-12 text-center">
            Premium Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {premiumFeatures.map((feature, idx) => (
              <Card
                key={idx}
                className="border-amber-200 hover:shadow-lg transition"
              >
                <CardHeader>
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <CardTitle className="text-amber-950">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-900">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="mb-16">
          <h2 className="font-playfair font-bold text-3xl text-amber-950 mb-12 text-center">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <Card
                key={idx}
                className={`border-2 transition ${
                  plan.highlighted
                    ? "border-amber-700 shadow-2xl transform scale-105"
                    : "border-amber-200 hover:border-amber-400"
                }`}
              >
                {plan.highlighted && (
                  <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white px-4 py-2 rounded-t-lg">
                    <div className="flex items-center justify-center gap-2">
                      <Star className="w-5 h-5 fill-current" />
                      <span className="font-semibold">Most Popular</span>
                    </div>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl text-amber-950">
                    {plan.name}
                  </CardTitle>
                  <p className="text-sm text-amber-800 mt-2">
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-amber-700">
                        {plan.price}
                      </span>
                      <span className="text-amber-900">{plan.period}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {plan.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-amber-900">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={() => setSelectedPlan(plan.name)}
                    className={`w-full ${
                      plan.highlighted
                        ? "bg-amber-700 hover:bg-amber-800"
                        : "bg-amber-200 text-amber-900 hover:bg-amber-300"
                    }`}
                  >
                    {plan.highlighted ? (
                      <Zap className="w-4 h-4 mr-2" />
                    ) : (
                      <Lock className="w-4 h-4 mr-2" />
                    )}
                    {selectedPlan === plan.name ? "Selected" : "Choose Plan"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-16 bg-gradient-to-r from-amber-700 to-amber-900 text-white rounded-lg p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-8 h-8" />
              <h2 className="font-playfair font-bold text-3xl">
                Subscribe to Our Newsletter
              </h2>
            </div>
            <p className="text-lg text-amber-100">
              Get weekly updates on Ramayana teachings, travel tips, and
              exclusive offers delivered to your inbox
            </p>

            <form
              onSubmit={handleNewsletterSignup}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white text-amber-950 placeholder:text-amber-600 border-0"
              />
              <Button
                type="submit"
                className="bg-white text-amber-700 hover:bg-amber-50 font-semibold px-8 whitespace-nowrap"
              >
                Subscribe
              </Button>
            </form>

            <p className="text-sm text-amber-200">
              ✓ 100% free • ✓ No spam • ✓ Unsubscribe anytime
            </p>
          </div>
        </section>

        {/* Special Offers */}
        <section className="mb-16">
          <h2 className="font-playfair font-bold text-3xl text-amber-950 mb-12 text-center">
            🎁 Special Offers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Gift className="w-8 h-8 text-amber-700" />
                  <CardTitle className="text-amber-950">
                    Friends & Family Referral
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-amber-900">
                <p>
                  Invite friends to join RamRajya.com and both get exclusive
                  rewards:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>✓ 1 month free premium access for you</li>
                  <li>✓ 30% discount for your friend on first purchase</li>
                  <li>✓ Unlock special "Sena" community badge</li>
                </ul>
                <Button className="w-full bg-amber-700 hover:bg-amber-800 mt-4">
                  Share Referral Link
                </Button>
              </CardContent>
            </Card>

            <Card className="border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Star className="w-8 h-8 text-amber-700" />
                  <CardTitle className="text-amber-950">
                    Annual Membership Discount
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-amber-900">
                <p>Switch to annual billing and save:</p>
                <ul className="space-y-2 text-sm">
                  <li>✓ Devotee Plan: Save ₹1,500 (20% off)</li>
                  <li>✓ Lifetime Plan: One-time payment forever</li>
                  <li>✓ Bonus: Exclusive temple merchandise</li>
                </ul>
                <Button className="w-full bg-amber-700 hover:bg-amber-800 mt-4">
                  Switch to Annual
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="font-playfair font-bold text-3xl text-amber-950 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              {
                q: "Can I upgrade or downgrade my plan anytime?",
                a: "Yes! You can change your plan at any time. Changes take effect on your next billing cycle.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit/debit cards, UPI, and digital wallets including Google Pay, PhonePe, and Paytm.",
              },
              {
                q: "Is there a free trial available?",
                a: "Yes! New users get a 7-day free trial of the Devotee plan. No credit card required to start.",
              },
              {
                q: "How are the offline maps downloaded?",
                a: "You can download maps for specific regions through the app. Each region is approximately 50-200 MB depending on detail level.",
              },
              {
                q: "Can I share my account with family members?",
                a: "Lifetime plans can be used by up to 2 family members. Monthly plans are for individual use only.",
              },
              {
                q: "What happens if I cancel my subscription?",
                a: "You lose premium access but retain all your saved itineraries and notes. You can resubscribe anytime.",
              },
            ].map((item, idx) => (
              <Card key={idx} className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-950 text-lg">
                    {item.q}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-900">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <Card className="border-amber-300 bg-gradient-to-r from-amber-100 to-orange-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-950 text-center">
              Ready to Deepen Your Spiritual Journey?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-amber-900 text-lg">
              Choose a plan above and start your premium experience today
            </p>
            {!selectedPlan && (
              <p className="text-sm text-amber-800">
                Don't forget to select a plan first
              </p>
            )}
            {selectedPlan && (
              <Button className="bg-amber-700 hover:bg-amber-800 text-white font-semibold px-8">
                Complete Purchase: {selectedPlan} Plan
              </Button>
            )}
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
