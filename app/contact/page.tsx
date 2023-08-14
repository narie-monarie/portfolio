export default function page() {
  return (
    <div>
      <section className=" body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Contact Me
            </h1>
            <p className="lg:w-2/4 mx-auto leading-relaxed">
              I would be thrilled to hear from you and discuss potential
              collaborations or answer any inquiries you may have. Please feel
              free to reach out to me using the contact information below. I
              will do my best to respond promptly.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32  outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Send
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-2 border-t border-gray-800 text-center">
                <a className="text-indigo-400">jobmonari7@gmail.com</a>
                <div className="leading-normal my-5">
                  Kenya
                  <p>Nairobi, Karen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
