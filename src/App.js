
import React from 'react'
// import { BrowserRouter} from "react-router-dom";s
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './components/abstracts/text-editor.scss'


import Navbar from './components/layout/Navbar';
import './components/abstracts/font-familay.scss'
import './components/abstracts/media.scss'
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Home from './Home';

function App() {
  return <BrowserRouter>
  <Navbar />

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/contact" element={<Contact />} />
 
    <Route path="*" element={<h1>Error 404 Page not found!!!</h1>} />
  </Routes>
  </BrowserRouter>

}

export default App;
