import { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Comics from "./pages/Comics";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Header from "./components/Header";
import useFetch from "./hooks/useFetch";


function App() {
  const exampleAPI = useFetch(
    "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=838dd71c46e8209232ac75a7fae17f0a&hash=86347a5a0933c7668958401d1ad9d3ec"
  );

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/series" element={<Series />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
