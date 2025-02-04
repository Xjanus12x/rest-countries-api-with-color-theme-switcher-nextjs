import { CountryFilters } from "@/components/CountryFilters";
import { DisplayCountries } from "@/components/DisplayCountries";
import { getCountries } from "@/data/get-countries";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Where in the world? - Country Information",
  description:
    "Discover detailed information about countries, including population, region, capital, currencies, and more using data from the REST Countries API.",
};

type HomePageProps = {
  searchParams: Promise<{ query: string; region: string }>;
};
export default async function HomePage({ searchParams }: HomePageProps) {
  const { query, region } = await searchParams;
  const countries = await getCountries(query, region);

  return (
    <main className="row-start-2 px-4 py-6 space-y-8 overflow-auto md:space-y-10 lg:space-y-12 md:py-10 lg:py-12">
      <CountryFilters />
      <DisplayCountries initialData={countries} query={query} region={region} />
    </main>
  );
}
