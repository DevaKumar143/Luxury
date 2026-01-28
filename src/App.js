import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Crousel from "./components/Crousel";
import Card from "./components/Card";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          
           <Route
          path="/"
          element={
            <>
              <Crousel />
              <Card />
            </>
          }
        />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
