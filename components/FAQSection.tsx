 "use client";

import { useState } from "react";

const faqBackgroundImage = "/FAQ.png"; // Placeholder, replace with actual image path when available.

const faqItems = [
  {
    question: "What do Get Coverage Online Health Insurance Plans include?",
    answer:
      "Our Under-65 health insurance plans provide essential medical coverage including doctor visits, hospital care, prescriptions, preventive checkups, and more. You can choose from PPO or HMO networks to match your needs and budget.",
  },
  {
    question: "What kind of out-of-pocket costs will I have with an Under-65 plan?",
    answer:
      "Out-of-pocket costs vary by plan and can include deductibles, copays, and coinsurance. We help you compare options so you know what to expect before you enroll.",
  },
  {
    question: "How do I know which plan is right for me?",
    answer:
      "Our licensed agents review your health needs, doctors, prescriptions, and budget to recommend the plan that offers the best balance of coverage and affordability.",
  },
  {
    question: "Can self-employed workers get health insurance?",
    answer:
      "Yes! We offer individual health insurance tailored to freelancers, contractors, and business owners — no employer is required to qualify.",
  },
  {
    question: "Are there short-term coverage options available?",
    answer:
      "Short-term health insurance can provide temporary coverage between major life events. We can show you plans that start quickly and last from 1 to 12 months.",
  },
  {
    question: "Can I add dental or vision coverage to my plan?",
    answer:
      "Absolutely. You can bundle dental, vision, accident, and other supplemental benefits with your health coverage whenever you’re ready.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className="relative overflow-hidden bg-[#E3F1FF]"
      style={
        faqBackgroundImage
          ? {
              backgroundImage: `url(${faqBackgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      <div className="absolute inset-0 " />

      <div className="relative mx-auto flex w-full max-w-[1180px] flex-col gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-16 lg:gap-16 lg:pb-24 lg:pt-20">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-[32px] font-extrabold uppercase tracking-[0.04em] text-[#0B2F58] sm:text-[36px] lg:text-[40px]">
            Frequently Asked Questions!
          </h2>
          <div className="h-1 w-16 rounded-full bg-[#0B6CFF]/70 sm:w-20" />
          <p className="max-w-[520px] text-sm leading-relaxed text-[#3B5576] sm:text-base">
            We&apos;re here to help! Below you can find answers to some of the most common questions about health insurance for individuals under 65.
          </p>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div
            className="relative mx-auto hidden sm:max-w-[480px] lg:block lg:w-[420px] lg:max-w-none"
            aria-hidden="true"
          />

          <div className="mx-auto w-full max-w-[540px] rounded-[5px] border border-[#B9DAFF] bg-white/90 px-6 py-8 shadow-[0_28px_70px_rgba(15,67,128,0.14)] backdrop-blur-[1px] sm:px-8 sm:py-10">
            <div className="flex flex-col gap-4">
              {faqItems.map(({ question, answer }, index) => {
                const isActive = activeIndex === index;

                const baseCardClasses =
                  index === 0
                    ? "rounded-[10px] border border-[#9ACBFF] bg-[#F8FBFF]"
                    : "rounded-[10px] border border-[#D4E7FF] bg-white";

                return (
                  <div
                    key={`${question}-${index}`}
                    className={`shadow-[0_18px_45px_rgba(15,67,128,0.12)] transition-all duration-200 ease-out ${
                      isActive && index !== 0
                        ? "border-[#9ACBFF] shadow-[0_24px_60px_rgba(11,108,255,0.18)]"
                        : ""
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => handleToggle(index)}
                      aria-expanded={isActive}
                      className={`${baseCardClasses} flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-[#0B2F58] sm:px-6 sm:py-5 sm:text-base`}
                    >
                      <span className="pr-6 leading-snug">{question}</span>
                      <span
                        className={`text-xl font-semibold text-[#0B6CFF] transition-transform duration-200 ${
                          isActive ? "rotate-90" : ""
                        }`}
                      >
                        &rsaquo;
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden px-6 transition-[max-height] duration-300 ease-in-out sm:px-7 ${
                        isActive ? "max-h-[240px] pb-6" : "max-h-0"
                      }`}
                    >
                      <p className="text-sm leading-relaxed text-[#43628A] sm:text-[15px]">
                        {answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

