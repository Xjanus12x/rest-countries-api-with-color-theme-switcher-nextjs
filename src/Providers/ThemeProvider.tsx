"use client";

import { PropsWithChildren } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

type ThemeProviderProps = PropsWithChildren;

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemeProvider defaultTheme="system" attribute="class" enableSystem>
      {children}
    </NextThemeProvider>
  );
}
