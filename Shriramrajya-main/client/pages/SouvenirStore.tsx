import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Heart, Star, MapPin, Truck } from "lucide-react";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  artisan: string;
  origin: string;
  icon: string;
}

export default function SouvenirStore() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const products: Product[] = [
    {
      id: "idol-1",
      name: "Hand-Painted Ram Idol",
      category: "idols",
      price: 1299,
      image: "🏛️",
      rating: 4.8,
      reviews: 124,
      description: "Beautifully hand-painted Ram idol in traditional style with intricate details. Made from natural clay and painted with eco-friendly colors.",
      artisan: "Sharma Handicrafts, Varanasi",
      origin: "Varanasi, Uttar Pradesh",
      icon: "🏰"
    },
    {
      id: "statue-1",
      name: "Marble Ram Mandir Replica",
      category: "statues",
      price: 3499,
      image: "🕉️",
      rating: 4.9,
      reviews: 89,
      description: "Exquisite marble replica of the newly inaugurated Ram Mandir. Carved by master craftsmen with meticulous attention to architectural details.",
      artisan: "Jaipur Stone Carving Studio",
      origin: "Jaipur, Rajasthan",
      icon: "🏛️"
    },
    {
      id: "cloth-1",
      name: "Traditional Ramayana Tapestry",
      category: "textiles",
      price: 2499,
      image: "🧵",
      rating: 4.7,
      reviews: 156,
      description: "Hand-woven tapestry depicting scenes from the Ramayana. Made using traditional techniques passed down through generations. Perfect for home décor.",
      artisan: "Chanderi Weavers Cooperative",
      origin: "Chanderi, Madhya Pradesh",
      icon: "🎨"
    },
    {
      id: "book-1",
      name: "Illustrated Ramayana Book Set",
      category: "books",
      price: 1899,
      image: "📚",
      rating: 4.6,
      reviews: 203,
      description: "Beautiful illustrated edition of the Ramayana with artistic renderings of key scenes. Hardbound with premium paper and stunning artwork.",
      artisan: "Heritage Publications",
      origin: "Delhi, India",
      icon: "📖"
    },
    {
      id: "jewel-1",
      name: "Ram Symbol Gold Pendant",
      category: "jewelry",
      price: 4999,
      image: "✨",
      rating: 4.9,
      reviews: 298,
      description: "Elegant 18K gold pendant featuring the sacred Ram symbol. Certified authentic gold with hallmark certification for purity.",
      artisan: "Malaya Jewellers",
      origin: "Mumbai, Maharashtra",
      icon: "💍"
    },
    {
      id: "prasad-1",
      name: "Traditional Prasad Box Set",
      category: "religious",
      price: 899,
      image: "🎁",
      rating: 4.8,
      reviews: 421,
      description: "Handcrafted wooden prasad boxes with traditional designs. Set includes three boxes of varying sizes, perfect for temple offerings and gifts.",
      artisan: "Saharanpur Wood Crafts",
      origin: "Saharanpur, Uttar Pradesh",
      icon: "🎁"
    },
    {
      id: "painting-1",
      name: "Ramayana Scene Oil Painting",
      category: "art",
      price: 5999,
      image: "🎨",
      rating: 4.9,
      reviews: 76,
      description: "Original oil painting of a significant Ramayana scene. Painted by renowned artist with museum-quality canvas and archival paints.",
      artisan: "Ashok Sharma Art Studio",
      origin: "Lucknow, Uttar Pradesh",
      icon: "🖼️"
    },
    {
      id: "kurta-1",
      name: "Traditional Embroidered Kurta",
      category: "clothing",
      price: 2199,
      image: "👗",
      rating: 4.7,
      reviews: 189,
      description: "Hand-embroidered kurta featuring traditional patterns inspired by Ramayana. Available in multiple sizes with premium cotton fabric.",
      artisan: "Lucknow Chikankari Weavers",
      origin: "Lucknow, Uttar Pradesh",
      icon: "👕"
    },
    {
      id: "lamp-1",
      name: "Brass Diya Set (6 pieces)",
      category: "religious",
      price: 799,
      image: "🕯️",
      rating: 4.8,
      reviews: 567,
      description: "Set of 6 handcrafted brass diyas with traditional designs. Perfect for lighting during pujas and festivals. Includes stand and cleaning brush.",
      artisan: "Moradabad Brass Works",
      origin: "Moradabad, Uttar Pradesh",
      icon: "🕯️"
    },
    {
      id: "scarf-1",
      name: "Kashmiri Pashmina Shawl",
      category: "textiles",
      price: 3999,
      image: "🧣",
      rating: 4.9,
      reviews: 234,
      description: "Luxurious Kashmiri pashmina shawl with hand-embroidered Ramayana motifs. Warm, soft, and perfect for any occasion. Certificate of authenticity included.",
      artisan: "Kashmir Valley Pashmina",
      origin: "Srinagar, Jammu & Kashmir",
      icon: "🧥"
    },
    {
      id: "poster-1",
      name: "Ramayana Timeline Poster",
      category: "art",
      price: 499,
      image: "📊",
      rating: 4.6,
      reviews: 145,
      description: "Educational poster depicting the complete Ramayana journey timeline. High-quality print suitable for framing. Great for learning and decoration.",
      artisan: "Design Print Studios",
      origin: "Bangalore, Karnataka",
      icon: "📜"
    },
    {
      id: "mudra-1",
      name: "Stone Mudra Carving",
      category: "statues",
      price: 1599,
      image: "✋",
      rating: 4.7,
      reviews: 98,
      description: "Hand-carved stone mudra (sacred hand gesture) sculpture. Represents divine blessings of Lord Rama. Polished to perfection.",
      artisan: "Khajuraho Stone Carvers",
      origin: "Khajuraho, Madhya Pradesh",
      icon: "🗿"
    },
    {
      id: "incense-1",
      name: "Ramayana Temple Incense",
      category: "fragrance",
      price: 399,
      image: "💨",
      rating: 4.8,
      reviews: 312,
      description: "Premium incense sticks made from natural ingredients. Blended to create a sacred atmosphere. 50 sticks per pack with traditional aromas.",
      artisan: "Mysore Incense Makers",
      origin: "Mysore, Karnataka",
      icon: "🌿"
    }
  ];

  const categories = [
    { id: "all", label: "All Products" },
    { id: "idols", label: "Idols & Statues" },
    { id: "textiles", label: "Textiles & Clothing" },
    { id: "jewelry", label: "Jewelry" },
    { id: "art", label: "Art & Paintings" },
    { id: "religious", label: "Religious Items" },
    { id: "books", label: "Books" },
    { id: "fragrance", label: "Fragrance" }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const toggleFavorite = (id: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const addToCart = (id: string) => {
    setCart(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-700 to-amber-900 text-white">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <h1 className="font-playfair font-bold text-5xl sm:text-6xl">
            🛍️ Ramayana Souvenir Store
          </h1>
          <p className="text-lg sm:text-xl text-amber-100 max-w-2xl mx-auto">
            Discover authentic handcrafted items from artisans across India. Every purchase supports skilled craftspeople and preserves traditional arts.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Cart Summary */}
          <div className="mb-8 flex justify-end items-center gap-4">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border-2 border-amber-200">
              <ShoppingCart className="w-5 h-5 text-amber-700" />
              <span className="font-semibold text-amber-950">{totalItems} items</span>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="font-playfair font-bold text-2xl text-amber-950 mb-6">
              📂 Browse by Category
            </h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-semibold transition ${
                    selectedCategory === category.id
                      ? "bg-amber-700 text-white shadow-lg"
                      : "bg-white border-2 border-amber-200 text-amber-900 hover:border-amber-400"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="mb-12">
            <h2 className="font-playfair font-bold text-2xl text-amber-950 mb-8">
              ✨ Curated Artisan Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="border-2 border-amber-200 hover:shadow-xl transition overflow-hidden flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-3">
                      <div className="text-5xl">{product.icon}</div>
                      <button
                        onClick={() => toggleFavorite(product.id)}
                        className={`p-2 rounded-full transition ${
                          favorites.has(product.id)
                            ? "bg-red-100 text-red-600"
                            : "bg-amber-50 text-amber-400 hover:bg-amber-100"
                        }`}
                      >
                        <Heart className={`w-5 h-5 ${favorites.has(product.id) ? "fill-current" : ""}`} />
                      </button>
                    </div>
                    <CardTitle className="text-amber-950 text-lg">{product.name}</CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold text-amber-700">{product.rating}</span>
                      <span className="text-xs text-amber-600">({product.reviews})</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <div className="mb-4">
                      <p className="text-sm text-amber-900 leading-relaxed mb-3">{product.description}</p>
                      <div className="space-y-2 text-xs text-amber-700">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3 h-3" />
                          <span>{product.origin}</span>
                        </div>
                        <div className="text-amber-800 font-semibold">
                          By {product.artisan}
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-amber-200">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-2xl font-bold text-amber-700">₹{product.price}</span>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Free Shipping</span>
                      </div>
                      <Button
                        onClick={() => addToCart(product.id)}
                        className="w-full bg-amber-700 hover:bg-amber-800 text-white font-semibold"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Why Shop With Us */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-100 mb-12">
            <h2 className="font-playfair font-bold text-3xl text-amber-950 mb-8">
              🤝 Why Shop With Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "🎯",
                  title: "Authentic Sourcing",
                  description: "Every item is sourced directly from artisans and craftspeople, ensuring authenticity and quality."
                },
                {
                  icon: "🌿",
                  title: "Eco-Friendly",
                  description: "We prioritize sustainable and eco-friendly products that respect nature and traditional practices."
                },
                {
                  icon: "🤲",
                  title: "Support Communities",
                  description: "Your purchases directly support skilled craftspeople and preserve traditional arts across India."
                },
                {
                  icon: "✅",
                  title: "Quality Guaranteed",
                  description: "All products come with quality guarantees and authenticity certificates from artisans."
                },
                {
                  icon: "🚚",
                  title: "Fast Shipping",
                  description: "Free shipping on orders across India with secure packaging and tracking."
                },
                {
                  icon: "💯",
                  title: "Customer Reviews",
                  description: "Transparent reviews from real customers help you make informed purchase decisions."
                },
                {
                  icon: "🔄",
                  title: "Easy Returns",
                  description: "30-day return policy - if you're not satisfied, we'll make it right."
                },
                {
                  icon: "📱",
                  title: "24/7 Support",
                  description: "Customer support team available to answer questions about any product."
                }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-4xl mb-3">{item.icon}</p>
                  <h3 className="font-bold text-amber-950 mb-2">{item.title}</h3>
                  <p className="text-sm text-amber-800">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Artisan Spotlight */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200 mb-12">
            <h2 className="font-playfair font-bold text-3xl text-amber-950 mb-6">
              👨‍🎨 Meet Our Artisans
            </h2>
            <p className="text-lg text-amber-900 leading-relaxed mb-6">
              Every product in our store is created by skilled artisans who have mastered their craft over decades. From wood carving in Saharanpur to marble sculpting in Jaipur, from silk weaving in Chanderi to brass work in Moradabad - our artisans preserve India's rich cultural heritage. By purchasing from our store, you directly support these communities and help keep traditional arts alive for future generations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { craft: "Stone Carving", region: "Khajuraho, MP", artisans: "50+", experience: "15-40 years" },
                { craft: "Wood Carving", region: "Saharanpur, UP", artisans: "100+", experience: "20-50 years" },
                { craft: "Brass Work", region: "Moradabad, UP", artisans: "200+", experience: "10-35 years" },
                { craft: "Hand Weaving", region: "Chanderi, MP", artisans: "300+", experience: "15-45 years" },
                { craft: "Painting", region: "Varanasi, UP", artisans: "75+", experience: "10-40 years" },
                { craft: "Pashmina", region: "Srinagar, J&K", artisans: "150+", experience: "20-50 years" }
              ].map((artisan, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border border-amber-200">
                  <p className="font-bold text-amber-950 mb-2">{artisan.craft}</p>
                  <p className="text-sm text-amber-800 mb-3">{artisan.region}</p>
                  <div className="space-y-1 text-xs text-amber-700">
                    <p>👥 Artisans: {artisan.artisans}</p>
                    <p>⏱️ Avg. Experience: {artisan.experience}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping & Returns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="border-2 border-amber-200">
              <CardHeader>
                <Truck className="w-8 h-8 text-amber-700 mb-3" />
                <CardTitle className="text-amber-950">Free Shipping</CardTitle>
              </CardHeader>
              <CardContent className="text-amber-900">
                <p className="text-sm">Complimentary shipping across India on all orders. Secure packaging with tracking number.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-amber-200">
              <CardHeader>
                <Star className="w-8 h-8 text-amber-700 mb-3" />
                <CardTitle className="text-amber-950">Quality Promise</CardTitle>
              </CardHeader>
              <CardContent className="text-amber-900">
                <p className="text-sm">All items come with authenticity certificates. If defective, we offer full replacement or refund.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-amber-200">
              <CardHeader>
                <Heart className="w-8 h-8 text-amber-700 mb-3" />
                <CardTitle className="text-amber-950">Satisfaction Guaranteed</CardTitle>
              </CardHeader>
              <CardContent className="text-amber-900">
                <p className="text-sm">30-day easy return policy. Not satisfied? Return it for full refund, no questions asked.</p>
              </CardContent>
            </Card>
          </div>

          {/* Continue Shopping CTA */}
          <div className="text-center">
            <Link to="/">
              <Button className="bg-amber-700 hover:bg-amber-800 text-white font-bold text-lg px-12 py-3">
                Continue Exploring
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
