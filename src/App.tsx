import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Login} from "./components/Login";
import {Home} from "./components/Home";
import {Destination} from "./components/Destination";
import { Switzerland } from './components/Switzerland';
import {Japan} from "./components/Japan";
import {Maldives} from "./components/Maldives";
import {Czech} from "./components/Czech";
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Contact } from './components/Contact';
import {Categories, Food} from "./components/Categories";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destination countryName={["Switzerland", "Czech", "Japan", "Maldives"]}/>} />
        <Route path="/destinations/switzerland" element={<Switzerland />} />
        <Route path="/destinations/japan" element={<Japan/>} />
        <Route path="/destinations/czech" element={<Czech />} />
        <Route path="/destinations/maldives" element={<Maldives />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/food" element={<Food />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};


export default App;
