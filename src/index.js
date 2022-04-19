import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";

import App from "./App";
import AboutMe from "./pages/AboutMe/AboutMe";
import ImageInfo from "./pages/ImageInfo/ImageInfo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/images/:id" element={<ImageInfo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
