import React from "react";
import Divfablab from "../components/Divfablab";
import DivProject from "../components/DivProject";
import DivServices from "../components/DivServices";
import Slideshow from "../components/Slideshow";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

function Home() {
    return (
        <div>
            <Slideshow />
            <Divfablab />
            <DivServices />
            <DivProject />
        </div>
    );
}

export default Home;
