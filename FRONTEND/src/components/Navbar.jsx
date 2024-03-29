import React from "react";

function Navbar() {
  return (
    <>
      <section className="w-full px-8 bg-black text-white">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <div className="relative flex flex-col md:flex-row">
            <a
              href="#_"
              className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
            >
              <span className="mx-auto text-xl font-black leading-none select-none text-green-500">
                dev.Josan
                <span className="text-indigo-600" data-primary="indigo-600">
                  .
                </span>
              </span>
            </a>
            <div>
              <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
                <a
                  href="/"
                  className="mr-5 font-medium leading-6 text-white hover:text-green-500"
                >
                  Home
                </a>
                <div> </div>
                <a
                  href="/select-data"
                  className="mr-5 font-medium leading-6 text-white hover:text-green-500"
                >
                  Features
                </a>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
