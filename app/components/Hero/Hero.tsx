import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: "400",
  subsets: ["latin"],
});
export const Hero = () => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={"/repo.png"}
              width={720}
              height={600}
              loading="lazy"
              priority={false}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <div className={raleway.className}>
              <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-6xl font-extrabold text-transparent sm:text-5xl">
                Hello! I'm Job Monari
              </h1>
            </div>
            <p className="mb-8 leading-relaxed text-justify">
              Hello, I'm a full-stack developer with a strong command of Golang,
              Typescript, and Python. I possess a solid foundation in these
              programming languages and have honed my skills through independent
              learning and personal projects. My passion for coding, coupled
              with my eagerness to learn and grow, drives me to deliver
              high-quality software solutions.
            </p>
            <div className="flex justify-center">
              <a
                className="group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                href="/download"
              >
                <span className="absolute inset-0 translate-x-0 translate-y-0 bg-indigo-600 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5"></span>

                <span className="relative block border border-current bg-white px-8 py-3">
                  Download Resume
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
