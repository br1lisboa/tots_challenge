"use client";

import { Contact, Hero, SlideShow } from "@/components";
import { notFound } from "next/navigation";

import imagesDB from "@/data/desc.json";
import Link from "next/link";

interface CountryPageProps {
  params: {
    id: string;
  };
}

export default function CountryPage({ params: { id } }: CountryPageProps) {
  const country = imagesDB.find((country) => country.id === id);

  if (!country) {
    notFound();
  }

  return (
    <>
      <section className="bg-transparent h-full max-w-[1200px] m-auto py-8">
        <div className="lg:-mx-6 lg:flex lg:items-center lg:gap-6">
          <SlideShow
            title={country?.descripcion}
            slides={country.img}
            className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem] md:pt-8"
          />

          <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0 px-4 xl:px-0">
            <p className="text-5xl font-semibold text-blue-500 pt-28 lg:pt-0 xl:pt-0">
              “
            </p>

            <h1 className="text-2xl font-semibold text-gray-800  lg:text-3xl lg:w-96">
              {country?.name}
            </h1>

            <p className="max-w-lg my-6 text-gray-500  ">
              {country?.descripcion}
            </p>

            <Link
              href={"/"}
              className="mt-6 text-lg font-medium text-blue-500 underline cursor-pointer pt-4"
            >
              Volver
            </Link>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
