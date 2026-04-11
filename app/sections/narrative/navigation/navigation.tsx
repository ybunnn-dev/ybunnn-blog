"use client";

import { SetStateAction, useState } from "react";

export default function NarrativeNavigation({ onSelectNarrative }) {
  // Generate an array of 13 weeks based on your Feb 20 - May 16 timeline
  const weeks = Array.from({ length: 13 }, (_, i) => `Week ${i + 1}`);

  // Default to Week 1
  const [activeWeek, setActiveWeek] = useState(weeks[0]);

  // Handler for changing week
  const handleWeekClick = (week: SetStateAction<string>) => {
    setActiveWeek(week);
    if (onSelectNarrative) onSelectNarrative(week);
  };

  return (
    <div className="bg-white dark:bg-[#1E293B] rounded-lg p-2 border border-gray-200 dark:border-gray-700 transition-colors duration-300 w-full">
      
      {/* Scrollable Row of Week Pills */}
      <div className="flex w-full overflow-x-auto hide-scrollbar gap-2 p-2">
        {weeks.map((week) => {
          const isActive = activeWeek === week;
          return (
            <button
              key={week}
              onClick={() => handleWeekClick(week)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-cyan-500 text-white shadow-md shadow-cyan-500/30 transform scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {week}
            </button>
          );
        })}
      </div>
      
    </div>
  );
}