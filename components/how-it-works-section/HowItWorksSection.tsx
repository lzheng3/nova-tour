import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MessageCircle,
  Route,
  Headphones,
  Download,
  Users,
} from "lucide-react";

function HowItWorksSection() {
  return (
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
            Simple steps to let AI create your personalized travel experience
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
            <CardTitle className="text-center">AI Guide Companion</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-3">
            <p className="text-gray-600">
              Download offline data package and start your journey. AI voice
              guide provides expert narration at every attraction
            </p>
            <div className="bg-gray-50 p-3 rounded-lg text-sm flex items-center justify-center space-x-2">
              <Download className="h-4 w-4 text-orange-600" />
              <span>Offline package ready</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default HowItWorksSection;
