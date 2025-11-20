import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Heart, MessageCircle, Share2, Star } from "lucide-react";

interface Story {
  id: number;
  name: string;
  location: string;
  rating: number;
  title: string;
  content: string;
  image: string;
  date: string;
  likes: number;
  liked: boolean;
}

export default function CommunityPage() {
  const [stories, setStories] = useState<Story[]>([
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, India",
      rating: 5,
      title: "Life-changing pilgrimage to Ayodhya",
      content: "Visited all major Ram temples across North India. The energy at Ram Mandir in Ayodhya transformed my perspective on spirituality. Every location mentioned in the Ramayana feels alive with divine presence. Highly recommend this journey to all seekers.",
      image: "🙏",
      date: "2 weeks ago",
      likes: 247,
      liked: false
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Bangalore, India",
      rating: 5,
      title: "An unforgettable spiritual experience",
      content: "Completed the Ram Rajya map with my family. We visited 25+ locations and at each place, the stories came alive. Our children loved learning about Rama, Sita, and Hanuman. The quiz helped us remember important details. This is more than tourism - it's spiritual education.",
      image: "🌟",
      date: "1 month ago",
      likes: 189,
      liked: false
    },
    {
      id: 3,
      name: "Anjali Patel",
      location: "London, UK",
      rating: 5,
      title: "Discovered my roots through the Ramayana",
      content: "Being away from India, I was losing connection with my heritage. This platform reconnected me with my spiritual roots. The detailed information about each location and the timeline helped me understand the epic deeply. Now I'm teaching my children about Rama.",
      image: "💫",
      date: "1 month ago",
      likes: 312,
      liked: false
    },
    {
      id: 4,
      name: "Arjun Singh",
      location: "Delhi, India",
      rating: 5,
      title: "The quiz was amazing!",
      content: "Took the Ramayana quiz and scored 95%! It was fun and educational. Earned multiple badges and learned so much. The explanations for each answer were detailed and helpful. More people should take this quiz to test their knowledge.",
      image: "🏆",
      date: "3 days ago",
      likes: 156,
      liked: false
    },
    {
      id: 5,
      name: "Meera Desai",
      location: "Pune, India",
      rating: 5,
      title: "Visited Rameshwaram with RamRajya guide",
      content: "Used the itinerary builder to plan our 10-day trip. The suggestions for hotels and travel were spot-on. Visited Rameswaram, Kanyakumari, and the Ram Setu. Best pilgrimage ever! The spiritual energy was incredible.",
      image: "✨",
      date: "1 week ago",
      likes: 203,
      liked: false
    },
    {
      id: 6,
      name: "Vikram Shastri",
      location: "Varanasi, India",
      rating: 5,
      title: "Historical accuracy is impressive",
      content: "As a history teacher, I appreciate the accuracy of information on this platform. The detailed descriptions of each location with historical, spiritual, and cultural significance help students understand context. I recommend this to all my students.",
      image: "📚",
      date: "2 weeks ago",
      likes: 178,
      liked: false
    }
  ]);

  const [newStory, setNewStory] = useState({
    name: "",
    location: "",
    title: "",
    content: ""
  });

  const toggleLike = (id: number) => {
    setStories(stories.map(story =>
      story.id === id
        ? { ...story, liked: !story.liked, likes: story.liked ? story.likes - 1 : story.likes + 1 }
        : story
    ));
  };

  const submitStory = () => {
    if (newStory.name && newStory.location && newStory.title && newStory.content) {
      const story: Story = {
        id: stories.length + 1,
        name: newStory.name,
        location: newStory.location,
        rating: 5,
        title: newStory.title,
        content: newStory.content,
        image: "🙏",
        date: "just now",
        likes: 0,
        liked: false
      };
      setStories([story, ...stories]);
      setNewStory({ name: "", location: "", title: "", content: "" });
      alert("Thank you for sharing your story! It will appear shortly after moderation.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        <div className="mb-12">
          <h1 className="font-playfair font-bold text-5xl text-amber-950 mb-4">
            Community Stories
          </h1>
          <p className="text-xl text-amber-900">
            Inspiring pilgrimage journeys and spiritual experiences from fellow seekers
          </p>
        </div>

        {/* Share Your Story */}
        <Card className="border-amber-200 mb-12 bg-gradient-to-br from-amber-50 to-orange-50">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-950">Share Your Journey</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Your name"
                value={newStory.name}
                onChange={(e) => setNewStory({ ...newStory, name: e.target.value })}
                className="border-amber-300"
              />
              <Input
                placeholder="City, Country"
                value={newStory.location}
                onChange={(e) => setNewStory({ ...newStory, location: e.target.value })}
                className="border-amber-300"
              />
            </div>
            <Input
              placeholder="Story title (e.g., 'My pilgrimage to Ayodhya')"
              value={newStory.title}
              onChange={(e) => setNewStory({ ...newStory, title: e.target.value })}
              className="border-amber-300"
            />
            <textarea
              placeholder="Share your spiritual experience and journey... (min 50 characters)"
              value={newStory.content}
              onChange={(e) => setNewStory({ ...newStory, content: e.target.value })}
              className="w-full p-3 border-2 border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 min-h-32"
            />
            <Button
              onClick={submitStory}
              className="w-full bg-amber-700 hover:bg-amber-800"
            >
              Share Your Story
            </Button>
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <Card className="border-amber-200">
            <CardContent className="pt-6 text-center">
              <p className="text-4xl font-bold text-amber-700 mb-2">{stories.length}</p>
              <p className="text-amber-900 font-semibold">Stories Shared</p>
            </CardContent>
          </Card>
          <Card className="border-amber-200">
            <CardContent className="pt-6 text-center">
              <p className="text-4xl font-bold text-amber-700 mb-2">4.9★</p>
              <p className="text-amber-900 font-semibold">Average Rating</p>
            </CardContent>
          </Card>
          <Card className="border-amber-200">
            <CardContent className="pt-6 text-center">
              <p className="text-4xl font-bold text-amber-700 mb-2">12K+</p>
              <p className="text-amber-900 font-semibold">Community Members</p>
            </CardContent>
          </Card>
        </div>

        {/* Stories */}
        <div className="space-y-6">
          {stories.map((story) => (
            <Card key={story.id} className="border-amber-200 hover:shadow-lg transition">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-3xl">{story.image}</span>
                        <div>
                          <p className="font-bold text-amber-950">{story.name}</p>
                          <p className="text-sm text-amber-800">{story.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                        <span className="text-xs text-amber-700 ml-2">{story.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Title and Content */}
                  <div>
                    <h3 className="font-bold text-amber-950 mb-2 text-lg">{story.title}</h3>
                    <p className="text-amber-900 leading-relaxed">{story.content}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 pt-4 border-t border-amber-200">
                    <button
                      onClick={() => toggleLike(story.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition ${
                        story.liked
                          ? "bg-red-50 text-red-600"
                          : "text-amber-900 hover:bg-amber-50"
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${story.liked ? "fill-red-600" : ""}`} />
                      <span className="text-sm font-semibold">{story.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 text-amber-900 hover:bg-amber-50 rounded-lg transition">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm font-semibold">Comment</span>
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 text-amber-900 hover:bg-amber-50 rounded-lg transition">
                      <Share2 className="w-5 h-5" />
                      <span className="text-sm font-semibold">Share</span>
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Guidelines */}
        <Card className="border-amber-200 mt-12">
          <CardHeader>
            <CardTitle className="text-xl text-amber-950">Community Guidelines</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-amber-900">
            <p>✨ Be respectful and authentic in your stories</p>
            <p>✨ Share genuine experiences and insights</p>
            <p>✨ Avoid commercial promotion or spam</p>
            <p>✨ Keep stories family-friendly and appropriate</p>
            <p>✨ Celebrate others' spiritual journeys</p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
