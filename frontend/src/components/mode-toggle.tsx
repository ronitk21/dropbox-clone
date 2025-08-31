"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative overflow-hidden transition-all cursor-pointer duration-300 ease-out hover:scale-105 hover:shadow-md active:scale-95"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] transition-all duration-500 ease-out scale-100 rotate-0 opacity-100 dark:scale-0 dark:-rotate-90 dark:opacity-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] transition-all duration-500 ease-out scale-0 rotate-90 opacity-0 dark:scale-100 dark:rotate-0 dark:opacity-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
