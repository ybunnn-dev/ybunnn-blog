export default function Overview() {
  return (
    <div className="bg-white dark:bg-[#1E293B] rounded-lg p-6 border border-gray-200 dark:border-gray-700 text-header_text dark:text-gray-300 transition-colors duration-300">
      
      <h2 className="font-semibold text-xl mb-5 text-gray-800 dark:text-white">Internship Overview</h2>
      
      <div className="w-full">
        
        {/* Institutional Details & Logos Container */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-gray-200 dark:border-gray-700 pb-6 gap-4">
          
          {/* Left Side: Text Details */}
          <div className="space-y-1 text-md">
            <p><span className="font-medium text-gray-800 dark:text-gray-200">Agency:</span> DOST V - Management Information Systems Unit</p>
            <p><span className="font-medium text-gray-800 dark:text-gray-200">School:</span> Bicol University College of Science</p>
            <p><span className="font-medium text-gray-800 dark:text-gray-200">Program:</span> Bachelor of Science in Information Technology (4th Year)</p>
          </div>

          {/* Right Side: Logos */}
          <div className="flex flex-row gap-4 items-center shrink-0">
            <img src="/pictures/dost-logo.png" alt="DOST Bicol Logo" className="w-16 h-16 object-contain" /> 
            <img src="/pictures/bu-logo.png" alt="BU Logo" className="w-20 h-20 object-contain" /> 
            <img src="/pictures/cs-logo.png" alt="BUCS Logo" className="w-16 h-16 object-contain" /> 
          </div>

        </div>

        {/* Current Role Overview (Moved to Top) */}
        <div className="text-sm leading-relaxed space-y-4">
          <p>
            Currently undertaking my internship at the Department of Science and Technology (DOST) Bicol, where I actively apply my academic foundation in a fast-paced professional environment.
          </p>
          <p>
            As a Full-Stack Laravel Developer, my core responsibility is designing, building, and maintaining robust internal systems that help streamline the agency's data management and operational workflows. 
          </p>
          <p>
            Alongside system development, I also serve as a Technical Assistant. In this capacity, I provide direct IT support, troubleshoot hardware and software issues, and ensure the smooth day-to-day technical operations of the office.
          </p>

          {/* Transition Subheading */}
          <h3 className="font-semibold text-lg mt-8 mb-4 text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 inline-block">
            How I Got Here
          </h3>

          {/* Personal Journey (Exact words retained) */}
          <p>
            Hi, I am Ivan. A 4th Year BS Information Technology Student at Bicol University College of Science from Irosin, Sorsogon. Before applying to college, I never really saw myself being an IT student despite the suggestions from people around me.
          </p>

          <p>
            When I was a kid, I want to be a civil engineer. During high school, I was leaning more on humanities side. But I never took those two program when I applied in Bicol University. I expect that I won't pass and last long in engineering because I was academically catching up during my senior high to first year college because I was a junior high school drop-out and took Alternative Learning System.
          </p>

          <p>
            I didn't take humanities related programs such as Philosophy and Political Science since I am the eldest child, so I thought taking BSIT (which was in-demand they say), for practical purposes. But Tech isn't something new to me.
          </p>

          <p>
            I was a "comshop-boy" during my late elementary to high school days (which is a common male experience at my age that time). And I also fix mobile devices, typically lock screen issues and bootloop in android devices.
          </p>

          <p>
            I also often break my parents phone, because I do a lot of things such as installing custom ROM and recovery mode. It all started when no technician can fixed my bricked tablet when I was 10 years old, so I did it myself. And to be honest, I kinda liked the feeling.
          </p>

          <p>
            After that, my tinkering habit began. So, the tech field is still part of my circle of interest anyways. So I picked BSIT, which I was not expecting to pass BUCESS anyways. But I still passed at BU Polangui, and continued my journey in the university.
          </p>

          <p>
            In second year, I was planning to shift college program, but I kinda liked programming at that point. I just liked it when you write instructions and the computer does it anyways. So I moved to College of Science which is closer to Daraga, Albay, my 2nd hometown.
          </p>

          <p>
            As I prepare for my On-the-Job Training, I also have my own expectations for myself. One of the things I really want to improve is my communication skills. I had a hard time with it, especially in my previous semesters, where I encountered a few problems because of it.
          </p>

          <p>
            I am hoping that through this internship, where I will be exposed to a professional working environment and meet different professionals, I can gradually improve how I communicate and express myself. I see this as an opportunity not just to grow technically, but also personally.
          </p>
        </div>

      </div>
    </div>
  );
}