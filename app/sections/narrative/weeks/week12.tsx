"use client";

import { useState } from "react";

const INITIAL_IMAGES = [
  { id: 1, src: "/pictures/week12/placeholder-1.jpg", color: "bg-gray-400 dark:bg-gray-600", title: "System Testing" },
  { id: 2, src: "/pictures/week12/placeholder-2.jpg", color: "bg-gray-400 dark:bg-gray-600", title: "Bug Fixing" },
  { id: 3, src: "/pictures/week12/placeholder-3.jpg", color: "bg-gray-400 dark:bg-gray-600", title: "Mentor Feedback" },
  { id: 4, src: "/pictures/week12/placeholder-4.jpg", color: "bg-gray-400 dark:bg-gray-600", title: "BFP Training" },
  { id: 5, src: "/pictures/week12/placeholder-5.jpg", color: "bg-gray-400 dark:bg-gray-600", title: "Fire Safety" },
  { id: 6, src: "/pictures/week12/placeholder-6.jpg", color: "bg-gray-400 dark:bg-gray-600", title: "Emergency Prep" },
];

export default function Week12() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeImage = INITIAL_IMAGES[activeIndex];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % INITIAL_IMAGES.length);
  const handlePrev = () => setActiveIndex((prev) => (prev === 0 ? INITIAL_IMAGES.length - 1 : prev - 1));

  return (
    <div className="w-full animate-fade-in">
      <div className="mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Week 12: Rigorous Testing and Fire Safety Training</h3>
        <p className="text-cyan-600 dark:text-cyan-400 font-medium mt-1">May 4, 2026 - May 8, 2026</p>
      </div>

      {/* --- E-COMMERCE STYLE GALLERY --- */}
      <div className="relative flex flex-col xl:block w-full mb-8">
        <div className="relative group w-full xl:w-[calc(100%-28rem)] aspect-video md:aspect-[2/1] lg:aspect-[16/7] xl:aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
          <div key={activeIndex} className={`relative w-full h-full flex items-center justify-center animate-fade-in ${activeImage.color}`}>
             <span className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-3xl font-bold tracking-wider shadow-sm z-10 text-center px-4">
                {activeImage.title}
             </span>
             <img src={activeImage.src} alt={activeImage.title} className="relative w-full h-full object-contain bg-black z-20" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          </div>
          <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-800 text-gray-800 dark:text-white p-2.5 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 z-30" aria-label="Previous Image">
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-800 text-gray-800 dark:text-white p-2.5 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 z-30" aria-label="Next Image">
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>

        <div className="flex xl:grid xl:grid-cols-2 gap-2.5 overflow-x-auto xl:overflow-y-auto pb-2 xl:pb-0 hide-scrollbar w-full xl:w-[26rem] mt-3 xl:mt-0 xl:absolute xl:right-0 xl:top-0 xl:bottom-0 snap-x xl:snap-y justify-start lg:justify-center xl:content-start">
          {INITIAL_IMAGES.map((img, index) => {
            const isActive = index === activeIndex;
            return (
              <button key={img.id} onClick={() => setActiveIndex(index)} className={`relative flex-shrink-0 w-24 md:w-32 xl:w-full aspect-video rounded-md overflow-hidden transition-all duration-300 snap-center border-2 ${isActive ? "border-cyan-500 ring-2 ring-cyan-500/30 opacity-100 shadow-md scale-95 xl:scale-100" : "border-transparent opacity-60 hover:opacity-100 dark:opacity-50 dark:hover:opacity-100"} ${img.color}`}>
                <span className="absolute inset-0 flex items-center justify-center text-white text-[10px] xl:text-[9px] font-bold z-10 text-center px-1 leading-tight">{img.title}</span>
                <img src={img.src} alt={img.title} className="relative w-full h-full object-cover z-20" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                {isActive && <div className="absolute inset-0 bg-transparent mix-blend-overlay z-30"></div>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Narrative Content */}
      <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
        <p>
          During the twelfth week, my primary focus shifted heavily toward the continued development, testing, and polishing of the DOCS system. As we drew closer to our final deadlines, ensuring the application worked seamlessly became the top priority.
        </p>
        <p>
          I conducted multiple test scenarios using different inputs to assess system reliability, identify edge-case bugs, and improve overall performance and stability. This quality assurance phase was presented during our eleventh discussion with MIS mentors, allowing them to review our final improvements.
        </p>
        <p>
          Outside of software development, I attended a Fire Safety and Emergency Response Training conducted by the Bureau of Fire Protection (BFP). This was an important experience that provided essential awareness regarding workplace safety and emergency preparedness protocols within a government facility.
        </p>

        <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border-l-4 border-cyan-500 my-6">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Tasks & Learnings:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li><strong>Quality Assurance:</strong> Conducted rigorous multi-scenario testing to uncover bugs and measure system stability.</li>
            <li><strong>Performance Polishing:</strong> Implemented final fixes and optimizations based on test results and the eleventh mentor evaluation.</li>
            <li><strong>Workplace Safety:</strong> Participated in official Fire Safety and Emergency Response Training provided by the BFP.</li>
            <li><strong>Final Preparations:</strong> Shifted project focus from building new features to stabilizing the core architecture for presentation.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}