import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import Image from "next/image";

function TestimonialsSection() {
  return (
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
            See how other travelers have discovered amazing experiences with
            TravelAI
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
              expectations! The voice guide feature is amazing - like having a
              professional guide with you. Every temple in Kyoto had detailed
              historical narration.&quot;
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
              &quot;Traveling with kids requires careful planning. TravelAI was
              incredibly thoughtful - all recommended attractions were
              family-friendly. The offline feature was a lifesaver in remote
              areas!&quot;
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
              &quot;As a solo female traveler, safety is my top concern. AI
              recommended safe routes and adjusted explanations based on my
              interests. So thoughtful and personalized!&quot;
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
  );
}

export default TestimonialsSection;
