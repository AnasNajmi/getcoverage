import Image from "next/image";

const infoCards = [
  {
    title: "Coverage Options",
    description: "Compare top-rated health plans in your area.",
    iconAlt: "Coverage options icon",
    iconSrc: "/cost.png",
    accent: true,
    cornerClass: "rounded-[32px] rounded-br-none",
  },
  {
    title: "How to Enroll",
    description: "Simple online application — get insured in minutes.",
    iconAlt: "How to enroll icon",
    iconSrc: "/enroll.png",
    cornerClass: "rounded-[32px] rounded-bl-none",
  },
  {
    title: "About Medicare Plans",
    description: "We make enrollment simple, fast, and transparent.",
    iconAlt: "About Medicare icon",
    iconSrc: "/medicare.png",
    cornerClass: "rounded-[32px] rounded-tr-none",
  },
  {
    title: "Cost Basics",
    description: "Learn how to lower your monthly premium cost.",
    iconAlt: "Cost basics icon",
    iconSrc: "/coverage.png",
    accent: true,
    cornerClass: "rounded-[32px] rounded-tl-none",
  },
];

const HealthInsuranceUnder65Section = () => {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/insurance.png"
        alt="Insurance background"
        fill
        priority
        className="absolute inset-0 -z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/55 via-white/35 to-white/15" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <div className="w-full max-w-xl mt-4">
          <h2 className="text-3xl font-extrabold leading-tight text-[#0b2b63] sm:text-4xl lg:text-[2.75rem]">
            Learn More About Health Insurance Under 65
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            Finding the right health insurance plan can feel overwhelming — but it doesn&apos;t have to be.
            Our licensed experts make it simple to understand your coverage options, compare plans,
            and secure affordable health protection that fits your needs.
          </p>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            Whether you&apos;re self-employed, between jobs, or simply looking for better benefits, we help you
            find flexible plans that include doctor visits, prescriptions, preventive care, and more. Enjoy peace
            of mind knowing you&apos;re protected year-round with quality coverage that works for you.
          </p>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            Our mission is to make healthcare simple, transparent, and affordable. We partner with top carriers
            and help individuals and families explore options that provide the right care at the right cost.
          </p>
        </div>

        <div className="w-full lg:max-w-[480px]">
          <div className="grid gap-6 sm:grid-cols-2">
            {infoCards.map(({ title, description, iconAlt, iconSrc, accent, cornerClass }) => (
              <article
                key={title}
                className={`relative border border-white/40 p-6 text-[#0a274d] shadow-[0_24px_40px_-24px_rgba(7,34,86,0.35)] backdrop-blur ${cornerClass} ${
                  accent ? "bg-[#4ac3f2] text-white" : "bg-white/95"
                }`}
              >
                <div className="flex flex-col gap-4">
                  <Image
                    src={iconSrc}
                    alt={iconAlt}
                    width={56}
                    height={56}
                    className="h-14 w-14 object-contain"
                  />
                  <div>
                    <h3
                      className={`text-xl font-semibold leading-snug ${
                        accent ? "text-white" : "text-[#0b2b63]"
                      }`}
                    >
                      {title}
                    </h3>
                    <p
                      className={`mt-3 text-sm leading-relaxed ${
                        accent ? "text-white/90" : "text-[#5c6c86]"
                      }`}
                    >
                      {description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthInsuranceUnder65Section;


