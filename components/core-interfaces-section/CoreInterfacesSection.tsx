import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  MessageCircle,
  Clock,
  Camera,
  Coffee,
  Mountain,
  Utensils,
  Music,
  ShoppingBag,
  Map,
  Navigation,
  Play,
  RotateCcw,
  Headphones,
  WifiOff,
  Zap,
  Mic,
} from "lucide-react";
import Image from "next/image";

function CoreInterfacesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
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
            Built on advanced AI technology, providing intelligent services from
            planning to guidance
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
                Conversational planning experience that understands your real
                needs
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
                  <Clock className="h-4 w-4 text-blue-600" />
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
                      <h4 className="font-semibold text-sm">Senso-ji Temple</h4>
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
                Real-time intelligent guidance with personalized stories for
                every attraction
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-lg mt-1">
                  <MapPin className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Location-Aware Triggers</h4>
                  <p className="text-sm text-gray-600">
                    Automatic narration when approaching attractions, no manual
                    operation needed
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-lg mt-1">
                  <Mic className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Voice Interaction Control</h4>
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
                    Download data packages in advance, enjoy complete guidance
                    without internet
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
                AI adjusts explanation detail and focus based on your interests
                and dwell time
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoreInterfacesSection;
