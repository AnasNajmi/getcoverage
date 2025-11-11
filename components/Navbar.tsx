"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "/medicare-advantage", label: "MEDICARE ADVANTAGE PLANS" },
  { href: "/about", label: "ABOUT" },
  { href: "/reviews", label: "REVIEWS" },
  { href: "/faqs", label: "FAQS" },
  { href: "/contact", label: "CONTACT" },
];

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
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-gray-700 hover:text-cyan-500 text-sm font-medium transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <Button className="bg-cyan-400 hover:bg-cyan-500 text-white font-medium px-5 sm:px-5 py-2 rounded-full text-sm transition-colors">
              TALK TO AGENT
            </Button>
          </div>

          <div className="flex items-center lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-cyan-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
                >
                  <Menu className="h-6 w-6" aria-hidden="true" />
                  <span className="sr-only">Open main menu</span>
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 sm:w-80">
                <div className="mt-8 space-y-6">
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map(({ href, label }) => (
                      <SheetClose key={href} asChild>
                        <Link
                          href={href}
                          className="text-gray-700 hover:text-cyan-500 text-base font-medium transition-colors"
                        >
                          {label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <SheetClose asChild>
                    <Button className="w-full bg-cyan-400 hover:bg-cyan-500 text-white font-medium px-5 py-2 rounded-full text-sm transition-colors">
                      TALK TO AGENT
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
