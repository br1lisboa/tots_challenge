export interface CountryCoordinates {
  Country: string;
  "ISO Code": string;
  Latitude: number;
  Longitude: number;
}

export interface CountriesGraphQL {
  name: string;
  code: string;
  continent: Continent;
  capital: string;
  currency: string;
  emoji: string;
  native: string;
}

export interface Continent {
  name: string;
}

export interface CountryWithCoordinates extends CountriesGraphQL, CountryCoordinates {}
