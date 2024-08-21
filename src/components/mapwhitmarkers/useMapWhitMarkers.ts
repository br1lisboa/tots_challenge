import { useCallback, useMemo, useState } from "react";

import { GET_COUNTRIES } from "@/lib/gql";
import { useQuery } from "@apollo/client";
import client from "@/lib/client";

import { MapWithMarkersProps } from "./MapWhitMarkers";

import {
  CountriesGraphQL,
  CountryWithCoordinates,
} from "@/interfaces/interface";

export function useMapWhitMarkers({ locations }: MapWithMarkersProps) {
  const [search, setSearch] = useState("");

  const { loading, error, data } = useQuery<{ countries: CountriesGraphQL[] }>(
    GET_COUNTRIES,
    { client }
  );

  const countryMap = useMemo(() => {
    return new Map(
      locations
        .filter(
          (countryJSON) =>
            countryJSON["ISO Code"] != null &&
            countryJSON.Latitude != null &&
            countryJSON.Longitude != null
        )
        .map((countryJSON) => [countryJSON["ISO Code"], countryJSON])
    );
  }, [locations]);

  const countriesWithCoordinates = useMemo(() => {
    if (!data || !data.countries) return [];

    return data.countries
      .map((country) => {
        const coords = countryMap.get(country.code);
        if (coords) {
          return { ...country, ...coords };
        }
        return null;
      })
      .filter((country): country is CountryWithCoordinates => country !== null);
  }, [data, countryMap]);

  const filteredCountries = useMemo(() => {
    return countriesWithCoordinates.filter((country) =>
      country.Country.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, countriesWithCoordinates]);

  const errorSearch =
    filteredCountries.length === 0 ? "Wops, no encontramos el país" : "";

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  return {
    loading,
    error,
    data,
    search,
    filteredCountries,
    errorSearch,
    handleSearch,
  };
}
