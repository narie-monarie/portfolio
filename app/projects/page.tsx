interface ProjectItems {
  image: string;
  link: string;
  project_category: string;
  project_name: string;
}

const PROJECTS: Array<ProjectItems> = [
  {
    image: "/GrubbysAfrica.png",
    link: "https://main--unrivaled-alpaca-004d61.netlify.app/#",
    project_category: "Front End",
    project_name: "Grubbys Africa",
  },
  {
    image: "/MonariSpear.png",
    link: "https://narie-m.vercel.app/",
    project_category: "Front End and MDX",
    project_name: "My Svelte Blog",
  },
  {
    image: "/ecomm.png",
    link: "https://ecomm-smoky.vercel.app/",
    project_category: "Front End",
    project_name: "E-Commerce Front End",
  },
  {
    image: "/GrubbysAfrica.png",
    link: "https://main--unrivaled-alpaca-004d61.netlify.app/#",
    project_category: "Front End",
    project_name: "Grubbys Africa",
  },
];
export default function() {
  return (
    <div data-theme="dark">
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
            Projects
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {PROJECTS.map((project) => {
              return (
                <div>
                  <a
                    href={project.link}
                    className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
                  >
                    <img
                      src={project.image}
                      loading="lazy"
                      alt="Photo by Austin Wade"
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />

                    <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                      <span className="text-gray-500">
                        {project.project_category}
                      </span>
                      <span className="text-lg font-bold text-gray-800 lg:text-xl">
                        {project.project_name}
                      </span>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
