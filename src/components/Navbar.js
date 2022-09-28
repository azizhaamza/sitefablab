import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logocropped from "../assets/logocropped.png";


function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [navbar,setNavbar] = useState(false); 

    const changeBackground = () => {
        if(window.scrollY >=80){
            closeMobileMenu(true)
        } else {
            closeMobileMenu(false);
        }
    }
    window.addEventListener('scroll',changeBackground);
  return (
    <div className="App">
            <nav id="navbar">
                 <div  onClick={handleClick} className="checkbtn">
                    <i className={click ? 'fas fa-times' : 'fas fa-bars' } />
                 </div>
                <img
                    className="pic"
                    src={logocropped}
                    width="50px"
                    height="50px"
                    alt="logo"
                />
                <label className="logo">
                    <span>
                        <b>FabLab </b>
                    </span>
                    Polytech Intl
                </label>
                <ul className={click? "active" : ""} >
                    <li>
                        <Link className="hvr-underline-from-center" to="/" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="hvr-underline-from-center"to="/project" onClick={closeMobileMenu}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link className="hvr-underline-from-center"to="/services" onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link className="hvr-underline-from-center" to="/contact" onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
  )
}

export default Navbar