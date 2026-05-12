"use client";

import { useState } from "react";

const INITIAL_IMAGES = [
  { id: 1, src: "/pictures/week2/placeholder-1.jpg", color: "bg-gray-400 dark:bg-gray-600", title: "FAS Setup" },
  { id: 2, src: "/pictures/week2/placeholder-2.jpg", color: "bg-gray-400 dark:bg-gray-600", title: "Orientation" },
  { id: 3, src: "/pictures/week2/placeholder-3.jpg", color: "bg-gray-400 dark:bg-gray-600", title: "App Scripting" },
  { id: 4, src: "/pictures/week2/placeholder-4.jpg", color: "bg-gray-400 dark:bg-gray-600", title: "DOST Staff" },
  { id: 5, src: "/pictures/week2/placeholder-5.jpg", color: "bg-gray-400 dark:bg-gray-600", title: "Zumba Friday" },
  { id: 6, src: "/pictures/week2/placeholder-6.jpg", color: "bg-gray-400 dark:bg-gray-600", title: "Flag Lowering" },
];

export default function Week3() {
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
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Week 2: Planning, Coordination, and System Preparation</h3>
        <p className="text-cyan-600 dark:text-cyan-400 font-medium mt-1">March 2, 2026 - March 6, 2026</p>
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
                {isActive && <div className="absolute inset-0 bg-transparent mix-blend-overlay z-30"></div>}
              </button>
            );
          })}
        </div>
      </div>
      {/* --- END GALLERY --- */}

      {/* Narrative Content */}
      <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
        <p>
          During the second week of my internship at the Department of Science and Technology (DOST), 
          our team focused on the initial planning and coordination stages for two systems: the 
          Document Tracking and Communication System (DOCS) and the Event Management System (EMS). 
          This week involved discussions, brainstorming sessions, and technical preparation activities 
          that helped establish the foundation of both projects.
        </p>

        <p>
          One of the major activities conducted during the week was an interview session at the Records Management Unit 
          regarding the DOCS project. The discussion helped us gather relevant information about 
          existing workflows, user requirements, and possible improvements that could be integrated 
          into the system.
        </p>

        <p>
          In addition, brainstorming sessions were conducted for both DOCS and EMS to identify 
          suitable features, workflows, and design approaches. These collaborative discussions 
          contributed to the overall planning and direction of the systems.
        </p>

        <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border-l-4 border-cyan-500 my-6">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Key Tasks & Contributions:
          </h4>

          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Participated in planning and coordination activities for ongoing system projects.</li>
            <li>Conducted information gathering and consultation activities with office personnel.</li>
            <li>Contributed to brainstorming sessions for workflow and process improvements.</li>
            <li>Created visual documentation and process diagrams for system planning.</li>
            <li>Assisted in preparing interface layouts and design prototypes.</li>
            <li>Provided technical assistance for office software and hardware setup.</li>
            <li>Installed and configured necessary drivers and productivity tools.</li>
            <li>Performed troubleshooting and maintenance for office equipment.</li>
          </ul>
        </div>

        <p>
          Aside from system planning and design tasks, I was also given opportunities to provide 
          technical assistance within the office. These tasks improved my problem-solving skills 
          and allowed me to apply practical IT knowledge in a real working environment.
        </p>

        <p>
          Overall, the second week provided valuable experience in system analysis, collaborative 
          planning, and technical support. It also gave me a better understanding of how technology 
          solutions are conceptualized and prepared before actual system development begins.
        </p>
      </div>
    </div>
  );
}