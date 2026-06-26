"use client";

import Link from "next/link";

interface DropdownProps {
  open: boolean;
  items: {
    label: string;
    href: string;
  }[];
}

export default function Dropdown({ open, items }: DropdownProps) {
  return (
    <div
      className={`
        absolute
        top-[calc(100%+8px)]
        left-1/2
        -translate-x-1/2
        w-44
        rounded-xl
        
        /* Adjusted Glass Opacity so it doesn't disappear */
        bg-white/70
        dark:bg-zinc-900/70
        backdrop-blur-md
        
        /* Defined borders to give the glass edge definition */
        border border-zinc-200/50 dark:border-zinc-800/50
        p-1.5
        z-50

        /* Smooth CSS Transitions */
        transition-all
        duration-200
        ease-out
        ${open 
          ? "opacity-100 scale-100 pointer-events-auto" 
          : "opacity-0 scale-95 pointer-events-none"
        }

        /* Invisible bridge to prevent mouseleave on hover transit */
        before:absolute
        before:-top-2
        before:left-0
        before:right-0
        before:h-2
        before:content-['']
      `}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="
            block
            px-3
            py-2
            rounded-lg
            
            /* Comfortable, readable text sizing */
            text-sm
            font-medium
            
            text-zinc-600
            dark:text-zinc-300
            
            /* Clean glass-friendly hover selection */
            hover:bg-zinc-100/70
            dark:hover:bg-zinc-800/60
            hover:text-zinc-900
            dark:hover:text-zinc-50
            
            transition-all
            duration-150
          "
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}