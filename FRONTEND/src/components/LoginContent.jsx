import React from "react";

function LoginContent() {
  return (
    <>
      {" "}
      <section className="px-2 py-32 md:px-0 bg-black">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5"></div>
      </section>
      <section className="py-20 bg-black">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl xl:text-6xl text-green-500">
            LOGIN
          </h2>
          <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Please login with your spotify account so I can show your wrapped
            data
          </p>
          <div className="flex justify-center mt-8 space-x-3">
            <a
              href="http://localhost:8080/api/login"
              className="items-center justify-center px-5 py-3 text-base font-medium text-white border border-transparent rounded-md shadow hover:bg-indigo-700 fixed-bottom bg-green-500"
              data-primary="indigo-600"
              data-rounded="rounded-md"
            >
              Login
            </a>
          </div>
          <div className="flex justify-center mt-8 space-x-3">
            <a
              href="http://localhost:3000/"
              className="items-center justify-center px-5 py-3 text-base font-medium text-white border border-transparent rounded-md shadow hover:bg-indigo-700 fixed-bottom bg-green-500"
              data-primary="indigo-600"
              data-rounded="rounded-md"
            >
              Go Back
              <br />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginContent;
