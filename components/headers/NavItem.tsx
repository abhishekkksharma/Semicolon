"use client";

import Link from "next/link";
import { useState } from "react";
import Dropdown from "./Dropdown";
import { NavItemProps } from "./types";

export default function NavItem({
  label,
  href,
  icon,
  active,
  dropdown,
}: NavItemProps) {
  const [open, setOpen] = useState(false);

  const content = (
    <div
      className={`
      flex
      items-center
      justify-center
      gap-2
      w-full
      
      /* Balanced padding matching image_73dee2.png */
      px-4
      sm:px-6
      py-2.5
      
      rounded-full
      font-semibold
      text-base
      whitespace-nowrap /* Prevents text wrapping if you add lots of tabs */
      
      transition-all
      duration-200
      cursor-pointer
      select-none
      
      ${
        active
          ? "bg-zinc-900 text-white shadow-md dark:bg-white dark:text-zinc-950"
          : "text-zinc-700 hover:bg-white/60 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
      }
      `}
    >
      {icon}
      <span>{label}</span>
    </div>
  );

  return (
    <div
      className="relative flex-1 min-w-0 flex justify-center px-0.5"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {href ? <Link href={href} className="w-full">{content}</Link> : content}

      {dropdown && (
        <Dropdown
          open={open}
          items={dropdown}
        />
      )}
    </div>
  );
}