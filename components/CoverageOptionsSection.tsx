import Image from "next/image";

const coverageOptions = [
  {
    title: "Health Insurance for Self Employed",
    description:
      "Comprehensive coverage for singles and self-employed workers.",
    iconSrc: "/icon2.png",
  },
  {
    title: "Family Coverage Plans",
    description: "Affordable protection for every member of your family.",
    iconSrc: "/icon4.png",
  },
  {
    title: "Short-Term Health Plans",
    description: "Temporary coverage options for transition periods.",
    iconSrc: "/icon3.png",
  },
  {
    title: "Supplemental Health Plans",
    description: "Add-on coverage for dental, vision, and prescriptions.",
    iconSrc: "/icon1.png",
  },
];

const CoverageOptionsSection = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#032b72] tracking-tight">
            Our Health Coverage Options
          </h2>
          <div className="flex justify-center">
            <div className="h-1.5 w-20 bg-[#0d6efd]" />
          </div>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Explore affordable health insurance plans tailored for individuals
            and families under 65. Our plans provide essential coverage for
            doctor visits, prescriptions, preventive care, and emergencies — all
            at competitive rates.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-stretch">
          <div className="relative w-full max-w-[477px] mx-auto border border-dashed border-gray-50 rounded-3xl aspect-[477/413] overflow-hidden bg-transparent">
            <Image
              src="/Health.png"
              alt="Health coverage illustration"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col gap-10 lg:h-full">
            <div className="grid gap-8 sm:grid-cols-2 lg:flex-1 lg:auto-rows-fr">
              {coverageOptions.map(({ title, description, iconSrc }) => (
                <div key={title} className="flex h-full items-start gap-5">
                  <div className="relative flex h-[82.562px] w-[82.562px] flex-shrink-0 items-center justify-center rounded-full">
                    <div className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,#76D2F6,#BCECFF)]" />
                    <div className="absolute inset-[9px] rounded-full border-[1.5px] border-white/80" />
                    <img
                      src={iconSrc}
                      alt={title}
                      className="relative h-10 w-10 object-contain"
                    />
                  </div>
                    <div className="space-y-2 max-w-xs">
                      <h3
                        className="text-lg font-extrabold text-[#232323] leading-snug font-poppins"
                        style={{ fontWeight: "700" }}
                      >
                        {title === "Health Insurance for Self Employed" ? (
                          <>
                            <span className="block whitespace-nowrap">
                              Health Insurance
                            </span>
                            <span className="block whitespace-nowrap">
                              for Self Employed
                            </span>
                          </>
                        ) : (
                          title
                        )}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageOptionsSection;

