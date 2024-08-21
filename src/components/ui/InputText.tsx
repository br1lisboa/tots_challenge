import { VARIANTS } from "@/lib/constants";

interface InputTextProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

export function InputText({ value, onChange, error }: InputTextProps) {
  return (
    <section className="relative w-full max-w-md px-5 pt-4 mx-auto rounded-md">
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className={`w-5 h-5 ${VARIANTS.COLOR_TEXT}`}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </span>

        <input
          type="text"
          className={`w-full py-3 pl-10 pr-4 ${VARIANTS.COLOR_TEXT} ${VARIANTS.COLOR_BG_INPUT} border rounded-md  focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40`}
          placeholder="Search"
          value={value}
          onChange={onChange}
        />
      </div>
      <span className="ml-2 text-red-600">{error}</span>
    </section>
  );
}
