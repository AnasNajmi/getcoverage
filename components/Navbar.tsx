"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Get Coverage Online"
                width={180}
                height={40}
                className="h-8 sm:h-10 w-auto"
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              href="/medicare-advantage"
              className="text-gray-700 hover:text-cyan-500 text-sm font-medium transition-colors"
            >
              MEDICARE ADVANTAGE PLANS
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-cyan-500 text-sm font-medium transition-colors"
            >
              ABOUT
            </Link>
            <Link
              href="/reviews"
              className="text-gray-700 hover:text-cyan-500 text-sm font-medium transition-colors"
            >
              REVIEWS
            </Link>
            <Link
              href="/faqs"
              className="text-gray-700 hover:text-cyan-500 text-sm font-medium transition-colors"
            >
              FAQS
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-cyan-500 text-sm font-medium transition-colors"
            >
              CONTACT
            </Link>
          </div>

          <div className="flex items-center">
            <Button className="bg-cyan-400 hover:bg-cyan-500 text-white font-medium px-5 sm:px-5 py-2 rounded-full text-sm transition-colors">
              TALK TO AGENT
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
