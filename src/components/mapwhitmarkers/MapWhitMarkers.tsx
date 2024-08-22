"use client";

// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { CountryCoordinates } from "@/interfaces/interface";
import { useMapWhitMarkers } from "./useMapWhitMarkers";
import { InputText } from "../ui/InputText";
import { PopupContainer } from "./Popup";
import NotFound from "@/app/not-found";
import MapContainerDynamic from "./MapContainer";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(()=>import("./MapContainer"),{
  ssr: false
})

export interface MapWithMarkersProps {
  locations: CountryCoordinates[];
}

const Skeleton = ({ className }: { className: string }) => (
  <div className={`animate-pulse bg-gray-200 ${className}`} />
);

export function MapWithMarkers({ locations }: MapWithMarkersProps) {
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

      <DynamicMap filteredCountries={filteredCountries}/>
      {/* <MapContainer
        center={[20.0, -80.0]}
        zoom={2}
        className="w-full h-[800px] rounded-lg shadow-sm"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {filteredCountries.map(
          (
            {
              Country,
              emoji,
              capital,
              currency,
              native,
              continent,
              Latitude,
              Longitude,
              "ISO Code": ISoCode,
            },
            index
          ) => (
            <Marker key={index} position={[Latitude, Longitude]} >
              <PopupContainer
                country={Country}
                emoji={emoji}
                capital={capital}
                currency={currency}
                native={native}
                continent={continent}
                ISoCode={ISoCode}
              />
            </Marker>
          )
        )}
      </MapContainer> */}
    </>
  );
}
