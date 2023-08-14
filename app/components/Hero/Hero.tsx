import { Raleway } from "next/font/google";
import Image from "next/image";
import { saveAs } from "file-saver";

const raleway = Raleway({
  weight: "900",
  subsets: ["latin"],
});
export const Hero = () => {
  const saveFile = () => {
    saveAs("/Monari's Resume.pdf", "monari's.pdf");
  };
  return (
    <div>
      <section className="body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-3/4 w-5/6 md:mb-0 mb-10">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="/repo.png"
              width={720}
              height={600}
              priority
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <div className={raleway.className}>
              <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-6xl font-extrabold text-transparent sm:text-5xl">
                Hello! I'm Job Monari
              </h1>
            </div>
            <div className="mb-4 mt-4 leading-relaxed text-justify">
              Hello, I am a full-stack developer proficient in Go, TypeScript,
              and Python. If you're interested in my skills and experience,
              please feel free to download my resume by clicking the button
              below.
            </div>
            <div className="flex justify-center">
              <a
                className="group relative inline-block cursor-pointer text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                onClick={saveFile}
              >
                <span className="absolute inset-0 translate-x-0 translate-y-0 bg-indigo-600 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5"></span>

                <span className="relative cursor-pointer block border border-current bg-white px-8 py-3">
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
