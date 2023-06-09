import Link from "next/link";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "BLOG",
    page: "blog",
  },
  {
    label: "PROJECTS",
    page: "projects",
  },
  {
    label: "CONTACT",
    page: "contact",
  },
];

export const NavBar = () => {
  return (
    <div>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href={"/"}
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl">MONARI</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {NAV_ITEMS.map((val, idx) => {
              return (
                <Link
                  className="mr-5 hover:text-gray-300"
                  key={idx}
                  href={val.page}
                >
                  {val.label}
                </Link>
              );
            })}
          </nav>

          <label className="relative h-6 w-10 cursor-pointer">
            <input type="checkbox" className="peer sr-only" />

            <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-gray-800"></span>

            <span className="absolute inset-y-0 start-0 m-1 h-4 w-4 rounded-full bg-gray-300 ring-[6px] ring-inset ring-white transition-all peer-checked:start-5 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent"></span>
          </label>
        </div>
      </header>
    </div>
  );
};
