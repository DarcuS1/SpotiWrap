import React from "react";

function HomeContent() {
  return (
    <>
      <section className="py-20 bg-black">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-center text-white">
            Custom data pulled from Spotify
          </h2>
          <p className="mt-2 text-lg text-center text-gray-300">
            You can select from a variety of features like:
          </p>
          <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
            <div
              className="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl bg-gradient-to-br from-black to-green-500"
              data-rounded="rounded-xl"
              data-rounded-max="rounded-full"
            >
              <div
                className="p-3 text-white rounded-full bg-black"
                data-primary="blue-500"
                data-rounded="rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="none"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle
                    cx="12"
                    cy="5"
                    r="3"
                    fill="currentColor"
                    className=""
                  ></circle>
                  <path d="M12 8v10" stroke="currentColor" className=""></path>
                  <path d="M9 5h6" stroke="currentColor" className=""></path>
                  <path d="M10 12h4" stroke="currentColor" className=""></path>
                  <path d="M10 15h4" stroke="currentColor"></path>
                  <path d="M7 22h10" stroke="currentColor"></path>
                  <path d="M7 18h10" stroke="currentColor" className=""></path>
                </svg>
              </div>
              <h4 className="text-xl font-medium text-white">
                Get Top Artists
              </h4>
              <p className="text-base text-center text-gray-300">
                See your top artists selected based on time periods
              </p>
            </div>
            <div
              className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 sm:rounded-xl bg-gradient-to-br from-black to-green-500"
              data-rounded="rounded-xl"
              data-rounded-max="rounded-full"
            >
              <div
                className="p-3 text-white rounded-full bg-black"
                data-primary="blue-500"
                data-rounded="rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="none"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    fill="white"
                    className=""
                  ></rect>
                  <path
                    d="M10 5c0-2.5 2.5-4 5-4s5 1.5 5 4c0 4-7 13-7 13s-7-9-7-13z"
                    fill="black"
                    className=""
                  ></path>
                  <ellipse
                    cx="15"
                    cy="16"
                    rx="3"
                    ry="4"
                    fill="black"
                    className=""
                  ></ellipse>
                </svg>
              </div>
              <h4 className="text-xl font-medium text-white">Get Top Albums</h4>
              <p className="text-base text-center text-gray-300">
                Check your top albums from now or older
              </p>
            </div>
            <div
              className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 sm:rounded-xl bg-gradient-to-br from-black to-green-500"
              data-rounded="rounded-xl"
              data-rounded-max="rounded-full"
            >
              <div
                className="p-3 text-white rounded-full bg-black"
                data-primary="blue-500"
                data-rounded="rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 21v-7l5-4l-5-4v7z"></path>
                  <path d="M12 12.5l-5-4"></path>
                  <path d="M5 8.5l5-4"></path>
                </svg>
              </div>
              <h4 className="text-xl font-medium text-white">Get Top Tracks</h4>
              <p className="text-base text-center text-gray-300">
                Are your top tracks the same over time? Check now
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeContent;
