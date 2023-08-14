"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
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
  const { setTheme } = useTheme();

  return (
    <div>
      <header className="body-font mt-1">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href={"/"}
            className="flex title-font font-medium items-center mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl">MONARI</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {NAV_ITEMS.map((val, idx) => {
              return (
                <Link
                  className="mr-5 hover:text-gray-300"
                  key={idx}
                  href={val.page}
                >
                  {val.label}
                </Link>
              );
            })}
          </nav>

          <label className="relative cursor-pointer">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </label>
        </div>
      </header>
    </div>
  );
};
