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
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <span className="mx-2">{children}</span>
    </p>
  );
}

export function Hero() {
  return (
    <>
      <section className="bg-transparent">
        <div className="container flex flex-col m-auto items-center w-full gap-4 pt-4">
          <h1 className="text-2xl font-semibold tracking-wide text-gray-800 text-center">
            TOTS - Challenge
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
