import Link from "next/link";
import { Popup } from "react-leaflet";

interface PopupContainerProps {
  country: string;
  emoji: string;
  capital: string;
  currency: string;
  native: string;
  continent: {
    name: string;
  };
  ISoCode: string;
}

export function PopupContainer({
  country,
  emoji,
  capital,
  currency,
  native,
  continent,
  ISoCode,
}: PopupContainerProps) {
  return (
    <Popup>
      <div className="w-full max-w-md p-2 bg-transparent ">
        <h2 className="mt-2 text-xl font-semibold text-gray-800  md:mt-0">
          {country} {emoji}
        </h2>

        {/* TODO: revisar native  */}
        <div className="mt-2 text-sm text-gray-600  flex flex-col">
          Su capital es {capital}, donde manejan la moneda de {currency}. Sus
          habitantes son reconocidos como {native} y se encuentra en el
          continente {continent.name}.
        </div>

        <div className="flex justify-end mt-4">
          <Link
            href={`/${ISoCode}`}
            className="text-lg font-medium text-blue-600 "
            role="link"
          >
            Saber mas ...
          </Link>
        </div>
      </div>
    </Popup>
  );
}
