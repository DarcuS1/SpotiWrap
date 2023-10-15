import React from "react";

function HomeNav() {
  return (
    <>
      <section className="w-full px-6 pb-12 antialiased bg-black">
        <div className="mx-auto max-w-7xl">
          <nav className="flex justify-between items-center bg-black text-white py-4 px-8">
            <div className="flex items-center justify-start">
              <a href="#">
                <span className="text-2xl font-bold text-green-500">
                  dev.Josan<span className="text-indigo-600">.</span>
                </span>
              </a>
            </div>
            <div className="justify-end">
              <a
                href="/login"
                className="px-6 py-3 font-medium rounded-full bg-green-500 hover:bg-indigo-500"
              >
                Log In
              </a>
            </div>
          </nav>
          <div className="container max-w-lg px-4 py-32 mx-auto mt-px text-left md:max-w-none md:text-center">
            <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl">
              <span className="md:block inline text-white">Wrapped?</span>
              <span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br md:inline-block to-indigo-600 from-green-400">
                Kinda... but ANYTIME
              </span>
            </h1>
            <div className="mx-auto mt-5 md:mt-12 md:max-w-lg md:text-center lg:text-lg text-gray-300">
              A Spotify Wrapped like application that works through the
              developer api
            </div>
            <div className="flex flex-col items-center mt-12 text-center">
              <span className="relative inline-flex w-full md:w-auto">
                <a
                  href="/select-data"
                  type="button"
                  className="inline-flex items-center justify-center w-full px-8 py-4 text-base  hover:text-white font-bold leading-6 text-white border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 bg-green-500"
                >
                  My stats
                </a>
                <span className="absolute top-0 right-0 px-2 py-1 -mt-3 -mr-6 text-xs font-medium leading-tight text-white bg-green-400 rounded-full bg-indigo-600">
                  custom info
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeNav;
