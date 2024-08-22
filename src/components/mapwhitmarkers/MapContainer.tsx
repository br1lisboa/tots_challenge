"use client";

import dynamic from "next/dynamic";

import NotFound from "@/app/not-found";
import { InputText } from "@/components/";
import { CountryCoordinates } from "@/interfaces/interface";

import { useMapWhitMarkers } from "./useMapWhitMarkers";
import "leaflet/dist/leaflet.css";

const DynamicMap = dynamic(() => import("./Map"), {
  ssr: false,
});

export interface MapContainerProps {
  locations: CountryCoordinates[];
}

function Skeleton({ className }: { className: string }) {
  return <div className={`animate-pulse bg-gray-200 ${className}`} />;
}

export function MapContainer({ locations }: MapContainerProps) {
  const {
    data,
    error,
    filteredCountries,
    loading,
    search,
    errorSearch,
    handleSearch,
  } = useMapWhitMarkers({ locations });

  if (loading)
    return (
      <div className="w-full h-[800px] rounded-lg shadow-sm">
        <Skeleton className="w-full h-full rounded-lg" />
      </div>
    );

  if (error || !data || !data.countries) {
    return <NotFound isErrorPage={false} />;
  }

  return (
    <>
      <InputText value={search} onChange={handleSearch} error={errorSearch} />

      <DynamicMap filteredCountries={filteredCountries} />
    </>
  );
}
