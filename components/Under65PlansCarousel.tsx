"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type PlanSlide = {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
  imageAlt: string;
  imageSrc: string;
};

const planSlides: PlanSlide[] = [
  {
    eyebrow: "Medicare Advantage",
    title: "HMO Plans",
    subtitle:
      "With our Medicare Advantage health maintenance organization (HMO) plans",
    description:
      "Affordable PPO Plans: With our Under-65 PPO health plans, you can choose any doctor or hospital in your network — no referrals required. Get flexibility and freedom with national coverage designed for your lifestyle.",
    ctaLabel: "Talk To Agent",
    imageAlt: "Smiling couple with health coverage",
    imageSrc: "/65.png",
  },
  {
    eyebrow: "Medicare Advantage",
    title: "PPO Plans",
    subtitle:
      "Explore PPO coverage that combines nationwide flexibility with predictable costs",
    description:
      "Pick from a network of trusted providers, access preventive care, and enjoy prescription benefits that travel with you. Secure a plan that matches your pace and protects what matters most all year.",
    ctaLabel: "Talk To Agent",
    imageAlt: "Active couple enjoying the outdoors",
    imageSrc: "/65.png",
  },
  {
    eyebrow: "Medicare Advantage",
    title: "Special Needs Plans",
    subtitle:
      "Tailored coverage for chronic conditions and unique healthcare needs",
    description:
      "Get coordinated care teams, simplified benefits, and built-in support that keeps you focused on wellness. Access specialists, prescriptions, and routine services without the guesswork.",
    ctaLabel: "Talk To Agent",
    imageAlt: "Senior receiving compassionate care",
    imageSrc: "/65.png",
  },
];

const Under65PlansCarousel = () => {
  const [viewportRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onReInit = useCallback(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onReInit);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onReInit);
    };
  }, [emblaApi, onReInit, onSelect]);

  return (
    <section className="bg-[#f8fbff] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.95rem] font-semibold uppercase tracking-[0.38em] text-[#00a4f4] sm:text-base">
            Health Insurance
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#041a4b] sm:text-[2.5rem] sm:leading-[1.15]">
            Health Insurance Plans Under 65
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#667085] sm:text-lg">
            Our Under-65 Health Plans are designed to meet your healthcare needs
            and budget. Choose a network of trusted providers, get preventive
            care, and enjoy coverage that keeps you and your family protected
            year-round.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={viewportRef}>
            <div className="flex gap-6">
              {planSlides.map(
                (
                  {
                    eyebrow,
                    title,
                    subtitle,
                    description,
                    ctaLabel,
                    imageAlt,
                    imageSrc,
                  },
                  index,
                ) => (
                  <article
                    key={title + index}
                    className="flex-[0_0_100%] sm:flex-[0_0_100%] lg:flex-[0_0_100%]"
                  >
                    <div className="flex h-full flex-col gap-8 overflow-hidden rounded-[32px] bg-[#cfeaff] px-6 py-8 text-left shadow-[0_40px_70px_-35px_rgba(19,89,148,0.35)] sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:gap-12">
                      <div className="relative mx-auto aspect-[4/3] h-auto w-full max-w-[340px] shrink-0 overflow-hidden rounded-[28px] bg-[#a4d8ff]/40 sm:max-w-[380px] lg:max-w-[320px]">
                        <Image
                          src={imageSrc}
                          alt={imageAlt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 70vw, 320px"
                        />
                      </div>
                      <div className="flex flex-1 flex-col gap-6">
                        <div className="space-y-3">
                          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#00a4f4]/90">
                            {eyebrow}
                          </p>
                          <h3 className="text-2xl font-extrabold text-[#132a57] sm:text-[2rem] sm:leading-[1.1]">
                            {title}
                          </h3>
                          <p className="text-base font-semibold text-[#2b5c98] sm:text-lg">
                            {subtitle}
                          </p>
                          <p className="text-sm leading-relaxed text-[#314968] sm:text-base">
                            {description}
                          </p>
                        </div>
                        <div>
                          <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-full bg-[#34b6f5] px-6 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-white transition hover:bg-[#249cd6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b5bb5] sm:text-base"
                          >
                            {ctaLabel}
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ),
              )}
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-3">
            {scrollSnaps.map((_, index) => (
              <button
                key={`dot-${index}`}
                type="button"
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={cn(
                  "h-3.5 w-3.5 rounded-full transition",
                  selectedIndex === index
                    ? "bg-[#0a2c6a]"
                    : "bg-[#0a2c6a]/25 hover:bg-[#0a2c6a]/40",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Under65PlansCarousel;

