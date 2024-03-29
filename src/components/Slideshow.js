import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img1 from "../assets/bg.jpg";
import img2 from "../assets/wearehiring.jpg";
import "./Slideshow.css";

const images = [img1, img2];

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Zoom scale={0.4}>
                {images.map((each, index) => (
                    <img
                        key={index}
                        style={{ width: "100%" }}
                        src={each}
                        alt="slideshow"
                    />
                ))}
            </Zoom>
        </div>
    );
};

export default Slideshow;
