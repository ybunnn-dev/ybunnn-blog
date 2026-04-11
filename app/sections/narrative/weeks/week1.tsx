"use client";

import { useState } from "react";

// Dummy image data - replace the bg-colors with actual image URLs later
const INITIAL_IMAGES = [
  { id: 1, src: "/placeholder-1.jpg", color: "bg-blue-400 dark:bg-blue-600", title: "FAS Setup" },
  { id: 2, src: "/placeholder-2.jpg", color: "bg-emerald-400 dark:bg-emerald-600", title: "Orientation" },
  { id: 3, src: "/placeholder-3.jpg", color: "bg-amber-400 dark:bg-amber-600", title: "App Scripting" },
  { id: 4, src: "/placeholder-4.jpg", color: "bg-purple-400 dark:bg-purple-600", title: "DOST Staff" },
  { id: 5, src: "/placeholder-5.jpg", color: "bg-rose-400 dark:bg-rose-600", title: "Zumba Friday" },
  { id: 6, src: "/placeholder-6.jpg", color: "bg-cyan-400 dark:bg-cyan-600", title: "Flag Lowering" },
];

export default function Week1() {
  // State to hold the rotating array of images
  const [images, setImages] = useState(INITIAL_IMAGES);

  // Rotating Array Logic
  const handleNext = () => {
    setImages((prev) => {
      const newArray = [...prev];
      const firstItem = newArray.shift(); // Remove first item
      if (firstItem) newArray.push(firstItem); // Push it to the end
      return newArray;
    });
  };

  const handlePrev = () => {
    setImages((prev) => {
      const newArray = [...prev];
      const lastItem = newArray.pop(); // Remove last item
      if (lastItem) newArray.unshift(lastItem); // Put it at the beginning
      return newArray;
    });
  };

  return (
    <div className="w-full animate-fade-in">
      {/* Dynamic Header */}
      <div className="mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Week 1 Narrative Report</h3>
        <p className="text-cyan-600 dark:text-cyan-400 font-medium mt-1">February 20, 2026 (Friday)</p>
      </div>

      {/* Responsive Infinite Carousel */}
      <div className="relative w-full mb-8 group">
        {/* Images Container */}
        <div className="flex gap-4 overflow-hidden transition-all duration-300">
          {images.map((img, index) => (
            <div 
              key={img.id}
              // The classes below handle the responsiveness: 1 on mobile, 3 on lg, 5 on xl
              className={`flex-shrink-0 transition-all duration-500 ease-in-out w-full lg:w-[calc(33.333%-0.66rem)] xl:w-[calc(20%-0.8rem)] aspect-video rounded-lg flex items-center justify-center shadow-sm border border-gray-200 dark:border-gray-700 ${img.color}`}
            >
              {/* Replace this span with an actual <img src={img.src} /> tag later */}
              <span className="text-white font-bold tracking-wider shadow-sm">{img.title}</span>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button 
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 text-gray-800 dark:text-white p-2 rounded-full shadow-md backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Previous Image"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <button 
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 text-gray-800 dark:text-white p-2 rounded-full shadow-md backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Next Image"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>

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