"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "HOME",
    page: "home",
  },
  {
    label: "BLOG",
    page: "blog",
  },
  {
    label: "PROJECTS",
    page: "projects",
  },
  {
    label: "CONTACT",
    page: "contact",
  },
];

export const NavBar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">MONARI</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-white">Projects</a>
            <a className="mr-5 hover:text-white">Blog</a>
            <a className="mr-5 hover:text-white">Contact</a>
            <a className="mr-5 hover:text-white">CV</a>
          </nav>
          <label className="relative h-6 w-10 cursor-pointer">
            <input
              type="checkbox"
              id="AcceptConditions"
              className="peer sr-only"
            />

            <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-blue-500"></span>

            <span className="absolute inset-y-0 start-0 m-1 h-4 w-4 rounded-full bg-gray-300 ring-[6px] ring-inset ring-white transition-all peer-checked:start-5 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent"></span>
          </label>
        </div>
      </header>
    </div>
  );
};
