import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import About from "./components/about";
import Boreholes from "./components/boreholes";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/boreholes" element={<Boreholes />} />
      </Routes>
    </BrowserRouter>
  );
}