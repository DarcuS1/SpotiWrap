import React from "react";
import { Link } from "react-router-dom";
function SelectDataContent() {
  const paramShort = "?code=short_term";
  const paramMid = "?code=medium_term";
  const paramLong = "?code=long_term";
  return (
    <>
      <section className="px-2 py-32 md:px-0 bg-black">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight  text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline bg-clip-text text-transparent bg-gradient-to-r from-white to-green-500">
                    Explore your choices.
                  </span>
                  <span
                    className="block xl:inline bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-white"
                    data-primary="indigo-600"
                  >
                    They Tell Your Story!
                  </span>
                </h1>
                <p className="mx-auto text-base sm:max-w-md lg:text-xl md:max-w-3xl text-gray-300">
                  From your account through Spotify's api, now here, the data
                  that represents your music taste!
                </p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <a
                    href="#select-features"
                    className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto bg-green-500"
                    data-primary="indigo-600"
                    data-rounded="rounded-md"
                  >
                    See choices
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline
                        points="12 5 19 12 12 19"
                        className=""
                      ></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div
                className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl"
                data-rounded="rounded-xl"
                data-rounded-max="rounded-full"
              >
                <img src="/spotify-svg.svg" className="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-black">
        <div className="container max-w-6xl mx-auto">
          <h2
            id="select-features"
            className="text-4xl font-bold tracking-tight text-center text-white"
          >
            Our Features
          </h2>
          <p className="mt-2 text-lg text-center text-gray-300">
            Check out our list of awesome features below.
          </p>
          <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
            <div className="col-span-4 sm:col-span-8 lg:col-span-12">
              <div className="flex justify-center ">
                <div
                  className="items-center px-8 py-12 space-y-4 overflow-hidden bg-green-500 justify-center flex sm:rounded-xl flex-col relative"
                  data-rounded="rounded-xl"
                >
                  <h4 className="text-xl font-medium text-white">
                    Top Artists
                  </h4>
                  <p className="text-base text-center text-gray-300">
                    See your top artists from various periods
                  </p>
                  <p className="text-base text-center text-gray-500">
                    <br />
                  </p>
                  <div className="flex justify-between w-full">
                    <Link
                      to={`/artists/${paramShort}`}
                      className="px-6 py-3 text-lg text-white rounded-md hover:bg-indigo-700 bg-black"
                      data-primary="indigo-600"
                      data-rounded="rounded-md"
                    >
                      Short
                    </Link>
                    <Link
                      to={`/artists/${paramMid}`}
                      className="px-6 py-3 text-lg text-white rounded-md hover:bg-indigo-700 bg-black"
                      data-primary="indigo-600"
                      data-rounded="rounded-md"
                    >
                      Mid
                    </Link>
                    <Link
                      to={`/artists/${paramLong}`}
                      className="px-6 py-3 text-lg text-white rounded-md hover:bg-indigo-700 bg-black"
                      data-primary="indigo-600"
                      data-rounded="rounded-md"
                    >
                      Long
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-8 lg:col-span-12">
              <div className="flex justify-center">
                <div
                  className="relative flex flex-col items-center justify-center px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl bg-green-500 col-span-7"
                  data-rounded="rounded-xl"
                  data-rounded-max="rounded-full"
                >
                  <h4 className="text-xl font-medium text-white">Top Tracks</h4>
                  <p className="text-base text-center text-gray-300">
                    See your top tracks from various periods
                  </p>
                  <p className="text-base text-center text-gray-500">
                    <br />
                  </p>
                  <div className="flex justify-between w-full">
                    <Link
                      to={`/tracks/${paramShort}`}
                      className="px-6 py-3 text-lg text-white rounded-md hover:bg-indigo-700 bg-black"
                      data-primary="indigo-600"
                      data-rounded="rounded-md"
                    >
                      Short
                    </Link>
                    <Link
                      to={`/tracks/${paramMid}`}
                      className="px-6 py-3 text-lg text-white rounded-md hover:bg-indigo-700 bg-black"
                      data-primary="indigo-600"
                      data-rounded="rounded-md"
                    >
                      Mid
                    </Link>
                    <Link
                      to={`/tracks/${paramLong}`}
                      className="px-6 py-3 text-lg text-white rounded-md hover:bg-indigo-700 bg-black"
                      data-primary="indigo-600"
                      data-rounded="rounded-md"
                    >
                      Long
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-8 lg:col-span-12">
              <div className="flex justify-center">
                <div
                  className="relative flex flex-col items-center justify-center px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl bg-green-500 col-span-7"
                  data-rounded="rounded-xl"
                  data-rounded-max="rounded-full"
                >
                  <h4 className="text-xl font-medium text-white">Top Albums</h4>
                  <p className="text-base text-center text-gray-300">
                    See your top albums from various periods
                  </p>
                  <p className="text-base text-center text-gray-500">
                    <br />
                  </p>
                  <div className="flex justify-between w-full">
                    <Link
                      to={`/albums/${paramShort}`}
                      className="px-6 py-3 text-lg text-white rounded-md hover:bg-indigo-700 bg-black"
                      data-primary="indigo-600"
                      data-rounded="rounded-md"
                    >
                      Short
                    </Link>
                    <Link
                      to={`/albums/${paramMid}`}
                      className="px-6 py-3 text-lg text-white rounded-md hover:bg-indigo-700 bg-black"
                      data-primary="indigo-600"
                      data-rounded="rounded-md"
                    >
                      Mid
                    </Link>
                    <Link
                      to={`/albums/${paramLong}`}
                      className="px-6 py-3 text-lg text-white rounded-md hover:bg-indigo-700 bg-black"
                      data-primary="indigo-600"
                      data-rounded="rounded-md"
                    >
                      Long
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SelectDataContent;
