import { CountryDetailsCard } from "@/components/CountryDetailsCard";
import { getCountryDetails } from "@/data/get-country-details";
import type { Metadata } from "next";

type CountryDetailsProps = {
  searchParams: Promise<{ name: string }>;
};

export const generateMetadata = async ({
  searchParams,
}: CountryDetailsProps): Promise<Metadata> => {
  const { name } = await searchParams;

  return {
    title: `${name} - Country Details`,
    description: `Explore detailed information about ${name}, including population, region, capital, currencies, and more.`,
  };
};

export default async function CountryDetails({
  searchParams,
}: CountryDetailsProps) {
  const { name } = await searchParams;
  const countryDetails = await getCountryDetails(name);

  return (
    <section>
      <CountryDetailsCard initialData={countryDetails} query={name} />
    </section>
  );
}
