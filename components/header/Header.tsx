import { Button } from "@/components/ui/button";
import { Menu, Plane } from "lucide-react";
import Link from "next/link";

function Header() {
  return (
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
  );
}

export default Header;
