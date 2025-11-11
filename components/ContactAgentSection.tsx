"use client";

import Image from "next/image";

const backgroundImage = "/question.png";

const ContactAgentSection = () => {
  const handleTalkToAgentClick = () => {
    // Dispatch custom event that HeroSection will listen for
    window.dispatchEvent(new CustomEvent('talkToAgentClick'));
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#06122c]">
      <div className="absolute inset-0">
        {backgroundImage ? (
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority={false}
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <div className="h-full w-full bg-[#0c1c3f]" />
        )}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(8,22,49,0.45),_rgba(6,15,33,0.75))]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030b1d]/70 via-transparent to-[#06122c]/30" />
      </div>

      <div className="relative mx-auto flex h-full max-w-[1180px] flex-col items-center justify-center gap-4 sm:gap-6 px-4 sm:px-5 py-10 sm:py-12 lg:py-16 text-center text-white">
        <p className="font-extrabold uppercase leading-tight sm:leading-snug tracking-[0.08em] sm:tracking-[0.12em] text-white text-[clamp(1.125rem,4vw,2rem)] sm:whitespace-normal px-2">
          <span className="block sm:inline">HAVE QUESTIONS? READY TO</span>{" "}
          <span className="block sm:inline sm:whitespace-nowrap">GET HEALTH INSURANCE UNDER 65?</span>
        </p>
        <h2 className="sr-only">
          Ready to get health insurance under 65?
        </h2>
        <p className="max-w-2xl text-xs sm:text-sm lg:text-base leading-relaxed text-white/85 px-2 sm:px-4">
          Contact our friendly support team today. Our experienced agents will
          help you compare plans, find subsidies, and guide you through fast,
          stress-free enrollment.
        </p>
        <div className="pt-2 sm:pt-3">
          <button
            onClick={handleTalkToAgentClick}
            className="inline-flex min-w-[170px] items-center justify-center rounded-full bg-gradient-to-r from-[#ff2d7b] via-[#ff3e8f] to-[#fe2490] px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wide text-white shadow-[0_16px_40px_rgba(255,46,135,0.35)] transition-transform duration-200 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.98] cursor-pointer"
          >
            Talk to Agent
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactAgentSection;


