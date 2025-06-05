import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

function PricingSection() {
  return (
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
            Choose the plan that fits your travel needs. All plans include a
            free trial.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
        <Card className="border-2 border-gray-200">
          <CardHeader>
            <CardTitle>Explorer</CardTitle>
            <CardDescription>Perfect for occasional travelers</CardDescription>
            <div className="text-3xl font-bold">
              $9
              <span className="text-sm font-normal text-gray-500">/month</span>
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
                <span className="text-sm">5 offline attraction packages</span>
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
              <span className="text-sm font-normal text-gray-500">/month</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-sm">Unlimited AI trip planning</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-sm">Advanced voice guide with AI</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-sm">Unlimited offline packages</span>
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
  );
}

export default PricingSection;
