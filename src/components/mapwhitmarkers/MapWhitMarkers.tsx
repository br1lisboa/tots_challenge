"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "@/lib/gql";
import client from "@/lib/client";

import {
  CountryCoordinates,
  CountriesGraphQL,
  CountryWithCoordinates,
} from "@/interfaces/interface";

interface Props {
  locations: CountryCoordinates[];
}

export function MapWithMarkers({ locations }: Props) {
  const { loading, error, data } = useQuery<{ countries: CountriesGraphQL[] }>(
    GET_COUNTRIES,
    { client }
  );

  function getLocation(): L.LatLngExpression | undefined {
    if (locations.length === 0) {
      return [30.0, -50.0];
    }

    return [20.0, -80.0];
  }

  function getZoom(): number {
    if (locations.length === 0) {
        return 5;
      }
  
      return 2;
  }

  console.log(getLocation());

  useEffect(() => {
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data || !data.countries) return <p>No data available</p>;

  const countriesWithCoordinates = data.countries
    .map((country) => {
      const coords = locations.find(
        (location) => location["ISO Code"] === country.code
      );
      if (coords && coords.Latitude != null && coords.Longitude != null) {
        return { ...country, ...coords };
      }
      return null;
    })
    .filter((country): country is CountryWithCoordinates => country !== null);

  return (
    <MapContainer
      center={getLocation()}
      zoom={getZoom()}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {countriesWithCoordinates.map((location, index) => (
        <Marker key={index} position={[location.Latitude, location.Longitude]}>
          <Popup>
            <div className="flex flex-col gap-4">
              <h2>{location.name}</h2>
              <p>Capital: {location.capital}</p>
              <p>Currency: {location.currency}</p>
              <p>Emoji: {location.emoji}</p>
              <p>Native: {location.native}</p>
              <p>Continent: {location.continent.name}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
