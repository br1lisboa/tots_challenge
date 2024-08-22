// src/components/mapwhitmarkers/MapContainerDynamic.tsx
"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { PopupContainer } from "./Popup";
import { CountryCoordinates, CountryWithCoordinates } from "@/interfaces/interface";

export interface MapContainerDynamicProps {
  filteredCountries: CountryWithCoordinates[];
}

const svgIcon = L.icon({
  iconUrl: "/marker.svg",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

function MapContainerDynamic({ filteredCountries }: MapContainerDynamicProps) {
  return (
    <MapContainer
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
          <Marker key={index} position={[Latitude, Longitude]} icon={svgIcon}>
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
    </MapContainer>
  );
}

export default MapContainerDynamic;
