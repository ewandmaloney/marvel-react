import { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Comics from "./pages/Comics";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Header from "./components/Header";
import AllCharacters from "./pages/AllCharacters";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/series" element={<Series />} />
          <Route path="/characters" element={<AllCharacters />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
