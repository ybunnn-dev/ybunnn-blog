export default function Experience() {
  const timeline = [
    { year: "2026", title: "IT Intern", desc: "Currently an Intern at DOST-V" },
    { year: "2025", title: "Lead Developer", desc: "Led Capstone Project such as Integrated Barangay Healthcare Management System as well as projects such as Hotel Management System." },
    { year: "2024", title: "First Backend Experience", desc: "Collabarted in building web applications such as Inventory Management System and E-Commerece Website" },
    { year: "2023", title: "2nd Year College - Academic Projects", desc: "Collaborated on various university-level software engineering projects such as Java and Web Developement." },
    { year: "2022", title: "First Year College", desc: "Started my journey into coding C, C++, and Java." },
  ];

  return (
    <div className="bg-white dark:bg-[#1E293B] rounded-lg p-6 border border-gray-200 dark:border-gray-700 h-full transition-colors duration-300">
      <h2 className="font-semibold text-xl mb-6 text-gray-800 dark:text-white">My Experience</h2>
      
      {/* Timeline Container */}
      <div className="relative border-l-2 border-gray-200 dark:border-gray-600 ml-3">
        {timeline.map((item, index) => (
          <div key={index} className="mb-8 pl-6 relative">
            {/* Timeline Dot */}
            <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gray-600 dark:bg-blue-600 border-4 border-white dark:border-[#1E293B]"></span>
            
            <h3 className="font-bold text-gray-800 dark:text-white text-md">{item.title}</h3>
            <span className="text-xs font-semibold text-gray-600 dark:text-blue-600 mb-1 block">{item.year}</span>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}