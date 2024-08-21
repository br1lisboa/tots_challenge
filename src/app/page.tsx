"use client";

import { MapWithMarkers } from "@/components";

import countriesJSON from "@/data/countries.json";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState(countriesJSON);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);

    const filteredCountries = countriesJSON.filter((country) => {
      return country.Country.toLowerCase().includes(
        e.target.value.toLowerCase()
      );
    });

    setCountries(filteredCountries);
  }

  return (
    <main className="flex min-h-screen flex-col items-center px-2 py-4 gap-4">
      <h2>TEST</h2>

      <input
        type="text"
        className="p-2 border rounded-md bg-gray-200 "
        placeholder="Busca un país..."
        value={search}
        onChange={handleSearch}
      />

      <MapWithMarkers locations={countries} />
    </main>
  );
}
