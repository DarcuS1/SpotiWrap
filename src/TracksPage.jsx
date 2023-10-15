import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TracksContent from "./components/TracksContent";

function TracksPage() {
  return (
    <>
      <Navbar></Navbar>
      <TracksContent></TracksContent>
      <Footer></Footer>
    </>
  );
}

export default TracksPage;
