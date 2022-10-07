import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import Descriptionprojet from "./pages/Descriptionprojet";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/project" element={<Project />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projet/graveur" element={<Descriptionprojet />} />

            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
