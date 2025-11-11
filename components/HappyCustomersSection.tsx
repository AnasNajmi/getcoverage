// "use client";

// import Image from "next/image";
// import useEmblaCarousel from "embla-carousel-react";
// import { useCallback, useEffect, useMemo, useState } from "react";

// import { cn } from "@/lib/utils";

// type Review = {
//   title: string;
//   quote: string;
//   source: string;
// };

// const reviews: Review[] = [
//   {
//     title: "The Best Health Coverage Ever!",
//     quote:
//       '“The Best Health Coverage Ever!” – I got full coverage for me and my kids at half the price of my old plan. Prescription, dental, and even therapy sessions are included. Highly recommend!',
//     source: "Trustpilot",
//   },
//   {
//     title: "Fast, Real, and Affordable",
//     quote:
//       "“Fast, Real, and Affordable.” – I called, got approved within minutes, and started using my plan the next day. The team really made it simple and affordable.",
//     source: "Trustpilot",
//   },
//   {
//     title: "Friendly Support Team",
//     quote:
//       "“Friendly Support Team.” – Every agent I spoke with was patient and kind. They helped me compare options and find the perfect coverage without pressure.",
//     source: "Trustpilot",
//   },
//   {
//     title: "Coverage I Can Trust",
//     quote:
//       "“Coverage I Can Trust.” – After switching, I finally feel confident walking into any appointment. Claims are handled fast and benefits are crystal clear.",
//     source: "Trustpilot",
//   },
//   {
//     title: "Clear Guidance Every Step",
//     quote:
//       "“Clear Guidance Every Step.” – From enrollment to choosing doctors, the team explained everything in plain terms and checked back after my first visit.",
//     source: "Trustpilot",
//   },
//   {
//     title: "Affordable Plans That Fit",
//     quote:
//       "“Affordable Plans That Fit.” – I finally found coverage that works with my budget without sacrificing the benefits my family depends on.",
//     source: "Trustpilot",
//   },
// ];

// const HappyCustomersSection = () => {
//   const [viewportRef, emblaApi] = useEmblaCarousel({
//     loop: true,
//     align: "start",
//     skipSnaps: false,
//     slidesToScroll: 1,
//   });

//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setSelectedIndex(emblaApi.selectedScrollSnap());
//   }, [emblaApi]);

//   const onReInit = useCallback(() => {
//     if (!emblaApi) return;
//     setScrollSnaps(emblaApi.scrollSnapList());
//     onSelect();
//   }, [emblaApi, onSelect]);

//   useEffect(() => {
//     if (!emblaApi) return;

//     setScrollSnaps(emblaApi.scrollSnapList());
//     emblaApi.on("select", onSelect);
//     emblaApi.on("reInit", onReInit);

//     return () => {
//       emblaApi.off("select", onSelect);
//       emblaApi.off("reInit", onReInit);
//     };
//   }, [emblaApi, onReInit, onSelect]);

//   const groupedReviews = useMemo(() => {
//     const chunks: Review[][] = [];
//     for (let i = 0; i < reviews.length; i += 2) {
//       chunks.push(reviews.slice(i, i + 2));
//     }
//     return chunks;
//   }, []);

//   return (
//     <section
//       className="relative isolate overflow-hidden bg-cover bg-center bg-no-repeat py-20 sm:py-24 lg:py-28"
//       style={{
//         backgroundImage: "url('/review.png')",
//       }}
//     >
//       <div className="absolute inset-0 bg-[#4b5773]/65" />

//       <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
//         <header className="mx-auto max-w-3xl text-center">
//           <h2 className="text-2xl font-bold uppercase  text-[#0a1f4a] sm:text-[2.375rem]  whitespace-nowrap">
//             Check Our Happy Customers
//           </h2>
//           <div className="mt-4 flex items-center justify-center gap-2">
//             <span className="inline-block h-0.5 w-12 rounded-full bg-[#00a4f4]" />
//             <span className="inline-block h-0.5 w-6 rounded-full bg-[#0a1f4a]" />
//             <span className="inline-block h-0.5 w-12 rounded-full bg-[#00a4f4]" />
//           </div>
//         </header>

//         <div className="mt-12 sm:mt-16">
//           <div className="relative">
//             <div className="overflow-hidden" ref={viewportRef}>
//               <div className="flex gap-6 sm:gap-8">
//                 {groupedReviews.map((group, index) => (
//                   <article
//                     key={`review-group-${index}`}
//                     className="flex-[0_0_100%]"
//                   >
//                     <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
//                       {group.map(({ quote, source, title }) => (
//                         <ReviewCard
//                           key={`${title}-${source}`}
//                           quote={quote}
//                           source={source}
//                           title={title}
//                         />
//                       ))}
//                     </div>
//                   </article>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-10 flex items-center justify-center gap-3">
//               {scrollSnaps.map((_, index) => (
//                 <button
//                   key={`review-dot-${index}`}
//                   type="button"
//                   onClick={() => emblaApi?.scrollTo(index)}
//                   aria-label={`Go to testimonial ${index + 1}`}
//                   className={cn(
//                     "h-3 w-3 rounded-full transition",
//                     selectedIndex === index
//                       ? "bg-[#0a1f4a]"
//                       : "bg-[#0a1f4a]/30 hover:bg-[#0a1f4a]/55",
//                   )}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const ReviewCard = ({ title, quote, source }: Review) => (
//   <div className="flex h-full flex-col gap-6 rounded-[32px] bg-white px-7 py-9 text-left sm:px-9 sm:py-10">
//     <div className="flex flex-wrap items-center gap-4">
//       <div className="flex items-center gap-1">
//         <Image
//           src="/veri.png"
//           alt="Verified rating"
//           width={120}
//           height={24}
//           className="h-7 w-auto"
//         />
//       </div>
//       <div className="inline-flex items-center gap-2 rounded-full bg-[#ffffff] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#0a1f4a] sm:text-[0.7rem]">
       
//       </div>
//     </div>
//     <div className="space-y-3">
//       <h3 className="text-xl font-extrabold leading-tight text-[#0a1f4a] sm:text-[1.625rem]">
//         {title}
//       </h3>
//       <p className="text-sm leading-relaxed text-[#47566b] sm:text-base">
//         {quote}
//       </p>
//     </div>
//     <TrustpilotBadge />
//   </div>
// );

// const CheckPillIcon = () => (
//   <svg
//     width="16"
//     height="16"
//     viewBox="0 0 16 16"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     className="h-3.5 w-3.5 text-[#0a1f4a]"
//   >
//     <path
//       d="M8 1.333a6.667 6.667 0 1 0 0 13.334A6.667 6.667 0 0 0 8 1.333zm3.048 4.88-3.02 3.537a.667.667 0 0 1-.987.026L5.672 8.407a.667.667 0 0 1 .943-.943l1.03 1.03 2.543-2.977a.667.667 0 0 1 .96.89z"
//       fill="currentColor"
//     />
//   </svg>
// );

// const TrustpilotBadge = () => (
//   <div className="mt-auto flex items-center gap-3">
//     <svg
//       width="20"
//       height="20"
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-5 w-5 text-[#00b67a]"
//     >
//       <path
//         d="M9.999.833l2.1 6.48h6.817l-5.515 4.01 2.1 6.48L10 13.793l-5.5 4.01 2.1-6.48-5.5-4.01h6.817L9.999.833z"
//         fill="currentColor"
//       />
//     </svg>
//     <span className="text-base font-semibold text-[#041a4b]">Trustpilot</span>
//   </div>
// );

// export default HappyCustomersSection;


