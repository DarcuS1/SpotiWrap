import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AlbumsPage from "./AlbumsPage";
import ArtistsPage from "./ArtistsPage";
import SelectDataPage from "./SelectDataPage";
import TracksPage from "./TracksPage";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/select-data" element={<SelectDataPage />} />
          <Route path="/artists/*" element={<ArtistsPage />} />
          <Route path="/albums/*" element={<AlbumsPage />} />
          <Route path="/tracks/*" element={<TracksPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
