"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Suspense, useEffect, useState } from "react";

export function ToggleThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <button className="font-semibold">Dark Mode</button>;
  return (
    <button
      className="font-semibold flex gap-1"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <MoonIcon className="stoke-black fill-black" />
      ) : (
        <SunIcon className="fill-white stroke-white" />
      )}
      Dark Mode
    </button>
  );
}
