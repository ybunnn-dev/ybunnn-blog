"use client";

import { useState } from "react";

const INITIAL_IMAGES = [
  { id: 1, src: "/pictures/week8/placeholder-1.jpg", color: "bg-gray-400 dark:bg-gray-600", title: "DOCS Dev" },
  { id: 2, src: "/pictures/week8/placeholder-2.jpg", color: "bg-gray-400 dark:bg-gray-600", title: "Mentor Feedback" },
  { id: 3, src: "/pictures/week8/placeholder-3.jpg", color: "bg-gray-400 dark:bg-gray-600", title: "Doc Management" },
  { id: 4, src: "/pictures/week8/placeholder-4.jpg", color: "bg-gray-400 dark:bg-gray-600", title: "System Iteration" },
  { id: 5, src: "/pictures/week8/placeholder-5.jpg", color: "bg-gray-400 dark:bg-gray-600", title: "Friday WFH" },
  { id: 6, src: "/pictures/week8/placeholder-6.jpg", color: "bg-gray-400 dark:bg-gray-600", title: "Project Deadlines" },
];

export default function Week8() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeImage = INITIAL_IMAGES[activeIndex];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % INITIAL_IMAGES.length);
  const handlePrev = () => setActiveIndex((prev) => (prev === 0 ? INITIAL_IMAGES.length - 1 : prev - 1));

  return (
    <div className="w-full animate-fade-in">
      <div className="mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Week 8: Iterative Improvements and Navigating Project Deadlines</h3>
        <p className="text-cyan-600 dark:text-cyan-400 font-medium mt-1">April 6, 2026 - April 10, 2026</p>
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
          During the eighth week of my internship at the Department of Science and Technology Region V, I continued the development of the Document Tracking and Communication System (DOCS) while participating in the seventh discussion with MIS mentors, where we presented the system’s document management module and overall progress for evaluation.
        </p>
        <p>
          Throughout the week, development work on DOCS continued alongside iterative improvements based on mentor feedback. This period also marked the start of a new adjusted work arrangement.
        </p>
        <p>
          To help address time constraints related to official travel orders and pressing project deadlines, a Friday work-from-home (WFH) policy was implemented, giving us the flexibility to focus heavily on continuous coding.
        </p>

        <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border-l-4 border-cyan-500 my-6">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Tasks & Learnings:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li><strong>Core Module Development:</strong> Focus shifted to building out the complex Document Management module for DOCS.</li>
            <li><strong>Continuous Iteration:</strong> Integrated ongoing feedback from the seventh mentor evaluation to refine system workflows.</li>
            <li><strong>Time Management:</strong> Successfully navigated a hybrid work setup (Friday WFH) to prioritize deep work and meet deadlines.</li>
            <li><strong>Project Pacing:</strong> Learned how to balance rapid development needs with official office protocols and travel disruptions.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}