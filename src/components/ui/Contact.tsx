import Image from "next/image";

export function Contact() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-8 py-4 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                Si queres que agreguemos tu país envíanos tu mensaje a{" "}
                <span className="text-blue-500">challenge_tots@tots.com</span>
              </h1>

              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Nosotros te {" "}
                <span className="font-medium text-blue-500">contactaremos</span>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <Image
              className="w-full h-full max-w-md"
              src="https://merakiui.com/images/components/Email-campaign-bro.svg"
              alt="email illustration vector art"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
