import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Globe, Heart, Smartphone } from "lucide-react";

function CtaSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-green-500">
      <div className="flex flex-col items-center justify-center space-y-6 text-center text-white">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Ready to Transform Your Travel Experience?
          </h2>
          <p className="max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Join thousands of travelers who have discovered the future of
            intelligent travel planning. Start your AI-powered journey today.
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
  );
}

export default CtaSection;
