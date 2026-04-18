import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import './index.css'
import Service from "./page/Service";
import About from "./page/About";
import Contact from "./page/Contact";
import Adopcion from "./page/Adopcion";

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/adopcion" element={<Adopcion />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;