"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Building,
  Download,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { MobileNav } from "@/components/mobile-nav"
import { Footer } from "@/components/Footer"

export default function CommitteesPage() {
  const [selectedCommittee, setSelectedCommittee] = useState<number | null>(null)
  // HS Committees (randomized order)
  const hsCommittees = [
    {
      name: "Organization of Islamic Cooperation",
      acronym: "OIC",
      topic: "Iran's nuclear weapons",
      difficulty: "Intermediate",
      logo: "/committee_logos/OIC Logo.png",
      description:
        "In recent months, tensions have risen in the Middle East after Israel launched a full-scale attack on Iran's nuclear and military facilities in June 2025 because of a first-order concern that Iran's nuclear weapons might be an existential threat to Israel. Iran has not confirmed whether it possesses nuclear weapons; this uncertainty has caused concern about the spread of nuclear weapons and the rising conflict in the region. Experts warn that mistakes or poor communication may lead to a greater scale conflict that could involve nuclear weapons. For the Organization of Islamic Cooperation (OIC), this raises important questions about regional security, preventing the spread of nuclear weapons, and encouraging peace through diplomacy and cooperation.",
      chair: {
        name: "Luna Jervis",
        image: "/committee_portraits/Luna Jervis.jpeg",
      },
      coChair: {
        name: "Luciana Benavidez",
        image: "/committee_portraits/Luciana Benavides.jpeg",
      },
      language: "English",
      level: "HS",
      featured: false,
    },
    {
      name: "Food and Agriculture Organization",
      acronym: "FAO",
      topic: "Food Security: establishing consumerism rights in the 21st century",
      difficulty: "Beginner",
      logo: "/committee_logos/FAO Logo.jpg",
      description:
        "In the contemporary global system, food security has also come to refer to safety, transparency, and consumer confidence in food, apart from the commonly recognized issue of food availability. With the extension of the global food system, the growing disparity in the food handling standards of different nations regarding food labeling, certification, limits of pesticide residues on food, etc., has now emerged as an issue related to food safety, creating public health hazards as well as hindering international food trade. Another factor related to food security is the practice of the use of vague and misleading descriptions of food, which has now come to compromise the public's food selection capabilities as well. Some have argued to execute stricter measures in food security through the implementation of the harmonized food security standards of various countries, while others have argued to implement these measures gradually to ensure food security of the food vendors as well.",
      chair: {
        name: "Noah Lang",
        image: "/placeholder.svg?height=80&width=80",
      },
      coChair: {
        name: "Galia Luconi",
        image: "/committee_portraits/Galia Luconi.jpeg",
      },
      language: "English",
      level: "HS",
      featured: false,
    },
    {
      name: "Historical United Nations Security Council",
      acronym: "Historical UNSC",
      topic: "Checkpoint Crisis: The Berlin Wall Committee",
      difficulty: "Advanced",
      logo: "/committee_logos/UN-Logo.png",
      description:
        "On August 13th, 1961, East Germany, along with the Soviets, began building the Berlin Wall, which separated West Berlin. This caused a turning point in the Cold War as it clearly indicated a division between the capitalist United States and the communist Soviet Union. The United States and the Soviet Union had had many disagreements in the past, but the Iron Curtain caused political, social, and economic problems all over the world. Public awareness and opinion were directly affected by the construction of the Berlin Wall, both in Germany and internationally. This event occurred after World War II ended and the country was split into the Federal Republic of Germany (West) and the German Democratic Republic (East). Organizations were created, such as NATO (North Atlantic Treaty Organization), that allied with the United States, while the Warsaw Pact was created to ally with the Soviet Union, causing political turmoil and separation. Going back in time, this problem could have been approached differently to lessen the effects of the war and the Iron Curtain.",
      chair: {
        name: "Elena Sáenz",
        image: "/committee_portraits/Elena Saenz.jpeg",
      },
      coChair: {
        name: "Alexa Kofoed",
        image: "/committee_portraits/Alexa Kofoed.jpeg",
      },
      language: "English",
      level: "HS",
      featured: false,
    },
    {
      name: "Asamblea Legislativa",
      acronym: "Asamblea Legislativa",
      topic: "Voto: deber o derecho?",
      difficulty: "Intermediate",
      logo: "/committee_logos/AsambleaLegislativa.png",
      description:
        "El abstencionismo costarricense superó el 40% en las elecciones pasadas (Redondo 2024), alarmando a los ciudadanos sobre la verdadera democracia y confianza política en el país. Esto empezó a activar debates sobre el futuro del voto costarricense, junto con la pregunta del voto como derecho libre o deber obligatorio. Por ende, en este comité de la Asamblea Legislativa, se analizará desde un punto de vista legal, social y político, las consecuencias de las diferentes posturas frente a este conflicto. Se utilizarán modelos internacionales como referencias, incluyendo los de Bélgica y Australia, que han aumentado los niveles de participación ciudadana para desarrollar nuestro propio plan de acción de acuerdo a la práctica del sufragio en Costa Rica. Sin embargo, las estructuras de Bélgica, Australia y otros han sido cuestionadas y criticadas por no garantizar una ciudadanía más informada ni solucionar el desinterés político. De este modo, es crucial evaluar y analizar de múltiples perspectivas los ejemplares extranjeros, al igual que las implicaciones nacionales del derecho al voto para garantizar una participación equitativa y rigor democrático en nuestro propio país.",
      chair: {
        name: "Maria Alexandra Sauter",
        image: "/placeholder.svg?height=80&width=80",
      },
      coChair: {
        name: "Emma Neurohr",
        image: "/placeholder.svg?height=80&width=80",
      },
      language: "Spanish",
      level: "HS",
      featured: false,
    },
    {
      name: "United Nations Educational, Scientific and Cultural Organization",
      acronym: "UNESCO",
      topic: "Bridging the Global Digital Divide in Education",
      difficulty: "Intermediate",
      logo: "/committee_logos/UNESCO logo.png",
      description:
        "The global digital divide in education refers to unequal access to technology, digital literacy, reliable connectivity, and the skills required to use technology effectively, creating significant disadvantages for those who cannot actively participate in online learning and other digital educational activities. The rapid and widespread shift to remote learning during the COVID-19 pandemic further revealed and worsened the gap between connected and disconnected learners. The issue shows unequal access to a pillar of development: quality education in an ever-evolving digital era. Furthermore, organizations such as UNICEF and UNESCO highlighted how many regions are unable to prioritize digital infrastructure, technological training, or affordability, which hinders academic performance. Although governments have tried to handout access, responses often weren't enough. Therefore, reinforcing the need for universal and equitable digital resources is vital for students to not have to face technological, social, cultural, and economic disparities, as a consequence for lack of connectivity.",
      chair: {
        name: "Valentina Barzuna",
        image: "/placeholder.svg?height=80&width=80",
      },
      coChair: {
        name: "Lucía Shum",
        image: "/committee_portraits/Lucia Shum.jpeg",
      },
      language: "English",
      level: "HS",
      featured: false,
    },
    {
      name: "The Global Council on Mutant Affairs (Marvel X-Men)",
      acronym: "Special Committee: GCMA",
      topic: "Addressing the Complex Division Between Mutants and Humans",
      difficulty: "Intermediate",
      logo: "/committee_logos/GCMA Logo.jpg",
      description:
        "The mutants are much more than just simple superheroes and villains, tracing their roots back to the 1960s, they were made as allegories to marginalised groups in the United States, taking great inspiration from the Civil Rights movement. Similarly, although much more exaggerated, the Mutants' existence and actions raise complex questions about justice, coexistence, and civilian safety. Mutant abilities often lead to the misuse of power, causing mistrust across many sectors of society and government. Mutants face discrimination and persecution, leading to social tensions and violent confrontations, which sometimes escalate to extensive international conflict. The role of Mutants as victims, heroes, and villains places the world in a delicate position. While some strive to bridge understanding between Mutants and Humans, continuous mistrust and violence complicate efforts for peaceful coexistence and mutual regulations. The challenge remains in settling Mutants intrinsic values",
      chair: {
        name: "David Sandi",
        image: "/committee_portraits/David Sandi.jpeg",
      },
      coChair: {
        name: "Amanda Cabrera",
        image: "/committee_portraits/Amanda Cabrera.jpeg",
      },
      language: "English",
      level: "HS",
      featured: false,
    },
    {
      name: "Ad Hoc United Nations Security Council",
      acronym: "Ad Hoc United Nations Security Council",
      topic: "To be revealed day of conference!",
      difficulty: "Advanced",
      logo: "/committee_logos/UN-Logo.png",
      description:
        "An ad hoc session of the Security Council addressing urgent humanitarian crises. Delegates must navigate complex political dynamics while prioritizing human welfare and international stability.",
      chair: {
        name: "Tomas Villalobos",
        image: "/committee_portraits/Tomas Villalobos.jpeg",
      },
      coChair: {
        name: "Tomas Van der Laat",
        image: "/committee_portraits/Tomas van der laat.jpeg",
      },
      language: "English",
      level: "HS",
      featured: false,
    },
    {
      name: "Disarmament and International Security Committee",
      acronym: "DISEC",
      topic: "Pulling back the curtain on the military-industrial complex: Addressing the role of defense contractors in modern warfare",
      difficulty: "Intermediate",
      logo: "/committee_logos/DISEC Logo.png",
      description:
        "During President Dwight D. Eisenhower's farewell speech, he issued a warning regarding the 'unwarranted influence' of the military-industrial complex, a concept popularized by the later President himself, talking about the symbiotic relationship between a nation's military establishment and the defense industry supplying it. In today's world, this relationship is more powerful than ever, creating a self-sustaining cycle where the demand for weapons drives global warfare, and vice versa. With global defense spending reaching record highs, and conflicts such as the ones in Russia and the Middle East fueling unheard-of amounts of profits for defense contractors, accountability and morality have never been tested more than they are today. The escalation of violence throughout the past few years has caused a rise in military aid and defense budgets worldwide, with nations rushing to restock arsenals and acquire cutting-edge technologies. This arms race directly benefits defence contractors, they are ensuring that military spendings remain a top priority and their bank accounts continue growing. Nations have responded with calls for greater transparency and increases in budgets, but these efforts fail at addressing the root issue. This committee must move past these short-term repairs and develop a plan for extensive, long-term action.",
      chair: {
        name: "Claudia Escorriola",
        image: "/committee_portraits/Claudia Escorriola.jpeg",
      },
      coChair: {
        name: "Elena González",
        image: "/committee_portraits/Elena Gonzalez.jpeg",
      },
      language: "English",
      level: "HS",
      featured: false,
    },
    {
      name: "European Club Association",
      acronym: "ECA",
      topic: "The Future of European Club Football: The Debate of the Super League proposition and the Fight for the Soul of the Game",
      difficulty: "Intermediate",
      logo: "/committee_logos/ECA Logo.png",
      description:
        "A specialized committee examining the future of European football, addressing the controversial Super League proposal and its implications for the sport's integrity, tradition, and economic model.",
      chair: {
        name: "Ariel Araya",
        image: "/committee_portraits/Ariel Araya.jpeg",
      },
      coChair: {
        name: "Jorge Guardia",
        image: "/committee_portraits/Jorge Guardia.jpeg",
      },
      language: "English",
      level: "HS",
      featured: false,
    },
  ]

  // MS Committees (keep at end)
  const msCommittees = [
    {
      name: "United Nations Human Rights Council",
      acronym: "UNHRC",
      topic: "Addressing Human Right Concerns and Exploitation Along the Central Mediterranean Migration Route",
      difficulty: "Beginner",
      logo: "/committee_logos/UNHRC Logo.jpg",
      description:
        "Migration across the Mediterranean Sea remains the world's most dangerous route, accounting for nearly 70% of all deaths at sea. This crisis has taken a major appeal on global agendas. For decades, migration has been a shattering reality for countless families across these regions, driving families into deepened poverty and creating inhumane living conditions for countless people. These realities have fueled a cycle of instability and widespread human rights violations. Every single year, thousands of refugees embark on the dangerous journey of crossing between North Africa and the Middle East to Europe, seeking safety, economic opportunity, and the hope of a stable future free from conflict. Nonetheless, the lack of safe and legal migration pathways forces many people to rely on criminal gangs, corrupted officials, and unregulated transport providers. To protect human dignity and ensure the safety of migrants, we must urgently address this crisis with sustainable and coordinated solutions. It is essential to ensure that member states address both short term and long term solutions in order to secure safety in the region and bring stability to these vulnerable communities.",
      chair: {
        name: "Gabriela Valerio",
        image: "/committee_portraits/Gabriela Valerio.jpeg",
      },
      coChair: {
        name: "Gabriel Molina",
        image: "/committee_portraits/Gabriel Molina.jpeg",
      },
      language: "English",
      level: "MS",
      featured: false,
    },
    {
      name: "United Nations Office on Drugs and Crime",
      acronym: "UNODC",
      topic: "Marijuana: Public Health vs Organized Crime",
      difficulty: "Beginner",
      logo: "/committee_logos/UN-Logo.png",
      description:
        "Marijuana is the center of a major global issue, and therefore causes a big international debate. The main question is whether or not it should be legalized, focusing on how it directly affects public health, but also how it encourages organized crime. Many countries have a high public demand for marijuana, but low legal access to it. This creates the perfect environment for illegal sellers to rise. The prohibition of the drug has allowed organized crime to bloom and has incentivised violence. Other nations' concerns focus on citizens' well-being. Marijuana can have equal potential benefits and harms on human health. A main concern related to marijuana is the effect it can have on a young population, a population whose brain is still developing. Unregulated exposure to the drug could create extreme addiction and dependence. In recent years, public awareness and concern have grown, which has led to a divide between those who view marijuana as a criminal issue and those who view it as a health tool, highlighting its good and bad aspects in the industry. Countries like Luxembourg and Canada have legalized the recreational use of cannabis to fight the rise of black market sellers and their consequential violence on citizens. Other nations, like Saudi Arabia and Singapore, have enforced strict prohibition laws, which have perpetuated the illegal selling of marijuana. Huge global disparities on different nations' responses show the struggle of balancing crime prevention, but also prioritizing citizens' health. Short-term efforts can focus on regulating access and educating the public, while long-term efforts could target lowering organized crime rates and creating drug policies that align with social and scientific realities.",
      chair: {
        name: "Emma Holman",
        image: "/committee_portraits/Emma Holman.jpeg",
      },
      coChair: {
        name: "Paulina Castro",
        image: "/committee_portraits/Paulina Castro.jpeg",
      },
      language: "English",
      level: "MS",
      featured: false,
    },
    {
      name: "De la Guerra Fría a la Guerra Digital: La OTAN Frente a los Ciberataques",
      acronym: "OTAN",
      topic: "De la Guerra Fría a la Guerra Digital: La OTAN Frente a los Ciberataques",
      difficulty: "Beginner",
      logo: "/committee_logos/OTAN.png",
      description:
        "Hoy la guerra puede liberarse desde un teclado y los ciberataques se han convertido en algo más que en amenazas sin cara, se han vuelto un riesgo invisible pero peligroso que juega con la seguridad de todos los países. A raíz de los cambios a la manera en la que afrontamos los conflictos internacionales, la defensa ya no se limita únicamente a armas o ejércitos tradicionales. Las amenazas digitales han emergido como un nuevo campo de batalla donde los ciberataques van más allá de solo una pantalla. Pueden afectar infraestructuras críticas como hospitales, robar información sensible, hackear páginas del gobierno, y desestabilizar regiones. Esto representa un desafío directo a la seguridad colectiva, ya que aunque una guerra digital no cumpla con los parámetros de una física, representa un peligro a la integridad de todos los países. Para la OTAN esto implica un desafío enorme, proteger a sus miembros frente a enemigos casi imposibles de identificar. Aun así, la protección de todos requiere coordinación, reglas, parámetros y cooperación entre países.  Debido a esto surge la pregunta clave, ¿debe de ser considerado un ciberataque un acto de guerra en nuestro mundo actual? La respuesta no solo definirá estrategias militares, sino también estabilidad política y la tecnología de toda la alianza.",
      chair: {
        name: "Luciana Monge",
        image: "/committee_portraits/Luciana Monge.jpeg",
      },
      coChair: {
        name: "Lara Garita",
        image: "/committee_portraits/Lara Garita.jpeg",
      },
      language: "Spanish",
      level: "MS",
      featured: false,
    },
  ]

  const committees = [...hsCommittees, ...msCommittees]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-600/20 text-green-300 border-green-400/30"
      case "Intermediate":
        return "bg-yellow-600/20 text-yellow-300 border-yellow-400/30"
      case "Advanced":
        return "bg-red-600/20 text-red-300 border-red-400/30"
      default:
        return "bg-gray-600/20 text-gray-300 border-gray-400/30"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="LMUN Logo" width={60} height={20} />
              <span className="text-3xl font-bold text-white">LMUN</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link href="/committees" className="text-blue-400 font-medium">
                Committees
              </Link>
              <Link href="/gallery" className="text-white hover:text-blue-400 transition-colors">
                Gallery
              </Link>
              <Link href="/soon" className="text-white hover:text-blue-400 transition-colors">
                Conference Information
              </Link>
              <Link href="/resources" className="text-white hover:text-blue-400 transition-colors">
                Resources
              </Link>
              <Link href="/upload" className="text-white hover:text-blue-400 transition-colors">
                Upload Payment
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSedNwUoCCEAvbmzqY21JoNnDv9I5rdT0GOlxxfcjAFi-wv6DA/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                  Register Now
                </a>
              </Button>
            </div>
            <MobileNav />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-5 py-2 px-4 text-base bg-blue-600/20 text-blue-300 border-blue-400/30">
              <Building className="w-5 h-5 mr-2" />
              Conference Committees
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              EXPLORE OUR
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                DIVERSE COMMITTEES
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              From the Security Council to specialized agencies, discover the committee that matches your interests and
              experience level. Each committee offers unique challenges and learning opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Committees Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {committees.map((committee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card
                  onClick={() => setSelectedCommittee(index)}
                  className={`bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 hover:scale-[1.02] hover:shadow-xl cursor-pointer transition-all duration-300 h-full ${committee.featured ? "ring-2 ring-blue-400" : ""}`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center p-2">
                          <Image
                            src={committee.logo}
                            alt={`${committee.acronym} logo`}
                            width={64}
                            height={64}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">{committee.acronym}</h3>
                          <Badge className={getDifficultyColor(committee.difficulty)}>{committee.difficulty}</Badge>
                        </div>
                      </div>
                      {committee.featured && <Badge className="bg-blue-600 text-white">Featured</Badge>}
                    </div>

                    <h4 className="text-xl font-semibold text-white mb-2">{committee.name}</h4>
                    <p className="text-gray-300 mb-4 leading-relaxed">{committee.description}</p>

                    <div className="bg-blue-900/30 rounded-xl p-4 mb-6">
                      <h5 className="font-semibold text-blue-300 mb-2">Committee Topic:</h5>
                      <p className="text-white font-medium">{committee.topic}</p>
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                      <Badge className="bg-purple-600/20 text-purple-300 border-purple-400/30">
                        {committee.language}
                      </Badge>
                      <Badge className="bg-indigo-600/20 text-indigo-300 border-indigo-400/30">
                        {committee.level === "HS" ? "High School" : "Middle School"}
                      </Badge>
                    </div>

                    {/* Chair and Co-Chair Information */}
                    <div className="border-t border-white/10 pt-6 mb-6">
                      <h5 className="font-semibold text-white mb-4">Committee Leadership</h5>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <Image
                            src={committee.chair.image || "/placeholder.svg"}
                            alt={committee.chair.name}
                            width={120}
                            height={120}
                            className="w-24 h-24 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-semibold text-white">Chair: {committee.chair.name}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Image
                            src={committee.coChair.image || "/placeholder.svg"}
                            alt={committee.coChair.name}
                            width={120}
                            height={120}
                            className="w-24 h-24 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-semibold text-white">Co-Chair: {committee.coChair.name}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/10">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        <Download className="w-4 h-4 mr-2" />
                        Download Study Guide
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Committee Detail Modal */}
      <Dialog open={selectedCommittee !== null} onOpenChange={(open) => !open && setSelectedCommittee(null)}>
        <DialogContent className="max-w-6xl w-[90vw] max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 border-white/20 text-white">
          {selectedCommittee !== null && (
            <>
              <DialogHeader>
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white w-24 h-24 rounded-2xl flex items-center justify-center p-2">
                      <Image
                        src={committees[selectedCommittee].logo}
                        alt={`${committees[selectedCommittee].acronym} logo`}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <DialogTitle className="text-3xl font-bold text-white mb-2">
                        {committees[selectedCommittee].acronym}
                      </DialogTitle>
                      <div className="flex items-center gap-3">
                        <Badge className={getDifficultyColor(committees[selectedCommittee].difficulty)}>
                          {committees[selectedCommittee].difficulty}
                        </Badge>
                        {committees[selectedCommittee].featured && (
                          <Badge className="bg-blue-600 text-white">Featured</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{committees[selectedCommittee].name}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{committees[selectedCommittee].description}</p>
                </div>

                <div className="bg-blue-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-blue-300 mb-3 text-lg">Committee Topic:</h4>
                  <p className="text-white font-medium text-lg">{committees[selectedCommittee].topic}</p>
                </div>

                <div className="flex items-center gap-4">
                  <Badge className="bg-purple-600/20 text-purple-300 border-purple-400/30 text-base px-4 py-2">
                    {committees[selectedCommittee].language}
                  </Badge>
                  <Badge className="bg-indigo-600/20 text-indigo-300 border-indigo-400/30 text-base px-4 py-2">
                    {committees[selectedCommittee].level === "HS" ? "High School" : "Middle School"}
                  </Badge>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <h4 className="font-semibold text-white mb-4 text-xl">Committee Leadership</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-6 bg-white/5 rounded-xl p-6">
                      <Image
                        src={committees[selectedCommittee].chair.image || "/placeholder.svg"}
                        alt={committees[selectedCommittee].chair.name}
                        width={280}
                        height={400}
                        className="w-[280px] h-[400px] rounded-xl object-cover"
                      />
                      <div>
                        <div className="text-base text-gray-400 mb-2">Chair</div>
                        <div className="font-semibold text-white text-xl">{committees[selectedCommittee].chair.name}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6 bg-white/5 rounded-xl p-6">
                      <Image
                        src={committees[selectedCommittee].coChair.image || "/placeholder.svg"}
                        alt={committees[selectedCommittee].coChair.name}
                        width={280}
                        height={400}
                        className="w-[280px] h-[400px] rounded-xl object-cover"
                      />
                      <div>
                        <div className="text-base text-gray-400 mb-2">Co-Chair</div>
                        <div className="font-semibold text-white text-xl">{committees[selectedCommittee].coChair.name}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6">
                    <Download className="w-5 h-5 mr-2" />
                    Download Study Guide
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
