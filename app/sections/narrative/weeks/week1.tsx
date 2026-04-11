"use client";

import { useState } from "react";

const INITIAL_IMAGES = [
  { id: 1, src: "/pictures/week1/placeholder-1.jpg", color: "bg-blue-400 dark:bg-blue-600", title: "FAS Setup" },
  { id: 2, src: "/pictures/week1/placeholder-2.jpg", color: "bg-emerald-400 dark:bg-emerald-600", title: "Orientation" },
  { id: 3, src: "/pictures/week1/placeholder-3.jpg", color: "bg-amber-400 dark:bg-amber-600", title: "App Scripting" },
  { id: 4, src: "/pictures/week1/placeholder-4.jpg", color: "bg-purple-400 dark:bg-purple-600", title: "DOST Staff" },
  { id: 5, src: "/pictures/week1/placeholder-5.jpg", color: "bg-rose-400 dark:bg-rose-600", title: "Zumba Friday" },
  { id: 6, src: "/pictures/week1/placeholder-6.jpg", color: "bg-cyan-400 dark:bg-cyan-600", title: "Flag Lowering" },
];

export default function Week1() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeImage = INITIAL_IMAGES[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % INITIAL_IMAGES.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? INITIAL_IMAGES.length - 1 : prev - 1));
  };

  return (
    <div className="w-full animate-fade-in">
      {/* Dynamic Header */}
      <div className="mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Week 1 Narrative Report</h3>
        <p className="text-cyan-600 dark:text-cyan-400 font-medium mt-1">February 20, 2026</p>
      </div>

      {/* --- E-COMMERCE STYLE GALLERY --- */}
      <div className="relative flex flex-col xl:block w-full mb-8">
        
        {/* 1. Main Display View */}
        {/* Increased gap allowance for a wider 3-column grid (calc(100%-23rem)) */}
        <div className="relative group w-full xl:w-[calc(100%-28rem)] aspect-video md:aspect-[2/1] lg:aspect-[16/7] xl:aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
          
          <div key={activeIndex} className={`relative w-full h-full flex items-center justify-center animate-fade-in ${activeImage.color}`}>
             
             {/* Fallback Text */}
             <span className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-3xl font-bold tracking-wider shadow-sm z-10 text-center px-4">
                {activeImage.title}
             </span>

             {/* Main Image */}
             <img 
                src={activeImage.src} 
                alt={activeImage.title} 
                className="relative w-full h-full object-contain bg-black z-20"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
             />
          </div>

          {/* Left/Right Controls on Main Image */}
          {/* FIXED: Removed default opacity, now strictly opacity-0 fading to opacity-100 on group-hover */}
          <button 
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-800 text-gray-800 dark:text-white p-2.5 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 z-30"
            aria-label="Previous Image"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-800 text-gray-800 dark:text-white p-2.5 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 z-30"
            aria-label="Next Image"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>

        {/* 2. Thumbnail Navigation Carousel */}
        {/* CHANGED TO 3-COLUMN GRID ON XL: xl:grid xl:grid-cols-3 xl:w-[22rem] */}
        <div className="flex xl:grid xl:grid-cols-2 gap-2.5 overflow-x-auto xl:overflow-y-auto pb-2 xl:pb-0 hide-scrollbar w-full xl:w-[26rem] mt-3 xl:mt-0 xl:absolute xl:right-0 xl:top-0 xl:bottom-0 snap-x xl:snap-y justify-start lg:justify-center xl:content-start">
          {INITIAL_IMAGES.map((img, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={img.id}
                onClick={() => setActiveIndex(index)}
                className={`relative flex-shrink-0 w-24 md:w-32 xl:w-full aspect-video rounded-md overflow-hidden transition-all duration-300 snap-center border-2 ${
                  isActive 
                    ? "border-cyan-500 ring-2 ring-cyan-500/30 opacity-100 shadow-md scale-95 xl:scale-100" 
                    : "border-transparent opacity-60 hover:opacity-100 dark:opacity-50 dark:hover:opacity-100"
                } ${img.color}`}
              >
                {/* Thumbnail Fallback Text */}
                <span className="absolute inset-0 flex items-center justify-center text-white text-[10px] xl:text-[9px] font-bold z-10 text-center px-1 leading-tight">
                  {img.title}
                </span>

                {/* Thumbnail Image */}
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="relative w-full h-full object-cover z-20"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                
                {/* Active Indicator Overlay */}
                {isActive && <div className="absolute inset-0 bg-cyan-500/20 mix-blend-overlay z-30"></div>}
              </button>
            );
          })}
        </div>
      </div>
      {/* --- END GALLERY --- */}

      {/* Narrative Content */}
      <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
        <p>
          My internship journey officially began today, and walking into the Department of Science and Technology (DOST) office brought a mix of excitement and nervousness. Being exposed to a professional government working environment for the first time was intimidating, but the welcoming atmosphere quickly put me at ease.
        </p>

        <p>
          The day started with formal introductions. I had the opportunity to meet the staff members and undergo a brief orientation where we discussed workplace expectations, my role, and the technical scope of my tasks for the upcoming weeks.
        </p>

        <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border-l-4 border-cyan-500 my-6">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Tasks & Learnings:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Provided hands-on technical assistance by setting up a computer workstation in the Finance and Administrative Services (FAS) division.</li>
            <li>Received my first introduction to <strong>Google Apps Script</strong> automation, laying the groundwork for streamlining office workflows.</li>
          </ul>
        </div>

        <p>
          Beyond the technical tasks, I also got to experience the agency's workplace culture. After the traditional Friday flag-lowering ceremony, I participated in their weekly Zumba session. It was a fun, unexpected way to end my first day and a great opportunity to bond with my new colleagues in a more relaxed setting. 
        </p>
      </div>
    </div>
  );
}