import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface TimelineEvent {
  phase: string;
  events: {
    title: string;
    description: string;
    significance: string;
    location: string;
    verse?: string;
  }[];
}

export default function Timeline() {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(0);

  const timeline: TimelineEvent[] = [
    {
      phase: "Birth & Early Life",
      events: [
        {
          title: "Birth of Rama",
          description: "Rama is born to King Dashrath and Queen Kausalya in Ayodhya. The entire kingdom celebrates with joy and festivities. Sage Vashistha names him Rama and predicts his divine role in restoring dharma.",
          significance: "The Avatar of Vishnu takes human form to establish dharma on Earth",
          location: "Ayodhya",
          verse: "Valmiki Ramayana, Bala Kand"
        },
        {
          title: "Education at Vashistha Ashram",
          description: "Young Rama studies under Sage Vashistha, learning Vedas, martial arts, and the principles of righteous governance. His brothers Lakshman, Bharat, and Shatrughna also receive education alongside him.",
          significance: "Rama masters all knowledge required to be the ideal king and dharmic leader",
          location: "Sage Vashistha's Ashram, Ayodhya"
        },
        {
          title: "Sita Swayamvar",
          description: "King Janaka announces a Swayamvar for his daughter Sita. Princes from across the kingdom arrive to win her hand. Rama breaks the legendary Shiva bow and wins Sita's heart.",
          significance: "Union of Rama and Sita - the divine masculine and feminine principles",
          location: "Janakpur (Mithila)"
        },
        {
          title: "Marriage of Rama and Sita",
          description: "A grand royal wedding ceremony celebrates the union of Rama and Sita. The kingdoms of Ayodhya and Videha are united through this divine marriage.",
          significance: "Symbol of perfect divine love and partnership",
          location: "Ayodhya"
        }
      ]
    },
    {
      phase: "Exile Begins (Vanvas)",
      events: [
        {
          title: "Kaikeyi's Boons Activated",
          description: "Queen Kaikeyi, influenced by her maid Manthara, demands that King Dashrath grant her two boons. She asks for Bharat's coronation and Rama's exile for 14 years. Though Dashrath is devastated, Rama accepts without protest.",
          significance: "Rama prioritizes his father's promise over personal desires, exemplifying dharma",
          location: "Ayodhya Palace"
        },
        {
          title: "Rama's Departure",
          description: "Rama leaves Ayodhya with Sita and Lakshman. The entire city grieves. Rama asks everyone to focus on serving Bharat during his absence.",
          significance: "Beginning of the divine plan to eliminate evil and restore righteousness",
          location: "Ayodhya"
        },
        {
          title: "First Night at Tamasa River",
          description: "Rama, Sita, and Lakshman rest for the first night at the banks of the Tamasa River. The separation from home and loved ones weighs heavily, but Rama remains steadfast in his duty.",
          significance: "Symbol of detachment and acceptance of fate with equanimity",
          location: "Tamasa River, Uttar Pradesh"
        },
        {
          title: "Meeting with Guha",
          description: "The boatman king Guha welcomes Rama with unparalleled devotion. He ferries them across the Ganges and pledges eternal service.",
          significance: "Demonstrates that devotion transcends caste and social status",
          location: "Shringaverpur, Prayagraj"
        },
        {
          title: "Bharat's Journey to Chitrakoot",
          description: "Learning of Rama's exile, Bharat rushes to find him at Chitrakoot. He pleads with Rama to return, but Rama refuses to break his father's vow.",
          significance: "Bharat accepts Rama's decision and rules as regent with Rama's wooden sandals",
          location: "Chitrakoot"
        }
      ]
    },
    {
      phase: "Forest Exile (Vanvas in Dandakaranya)",
      events: [
        {
          title: "Life in the Forest",
          description: "Rama, Sita, and Lakshman live as hermits in the forest. Rama teaches Sita about nature and the ways of ascetics. They encounter various sages and demons.",
          significance: "Years of testing and preparation for the ultimate dharmic battle",
          location: "Dandakaranya Forest, Central India"
        },
        {
          title: "Surpanakha Episode",
          description: "Ravana's sister Surpanakha is attracted to Rama. When rejected, she attempts to harm Sita. Lakshman cuts off her nose and ears in self-defense.",
          significance: "Serves as the catalyst for Ravana's revenge and Sita's abduction",
          location: "Panchavati, Nashik"
        },
        {
          title: "The Golden Deer",
          description: "A magical golden deer enchants Sita. Rama, suspecting it to be a demon in disguise, follows it to hunt while asking Lakshman to protect Sita.",
          significance: "Illusion leads to the separation that changes the course of the narrative",
          location: "Tapovan, Nashik"
        },
        {
          title: "Sita's Abduction by Ravana",
          description: "Ravana, disguised as a wandering sage, arrives at the hermitage. He abducts the unprotected Sita and flies to Lanka. Sita cries out for Rama but is taken across the sea.",
          significance: "The central crisis of the epic - testing Sita's virtue and Rama's resolve",
          location: "Panchavati"
        }
      ]
    },
    {
      phase: "Search for Sita",
      events: [
        {
          title: "Meeting Sugriva",
          description: "Rama meets Sugriva, the monkey king, at the Pampa Sarovar. Sugriva tells Rama about his conflict with his brother Bali and agrees to help find Sita in exchange.",
          significance: "Formation of the alliance that will lead to Sita's rescue",
          location: "Pampa Sarovar, Karnataka"
        },
        {
          title: "Defeat of Bali",
          description: "Rama defeats Bali in combat with an arrow. Sugriva is restored to his throne and becomes Rama's devoted ally.",
          significance: "Justice is established; the righteous king is restored to power",
          location: "Kishkindha, Hampi"
        },
        {
          title: "Hanuman's Leap",
          description: "Hanuman, the great monkey devotee, undertakes the impossible task of leaping across the sea to Lanka to find Sita. He crosses hundreds of miles in a single bound.",
          significance: "Exemplifies unwavering faith and superhuman dedication to the divine",
          location: "From Mahendragiri Hill to Lanka"
        },
        {
          title: "Hanuman Finds Sita",
          description: "Hanuman discovers Sita in the Ashok Vatika garden, guarded by demons. He reveals himself and gives her Rama's ring, assuring her of imminent rescue.",
          significance: "Sita's faith in Rama is reaffirmed; hope is restored",
          location: "Ashok Vatika, Lanka"
        },
        {
          title: "Hanuman's Encounter with Ravana",
          description: "Hanuman confronts Ravana, describing Rama's greatness and threatening Ravana's downfall. Ravana, enraged, orders Hanuman's tail to be set on fire.",
          significance: "The ultimate expression of devotion and courage in the face of evil",
          location: "Ravana's Court, Lanka"
        }
      ]
    },
    {
      phase: "War and Victory",
      events: [
        {
          title: "Building the Bridge",
          description: "Rama's Vanara army builds the legendary Ram Setu (bridge) across the ocean to reach Lanka. Floating stones inscribed with Rama's name support the bridge.",
          significance: "Faith and devotion manifest as physical reality",
          location: "Palk Strait, between India and Sri Lanka"
        },
        {
          title: "The Great War",
          description: "The epic battle between Rama's forces and Ravana's army lasts several days. Warriors on both sides display extraordinary courage. Hanuman, Sugriva, and Lakshman fight valiantly alongside Rama.",
          significance: "The ultimate clash between dharma and adharma",
          location: "Lanka Battlefield"
        },
        {
          title: "Death of Indrajit",
          description: "Lakshman defeats Indrajit, Ravana's powerful son, after a fierce battle. Indrajit's death is a turning point in the war.",
          significance: "The tide turns decisively in Rama's favor",
          location: "Lanka"
        },
        {
          title: "Final Battle with Ravana",
          description: "Rama confronts Ravana in single combat. After a long battle, Rama's arrow strikes Ravana in the heart. Ravana falls, and evil is vanquished.",
          significance: "Triumph of dharma; Rama fulfills his incarnation purpose",
          location: "Lanka"
        },
        {
          title: "Reunion of Rama and Sita",
          description: "After Ravana's defeat, Rama and Sita are reunited. The moment represents the ultimate victory of love and faith.",
          significance: "Resolution of the central conflict; love and dharma triumph",
          location: "Lanka"
        }
      ]
    },
    {
      phase: "Return to Ayodhya",
      events: [
        {
          title: "Journey Homeward",
          description: "Rama, Sita, and Lakshman, along with Hanuman and the Vanara army, begin their triumphant journey back to Ayodhya. They visit sacred places and are welcomed by all kingdoms.",
          significance: "The hero's return after completing his divine mission",
          location: "Multiple locations across India"
        },
        {
          title: "Arrival in Ayodhya",
          description: "Rama, Sita, and Lakshman return to Ayodhya after 14 years. The entire city is illuminated with millions of lamps to welcome their beloved prince. The celebration is unmatched in joy.",
          significance: "The long exile ends; the kingdom is reunited with its rightful prince",
          location: "Ayodhya"
        },
        {
          title: "Coronation of Rama",
          description: "Rama is crowned king in a grand ceremony. He becomes the undisputed ruler and begins the golden age of Ram Rajya - perfect governance where all subjects are happy and dharma prevails.",
          significance: "Establishment of the ideal kingdom; the divine purpose is fulfilled",
          location: "Ayodhya"
        }
      ]
    },
    {
      phase: "Ram Rajya and Legacy",
      events: [
        {
          title: "The Ideal Kingdom",
          description: "During Ram Rajya, there is no poverty, disease, or suffering. All subjects live virtuously. The kingdom prospers with justice and righteousness at its foundation.",
          significance: "Vision of an ideal society based on dharma and virtue",
          location: "Ayodhya Kingdom"
        },
        {
          title: "Sita's Exile and Redemption",
          description: "Due to public rumors about Sita's captivity, Rama reluctantly exiles her. She gives birth to Luv and Kush in Valmiki's ashram. Eventually, all are reconciled.",
          significance: "The complexity of duty and personal bonds; ultimate vindication",
          location: "Valmiki Ashram, Bithoor"
        },
        {
          title: "Rama's Final Journey",
          description: "After thousands of years of perfect rule, Rama performs his final duties and enters the Sarayu River in Jal Samadhi, returning to his divine abode.",
          significance: "The cycle completes; the Avatar returns to the divine realm",
          location: "Sarayu River, Guptar Ghat, Ayodhya"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50">
      <Navigation />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* Hero Section */}
        <div className="mb-16 bg-gradient-to-br from-amber-700 via-amber-800 to-amber-950 text-white rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.4),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.3),transparent_50%)]"></div>
          </div>
          <div className="relative z-10">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-4 border border-white/30">
              📖 EPIC NARRATIVE
            </div>
            <h1 className="font-playfair font-bold text-5xl md:text-7xl mb-6 leading-tight">
              The Ramayana<br/>Timeline
            </h1>
            <p className="text-lg md:text-xl text-amber-100 max-w-3xl leading-relaxed">
              A chronological journey through <span className="font-bold text-white">7 pivotal phases</span> of Shri Ram's divine life, spanning his birth, trials, victories, and eternal legacy. Discover the <span className="font-bold text-white">spiritual significance</span> of each moment.
            </p>
            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <p className="text-sm text-amber-100">
                <span className="font-bold">Total Events:</span> {timeline.reduce((sum, phase) => sum + phase.events.length, 0)} significant moments across the divine narrative
              </p>
            </div>
          </div>
        </div>

        {/* Phase Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-playfair font-bold text-2xl text-amber-950 flex items-center gap-2">
              <span className="text-3xl">📍</span> Journey Progress
            </h2>
            <p className="text-sm font-bold text-amber-700 bg-amber-100 px-4 py-2 rounded-full">
              {timeline.length} Phases • {timeline.reduce((sum, phase) => sum + phase.events.length, 0)} Events
            </p>
          </div>
          <div className="w-full bg-gradient-to-r from-amber-100 to-orange-100 rounded-full h-3 shadow-md border-2 border-amber-200 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-red-600 via-orange-500 to-purple-600 rounded-full transition-all duration-500"
              style={{ width: `${(expandedPhase ? expandedPhase + 1 : 0) / timeline.length * 100}%` }}
            ></div>
          </div>
          <div className="mt-3 flex justify-between text-xs font-bold text-amber-700">
            <span>Birth & Early Life</span>
            <span>Ram Rajya & Legacy</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-5">
          {timeline.map((phase, phaseIdx) => {
            const phaseColors = [
              "from-red-600 to-red-700",
              "from-orange-600 to-orange-700",
              "from-yellow-600 to-amber-700",
              "from-green-600 to-emerald-700",
              "from-blue-600 to-cyan-700",
              "from-purple-600 to-violet-700",
              "from-pink-600 to-rose-700",
            ];
            const phaseEmoji = ["👶", "🚶", "🌲", "🔍", "👑", "✨", "💫"];
            const phaseBgColors = [
              "from-red-50 to-orange-50",
              "from-orange-50 to-amber-50",
              "from-yellow-50 to-orange-50",
              "from-green-50 to-emerald-50",
              "from-blue-50 to-cyan-50",
              "from-purple-50 to-violet-50",
              "from-pink-50 to-rose-50",
            ];

            return (
              <div key={phaseIdx} className="group">
                <button
                  onClick={() => setExpandedPhase(expandedPhase === phaseIdx ? null : phaseIdx)}
                  className={`w-full p-6 rounded-2xl border-3 bg-gradient-to-r ${phaseColors[phaseIdx]} text-white hover:shadow-2xl transition-all transform hover:-translate-y-1 flex items-center justify-between group ${
                    expandedPhase === phaseIdx ? "shadow-2xl ring-2 ring-offset-2 ring-offset-amber-100" : ""
                  }`}
                >
                  <div className="flex items-center gap-4 text-left">
                    <span className="text-4xl">{phaseEmoji[phaseIdx]}</span>
                    <div>
                      <p className="text-xs font-bold opacity-90 uppercase tracking-wide">Phase {phaseIdx + 1} of 7</p>
                      <h3 className="font-playfair font-bold text-2xl leading-tight">{phase.phase}</h3>
                      <p className="text-sm opacity-90 mt-1">{phase.events.length} significant events</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-3xl font-bold">{phase.events.length}</p>
                      <p className="text-xs opacity-90">Events</p>
                    </div>
                    {expandedPhase === phaseIdx ? (
                      <ChevronUp className="w-8 h-8 transition-transform group-hover:scale-125" />
                    ) : (
                      <ChevronDown className="w-8 h-8 transition-transform group-hover:scale-125" />
                    )}
                  </div>
                </button>

                {expandedPhase === phaseIdx && (
                  <div className={`mt-5 space-y-4 pl-6 border-l-6 border-gradient-to-b from-${phaseColors[phaseIdx].split(' ')[0]} to-transparent rounded-b-2xl bg-gradient-to-br ${phaseBgColors[phaseIdx]} p-6 border-3 border-t-0 border-r-3 border-b-3`}>
                    {phase.events.map((event, eventIdx) => (
                      <div
                        key={eventIdx}
                        className="group/event relative"
                      >
                        {/* Timeline dot */}
                        <div className="absolute -left-9 top-2 w-6 h-6 rounded-full border-4 border-white shadow-lg"
                             style={{
                               backgroundColor: phaseColors[phaseIdx].split(' ')[0] === 'from-red-600' ? '#dc2626' :
                               phaseColors[phaseIdx].split(' ')[0] === 'from-orange-600' ? '#ea580c' :
                               phaseColors[phaseIdx].split(' ')[0] === 'from-yellow-600' ? '#ca8a04' :
                               phaseColors[phaseIdx].split(' ')[0] === 'from-green-600' ? '#16a34a' :
                               phaseColors[phaseIdx].split(' ')[0] === 'from-blue-600' ? '#2563eb' :
                               phaseColors[phaseIdx].split(' ')[0] === 'from-purple-600' ? '#9333ea' :
                               '#e11d48'
                             }}
                        ></div>

                        <Card className={`border-3 border-gray-300 bg-white hover:shadow-2xl transition-all transform hover:-translate-y-1 hover:scale-105`}>
                          <CardContent className="pt-8 pb-8 px-8">
                            <div className="space-y-4">
                              <div>
                                <div className="flex items-start gap-3 mb-3">
                                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-amber-700 to-orange-700 text-white rounded-full text-xs font-bold">
                                    #{eventIdx + 1}
                                  </span>
                                  <span className="inline-block px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold">
                                    Event
                                  </span>
                                </div>
                                <h3 className={`font-playfair font-bold text-xl md:text-2xl mb-3 bg-gradient-to-r ${phaseColors[phaseIdx]} bg-clip-text text-transparent`}>
                                  {event.title}
                                </h3>
                                <p className="text-amber-900 text-base leading-relaxed mb-4">
                                  {event.description}
                                </p>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5 border-t-2 border-gray-200">
                                <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-l-4 border-purple-600">
                                  <p className="text-xs font-bold text-purple-800 uppercase mb-2">✨ Spiritual Significance</p>
                                  <p className="text-sm text-purple-900 leading-relaxed font-medium">{event.significance}</p>
                                </div>
                                <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-l-4 border-blue-600">
                                  <p className="text-xs font-bold text-blue-800 uppercase mb-2">📍 Sacred Location</p>
                                  <p className="text-sm text-blue-900 leading-relaxed font-medium">{event.location}</p>
                                </div>
                              </div>

                              {event.verse && (
                                <div className="p-4 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl border-2 border-amber-400 shadow-sm">
                                  <p className="text-xs font-bold text-amber-800 mb-2 flex items-center gap-2">📚 Sacred Source</p>
                                  <p className="text-sm italic text-amber-950 font-medium">{event.verse}</p>
                                </div>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Key Lessons */}
        <Card className="border-amber-200 mt-12">
          <CardContent className="pt-6">
            <h2 className="font-playfair font-bold text-2xl text-amber-950 mb-6">Key Lessons from the Timeline</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Dharma always prevails over adharma (righteousness over evil)",
                "Unwavering devotion to duty leads to spiritual perfection",
                "Sacrifice and duty are higher than personal comfort",
                "Love and faith are eternal and indestructible",
                "Evil contains the seeds of its own destruction",
                "The divine works through human actions and dedication"
              ].map((lesson, idx) => (
                <div key={idx} className="p-3 bg-amber-50 rounded border-l-4 border-amber-700">
                  <p className="text-sm text-amber-900">✨ {lesson}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
