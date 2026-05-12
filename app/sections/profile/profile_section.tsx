"use client";

import BannerBackground from "./background"; // Make sure the path matches your structure

interface ProfileCardProps {
  data?: any;
}

export default function ProfileCard({ data }: ProfileCardProps) {
  return (
    <div className="w-full max-w-full mx-auto bg-white dark:bg-[#1E293B] rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors duration-300">

      {/* Render our isolated background component here */}
      <BannerBackground />

      <div className="px-6 sm:px-12 pb-8 relative flex flex-col sm:flex-row items-center sm:items-start gap-6">

        {/* Profile Picture */}
        <div className="-mt-16 sm:-mt-24 flex-shrink-0 relative z-10">
          <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full border-[6px] border-white dark:border-[#1E293B] overflow-hidden bg-gray-200 dark:bg-dark_gradient flex items-center transition-colors duration-300">
            <img
              src="/pictures/belaro-icon.jpg"
              alt="John Ivan B. Belaro"
              className="w-full h-full object-cover object-top block dark:hidden"
            />
            <img
              src="/pictures/belaro-icon.jpg"
              alt="John Ivan B. Belaro"
              className="w-full h-full object-cover object-top hidden dark:block"
            />
          </div>
        </div>

        {/* Text and Action Buttons */}
        <div className="pt-2 sm:pt-4 flex flex-col justify-center text-center sm:text-left">
          <h1 className="text-2xl font-bold text-header_text dark:text-white transition-colors">
            John Ivan B. Belaro
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm font-medium transition-colors">
            IT Intern | Full-Stack Developer | Technical Assistant
          </p>

          {/* Buttons & Icons Row */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-2">
              <button className="bg-cyan-500 dark:bg-gray-500 hover:bg-cyan-700 text-white text-sm px-4 py-2 rounded-md transition-colors font-semibold">
                See Portfolio
              </button>

              <div className="flex items-center gap-4 text-cyan-500 dark:text-gray-400">
                {/* GitHub */}
                <a href="https://github.com/ybunnn-dev" target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white transition-colors" aria-label="GitHub">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/john-ivan-belaro-569b37407/" target="_blank" rel="noreferrer" className="hover:text-[#0A66C2] dark:hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a href="https://www.facebook.com/johnivan.belaro" target="_blank" rel="noreferrer" className="hover:text-[#1877F2] dark:hover:text-white transition-colors" aria-label="Facebook">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}