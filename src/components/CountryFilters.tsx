"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebounce } from "@/hooks/useDebounce";

export function CountryFilters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [localSearch, setLocalSearch] = useState(
    searchParams.get("query") ?? ""
  );
  const debouncedSearch = useDebounce(localSearch, 200);

  function handleFilter(name: string, value: string) {
    const params = new URLSearchParams(searchParams);
    if (params.get(name) === value) return;
    if (name) params.set(name, value);
    if (params.get("query") === "") params.delete(name);
    if (params.get("region") === "All") params.delete(name);

    replace(`${pathname}?${params.toString()}`);
  }

  useEffect(() => {
    if (searchParams.get("query") !== debouncedSearch) {
      handleFilter("query", debouncedSearch);
    }
  }, [debouncedSearch, searchParams]);

  return (
    <section className="grid gap-10 sm:grid-cols-[auto_auto]">
      <div className="relative w-full bg-theme-input sm:max-w-[30rem]">
        <svg
          className="absolute top-0 bottom-0 aspect-square w-5 my-auto text-gray-500 left-4 md:left-8"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <Input
          type="text"
          placeholder="Search for a country..."
          className="pl-12 pr-4 py-6 md:py-7 md:pl-16 md:pr-8"
          onChange={(e) => setLocalSearch(e.target.value)}
          value={localSearch}
        />
      </div>

      <Select
        onValueChange={(value) => handleFilter("region", value)}
        defaultValue={searchParams.get("region") ?? ""}
      >
        <SelectTrigger className="w-2/4 py-6 bg- sm:justify-self-end md:py-7 max-w-60 bg-theme-input">
          <SelectValue placeholder="Filter by region" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Regions:</SelectLabel>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Africa">Africa</SelectItem>
            <SelectItem value="America">America</SelectItem>
            <SelectItem value="Asia">Asia</SelectItem>
            <SelectItem value="Europe">Europe</SelectItem>
            <SelectItem value="Oceania">Oceania</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </section>
  );
}
