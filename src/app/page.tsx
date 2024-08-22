import { MapContainer } from "@/components";

import countriesJSON from "@/data/countries.json";

export default function Home() {
  return (
    <main className="flex h-screen m-auto flex-col justify-between items-center px-2 py-4 gap-4 w-full md:w-[900px]">
      <MapContainer locations={countriesJSON} />
    </main>
  );
}
