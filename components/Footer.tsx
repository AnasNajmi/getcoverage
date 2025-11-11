"use client";

const Footer = () => {
  return (
    <footer className="bg-[#021963] text-white">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-3 px-6 py-8 text-center sm:px-8 sm:py-8 md:gap-3">
        <img
          src="footer.png"
          alt="Get Coverage Online"
          className="h-20 w-auto"
        />
       
        <p className="text-[12px] text-white/80 sm:text-xs -mb-2">
          © Copyright 2025 Get Coverage Online. All Rights Reserved
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 text-[12px] text-white/80 sm:text-xs -mb-3">
          <a
            href="#"
            className="transition-colors duration-150 hover:text-white"
          >
            Terms &amp; Conditions
          </a>
          <span className="text-white/40">|</span>
          <a
            href="#"
            className="transition-colors duration-150 hover:text-white"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


