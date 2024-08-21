import Link from "next/link";

export default function NotFound({ isErrorPage = true }: { isErrorPage: boolean }) {
  return (
    <div>
      <section className={`bg-transparent ${isErrorPage ? "h-screen" : ""}`}>
        <div className="flex flex-col items-center text-center justify-center h-[500px]">
          <p className="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800  md:text-3xl">
            Ups, tuvimos un problema
          </h1>
          <p className="mt-4 text-gray-500 ">
            {isErrorPage
              ? "La pagina que buscas no existe"
              : "Ocurrió un error, recargue la pagina"}
          </p>

          {isErrorPage && (
            <div className="flex items-center w-[300px] justify-center mt-6 gap-x-3 shrink-0">
              <Link
                href={"/"}
                className="flex items-center justify-center px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2   hover:bg-gray-100 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:rotate-180"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>

                <span>Volver a la pagina principal</span>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
