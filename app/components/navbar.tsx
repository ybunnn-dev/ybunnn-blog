"use client"; 

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "tech-stacks", "projects"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break; 
          } 
          else if (rect.top < 0 && rect.bottom > 150) {
             setActiveSection(section);
             break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClass = (id: string) =>
    `cursor-pointer transition-colors duration-300 ${
      activeSection === id ? "text-white font-bold" : "text-gray-400 hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-between py-4 backdrop-blur-md bg-dark_gradient/10 px-6 sm:px-16 px-4 sm:px-16 xl:px-[10rem]">
      <div className="text-xl font-bold tracking-wider text-white">
        <h1 className="rounded px-2 py-1 text-white">&lt;ybunnn /&gt;</h1>
      </div>

      <div className="flex items-center gap-8 text-sm font-medium hidden lg:flex">
        <Link href="#home" onClick={(e) => scrollToSection(e, "home")} className={getLinkClass("home")}>
          Home
        </Link>
        <Link href="#about" onClick={(e) => scrollToSection(e, "about")} className={getLinkClass("about")}>
          About
        </Link>
        <Link href="#tech-stacks" onClick={(e) => scrollToSection(e, "tech-stacks")} className={getLinkClass("tech-stacks")}>
          Tech Stacks
        </Link>
        <Link href="#projects" onClick={(e) => scrollToSection(e, "projects")} className={getLinkClass("projects")}>
          Projects
        </Link>
      </div>
    </nav>
  );
}