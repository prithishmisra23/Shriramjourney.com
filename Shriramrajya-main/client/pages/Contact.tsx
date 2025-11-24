import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail, MapPin, Linkedin, MessageSquare, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* Header */}
        <div className="mb-12 bg-gradient-to-br from-amber-700 via-amber-800 to-amber-900 text-white rounded-3xl p-8 md:p-14 shadow-2xl">
          <div className="flex items-start gap-4">
            <MessageSquare className="w-12 h-12 flex-shrink-0" />
            <div>
              <h1 className="font-playfair font-bold text-5xl md:text-6xl mb-4">
                Get in Touch
              </h1>
              <p className="text-lg text-amber-100">
                We would love to hear from you — whether it's a question, partnership inquiry, or feedback.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-100">
              <h2 className="font-playfair font-bold text-3xl text-amber-950 mb-8">
                🌐 Contact Information
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <Mail className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-amber-950">Email</p>
                    <a href="mailto: prithishmisrabusiness@gmail.com" className="text-amber-700 hover:text-amber-900 transition">
                      prithishmisrabusiness@gmail.com
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <MessageSquare className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-amber-950">Website</p>
                    <a href="https://www.shriramjourney.com" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-900 transition">
                      https://www.shriramjourney.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <MapPin className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-amber-950">Location</p>
                    <p className="text-amber-900">Uttar Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Partnership Section */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-300 shadow-lg">
              <h3 className="font-playfair font-bold text-2xl text-amber-950 mb-4 flex items-center gap-2">
                <Handshake className="w-6 h-6" />
                Partnership & Collaboration
              </h3>
              <p className="text-amber-900 mb-4">
                For tourism, API, or media partnerships, please write to:
              </p>
              <a href="mailto:prithishmisrabusiness@gmail.com" className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 transition font-semibold">
                <Mail className="w-5 h-5" />
                prithishmisrabusiness@gmail.com
              </a>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-100">
              <h3 className="font-playfair font-bold text-2xl text-amber-950 mb-4">
                📱 Follow Us
              </h3>
              <p className="text-amber-900 mb-6">
                Connect with us on social media for updates, stories, and community engagement.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-amber-100 hover:bg-amber-200 rounded-lg transition">
                  <Linkedin className="w-6 h-6 text-amber-700" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-100">
            <h2 className="font-playfair font-bold text-3xl text-amber-950 mb-8">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-amber-950 mb-2">
                  Your Name
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border-2 border-amber-300 focus:border-amber-700 rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-amber-950 mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full border-2 border-amber-300 focus:border-amber-700 rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-amber-950 mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full border-2 border-amber-300 focus:border-amber-700 rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-amber-950 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us your thoughts, questions, or feedback..."
                  rows={6}
                  className="w-full border-2 border-amber-300 focus:border-amber-700 rounded-lg p-3 font-medium resize-none focus:outline-none transition-all"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
