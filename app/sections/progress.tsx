export default function InternshipProgress() {
  // --- Update your current progress here ---
  const requiredHours = 486;
  const currentHours = 363; // Replace with your actual hours rendered
  
  // Assuming a standard 8-hour workday: 486 / 8 = 60.75 days (rounded up to 61)
  const requiredDays = 61; 
  const currentDays = 41;   // Replace with your actual days rendered
  
  // Calculate percentages
  const hoursPercent = Math.min(100, (currentHours / requiredHours) * 100).toFixed(1);
  const daysPercent = Math.min(100, (currentDays / requiredDays) * 100).toFixed(1);

  return (
    <div className="bg-white dark:bg-[#1E293B] rounded-lg p-6 border border-gray-200 dark:border-gray-700 h-full transition-colors duration-300 flex flex-col justify-center">
      <h2 className="font-semibold text-xl mb-2 text-gray-700 dark:text-white">Internship Progress</h2>
      <hr className="text-gray-200 dark:text-gray-700 mb-2"></hr>
      
      <div className="space-y-8">
        {/* Hours Progress Bar */}
        <div>
          <div className="flex justify-between items-end mb-2">
            <div>
              <h3 className="font-bold text-gray-700 dark:text-white text-md">Hours Rendered</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {currentHours} / {requiredHours} Hours
              </span>
            </div>
            <span className="text-sm font-semibold text-blue-400">{hoursPercent}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 overflow-hidden shadow-inner">
            <div 
              className="bg-blue-400 h-3 rounded-full transition-all duration-1000 ease-out" 
              style={{ width: `${hoursPercent}%` }}
            ></div>
          </div>
        </div>

        {/* Days Progress Bar */}
        <div>
          <div className="flex justify-between items-end mb-2">
            <div>
              <h3 className="font-bold text-gray-700 dark:text-white text-md">Days Rendered</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {currentDays} / {requiredDays} Days
              </span>
            </div>
            <span className="text-sm font-semibold text-emerald-400">{daysPercent}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 overflow-hidden shadow-inner">
            <div 
              className="bg-emerald-400 h-3 rounded-full transition-all duration-1000 ease-out" 
              style={{ width: `${daysPercent}%` }}
            ></div>
          </div>
        </div>
        
        {/* Current Schedule Banner */}
        <div className="mt-6 p-4 bg-slate-50 dark:bg-[#0F172A] rounded-lg border border-slate-200 dark:border-gray-700">
          <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3 border-b border-gray-200 dark:border-gray-600 pb-2">
            Current Schedule
          </h4>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <li className="flex justify-between items-center">
              <span className="font-medium text-gray-700 dark:text-gray-300">Mon - Thu:</span>
              <span className="text-right">
                7:00 AM - 6:00 PM <span className="text-[11px] uppercase font-semibold tracking-wider text-gray-500 dark:text-gray-500 ml-1">(Onsite)</span>
              </span>
            </li>
            <li className="flex justify-between items-center">
              <span className="font-medium text-gray-700 dark:text-gray-300">Friday:</span>
              <span className="text-right">
                7:00 AM - 12:00 PM <span className="text-[11px] uppercase tracking-wider font-bold text-blue-500 dark:text-blue-400 ml-1">(WFH)</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}