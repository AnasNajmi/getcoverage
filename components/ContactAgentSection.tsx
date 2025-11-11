import Image from "next/image";
import Link from "next/link";

const backgroundImage = "/question.png";

const ContactAgentSection = () => {
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

      <div className="relative mx-auto flex h-full max-w-[1180px] flex-col items-center justify-center gap-6 px-5 py-12 text-center text-white sm:py-16 lg:py-18">
        <p className="text-[22px] font-extrabold uppercase leading-snug tracking-[0.12em] text-white sm:text-[26px] lg:text-[32px]">
          <span>HAVE QUESTIONS? READY TO</span>{" "}
          <span className="whitespace-nowrap">GET HEALTH INSURANCE UNDER 65?</span>
        </p>
        <h2 className="sr-only">
          Ready to get health insurance under 65?
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
          Contact our friendly support team today. Our experienced agents will
          help you compare plans, find subsidies, and guide you through fast,
          stress-free enrollment.
        </p>
        <div className="pt-2">
          <Link
            href="#contact-agent"
            className="inline-flex min-w-[170px] items-center justify-center rounded-full bg-gradient-to-r from-[#ff2d7b] via-[#ff3e8f] to-[#fe2490] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_16px_40px_rgba(255,46,135,0.35)] transition-transform duration-200 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.98]"
          >
            Talk to Agent
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactAgentSection;


