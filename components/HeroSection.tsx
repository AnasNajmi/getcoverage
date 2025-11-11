'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    zipCode: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden">
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video> */}
      <Image
        src="/hero.png"
        alt="Hero background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-bottom"
      />

      {/* <div className="absolute inset-0 bg-cyan-400/40"></div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-40 sm:pb-48 lg:pb-56">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight">
              <span className="block whitespace-nowrap">
                <span className="text-white">Get </span>
                <span className="text-gray-900">Coverage </span>
                <span className="text-white">Online</span>
              </span>
              <span className="block whitespace-nowrap">
                <span className="text-white">Health </span>
                <span className="text-gray-900">Insurance </span>
                <span className="text-white">Plans</span>
              </span>
              <span className="block whitespace-nowrap">
                <span className="text-white">for </span>
                <span className="text-gray-900">Under 65</span>
              </span>
            </h1>

            <p className="text-gray-800 text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed">
              Get Coverage Online Health Insurance Plans help individuals under
              65 find affordable, flexible coverage options with added benefits.
              Choose from major providers with nationwide networks and rates
              starting at $0 monthly.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold px-8 py-6 rounded-full text-base sm:text-lg shadow-lg transition-all">
                FREE CONSULTATION
              </Button>

              <button className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full shadow-lg hover:scale-110 transition-transform">
                <Play className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 fill-pink-500 ml-1" />
              </button>
            </div>

            {/* <div className="relative w-full max-w-md mt-8">
              <Image
                src="/decorative-image.png"
                alt="Decorative element"
                width={400}
                height={150}
                className="w-full h-auto"
              />
            </div> */}
          </div>

          <div className="w-full max-w-md lg:max-w-lg mx-auto lg:ml-auto lg:mr-0">
            <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-start justify-between gap-4">
                <Image
                  src="/trust.png"
                  alt="Trustpilot rating"
                  width={120}
                  height={24}
                  className="h-10 w-auto"
                />
              </div>

              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Speak To Us Today & Check Medicare Coverage Plans
                </h2>
                <p className="text-sm text-gray-600">
                  Let our welcoming team of experts lead you to the ideal
                  Medicare plan that aligns perfectly with your needs
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-sm"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-sm"
                    required
                  />
                </div>

                <input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-sm"
                  required
                />

                <input
                  type="text"
                  placeholder="Zip Code"
                  value={formData.zipCode}
                  onChange={(e) =>
                    setFormData({ ...formData, zipCode: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-sm"
                  required
                />

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-6 rounded-full text-base shadow-lg transition-all"
                >
                  Call Me Back
                </Button>

                <p className="text-xs text-gray-500 text-center leading-relaxed">
                  Please read and agree{' '}
                  <span className="font-semibold text-gray-700">
                    Terms & Conditions
                  </span>
                  . Your information will be on provided on find plan form
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 lg:h-48">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
