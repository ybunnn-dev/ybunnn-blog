"use client";

interface ProfileCardProps {
  data?: any; 
}

export default function ProfileCard({ data }: ProfileCardProps) {
  return (
    // 1. Added dark mode background and border colors to the main card
    <div className="w-full max-w-full mx-auto bg-white dark:bg-[#1E293B] rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors duration-300">
      
      {/* 2. Added dark:from-dark_gradient and dark:to-light_gradient using your tailwind config colors */}
      <div className="h-40 sm:h-56 w-full bg-gradient-to-r from-light_light_gradient to-light_dark_gradient dark:from-dark_gradient dark:to-light_gradient transition-colors duration-300"></div>
      
      {/* 3. Added items-center sm:items-start here! This forces the picture to center on mobile, and align left on larger screens */}
      <div className="px-6 sm:px-12 pb-8 relative flex flex-col sm:flex-row items-center sm:items-start gap-6">
        
        {/* Profile Picture */}
        <div className="-mt-16 sm:-mt-24 flex-shrink-0 relative z-10">
          {/* 1. Changed dark:bg-gray-700 to dark:bg-light_gradient */}
          <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full border-[6px] border-white dark:border-[#1E293B] overflow-hidden bg-gray-200 dark:bg-dark_gradient flex items-center transition-colors duration-300">
            
            {/* 2. LIGHT MODE IMAGE: Visible normally, hidden in dark mode (dark:hidden) */}
            <img 
              src="/pictures/main_pic_2.png" 
              alt="John Ivan B. Belaro"
              className="w-full h-full object-cover object-top block dark:hidden"
            />

            {/* 3. DARK MODE IMAGE: Hidden normally, visible in dark mode (dark:block) */}
            <img 
              src="/pictures/main_pic-dark.png" 
              alt="John Ivan B. Belaro"
              className="w-full h-full object-cover object-top hidden dark:block"
            />

          </div>
        </div>

        {/* Text and Action Buttons */}
        <div className="pt-2 sm:pt-4 flex flex-col justify-center text-center sm:text-left">
          
          {/* Added dark:text-white */}
          <h1 className="text-2xl font-bold text-header_text dark:text-white transition-colors">
            John Ivan B. Belaro
          </h1>
          
          {/* Added dark:text-gray-300 */}
          <p className="text-normal_text dark:text-gray-300 text-sm font-medium transition-colors">
            An Aspiring Full-Stack Web Developer
          </p>
          
          {/* Buttons & Icons Row */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-2">
            
            <button className="bg-gray-500 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded-md font-medium transition-colors font-semibold">
              Download CV
            </button>
            
            {/* Social Icons Container */}
            <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
              
              {/* Discord */}
              <a href="https://github.com/ybunnn-dev" target="_blank" className="hover:text-header_text dark:hover:text-white transition-colors" aria-label="Discord">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                </svg>
              </a>
              
              {/* Facebook (Manual SVG) */}
              <a href="https://www.facebook.com/johnivan.belaro" target="_blank" className="hover:text-[#1877F2] dark:hover:text-white transition-colors" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>

              {/* Gmail / Mail (Manual SVG) */}
              <a href="#" className="hover:text-[#EA4335] dark:hover:text-white transition-colors" aria-label="Gmail">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                </svg>
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}