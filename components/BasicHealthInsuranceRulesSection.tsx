import Image from "next/image";

const rules = [
  {
    title: "Zero Deductible PPO Plans",
    description:
      "Get access to top networks and hospitals nationwide.",
  },
  {
    title: "Covers Mental Health",
    description: "Therapy, counseling, and treatment included.",
  },
  {
    title: "Dental & Vision Included",
    description: "Keep your smile and sight protected affordably.",
  },
  {
    title: "Affordable Monthly Rates",
    description: "Plans starting as low as $10/day.",
  },
  {
    title: "Instant Quote by Phone",
    description: "Licensed agents available now — no forms, no wait.",
  },
  {
    title: "All Prescriptions Covered",
    description: "Save on meds and treatment with included drug plans.",
  },
  {
    title: "Flexible Enrollment",
    description: "Apply anytime — no job or employer needed.",
  },
  {
    title: "Family & Individual Plans",
    description: "Protect yourself or your entire household.",
  },
  {
    title: "Free Consultation",
    description: "Speak with a real agent and compare live options.",
  },
  {
    title: "Trusted Nationwide Providers",
    description:
      "Backed by A-rated carriers with fast approval.",
  },
];

const BasicHealthInsuranceRulesSection = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-12 px-5 sm:px-8">
        <div className="text-center">
          <h2 className="text-[26px] font-bold uppercase  text-[#001057] sm:text-[32px]">
            Basic Health Insurance Rules
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#243b77]/30 sm:w-16" />
            <span className="h-1 w-7 rounded-full bg-[#243b77]" />
            <span className="h-px w-12 bg-[#243b77]/30 sm:w-16" />
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#5d6b87] sm:text-lg">
            Before choosing a plan, understand how coverage, copays, and
            deductibles work. Our licensed agents explain everything clearly so
            you can make informed decisions and choose a plan that's right for
            you.
          </p>
        </div>

        <div className="mx-auto w-full max-w-[1080px] mb-6">
          <div className="flex flex-col overflow-hidden rounded-[36px] bg-white shadow-[0_30px_80px_rgba(15,33,78,0.12)] lg:flex-row">
            <div className="relative h-[320px] w-full overflow-hidden bg-white sm:h-[360px] lg:h-auto lg:w-[46%]">
              <Image
                src="/rules.png"
                alt="Happy couple smiling outdoors"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="w-full bg-[#ffffff] px-6 py-10 sm:px-10 lg:w-[54%] lg:py-12">
              <ul className="grid gap-6 sm:gap-7">
                {rules.map(({ title, description }) => (
                  <li key={title} className="flex gap-4">
                    <span className="relative mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center">
                      <Image
                        src="/tick.png"
                        alt=""
                        width={32}
                        height={32}
                        className="h-4 w-4 object-contain"
                      />
                    </span>
                    <p className="text-left text-base leading-relaxed text-[#37507c] sm:text-[17px]">
                      <span className="block font-semibold text-[#132b63]">
                        {title}
                      </span>
                      {description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicHealthInsuranceRulesSection;

