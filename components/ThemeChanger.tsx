"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { Button } from "./ui/button";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="icon"
      className="rounded-full"
    >
      {theme === "dark" ? <FiMoon size={24} /> : <FiSun size={24} />}
    </Button>
  );
};

export default ThemeChanger;
