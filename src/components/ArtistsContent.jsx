import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const artistImageStyle = {
  width: "100%", // Set a fixed width
  height: "200px", // Set a fixed height
  objectFit: "cover", // Maintain aspect ratio and cover the entire space
};

function ArtistsContent(props) {
  const [artists, setArtists] = useState([]);
  const location = useLocation();
  const code = new URLSearchParams(location.search).get("code");
  useEffect(() => {
    // Fetch artists from your API endpoint
    let redirectLink = `http://localhost:8080/api/user-top-artists?code=${code}`;
    axios
      .get(redirectLink)
      .then((response) => {
        setArtists(response.data); // Assuming the response data is an array of artists
      })
      .catch((error) => {
        console.error("Error fetching artists:", error);
      });
  }, []);

  return (
    <>
      <section className="px-2 py-32 md:px-0 bg-black">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline bg-clip-text text-transparent bg-gradient-to-r from-white to-green-500">
                    Explore your choices.
                  </span>
                  <span className="block xl:inline bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-white">
                    They tell your story!
                  </span>
                </h1>
                <p className="mx-auto text-base sm:max-w-md lg:text-xl md:max-w-3xl text-gray-300">
                  From your account through Spotify's API, now here, the data
                  that represents your music taste!
                </p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <a
                    href="#top-artists"
                    className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto bg-green-500"
                    data-primary="indigo-600"
                    data-rounded="rounded-md"
                  >
                    See artists
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
                <img
                  src="https://th.bing.com/th/id/R.18003e1a761439db3da5ba3100f3bad4?rik=1ZI2W1W%2f20UEMA&amp;pid=ImgRaw&amp;r=0"
                  alt="Artists"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 bg-black">
        <div className="max-w-7xl px-10 mx-auto sm:text-center">
          <div className="justify-center flex flex-col sm:flex-row sm:space-x-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
              <span
                id="top-artists"
                className="block xl:inline bg-clip-text text-transparent bg-gradient-to-r from-white to-green-500"
              >
                Your Top Artists
              </span>
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 my-12 sm:my-16">
            {artists.map((artist) => (
              <div
                className="rounded-lg flex flex-col items-center justify-center shadow-lg border border-gradient-to-r  from-white to-green-500"
                key={artist.id}
              >
                <img
                  src={artist.images[0].url}
                  alt={artist.name}
                  className="card-img-top rounded-t flex flex-col"
                  style={artistImageStyle}
                />
                <h1 className="text-base font-extrabold tracking-tight text-gray-900 sm:text-3xl md:text-2xl lg:text-3xl xl:text-2xl">
                  <span className="block xl:inline bg-clip-text text-transparent rounded-b bg-gradient-to-r  from-white to-green-500">
                    <a href={artist.externalUrls.externalUrls.spotify}>
                      {artist.name}
                    </a>
                  </span>
                </h1>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ArtistsContent;
