import Link from "next/link";
import { ToggleThemeButton } from "./ui/ToggleThemeButton";

export function Header() {
  return (
    <header className="shadow-md">
      <div className="flex justify-between px-4 py-7 md:px-6 xl:px-8 md:py-8 max-w-screen-2xl mx-auto">
        <Link href="/">
          <h1 className="font-extrabold md:text-lg xl:text-2xl">
            Where in the world?
          </h1>
        </Link>
        <ToggleThemeButton />
      </div>
    </header>
  );
}
