import { CountryType } from "@/models/Country";
import { useQuery } from "@tanstack/react-query";

export async function getCountries(
  query?: string,
  region = "All"
): Promise<CountryType[]> {
  let url = "https://restcountries.com/v3.1/";

  if (region !== "All") url += `region/${region}`;
  else url += `all`;
  const response = await fetch(
    `${url}?fields=name,flags,name,population,region,capital`
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch countries: ${response.status} ${response.statusText}`
    );
  }

  const countries = (await response.json()) as CountryType[];
  if (query && countries.length > 0) {
    // Create a regex pattern based on the name input
    const regex = new RegExp(query, "i"); // 'i' makes the search case-insensitive

    // Filter countries by regex matching the name
    return countries.filter(
      (country) =>
        regex.test(country.name.common) || regex.test(country.name.official)
    );
  }
  return countries;
}

export function useFetchCountries(
  initialData?: CountryType[],
  query?: string,
  region?: string
) {
  return useQuery({
    queryFn: () => getCountries(query, region),
    queryKey: ["countries", query, region],
    initialData: initialData,
  });
}
