import React from 'react';
import "./Bordure.css";

   
export default function Bordure() {
  var title=window.location.href;
  var titre=title.split("/");
  return (
    <div class="breadcrumbs d-flex align-items-center">
            <div class="container position-relative d-flex flex-column align-items-center">
                <h2 >{titre[3]}</h2>
                <ol>
                <li><a href="index.html">Home</a></li>
                <li>{titre[3]}</li>
                    </ol>

            </div>
    </div>
  )
}
