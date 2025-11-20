import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, MessageCircle, X } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const getBotResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();

  // Travel Planning Questions
  if (message.includes("how long") || message.includes("duration") || message.includes("days")) {
    return "The complete Ram Rajya journey can be done in 14-21 days visiting all 50 locations. However, you can customize your trip duration. Most pilgrims spend 7-14 days visiting key locations. Would you like suggestions for a shorter route?";
  }

  if (message.includes("best time") || message.includes("when to visit") || message.includes("season")) {
    return "The best time to visit is October to March when the weather is pleasant. Avoid summer (April-June) as it's very hot. Monsoon (July-September) can make travel difficult. Ram Navami (March/April) and Diwali (Oct/Nov) are peak pilgrimage times.";
  }

  if (message.includes("cost") || message.includes("budget") || message.includes("expensive")) {
    return "Budget depends on your travel style. Budget pilgrimage: ₹500-800/day. Mid-range: ₹1500-2500/day. Luxury: ₹4000+/day. I can help you create a customized itinerary within your budget. What's your preferred daily budget?";
  }

  if (message.includes("hotel") || message.includes("accommodation") || message.includes("stay")) {
    return "Most major pilgrimage cities have excellent accommodation options. I recommend booking through OYO Rooms or local temple guesthouses for authentic experience. Many ashrams also offer affordable lodging. Where are you planning to stay first?";
  }

  if (message.includes("flight") || message.includes("train") || message.includes("transport")) {
    return "Flights to Delhi, Mumbai, or Bangalore are most convenient. From there, you can take trains or buses to reach cities like Ayodhya, Nashik, or Bangalore for starting your pilgrimage. Air India has good connections to pilgrimage cities.";
  }

  // Ramayana Knowledge Questions
  if (message.includes("who is rama") || message.includes("tell me about rama")) {
    return "Rama is the seventh Avatar of Lord Vishnu. Born in Ayodhya to King Dashrath and Queen Kausalya, he is the embodiment of dharma (righteousness). He's known for his unwavering devotion to duty and virtue, even in the most challenging circumstances. Would you like to learn more about his life?";
  }

  if (message.includes("who is sita") || message.includes("tell me about sita")) {
    return "Sita is the divine feminine principle and ideal of womanly virtue. Born from the earth, discovered by King Janaka, she represents loyalty, grace, and steadfast devotion. Her journey with Rama teaches us about faith and sacrifice. She's worshipped as Lakshmi, the goddess of prosperity.";
  }

  if (message.includes("hanuman")) {
    return "Hanuman is the monkey deity representing ultimate devotion and strength. He's Rama's greatest follower and serves with complete selflessness. His incredible feats - like the leap to Lanka - symbolize the power of unwavering faith. He's revered in every Rama temple.";
  }

  if (message.includes("ravana")) {
    return "Ravana is the ten-headed demon king of Lanka and the antagonist. Though evil, he's portrayed as a complex character - a scholar, musician, and devotee of Shiva. His downfall teaches that pride and lust lead to destruction, regardless of power or knowledge.";
  }

  if (message.includes("what is ramayana") || message.includes("tell me about ramayana")) {
    return "The Ramayana is one of humanity's greatest epics - an ancient Sanskrit poem with approximately 24,000 verses in 7 books. Written by Maharishi Valmiki, it narrates Rama's life journey and teaches dharma, devotion, and virtue. It's foundational to Hindu, Buddhist, and Jain traditions.";
  }

  // Location Questions
  if (message.includes("ayodhya")) {
    return "Ayodhya is the birthplace of Rama and capital of the Kosala kingdom. The newly constructed Ram Mandir here is a magnificent architectural marvel. It's one of the most important pilgrimage destinations. Nearby attractions include Sarayu River, Hanuman Garhi, and Ram Ki Paidi.";
  }

  if (message.includes("nashik") || message.includes("panchavati")) {
    return "Nashik is a major pilgrimage center on the Godavari River. Panchavati is where Rama spent his forest exile. Key sites include Ram Kund, Sita Gufa, Kalaram Temple, and Tapovan. It hosts the Kumbh Mela every 12 years - one of the world's largest religious gatherings.";
  }

  if (message.includes("hampi")) {
    return "Hampi is the ancient Kishkindha kingdom where Rama met Sugriva and Hanuman. It's a UNESCO World Heritage Site with incredible ruins and temples. Must-visit spots: Virupaksha Temple, Anjanadri Hill (Hanuman's birthplace), and the Tungabhadra River.";
  }

  if (message.includes("rameswaram")) {
    return "Rameswaram is where Rama built a bridge to Lanka and installed the Shiva Linga. The Ramanathaswamy Temple here is one of India's holiest shrines. You can see the legendary Ram Setu (Adam's Bridge) from Dhanushkodi point. It's one of the four Char Dham pilgrimage sites.";
  }

  // Help Questions
  if (message.includes("help") || message.includes("can you") || message.includes("how can")) {
    return "I'm here to help! I can assist with: travel planning & budgeting, information about Ram's life story, details about pilgrimage locations, best times to visit, accommodation & transport tips, and Ramayana knowledge. What would you like help with?";
  }

  if (message.includes("hello") || message.includes("hi") || message.includes("namaste")) {
    return "🙏 Namaste! Welcome to RamRajya.com. I'm your spiritual travel companion. I can help you plan your sacred pilgrimage to Ram's holy locations, answer questions about the Ramayana, and guide you on your spiritual journey. How can I assist you today?";
  }

  // Default response
  return "Thank you for your question! I can help with travel planning, Ramayana stories, location information, and pilgrimage tips. Could you be more specific? For example, ask me about 'Ayodhya', 'best time to visit', 'how to plan my trip', or any character from the Ramayana.";
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "🙏 Namaste! Welcome to RamRajya.com. I'm here to help you plan your sacred pilgrimage and answer questions about the Ramayana. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 500);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-amber-700 hover:bg-amber-800 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition z-40"
        title="Chat with our AI assistant"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-screen md:h-auto md:max-h-[600px] bg-white rounded-lg shadow-2xl flex flex-col z-50 border-2 border-amber-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5" />
          <span className="font-semibold">Pilgrimage Assistant</span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="hover:bg-amber-800 rounded-full p-1"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-amber-50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                msg.sender === "user"
                  ? "bg-amber-700 text-white rounded-br-none"
                  : "bg-white text-amber-900 border border-amber-200 rounded-bl-none"
              }`}
            >
              <p className="text-sm leading-relaxed">{msg.text}</p>
              <p className="text-xs mt-1 opacity-70">
                {msg.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white text-amber-900 border border-amber-200 px-4 py-2 rounded-lg rounded-bl-none">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-amber-700 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-amber-700 rounded-full animate-bounce delay-100" />
                <div className="w-2 h-2 bg-amber-700 rounded-full animate-bounce delay-200" />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-amber-200 bg-white rounded-b-lg">
        <div className="flex gap-2">
          <Input
            placeholder="Ask about your pilgrimage..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            disabled={isLoading}
            className="border-amber-300 focus-visible:ring-amber-700"
          />
          <Button
            onClick={handleSendMessage}
            disabled={isLoading || !inputValue.trim()}
            className="bg-amber-700 hover:bg-amber-800 px-3"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-xs text-amber-700 mt-2">
          💡 Try: "What locations should I visit?", "Tell me about Ayodhya", or "Best time to visit"
        </p>
      </div>
    </div>
  );
}
