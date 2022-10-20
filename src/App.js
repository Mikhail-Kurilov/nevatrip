import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage.tsx";
import { Detailed } from "./pages/Detailed/Detailed.tsx";
import { FortyFour } from "./pages/FortyFour/FortyFour.tsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detailed" element={<Detailed />} />
        <Route path="/*" element={<FortyFour />} />
      </Routes>
    </div>
  );
}

export default App;
