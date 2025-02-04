import { CountryType } from "@/models/Country";
import Image from "next/image";

type CountryCardProps = CountryType;
export function CountryCard({
  flags,
  name,
  population,
  region,
  capital,
}: CountryCardProps) {
  return (
    <article className="bg-theme-elements shadow-md rounded-md overflow-hidden min-h-full">
      <Image
        src={flags.svg || flags.png}
        alt={flags.alt}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full object-cover h-64 brightness-60"
        loading="lazy"
      />

      <div className="space-y-4 px-6 py-8">
        <h2 className="font-extrabold text-2xl">
          {name.official || name.common}
        </h2>
        <ul className="space-y-1">
          <li>
            <p className="font-semibold">
              Population:{" "}
              <span className="font-light">{population.toLocaleString()}</span>
            </p>
          </li>
          <li>
            <p className="font-semibold">
              Region: <span className="font-light">{region}</span>
            </p>
          </li>
          <li>
            <p className="font-semibold">
              Capital: <span className="font-light">{capital}</span>
            </p>
          </li>
        </ul>
      </div>
    </article>
  );
}
