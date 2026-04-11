export default function InternshipProgress() {
  // --- Update your current progress here ---
  const requiredHours = 486;
  const currentHours = 120; // Replace with your actual hours rendered
  
  // Assuming a standard 8-hour workday: 486 / 8 = 60.75 days (rounded up to 61)
  const requiredDays = 61; 
  const currentDays = 15;   // Replace with your actual days rendered
  
  // Calculate percentages
  const hoursPercent = Math.min(100, (currentHours / requiredHours) * 100).toFixed(1);
  const daysPercent = Math.min(100, (currentDays / requiredDays) * 100).toFixed(1);
  const remainingHours = Math.max(0, requiredHours - currentHours);

  return (
    <div className="bg-white dark:bg-[#1E293B] rounded-lg p-6 border border-gray-200 dark:border-gray-700 h-full transition-colors duration-300 flex flex-col justify-center">
      <h2 className="font-semibold text-xl mb-8 text-gray-700 dark:text-white">Internship Progress</h2>
      
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
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{hoursPercent}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 overflow-hidden shadow-inner">
            <div 
              className="bg-blue-600 h-3 rounded-full transition-all duration-1000 ease-out" 
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
            <span className="text-sm font-semibold text-emerald-500 dark:text-emerald-400">{daysPercent}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 overflow-hidden shadow-inner">
            <div 
              className="bg-emerald-500 h-3 rounded-full transition-all duration-1000 ease-out" 
              style={{ width: `${daysPercent}%` }}
            ></div>
          </div>
        </div>
        
        {/* Remaining Time Summary Banner */}
        <div className="mt-6 p-4 bg-slate-50 dark:bg-[#0F172A] rounded-lg border border-slate-200 dark:border-gray-700">
          <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
            <strong className="text-blue-600 dark:text-blue-400">{remainingHours} hours</strong> left to complete the internship requirement.
          </p>
        </div>
      </div>
    </div>
  );
}