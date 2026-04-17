export default function Overview() {
  return (
    <div className="bg-white dark:bg-[#1E293B] rounded-lg p-6 pb-20 border border-gray-200 dark:border-gray-700 text-header_text dark:text-gray-300 transition-colors duration-300">
      
      <h2 className="font-semibold text-xl text-gray-800 dark:text-white">Internship Overview</h2>
      
      <div className="w-full">
        
        {/* Institutional Details & Logos Container */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-gray-200 dark:border-gray-700 pb-6 gap-6 md:gap-4">
          
          {/* Left Side: Text Details */}
          <div className="space-y-1 text-md">
            <p><span className="font-medium text-gray-800 dark:text-gray-200">Agency:</span> DOST V - Management Information Systems Unit</p>
            <p><span className="font-medium text-gray-800 dark:text-gray-200">School:</span> Bicol University College of Science</p>
            <p><span className="font-medium text-gray-800 dark:text-gray-200">Program:</span> Bachelor of Science in Information Technology (4th Year)</p>
          </div>

          {/* Right Side: Logos (Fixed mobile centering) */}
          <div className="flex flex-row gap-4 items-center shrink-0 w-full justify-center md:w-auto md:justify-end">
            <img src="/pictures/dost-logo.png" alt="DOST Bicol Logo" className="w-16 h-16 object-contain" /> 
            <img src="/pictures/bu-logo.png" alt="BU Logo" className="w-20 h-20 object-contain" /> 
            <img src="/pictures/cs-logo.png" alt="BUCS Logo" className="w-16 h-16 object-contain" /> 
          </div>

        </div>

        {/* Current Role Overview (Moved to Top) */}
        <div className="text-md leading-relaxed space-y-4">
          <p>
            Currently undertaking my internship at the Department of Science and Technology (DOST) Bicol, where I actively apply my academic foundation in a fast-paced professional environment.
          </p>
          <p>
            As a Full-Stack Laravel Developer, my core responsibility is designing, building, and maintaining robust internal systems that help streamline the agency's data management and operational workflows. 
          </p>
          <p>
            Alongside system development, I also serve as a Technical Assistant. In this capacity, I provide direct IT support, troubleshoot hardware and software issues, and ensure the smooth day-to-day technical operations of the office.
          </p>

        </div>

      </div>
    </div>
  );
}