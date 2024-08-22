import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-transparent pt-6">
      <div className="container flex flex-col items-center justify-between pb-2 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <p className="text-sm text-gray-600 ">© 2024. Les mando saludos TOTS</p>

        <div className="flex gap-2 items-center">
          <Link
            href="https://www.linkedin.com/in/bruno-lisboa-/"
            target="_blank"
            className="mx-2 text-gray-600 transition-colors duration-300  hover:text-blue-500 "
            aria-label="Linkedin"
          >
            <FaLinkedin size={20} />
          </Link>

          <Link
            href="https://github.com/br1lisboa"
            target="_blank"
            className="mx-2 text-gray-600 transition-colors duration-300  hover:text-blue-500 "
            aria-label="Github"
          >
            <FaGithub size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
