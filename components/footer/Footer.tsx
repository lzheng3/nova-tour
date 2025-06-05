import { Plane, Globe, MessageCircle, Smartphone } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
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
              <Link href="#" className="text-xs text-gray-400 hover:text-white">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-gray-400 hover:text-white">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
