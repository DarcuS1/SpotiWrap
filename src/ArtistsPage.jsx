import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ArtistsContent from "./components/ArtistsContent";

function ArtistsPage() {
  return (
    <>
      <Navbar></Navbar>
      <ArtistsContent></ArtistsContent>
      <Footer></Footer>
    </>
  );
}

export default ArtistsPage;
