"use client";

import Image from "next/image";
import Link from "next/link";
import { useFetchCountryDetails } from "@/data/get-country-details";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { CountryDetailsType } from "@/models/Country";

type CountryDetailsCardProps = {
  initialData: CountryDetailsType;
  query?: string;
};

export function CountryDetailsCard({
  initialData,
  query,
}: CountryDetailsCardProps) {
  const {
    data: {
      flags,
      name,
      population,
      region,
      subregion,
      capital,
      tld,
      currencies,
      languages,
      borders,
    },
  } = useFetchCountryDetails(initialData, query);
  const nativeNames = Object.values(name.nativeName)[0].common;
  const currencyNames = Object.values(currencies)[0].name;
  const languageNames = Object.values(languages).join(", ");

  return (
    <article className="rounded-md overflow-hidden px-8 py-10 space-y-10">
      <BackButton />
      <div className="grid gap-10 lg:grid-cols-2 xl:gap-16">
        <Image
          src={flags.svg || flags.png}
          alt={flags.alt}
          width={0}
          height={0}
          className="max-h-96 w-full object-center object-cover brightness-60"
          loading="lazy"
        />
        <div className="grid gap-8 md:text-lg lg:text-xl sm:grid-cols-2">
          <h2 className="font-extrabold text-2xl md:text-3xl sm:col-span-full">
            {name.common || name.official}
          </h2>
          <div className="space-y-5">
            <ul className="space-y-1">
              <li>
                <p className="font-semibold">
                  Native Name: <span className="font-light">{nativeNames}</span>
                </p>
              </li>
              <li>
                <p className="font-semibold">
                  Population:{" "}
                  <span className="font-light">
                    {population.toLocaleString()}
                  </span>
                </p>
              </li>
              <li>
                <p className="font-semibold">
                  Region: <span className="font-light">{region}</span>
                </p>
              </li>
              <li>
                <p className="font-semibold">
                  Sub Region: <span className="font-light">{subregion}</span>
                </p>
              </li>
              <li>
                <p className="font-semibold">
                  Capital: <span className="font-light">{capital}</span>
                </p>
              </li>
            </ul>
          </div>
          <ul className="space-y-1">
            <li>
              <p className="font-semibold">
                Tol Level Domain: <span className="font-light">{tld}</span>
              </p>
            </li>
            <li>
              <p className="font-semibold">
                Currencies: <span className="font-light">{currencyNames}</span>
              </p>
            </li>
            <li>
              <p className="font-semibold">
                Languages: <span className="font-light">{languageNames}</span>
              </p>
            </li>
          </ul>
          <div className="space-y-2 col-span-full">
            <header>
              <h2 className="font-semibold text-lg">Border Countries:</h2>
            </header>
            {borders.length > 0 ? (
              <ul className="flex gap-3 flex-wrap">
                {borders.map((border, i) => (
                  <li
                    className="bg-theme-input px-10 py-1.5 rounded-md shadow-md"
                    key={i}
                  >
                    <Link
                      href={`/country?name=${border}`}
                      replace
                      prefetch={true}
                    >
                      {border}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No bordering countries.</p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export function BackButton() {
  const router = useRouter();
  return (
    <button
      className="bg-theme-input flex w-fit px-5 py-2 rounded-md shadow-md gap-2"
      onClick={() => router.back()}
    >
      <ArrowLeft aria-hidden="true" />
      Back
    </button>
  );
}
