"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// --- SKELETON LOADER COMPONENTS ---
const SkeletonCard = ({ className }: { className?: string }) => (
  <div className={`bg-gray-200 dark:bg-gray-800 animate-pulse rounded-lg ${className}`}></div>
);

const NarrativeSkeleton = () => (
  <div className="w-full animate-pulse">
    {/* Header Skeleton */}
    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-2"></div>
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-8"></div>
    
    {/* Carousel Skeleton */}
    <div className="flex gap-4 mb-8 overflow-hidden">
       <div className="w-full lg:w-[calc(33.333%-0.66rem)] xl:w-[calc(20%-0.8rem)] aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex-shrink-0"></div>
       <div className="hidden lg:block w-[calc(33.333%-0.66rem)] xl:w-[calc(20%-0.8rem)] aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex-shrink-0"></div>
       <div className="hidden lg:block w-[calc(33.333%-0.66rem)] xl:w-[calc(20%-0.8rem)] aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex-shrink-0"></div>
    </div>
    
    {/* Text Skeleton */}
    <div className="space-y-3">
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
    </div>
  </div>
);

// --- DYNAMIC IMPORTS ---

// Narrative Weeks
const LazyWeek1 = dynamic(() => import("./sections/narrative/weeks/week1"), {
  loading: () => <NarrativeSkeleton />,
});

const LazyWeek2 = dynamic(() => import("./sections/narrative/weeks/week2"), {
  loading: () => <NarrativeSkeleton />,
});

const LazyWeek3 = dynamic(() => import("./sections/narrative/weeks/week3"), {
  loading: () => <NarrativeSkeleton />,
});

// Main Sections
const LazyNarrativeNav = dynamic(
  () => import("./sections/narrative/navigation/navigation"),
  {
    ssr: false,
    loading: () => <SkeletonCard className="w-full h-[120px]" /> 
  }
);

const LazyProfileSec = dynamic(() => import("./sections/profile/profile_section"), {
  ssr: false,
  loading: () => <SkeletonCard className="w-full h-[350px]" />
});

const LazyOverView = dynamic(() => import("./sections/overview"), {
  ssr: false,
  loading: () => <SkeletonCard className="w-full h-[250px]" />
});

const LazyInternshipProgress = dynamic(() => import("./sections/progress"), {
  ssr: false,
  loading: () => <SkeletonCard className="w-full h-full" />
});



export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // --- NARRATIVE STATE ---
  const [selectedWeek, setSelectedWeek] = useState<string>("Week 1");

  const handleNarrativeChange = (week: string) => {
    setSelectedWeek(week);
  };

  // --- NARRATIVE RENDERER ---
  // Helper function to render the correct week based on state
  const renderNarrativeContent = () => {
    switch (selectedWeek) {
      case "Week 1":
        return <LazyWeek1 />;
      case "Week 2":
        return <LazyWeek2 />;

      case "Week 3":
        return <div className="text-gray-500 dark:text-gray-400">Week 3 content coming soon...</div>;
        //return <LazyWeek3 />;

      case "Week 4":
        return <div className="text-gray-500 dark:text-gray-400">Week 4 content coming soon...</div>;

      case "Week 5":
        return <div className="text-gray-500 dark:text-gray-400">Week 5 content coming soon...</div>;

      case "Week 6":
        return <div className="text-gray-500 dark:text-gray-400">Week 6 content coming soon...</div>;
      // Add cases up to Week 13...
      default:
        return (
          <div className="text-center text-gray-500 dark:text-gray-400 py-10">
            Select a week above to view the narrative report.
          </div>
        );
    }
  };

  // 1. Check local storage and system preference on initial load
  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme");
    
    if (storedTheme === "dark") {
      setIsDarkMode(true);
    } else if (storedTheme === "light") {
      setIsDarkMode(false);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true);
    }
  }, []);

  // 2. Apply class to HTML and save preference to local storage whenever it changes
  useEffect(() => {
    if (!mounted) return;

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode, mounted]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen w-full bg-[#F4F4F4] dark:bg-gray-900 transition-colors duration-300 pb-10">
      
      <main className="flex w-full flex-col px-4 sm:px-16 xl:px-[10rem] py-10 max-w-full mx-auto">
        
        {/* --- Top Bar: Controls & Contacts --- */}
        <div className="flex flex-wrap items-center justify-end w-full mb-6 gap-4 sm:gap-6">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`relative w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 focus:outline-none ${
              isDarkMode ? "bg-slate-700" : "bg-gray-300"
            }`}
            aria-label="Toggle Dark Mode"
          >
            <svg version="1.0" className="absolute left-1.5 w-4 h-4 text-gray-100" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <circle fillRule="evenodd" clipRule="evenodd" fill="currentColor" cx="32.003" cy="32.005" r="16.001"></circle> <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M12.001,31.997c0-2.211-1.789-4-4-4H4c-2.211,0-4,1.789-4,4 s1.789,4,4,4h4C10.212,35.997,12.001,34.208,12.001,31.997z"></path> <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M12.204,46.139l-2.832,2.833c-1.563,1.562-1.563,4.094,0,5.656 c1.562,1.562,4.094,1.562,5.657,0l2.833-2.832c1.562-1.562,1.562-4.095,0-5.657C16.298,44.576,13.767,44.576,12.204,46.139z"></path> <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M32.003,51.999c-2.211,0-4,1.789-4,4V60c0,2.211,1.789,4,4,4 s4-1.789,4-4l-0.004-4.001C36.003,53.788,34.21,51.999,32.003,51.999z"></path> <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M51.798,46.143c-1.559-1.566-4.091-1.566-5.653-0.004 s-1.562,4.095,0,5.657l2.829,2.828c1.562,1.57,4.094,1.562,5.656,0s1.566-4.09,0-5.656L51.798,46.143z"></path> <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M60.006,27.997l-4.009,0.008 c-2.203-0.008-3.992,1.781-3.992,3.992c-0.008,2.211,1.789,4,3.992,4h4.001c2.219,0.008,4-1.789,4-4 C64.002,29.79,62.217,27.997,60.006,27.997z"></path> <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M51.798,17.859l2.828-2.829c1.574-1.566,1.562-4.094,0-5.657 c-1.559-1.567-4.09-1.567-5.652-0.004l-2.829,2.836c-1.562,1.555-1.562,4.086,0,5.649C47.699,19.426,50.239,19.418,51.798,17.859z"></path> <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M32.003,11.995c2.207,0.016,4-1.789,4-3.992v-4 c0-2.219-1.789-4-4-4c-2.211-0.008-4,1.781-4,3.993l0.008,4.008C28.003,10.206,29.792,11.995,32.003,11.995z"></path> <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M12.212,17.855c1.555,1.562,4.079,1.562,5.646-0.004 c1.574-1.551,1.566-4.09,0.008-5.649l-2.829-2.828c-1.57-1.571-4.094-1.559-5.657,0c-1.575,1.559-1.575,4.09-0.012,5.653 L12.212,17.855z"></path> </g> </g></svg>
            <svg className="absolute right-1.5 w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
            <div 
              className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 z-10 flex items-center justify-center ${
                isDarkMode ? "translate-x-8" : "translate-x-0"
              }`}
            ></div>
          </button>
        </div>

        {/* 1. Profile Section */}
        <div className="mb-4">
          <LazyProfileSec />
        </div>

        {/* 2. Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
          
          {/* LEFT COLUMN */}
          <div className="col-span-1 lg:col-span-4 flex flex-col gap-4">
            <LazyOverView />
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-span-1 lg:col-span-2 gap-3">
            
              <LazyInternshipProgress />
            
           
          </div>
        </div>

        {/* 3. Narrative Reports Full Width Below Grid */}
        <div className="w-full mt-6">
          <h2 className="font-semibold text-xl mb-3 text-gray-800 dark:text-white">Narrative Reports</h2>
          <LazyNarrativeNav onSelectNarrative={handleNarrativeChange} />      

          {/* Narrative Content Container */}
          <div className="mt-4 bg-white dark:bg-[#1E293B] rounded-lg p-6 border border-gray-200 dark:border-gray-700 transition-colors duration-300 min-h-[300px]">
            {renderNarrativeContent()}
          </div>
        </div>
      </main>
      <div className="w-full flex items-center justify-center text-gray-800 dark:text-white font-light text-xs">
        <p>© 2026 John Ivan B. Belaro. All rights reserved.</p>
      </div>
    </div>
  );
}