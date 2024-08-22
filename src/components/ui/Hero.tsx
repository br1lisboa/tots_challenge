function CheckContainer({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center  text-gray-700 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 mx-2 text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <span className="mx-2">{children}</span>
    </p>
  );
}

export function Hero({ className }: { className?: string }) {
  return (
    <>
      <section className={`bg-transparent pt-6 ${className}`}>
        <div className="container flex flex-col m-auto items-center w-full gap-4 pt-4">
          <h1 className="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
            <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
              TOTS {" "}
            </span>

            <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
              Challenge
            </span>
          </h1>

          <div className="flex start-0 flex-col gap-2">
            <CheckContainer>Limpio y Simple Layout</CheckContainer>
            <CheckContainer>Solo busque el país</CheckContainer>
            <CheckContainer>Fácil de usar</CheckContainer>
          </div>
        </div>
      </section>
    </>
  );
}
