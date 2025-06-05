"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Sparkles, Volume2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import PlanModal from "../plan/PlanModal";

function HeroSection() {
  const [open, setOpen] = useState(false);

  return (
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
              Experience intelligent trip planning with conversational AI and
              real-time voice guidance. From personalized itineraries to offline
              exploration, AI accompanies every step of your journey.
            </p>
          </div>
          <div className="flex flex-col gap-3 min-[400px]:flex-row">
            <Button
              size="lg"
              className="h-12 px-8 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
              onClick={() => setOpen(true)}
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
      <PlanModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}

export default HeroSection;
