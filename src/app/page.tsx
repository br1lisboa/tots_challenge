import { MapContainer } from "@/components";

import countriesJSON from "@/data/countries.json";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex h-screen m-auto flex-col justify-between items-center px-2 py-4 gap-4 w-full md:w-[900px]">
      <Suspense fallback={<div>Cargando...</div>}>
        <MapContainer locations={countriesJSON} />
      </Suspense>
    </main>
  );
}
