import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  createLucideIcon,
} from "lucide-react";

const PinterestIcon = createLucideIcon("PinterestIcon", [
  [
    "path",
    {
      d: "M12 2C7.03 2 3 6.03 3 11c0 3.86 2.46 7.15 5.94 8.45-.08-.72-.15-1.83.03-2.62.17-.74 1.13-4.7 1.13-4.7s-.29-.57-.29-1.4c0-1.31.76-2.29 1.71-2.29.81 0 1.2.61 1.2 1.34 0 .81-.52 2.04-.8 3.17-.23.96.48 1.74 1.41 1.74 1.69 0 2.84-2.23 2.84-4.87 0-2.01-1.35-3.52-3.81-3.52-2.78 0-4.51 2.06-4.51 4.36 0 .83.31 1.72.71 2.21.08.1.09.19.07.29-.07.28-.22.88-.25 1.01-.04.16-.13.2-.3.12-1.11-.52-1.79-2.18-1.79-3.51 0-2.87 2.08-5.5 6.01-5.5 3.16 0 5.61 2.26 5.61 5.28 0 3.35-2.12 5.8-5.03 5.8-.98 0-1.9-.52-2.21-1.13l-.6 2.3c-.21.79-.78 1.79-1.16 2.4.87.27 1.78.42 2.73.42 4.97 0 9-4.03 9-9S16.97 2 12 2Z",
      fill: "currentColor",
      stroke: "none",
    },
  ],
]);

const mapImageSrc = "/map.png";

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/",
    label: "Facebook",
    bgColor: "#1877F2",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/",
    label: "Twitter",
    bgColor: "#1DA1F2",
  },
  {
    icon: PinterestIcon,
    href: "https://www.pinterest.com/",
    label: "Pinterest",
    bgColor: "#E60023",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/",
    label: "Instagram",
    bgColor: "#E4405F",
  },
];

const ContactUsSection = () => {
  return (
    <section
      id="contact-us"
      className="relative isolate overflow-hidden bg-[#ffffff] py-16 sm:py-20 lg:py-24"
    >
      <div className="absolute inset-x-0 top-0 h-72 bg-white" aria-hidden />
      <div className="relative mx-auto flex w-full max-w-[1180px] flex-col gap-12 px-5 md:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="mt-6 block max-w-[680px] text-pretty text-3xl font-black uppercase leading-tight text-[#06122c] sm:text-[36px] lg:text-[40px]">
            Contact Us
          </span>
          <div className="mt-3 flex items-center gap-2">
            <span className="h-[2px] w-14 rounded-full bg-[#13295a]" />
            <span className="h-[2px] w-6 rounded-full bg-[#ff2d7b]" />
            <span className="h-[2px] w-14 rounded-full bg-[#13295a]" />
          </div>
          <h2 className="mt-4 text-base font-semibold uppercase text-[#0d1f3f] sm:text-lg">
            We&apos;re Ready To Help You Get The Coverage You Need
          </h2>
          <p className="mt-4 max-w-[720px] text-base leading-relaxed text-[#5d6274] sm:text-lg">
            Fill out the form below and our health insurance team will reach out
            to discuss your options.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 text-left">
              <div>
                <h3 className="text-base font-bold uppercase text-[#0b1d3c]">
                  Our Office Address
                </h3>
                <div className="mt-5 flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center text-[#3b82f6]">
                      <MapPin className="h-5 w-5" strokeWidth={2.5} />
                    </div>
                    <div className="text-base font-semibold leading-relaxed text-[#0d1f3f]">
                      100 Church St,
                      <br />
                      New York, NY 10007,
                      <br />
                      United States
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center text-[#3b82f6]">
                      <Phone className="h-5 w-5" strokeWidth={2.5} />
                    </div>
                    <Link
                      href="tel:+971525744108"
                      className="text-base font-semibold text-[#0d1f3f] transition-colors duration-200 hover:text-[#ff2d7b]"
                    >
                      +971 52 574 4108
                    </Link>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center text-[#3b82f6]">
                      <Mail className="h-5 w-5" strokeWidth={2.5} />
                    </div>
                    <Link
                      href="mailto:info@getcoverageonline.com"
                      className="text-base font-semibold text-[#0d1f3f] transition-colors duration-200 hover:text-[#ff2d7b]"
                    >
                      info@getcoverageonline.com
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                {/* <h4 className="text-base font-bold uppercase text-[#0b1d3c]">
                  Social Address
                </h4> */}
                {/* <div className="mt-5 flex flex-wrap gap-3">
                  {socialLinks.map(({ icon: Icon, href, label, bgColor }) => (
                    <Link
                      key={label}
                      href={href}
                      aria-label={label}
                      className="flex h-12 w-12 items-center justify-center rounded-full text-white transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
                      style={{ backgroundColor: bgColor }}
                    >
                      <Icon className="h-5 w-5" strokeWidth={2.2} />
                    </Link>
                  ))}
                </div> */}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[28px]">
              <Image
                src={mapImageSrc}
                alt="Map showing the office location"
                width={600}
                height={380}
                className="h-full w-full object-cover"
                priority={false}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            {/* <div className="flex flex-col gap-2 text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.38em] text-[#ff2d7b]">
                We&apos;re Ready To Help You
              </p>
              <h3 className="text-2xl font-black text-[#06122c] sm:text-[28px]">
                Send Us Message!
              </h3>
              <p className="text-sm leading-relaxed text-[#5d6274] sm:text-base">
                Share a few details about your property claim and our health
                insurance specialists will get in touch shortly.
              </p>
            </div> */}
            <form className="mt-6 flex flex-col gap-5">
              <label className="flex flex-col gap-2 text-sm font-medium text-[#0d1f3f]">
                <span>Your Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="h-12 rounded-[16px] border border-[#d9deeb] bg-white px-4 text-base text-[#06122c] outline-none transition-shadow duration-200 focus:border-[#ff2d7b] focus:shadow-[0_0_0_3px_rgba(255,46,135,0.15)]"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-[#0d1f3f]">
                <span>Your Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="h-12 rounded-[16px] border border-[#d9deeb] bg-white px-4 text-base text-[#06122c] outline-none transition-shadow duration-200 focus:border-[#ff2d7b] focus:shadow-[0_0_0_3px_rgba(255,46,135,0.15)]"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-[#0d1f3f]">
                <span>Your Phone Number</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  className="h-12 rounded-[16px] border border-[#d9deeb] bg-white px-4 text-base text-[#06122c] outline-none transition-shadow duration-200 focus:border-[#ff2d7b] focus:shadow-[0_0_0_3px_rgba(255,46,135,0.15)]"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-[#0d1f3f]">
                <span>Tell Us About Your Property Claim</span>
                <textarea
                  name="message"
                  placeholder="Tell Us About Your Property Claim"
                  rows={5}
                  className="rounded-[16px] border border-[#d9deeb] bg-white px-4 py-3 text-base text-[#06122c] outline-none transition-shadow duration-200 focus:border-[#ff2d7b] focus:shadow-[0_0_0_3px_rgba(255,46,135,0.15)]"
                />
              </label>
              <button
                type="submit"
                className="group mt-2 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ff2d7b] via-[#ff3e8f] to-[#fe2490] px-10 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_rgba(255,46,135,0.38)] transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-[#ff2d7b]"
              >
                Send Message
                <Send className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;


