import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Award, Star, Download, MessageCircle } from "lucide-react";
import { ShareButtons } from "@/components/ShareButtons";

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface Badge {
  name: string;
  description: string;
  icon: string;
  requirement: string;
}

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [quizComplete, setQuizComplete] = useState(false);
  const [earnedBadges, setEarnedBadges] = useState<string[]>([]);

  // Load saved progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("quizBadges");
    if (saved) {
      try { setEarnedBadges(JSON.parse(saved)); } catch { }
    }
  }, []);

  const questions: Question[] = [
    {
      id: 1,
      question: "What is the name of Rama's father, the king of Ayodhya?",
      options: ["Janaka", "Dashrath", "Vikrama", "Bharat"],
      correct: 1,
      explanation: "King Dashrath was Rama's father and the ruling monarch of Ayodhya. The vow he made to Queen Kaikeyi led to Rama's 14-year exile."
    },
    {
      id: 2,
      question: "Who broke Shiva's bow to win Sita's hand in marriage?",
      options: ["Lakshman", "Hanuman", "Rama", "Sugriva"],
      correct: 2,
      explanation: "Rama broke the legendary bow of Shiva at Sita's Swayamvar in Janakpur, proving himself worthy of marrying her."
    },
    {
      id: 3,
      question: "What was the duration of Rama's exile?",
      options: ["7 years", "10 years", "14 years", "21 years"],
      correct: 2,
      explanation: "Rama was exiled for 14 years as per Queen Kaikeyi's boon. This period is called 'Vanvas' - the forest exile."
    },
    {
      id: 4,
      question: "Which location is known as the birthplace of Hanuman?",
      options: ["Hampi", "Anjanadri Hill", "Pampa Sarovar", "Kishkindha"],
      correct: 1,
      explanation: "Anjanadri Hill in the Hampi region is revered as the birthplace of Hanuman, the monkey deity of unwavering devotion."
    },
    {
      id: 5,
      question: "Who was the king of demons that Rama defeated?",
      options: ["Kumbhakarna", "Ravana", "Hiranyaksha", "Prahrada"],
      correct: 1,
      explanation: "Ravana, the ten-headed demon king of Lanka, was the primary antagonist. Rama defeated him to rescue Sita and restore dharma."
    },
    {
      id: 6,
      question: "What is the name of the legendary bridge built by Rama's army?",
      options: ["Gandak Bridge", "Ram Setu", "Yamuna Bridge", "Sarayu Bridge"],
      correct: 1,
      explanation: "Ram Setu (also called Adam's Bridge) was built by the Vanara army across the ocean to reach Lanka, using floating stones inscribed with Rama's name."
    },
    {
      id: 7,
      question: "Who is Rama's devoted younger brother who followed him into exile?",
      options: ["Bharat", "Lakshman", "Shatrughna", "Vibhishan"],
      correct: 1,
      explanation: "Lakshman was Rama's devoted younger brother who forsook everything to follow him into exile and served him faithfully."
    },
    {
      id: 8,
      question: "In which forest did Sita get abducted by Ravana?",
      options: ["Dandakaranya", "Panchavati", "Chitrakoot", "Aranya"],
      correct: 1,
      explanation: "Sita was abducted from the Panchavati area in the Nashik region while Rama was chasing the magical golden deer."
    },
    {
      id: 9,
      question: "What is the name of the monkey king who allied with Rama?",
      options: ["Bali", "Sugriva", "Hanuman", "Nala"],
      correct: 1,
      explanation: "Sugriva was the monkey king who became Rama's devoted ally in the quest to rescue Sita from Ravana."
    },
    {
      id: 10,
      question: "How many books (Kands) are in the original Ramayana?",
      options: ["Five", "Six", "Seven", "Eight"],
      correct: 2,
      explanation: "The Ramayana contains seven books: Bala Kand, Ayodhya Kand, Aranya Kand, Kishkindha Kand, Sundara Kand, Yuddha Kand, and Uttara Kand."
    }
  ];

  const badges: Badge[] = [
    {
      name: "Ram Bhakt",
      description: "Devoted follower of Ram's teachings",
      icon: "🙏",
      requirement: "Score above 60%"
    },
    {
      name: "Ramayana Scholar",
      description: "Deep knowledge of the epic",
      icon: "📚",
      requirement: "Score above 80%"
    },
    {
      name: "Vanvasi",
      description: "Understands Ram's exile journey",
      icon: "🌳",
      requirement: "Answer 3+ forest-related questions correctly"
    },
    {
      name: "Hanuman Sena",
      description: "Devoted like Hanuman",
      icon: "🐵",
      requirement: "Complete entire quiz"
    }
  ];

  const handleAnswer = (optionIdx: number) => {
    if (answered) return;

    setSelected(optionIdx);
    setAnswered(true);

    if (optionIdx === questions[currentQuestion].correct) {
      const newScore = score + 1;
      setScore(newScore);

      // Award badges
      const percentage = ((newScore + 1) / questions.length) * 100;
      if (percentage >= 80 && !earnedBadges.includes("Ramayana Scholar")) {
        setEarnedBadges([...earnedBadges, "Ramayana Scholar"]);
      } else if (percentage >= 60 && !earnedBadges.includes("Ram Bhakt")) {
        setEarnedBadges([...earnedBadges, "Ram Bhakt"]);
      }
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      const finalBadges = [...earnedBadges, "Hanuman Sena"];
      setEarnedBadges(finalBadges);
      localStorage.setItem("quizBadges", JSON.stringify(finalBadges));
      localStorage.setItem("quizHighScore", String(Math.max(score, parseInt(localStorage.getItem("quizHighScore") || "0"))));
      setQuizComplete(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setAnswered(false);
    setSelected(null);
    setQuizComplete(false);
    setEarnedBadges([]);
  };

  if (quizComplete) {
    const percentage = (score / questions.length) * 100;

    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <Navigation />

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
          <div className="text-center mb-8">
            <Trophy className="w-24 h-24 text-amber-700 mx-auto mb-4" />
            <h1 className="font-playfair font-bold text-4xl text-amber-950 mb-4">
              Quiz Complete!
            </h1>
            <p className="text-xl text-amber-900 mb-4">
              You scored <span className="font-bold text-amber-700">{score} out of {questions.length}</span>
            </p>
            <div className="text-5xl font-bold text-amber-700 mb-4">
              {percentage.toFixed(0)}%
            </div>
          </div>

          {/* Score Feedback */}
          <Card className="border-amber-200 mb-8">
            <CardContent className="pt-6">
              <p className="text-center text-amber-900 text-lg mb-4">
                {percentage >= 80 && "🌟 Excellent! You're a true Ramayana scholar!"}
                {percentage >= 60 && percentage < 80 && "✨ Great! You have good knowledge of the Ramayana!"}
                {percentage >= 40 && percentage < 60 && "📖 Good effort! Keep exploring the Ramayana!"}
                {percentage < 40 && "🙏 Keep learning! Dive deeper into the sacred stories!"}
              </p>
            </CardContent>
          </Card>

          {/* Earned Badges */}
          {earnedBadges.length > 0 && (
            <Card className="border-amber-200 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-950 flex items-center gap-2">
                  <Award className="w-6 h-6" />
                  Badges Earned
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {earnedBadges.map((badgeName) => {
                    const badge = badges.find((b) => b.name === badgeName);
                    return (
                      badge && (
                        <div
                          key={badgeName}
                          className="p-4 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-700 text-center"
                        >
                          <div className="text-5xl mb-2">{badge.icon}</div>
                          <p className="font-bold text-amber-950 mb-1">{badge.name}</p>
                          <p className="text-sm text-amber-800">{badge.description}</p>
                        </div>
                      )
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          )}

          {/* All Available Badges */}
          <Card className="border-amber-200 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-950">Available Badges</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {badges.map((badge, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-lg border-2 ${earnedBadges.includes(badge.name)
                        ? "border-amber-700 bg-gradient-to-br from-amber-50 to-orange-50"
                        : "border-gray-300 bg-gray-50 opacity-60"
                      }`}
                  >
                    <div className="text-4xl mb-2">{badge.icon}</div>
                    <p className="font-bold text-amber-950 mb-1">{badge.name}</p>
                    <p className="text-sm text-amber-800 mb-2">{badge.description}</p>
                    <p className="text-xs text-gray-600">{badge.requirement}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Share Your Result */}
          <Card className="border-amber-200 mb-8">
            <CardContent className="pt-6">
              <div className="text-center mb-4">
                <p className="font-bold text-amber-950 text-lg mb-2">📲 Share Your Result!</p>
                <p className="text-sm text-amber-800">Challenge your friends to beat your score</p>
              </div>
              <div className="flex justify-center">
                <ShareButtons
                  title={`I scored ${score}/${questions.length} (${percentage.toFixed(0)}%) on the Ramayana Quiz at ShriramJourney.com! 🙏 Can you beat my score?`}
                />
              </div>
            </CardContent>
          </Card>

          <Button onClick={restartQuiz} className="w-full bg-amber-700 hover:bg-amber-800 h-12">
            Retake Quiz
          </Button>
        </div>

        <Footer />
      </div>
    );
  }

  const question = questions[currentQuestion];
  const isCorrect = selected === question.correct;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navigation />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        <div className="mb-8">
          <h1 className="font-playfair font-bold text-4xl text-amber-950 mb-2">
            Ramayana Quiz Challenge
          </h1>
          <p className="text-amber-900">Test your knowledge and earn badges!</p>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-amber-900">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-semibold text-amber-700">
              Score: {score}
            </span>
          </div>
          <div className="w-full bg-amber-200 rounded-full h-2">
            <div
              className="bg-amber-700 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <Card className="border-amber-200 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-950">{question.question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                disabled={answered}
                className={`w-full p-4 rounded-lg border-2 transition text-left font-medium ${!answered
                    ? "border-amber-200 hover:border-amber-700 hover:bg-amber-50 cursor-pointer"
                    : selected === idx
                      ? isCorrect
                        ? "border-green-500 bg-green-50 text-green-900"
                        : "border-red-500 bg-red-50 text-red-900"
                      : idx === question.correct
                        ? "border-green-500 bg-green-50 text-green-900"
                        : "border-amber-200 bg-gray-50 text-gray-500 opacity-50"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selected === idx
                        ? isCorrect
                          ? "border-green-500 bg-green-500"
                          : "border-red-500 bg-red-500"
                        : idx === question.correct && answered
                          ? "border-green-500 bg-green-500"
                          : "border-amber-400"
                      }`}
                  >
                    {selected === idx && <Star className="w-4 h-4 text-white" />}
                    {idx === question.correct && answered && (
                      <span className="text-white text-sm">✓</span>
                    )}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            ))}

            {answered && (
              <div className={`p-4 rounded-lg ${isCorrect ? "bg-green-50 border-l-4 border-green-500" : "bg-blue-50 border-l-4 border-blue-500"}`}>
                <p className={`font-semibold mb-2 ${isCorrect ? "text-green-900" : "text-blue-900"}`}>
                  {isCorrect ? "✓ Correct!" : "ℹ️ Explanation"}
                </p>
                <p className={isCorrect ? "text-green-800" : "text-blue-800"}>
                  {question.explanation}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {answered && (
          <Button onClick={handleNext} className="w-full bg-amber-700 hover:bg-amber-800 h-12">
            {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
          </Button>
        )}
      </div>

      <Footer />
    </div>
  );
}
