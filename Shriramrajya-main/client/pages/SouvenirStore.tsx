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
import { ShoppingCart, Heart, Star } from "lucide-react";
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
  inStock: boolean;
}

export default function SouvenirStore() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const products: Product[] = [
    {
      id: "1",
      name: "Hand-painted Ram Idol",
      category: "art",
      price: 2499,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fd90bbe9fa7e84f6aa0f8e85ef524c7ad%2F7e979eeb96fea4ee6953e61b1e2cdcae4?format=webp&width=500",
      rating: 4.8,
      reviews: 245,
      description:
        "Beautifully hand-painted wooden idol of Lord Rama with intricate details and traditional craftsmanship.",
      inStock: true,
    },
    {
      id: "2",
      name: "Ramayana Epic Saree",
      category: "clothing",
      price: 4999,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fd90bbe9fa7e84f6aa0f8e85ef524c7ad%2F53edc8ffe1d842dc993dac967c348eda?format=webp&width=500",
      rating: 4.6,
      reviews: 156,
      description:
        "Traditional cotton saree featuring scenes from the Ramayana with block-printed design.",
      inStock: true,
    },
    {
      id: "3",
      name: "Pilgrimage Travel Kit",
      category: "travel",
      price: 3499,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fd90bbe9fa7e84f6aa0f8e85ef524c7ad%2Fe979eeb96fea4ee6953e61b1e2cdcae4?format=webp&width=500",
      rating: 4.7,
      reviews: 198,
      description:
        "Complete travel essentials for pilgrims: prayer beads, holy water bottle, portable shrine and guidebook.",
      inStock: true,
    },
    {
      id: "4",
      name: "Handmade Prasad Box Set",
      category: "prasad",
      price: 1999,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fd90bbe9fa7e84f6aa0f8e85ef524c7ad%2F7e979eeb96fea4ee6953e61b1e2cdcae4?format=webp&width=500",
      rating: 4.9,
      reviews: 312,
      description:
        "Set of 3 handcrafted wooden boxes for storing and gifting sacred prasad with decorative carvings.",
      inStock: true,
    },
    {
      id: "5",
      name: "Ramayana Kurta for Men",
      category: "clothing",
      price: 3299,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fd90bbe9fa7e84f6aa0f8e85ef524c7ad%2F53edc8ffe1d842dc993dac967c348eda?format=webp&width=500",
      rating: 4.5,
      reviews: 134,
      description:
        "Premium cotton kurta with Ramayana motifs embroidered in gold thread. Perfect for religious occasions.",
      inStock: true,
    },
    {
      id: "6",
      name: "Temple Miniature Set",
      category: "art",
      price: 5999,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fd90bbe9fa7e84f6aa0f8e85ef524c7ad%2Fe979eeb96fea4ee6953e61b1e2cdcae4?format=webp&width=500",
      rating: 4.7,
      reviews: 89,
      description:
        "Intricate miniature replicas of 5 famous Ramayana temples with hand-carved marble details.",
      inStock: false,
    },
    {
      id: "7",
      name: "Ramayana Book Bundle",
      category: "art",
      price: 1599,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fd90bbe9fa7e84f6aa0f8e85ef524c7ad%2F7e979eeb96fea4ee6953e61b1e2cdcae4?format=webp&width=500",
      rating: 4.8,
      reviews: 267,
      description:
        "Beautifully illustrated Ramayana story books with English translations. Perfect for all ages.",
      inStock: true,
    },
    {
      id: "8",
      name: "Sacred Journey Backpack",
      category: "travel",
      price: 2299,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fd90bbe9fa7e84f6aa0f8e85ef524c7ad%2F53edc8ffe1d842dc993dac967c348eda?format=webp&width=500",
      rating: 4.6,
      reviews: 178,
      description:
        "Durable, lightweight backpack designed for pilgrims with multiple compartments and rain cover.",
      inStock: true,
    },
    {
      id: "9",
      name: "Handmade Incense & Oils",
      category: "prasad",
      price: 899,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fd90bbe9fa7e84f6aa0f8e85ef524c7ad%2Fe979eeb96fea4ee6953e61b1e2cdcae4?format=webp&width=500",
      rating: 4.9,
      reviews: 421,
      description:
        "Premium handmade incense sticks and temple oils made from natural herbs and flowers.",
      inStock: true,
    },
  ];

  const categories = [
    { id: "all", label: "All Products" },
    { id: "art", label: "Religious Art & Idols" },
    { id: "clothing", label: "Traditional Clothing" },
    { id: "travel", label: "Travel Kits" },
    { id: "prasad", label: "Prasad & Temple Items" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const toggleFavorite = (id: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

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
            Handcrafted artifacts, traditional clothing, and spiritual gifts
            celebrating the divine journey of Shri Ram
          </p>
        </div>
      </section>

      {/* Store Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-amber-950 mb-6">
              Shop by Category
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="border-2 border-amber-200 hover:shadow-xl transition overflow-hidden flex flex-col"
              >
                <div className="relative h-64 overflow-hidden bg-amber-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition"
                  />
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-amber-50 transition"
                  >
                    <Heart
                      className={`w-6 h-6 ${
                        favorites.has(product.id)
                          ? "fill-red-500 text-red-500"
                          : "text-gray-400"
                      }`}
                    />
                  </button>
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-amber-950">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-amber-700 font-semibold">
                    ₹{product.price.toLocaleString()}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <p className="text-sm text-amber-900">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "fill-amber-400 text-amber-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-amber-700 font-semibold">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                  <Button
                    className="w-full bg-amber-700 hover:bg-amber-800 text-white font-semibold"
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Info Section */}
          <div className="mt-20 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 border-2 border-amber-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-4xl mb-2">🎨</p>
                <h3 className="font-bold text-amber-950 mb-2">
                  Authentic Craftsmanship
                </h3>
                <p className="text-sm text-amber-900">
                  Each product is handmade by skilled artisans preserving
                  traditional techniques
                </p>
              </div>
              <div className="text-center">
                <p className="text-4xl mb-2">🌍</p>
                <h3 className="font-bold text-amber-950 mb-2">
                  Direct from Makers
                </h3>
                <p className="text-sm text-amber-900">
                  Supporting local artisans and craftspeople across India
                </p>
              </div>
              <div className="text-center">
                <p className="text-4xl mb-2">✨</p>
                <h3 className="font-bold text-amber-950 mb-2">
                  Quality Guaranteed
                </h3>
                <p className="text-sm text-amber-900">
                  Every item is inspected and certified for authenticity
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
