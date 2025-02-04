"use client";

import { useFetchCountries } from "@/data/get-countries";
import { CountryCard } from "./CountryCard";
import Link from "next/link";
import { CountryType } from "@/models/Country";

type DisplayCountriesProps = {
  query?: string;
  region?: string;
  initialData?: CountryType[];
};
export function DisplayCountries({
  initialData,
  query,
  region,
}: DisplayCountriesProps) {
  const { data: countries } = useFetchCountries(initialData, query, region);

  return (
    <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 md:gap-14 xl:gap-16">
      {countries?.length === 0 ? (
        <p className="text-center text-lg text-gray-500 col-span-full">
          No countries found matching &quot;{query}&quot;
          {region && `in ${region}`}.
          <br />
          Try refining your search or check if the region and country name are
          correct.
        </p>
      ) : (
        countries?.map((country) => (
          <Link
            className="hover:-translate-y-2 transition-transform focus-visible:-translate-y-4 outline-offset-4"
            href={`/country?name=${
              country.name.common || country.name.official
            }`}
            key={country.name.official}
            prefetch={true}
          >
            <CountryCard {...country} />
          </Link>
        ))
      )}
    </section>
  );
}
