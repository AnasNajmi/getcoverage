import Image from "next/image";

const sectionBackground = "/cardbg.png";

const benefits = [
  {
    title: "Available for ages 18–64, all 50 states.",
    icon: "/age.png",
  },
  {
    title: "No employer required to qualify.",
    icon: "quality.png",
  },
  {
    title: "Covers physical, mental, and preventive care.",
    icon: "physical.png",
  },
  {
    title: "No medical exams needed for approval.",
    icon: "exams.png",
  },
  {
    title: "Use PPO doctors and major hospital networks.",
    icon: "doctor.png",
  },
  {
    title: "Choose from short-term or ACA-style plans.",
    icon: "style.png",
  },
  {
    title: "Add dental, vision, and accident coverage anytime.",
    icon: "dental.png",
  },
  {
    title: "Instant verification — no long waits.",
    icon: "verify.png",
  },
  {
    title: "Same-day enrollment available.",
    icon: "day.png",
  },
  {
    title: "Agents help you pick the perfect plan fast.",
    icon: "agent.png",
  },
];

const BenefitsHighlightSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f4f8ff] py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="absolute inset-0">
        {sectionBackground ? (
          <Image
            src={sectionBackground}
            alt=""
            fill
            priority={false}
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(118,210,246,0.25),transparent_55%)]" />
        )}
        <div className="absolute inset-0 bg-white/15" />
      </div>

      <div className="relative mx-auto flex max-w-[1180px] flex-col gap-8 sm:gap-10 lg:gap-12 px-4 sm:px-6 lg:px-8">

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 place-items-center xl:[&>li:nth-last-child(2)]:col-start-2 xl:[&>li:nth-last-child(1)]:col-start-3">
          {benefits.map(({ title, icon }) => (
            <li
              key={title}
              className="group relative flex w-full max-w-[280px] sm:max-w-[320px] md:max-w-[250px] flex-col items-center rounded-2xl sm:rounded-[24px] lg:rounded-[28px] bg-gradient-to-br from-[#76D2F6] to-[#BCECFF] px-4 py-6 sm:px-5 sm:py-7 lg:px-6 lg:py-8 text-center shadow-[0_20px_50px_rgba(15,67,128,0.14)] sm:shadow-[0_26px_60px_rgba(15,67,128,0.16)] transition-transform duration-300 ease-out hover:-translate-y-1.5"
            >
              <div className="relative mb-4 sm:mb-5 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_14px_35px_rgba(12,70,128,0.14)] sm:shadow-[0_18px_40px_rgba(12,70,128,0.16)]">
                {icon ? (
                  <Image
                    src={icon}
                    alt=""
                    height={36}
                    width={36}
                    className="object-contain w-8 h-8 sm:w-9 sm:h-9"
                  />
                ) : (
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#0e3a67]/70">
                    Icon
                  </span>
                )}
              </div>
              <p className="text-sm sm:text-[15px] md:text-base lg:text-[17px] font-semibold leading-relaxed text-[#063163]">
                {title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BenefitsHighlightSection;


