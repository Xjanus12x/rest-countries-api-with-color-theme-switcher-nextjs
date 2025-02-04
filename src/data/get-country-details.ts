import { CountryDetailsType } from "@/models/Country";
import { useSuspenseQuery } from "@tanstack/react-query";

export async function getCountryDetails(
  query?: string
): Promise<CountryDetailsType> {
  if (!query) {
    throw new Error("Invalid request: Country query parameter is missing.");
  }
  let baseUrl = "https://restcountries.com/v3.1";
  if (query.length === 3) baseUrl += "/alpha";
  else baseUrl += "/name";

  const response = await fetch(
    `${baseUrl}/${query}?fields=flags,name,population,region,subregion,capital,tld,currencies,languages,borders`
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch country: ${response.status} ${response.statusText}`
    );
  }

  const countryDetails = await response.json();
  return query.length === 3 ? countryDetails : countryDetails[0];
}

export function useFetchCountryDetails(
  initialData?: CountryDetailsType,
  query?: string
) {
  return useSuspenseQuery({
    queryFn: () => getCountryDetails(query),
    queryKey: ["countryDetails", query],
    initialData: initialData,
    staleTime: Infinity,
    refetchOnMount: false,
  });
}
