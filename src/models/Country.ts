type Flags = {
  png: string;
  svg: string;
  alt: string;
};

type Name = {
  common: string;
  official: string;
  nativeName: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
};

type Currencies = {
  [key: string]: {
    name: string;
    symbol: string;
  };
};

type Languages = {
  [key: string]: string;
};

export type CountryType = {
  flags: Flags;
  name: Name;
  capital: string[];
  region: string;
  population: number;
};

export type CountryDetailsType = CountryType & {
  tld: string[];
  currencies: Currencies;
  subregion: string;
  languages: Languages;
  borders: string[];
};
