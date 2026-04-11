export default function Overview() {
  return (
    <div className="bg-white dark:bg-[#1E293B] rounded-lg p-6 border border-gray-200 dark:border-gray-700 text-header_text dark:text-gray-300 transition-colors duration-300">
      
      <h2 className="font-semibold text-xl mb-5 text-gray-800 dark:text-white">Internship Overview</h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Left Side: Three Images Column */}
        <div className="w-full md:w-1/8 flex-shrink-0 flex flex-row lg:flex-col gap-2 items-center justify-center">
          <img src="/pictures/dost-logo.png" alt="DOST Bicol Logo" className="w-20 h-20 object-contain p-2" /> 
          <img src="/pictures/bu-logo.png" alt="BU Logo" className="w-32 h-32 object-contain p-2" /> 
          <img src="/pictures/cs-logo.png" alt="BUCS Logo" className="w-24 h-24 object-contain p-2" /> 
        </div>

        {/* Right Side: Details and Description Section */}
        <div className="w-full md:w-7/8">
          
          {/* Institutional Details */}
          <div className="mb-4 space-y-1 text-md border-b border-gray-200 dark:border-gray-700 pb-4">
            <p><span className="font-medium text-gray-800 dark:text-gray-200">Agency:</span> DOST V - Management Information Systems Unit</p>
            <p><span className="font-medium text-gray-800 dark:text-gray-200">School:</span> Bicol University College of Science</p>
            <p><span className="font-medium text-gray-800 dark:text-gray-200">Program:</span> Bachelor of Science in Information Technology (4th Year)</p>
          </div>

          {/* Internship Role Overview */}
          <div className="text-sm leading-relaxed space-y-3">
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
      
    </div>
  );
}