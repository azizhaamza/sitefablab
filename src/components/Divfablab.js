import React from "react";
import "./Divfablab.css";
import image1 from "../assets/definitionfablab.png";

function Divfablab() {
    return (
        <div className="grid-container">
            <h1 className="item1">
                UN <span>FABLAB</span>, C'EST Quoi?
            </h1>
            <img className="item2" src={image1} alt="defintion fablab" />
            <p className="item3">
                Opened in February 2022, PI-FabLab, the manufacturing laboratory
                of the private international polytechnic school in Tunis, is a
                place for both the manufacture of objects and the sharing of
                knowledge. The PI-fablab, with its tools and machines, allows
                anyone, whatever their level of knowledge, to carry out their
                projects whether they are personal, academic, or commercial, and
                to learn by doing themselves and by getting help from the rest
                of the community.
            </p>
        </div>
    );
}

export default Divfablab;
