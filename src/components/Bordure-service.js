import React from "react";
import "./Bordure.css";

export default function Bordure() {
    return (
        <div class="breadcrumbs d-flex align-items-center">
            <div class="container position-relative d-flex flex-column align-items-center">
                <h2>Services</h2>
                <ol>
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>Services</li>
                </ol>
            </div>
        </div>
    );
}
