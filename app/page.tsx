import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  MessageCircle,
  Clock,
  Star,
  Mic,
  Globe,
  Sparkles,
  ArrowRight,
  Check,
  Menu,
  Plane,
  Camera,
  Coffee,
  Mountain,
  Utensils,
  Music,
  ShoppingBag,
  Heart,
  Zap,
  Shield,
  Smartphone,
  Headphones,
  Map,
  Route,
  Volume2,
  WifiOff,
  Users,
  Calendar,
  Navigation,
  Play,
  RotateCcw,
  Download,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AITravelPlannerLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-green-500 rounded-xl">
              <Plane className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              NovaTour
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Pricing
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
            >
              Try Free
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <Badge
                    variant="secondary"
                    className="w-fit bg-blue-100 text-blue-700 border-blue-200"
                  >
                    <Sparkles className="w-3 h-3 mr-1" />
                    AI-Powered Travel Planning
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Your Personal
                    <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                      {" "}
                      AI Travel Guide
                    </span>
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Experience intelligent trip planning with conversational AI
                    and real-time voice guidance. From personalized itineraries
                    to offline exploration, AI accompanies every step of your
                    journey.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="h-12 px-8 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                  >
                    Start Planning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 px-8 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
                  >
                    Watch Demo
                    <Volume2 className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Free to try</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Offline support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Multi-language</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-3xl blur-3xl opacity-20"></div>
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    width="600"
                    height="500"
                    alt="AI Travel Planning Interface"
                    className="relative mx-auto rounded-2xl shadow-2xl border border-gray-200"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Core Interfaces Section */}
          <section
            id="features"
            className="w-full py-12 md:py-24 lg:py-32 bg-white"
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-700 border-green-200"
                >
                  Core Interfaces
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Two Powerful Interfaces, One Seamless Experience
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Built on advanced AI technology, providing intelligent
                  services from planning to guidance
                </p>
              </div>
            </div>

            {/* Interface 1: Trip Planning */}
            <div className="mx-auto max-w-6xl py-12">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl">
                        <MessageCircle className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">
                        Intelligent Trip Planning
                      </h3>
                    </div>
                    <p className="text-gray-600 text-lg">
                      Conversational planning experience that understands your
                      real needs
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-lg mt-1">
                        <MessageCircle className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          Natural Language Interaction
                        </h4>
                        <p className="text-sm text-gray-600">
                          &quot;I love history museums but not interested in
                          shopping&quot; - Express preferences naturally
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-lg mt-1">
                        <Clock className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Timeline View</h4>
                        <p className="text-sm text-gray-600">
                          Clear daily schedule display with time, location, and
                          activities
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-orange-100 rounded-lg mt-1">
                        <Map className="h-4 w-4 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Interactive Map</h4>
                        <p className="text-sm text-gray-600">
                          All attractions marked on map with intelligent route
                          optimization
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-gray-700">
                      Quick Preference Selection:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="flex items-center space-x-1 cursor-pointer hover:bg-blue-50"
                      >
                        <Utensils className="w-3 h-3" />
                        <span>Food</span>
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center space-x-1 cursor-pointer hover:bg-blue-50"
                      >
                        <Camera className="w-3 h-3" />
                        <span>Photography</span>
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center space-x-1 cursor-pointer hover:bg-blue-50"
                      >
                        <Mountain className="w-3 h-3" />
                        <span>Hiking</span>
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center space-x-1 cursor-pointer hover:bg-blue-50"
                      >
                        <Music className="w-3 h-3" />
                        <span>Art</span>
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center space-x-1 cursor-pointer hover:bg-blue-50"
                      >
                        <Coffee className="w-3 h-3" />
                        <span>Coffee</span>
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center space-x-1 cursor-pointer hover:bg-blue-50"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Shopping</span>
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=400&width=500"
                      width="500"
                      height="400"
                      alt="Trip Planning Interface"
                      className="mx-auto rounded-xl shadow-lg border border-gray-200"
                    />
                    {/* Overlay UI Elements */}
                    <div className="absolute top-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="h-4 w-4 text-blue-600" />
                        <span>7 days in Tokyo</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white rounded-lg p-3 shadow-lg">
                      <div className="flex items-center space-x-2 text-sm">
                        <MapPin className="h-4 w-4 text-green-600" />
                        <span>12 attractions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interface 2: AI Voice Guide */}
            <div className="mx-auto max-w-6xl py-12">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex items-center justify-center lg:order-1">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=400&width=500"
                      width="500"
                      height="400"
                      alt="AI Voice Guide Interface"
                      className="mx-auto rounded-xl shadow-lg border border-gray-200"
                    />
                    {/* Overlay UI Elements */}
                    <div className="absolute top-4 left-4 bg-black/80 rounded-lg p-3 text-white">
                      <div className="flex items-center space-x-2 text-sm">
                        <Navigation className="h-4 w-4" />
                        <span>GPS Active</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg p-4 shadow-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <MapPin className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm">
                              Senso-ji Temple
                            </h4>
                            <p className="text-xs text-gray-600">
                              Ancient Buddhist temple
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Play className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <RotateCcw className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 lg:order-2">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl">
                        <Headphones className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">AI Voice Guide</h3>
                    </div>
                    <p className="text-gray-600 text-lg">
                      Real-time intelligent guidance with personalized stories
                      for every attraction
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-lg mt-1">
                        <MapPin className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          Location-Aware Triggers
                        </h4>
                        <p className="text-sm text-gray-600">
                          Automatic narration when approaching attractions, no
                          manual operation needed
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-lg mt-1">
                        <Mic className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          Voice Interaction Control
                        </h4>
                        <p className="text-sm text-gray-600">
                          &quot;Next attraction&quot;, &quot;Repeat that&quot; -
                          Hands-free intelligent operation
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-orange-100 rounded-lg mt-1">
                        <WifiOff className="h-4 w-4 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Offline Mode Support</h4>
                        <p className="text-sm text-gray-600">
                          Download data packages in advance, enjoy complete
                          guidance without internet
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <Zap className="h-4 w-4 text-green-600" />
                      <span className="font-semibold text-green-700">
                        Smart Features
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      AI adjusts explanation detail and focus based on your
                      interests and dwell time
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section
            id="how-it-works"
            className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-green-50"
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-700 border-blue-200"
                >
                  How It Works
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Three Steps to Intelligent Travel
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Simple steps to let AI create your personalized travel
                  experience
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card className="relative overflow-hidden border-2 border-blue-100 hover:border-blue-200 transition-colors">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-blue-600">Step 1</Badge>
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-center">
                    Conversational Planning
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <p className="text-gray-600">
                    Tell AI your destination, dates, budget, and interests using
                    natural language to describe your ideal journey
                  </p>
                  <div className="bg-gray-50 p-3 rounded-lg text-sm text-left">
                    <div className="flex items-start space-x-2">
                      <Users className="h-4 w-4 text-blue-600 mt-0.5" />
                      <span>
                        &quot;Family trip to Paris, love museums, avoid crowded
                        places&quot;
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden border-2 border-green-100 hover:border-green-200 transition-colors">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-600">Step 2</Badge>
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl mx-auto mb-4">
                    <Route className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-center">
                    Personalized Itinerary
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <p className="text-gray-600">
                    AI analyzes your needs and generates detailed itinerary with
                    timeline and map views, supports real-time editing
                  </p>
                  <div className="bg-gray-50 p-3 rounded-lg text-sm">
                    <div className="flex items-center justify-between">
                      <span>Day 1: Louvre Museum</span>
                      <span className="text-green-600">9:00 AM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden border-2 border-orange-100 hover:border-orange-200 transition-colors">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-orange-600">Step 3</Badge>
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl mx-auto mb-4">
                    <Headphones className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-center">
                    AI Guide Companion
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <p className="text-gray-600">
                    Download offline data package and start your journey. AI
                    voice guide provides expert narration at every attraction
                  </p>
                  <div className="bg-gray-50 p-3 rounded-lg text-sm flex items-center justify-center space-x-2">
                    <Download className="h-4 w-4 text-orange-600" />
                    <span>Offline package ready</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Testimonials Section */}
          <section
            id="testimonials"
            className="w-full py-12 md:py-24 lg:py-32 bg-white"
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-700 border-green-200"
                >
                  Testimonials
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Trusted by Travelers Worldwide
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how other travelers have discovered amazing experiences
                  with TravelAI
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card className="border-2 border-gray-100 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    &quot;First time using AI for trip planning and it exceeded
                    expectations! The voice guide feature is amazing - like
                    having a professional guide with you. Every temple in Kyoto
                    had detailed historical narration.&quot;
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-green-400 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-white">SW</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Sarah Wilson</p>
                      <p className="text-xs text-gray-500">
                        Photography Enthusiast · Kyoto Journey
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-green-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    &quot;Traveling with kids requires careful planning.
                    TravelAI was incredibly thoughtful - all recommended
                    attractions were family-friendly. The offline feature was a
                    lifesaver in remote areas!&quot;
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-white">MJ</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Michael Johnson</p>
                      <p className="text-xs text-gray-500">
                        Family Travel · New Zealand Adventure
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-orange-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    &quot;As a solo female traveler, safety is my top concern.
                    AI recommended safe routes and adjusted explanations based
                    on my interests. So thoughtful and personalized!&quot;
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-white">ER</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Emma Rodriguez</p>
                      <p className="text-xs text-gray-500">
                        Solo Traveler · Barcelona Explorer
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Pricing Section */}
          <section
            id="pricing"
            className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-green-50"
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-700 border-blue-200"
                >
                  Pricing
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Simple, Transparent Pricing
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that fits your travel needs. All plans include
                  a free trial.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <CardTitle>Explorer</CardTitle>
                  <CardDescription>
                    Perfect for occasional travelers
                  </CardDescription>
                  <div className="text-3xl font-bold">
                    $9
                    <span className="text-sm font-normal text-gray-500">
                      /month
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">3 AI trip plans per month</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Basic voice guide</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">
                        5 offline attraction packages
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Email support</span>
                    </div>
                  </div>
                </CardContent>
                <CardContent>
                  <Button
                    className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
                    variant="outline"
                  >
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600">Most Popular</Badge>
                </div>
                <CardHeader>
                  <CardTitle>Adventurer</CardTitle>
                  <CardDescription>Best for frequent travelers</CardDescription>
                  <div className="text-3xl font-bold">
                    $29
                    <span className="text-sm font-normal text-gray-500">
                      /month
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">
                        Unlimited AI trip planning
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">
                        Advanced voice guide with AI
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">
                        Unlimited offline packages
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Multi-language support</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">
                        Real-time itinerary optimization
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <CardTitle>Professional</CardTitle>
                  <CardDescription>
                    For travel professionals and agencies
                  </CardDescription>
                  <div className="text-3xl font-bold">Custom</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">All Adventurer features</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">White-label solutions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Custom integrations</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">24/7 priority support</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Team collaboration tools</span>
                    </div>
                  </div>
                </CardContent>
                <CardContent>
                  <Button
                    className="w-full border-2 border-gray-600 text-gray-700 hover:bg-gray-600 hover:text-white transition-all duration-200"
                    variant="outline"
                  >
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-green-500">
            <div className="flex flex-col items-center justify-center space-y-6 text-center text-white">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Transform Your Travel Experience?
                </h2>
                <p className="max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of travelers who have discovered the future of
                  intelligent travel planning. Start your AI-powered journey
                  today.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="h-12 px-8 bg-white text-blue-600 hover:bg-gray-100"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200 font-semibold"
                >
                  Download Mobile App
                  <Smartphone className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-blue-100">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>Secure & Private</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4" />
                  <span>Global Coverage</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-4 w-4" />
                  <span>7-day Money Back</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-600 to-green-500 rounded-xl">
                  <Plane className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">NovaTour</span>
              </div>
              <p className="text-sm text-gray-400">
                Transforming travel experiences with intelligent AI technology,
                connecting every corner of the world.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Globe className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <MessageCircle className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Smartphone className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Product</h4>
              <div className="space-y-2">
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-white block"
                >
                  AI Trip Planning
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-white block"
                >
                  Voice Guide
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-white block"
                >
                  Offline Maps
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-white block"
                >
                  Multi-language
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Support</h4>
              <div className="space-y-2">
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-white block"
                >
                  Help Center
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-white block"
                >
                  Documentation
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-white block"
                >
                  Contact Support
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-white block"
                >
                  Feedback
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Company</h4>
              <div className="space-y-2">
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-white block"
                >
                  About Us
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-white block"
                >
                  Careers
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-white block"
                >
                  Partners
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-white block"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-xs text-gray-400">
                © {new Date().getFullYear()} Nova Tour. All rights reserved.
              </p>
              <div className="flex space-x-4 mt-4 sm:mt-0">
                <Link
                  href="#"
                  className="text-xs text-gray-400 hover:text-white"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="text-xs text-gray-400 hover:text-white"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-xs text-gray-400 hover:text-white"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
