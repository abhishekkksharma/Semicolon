"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-8 h-8 flex items-center justify-center opacity-0" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        relative
        w-10
        h-10
        flex
        items-center
        justify-center
        rounded-full
        text-zinc-500
        dark:text-zinc-400
        hover:bg-zinc-100/50
        dark:hover:bg-zinc-800/40
        hover:text-zinc-900
        dark:hover:text-zinc-50
        transition-all
        duration-200
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-zinc-400
      "
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        {/* Sun Icon */}
        <Sun
          size={22}
          className={`
            absolute
            transition-all
            duration-300
            ease-out
            ${isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}
          `}
        />
        
        {/* Moon Icon */}
        <Moon
          size={22}
          className={`
            absolute
            transition-all
            duration-300
            ease-out
            ${isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}
          `}
        />
      </div>
    </button>
  );
}