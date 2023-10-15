import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AlbumsContent from "./components/AlbumsContent";

function AlbumsPage() {
  return (
    <>
      <Navbar></Navbar>
      <AlbumsContent></AlbumsContent>
      <Footer></Footer>
    </>
  );
}

export default AlbumsPage;
