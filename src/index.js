import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "../src/styles/global.css";
import Apropos from "./a-propos";
import Competences from "./competences";
import Projets from "./projets";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/projets" element={<Projets />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
