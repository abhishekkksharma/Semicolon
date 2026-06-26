"use client";

import { Home, History, ChartNoAxesColumn, MapPinHouse } from "lucide-react";
import NavItem from "./NavItem";
import ThemeToggle from "../ui/themeToggle";

export default function Navbar() {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <nav
        className="
      fixed
      top-6
      left-1/2
      -translate-x-1/2

      w-[92%]
      sm:w-[85%]
      md:w-[75%]
      lg:w-[60%]
      max-w-3xl

      /* High-end Glassmorphism */
      bg-white/50
      dark:bg-zinc-950/50
      backdrop-blur-xl
      
      rounded-full
      border-2 border-white/40 dark:border-zinc-800/60
      shadow-[0_12px_40px_rgba(0,0,0,0.08)]

      p-1.5

      z-50
      "
      >
        {/* Flex container without solid background to let glassmorphism shine */}
        <div className="flex items-center justify-between gap-1.5 w-full">
          <NavItem
            label="Home"
            href="/"
            active
            icon={<Home size={19} strokeWidth={2.2} />}
          />

          <NavItem
            label="Departments"
            href="/departments"
            //icon={<MapPinHouse size={19} strokeWidth={2.2} />}
            dropdown={[
              { label: "CSE", href: "/departments/cse" },
              { label: "ECE", href: "/departments/ece" },
              { label: "See All", href: "/departments/" },
            ]}
          />

          <NavItem
            label="Progress"
            href="/progress"
            //icon={<ChartNoAxesColumn size={19} strokeWidth={2.2} />}
            dropdown={[
              { label: "Semester 1", href: "/semester1" },
              { label: "Semester 2", href: "/semester2" },
            ]}
          />
          <NavItem
            label="Explore"
            href="/explore"
          // icon={<ChartNoAxesColumn size={19} strokeWidth={2.2} />}
          // dropdown={[
          //   { label: "Semester 1", href: "/semester1" },
          //   { label: "Semester 2", href: "/semester2" },
          // ]}
          />

          <ThemeToggle />

          {/* Feel free to add more <NavItem /> components right here! */}
        </div>
      </nav>
    </div>
  );
}

