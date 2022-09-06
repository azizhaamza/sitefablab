import "./Header.css";
import logocropped from "./logocropped.png";

function Header() {
    return (
        <div className="App">
            <nav>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                    <i className="fas fa-bars"></i>
                </label>
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
                <ul>
                    <li>
                        <a
                            className="hvr-underline-from-center"
                            href="Home.html"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            className="hvr-underline-from-center"
                            href="Projects.html"
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            className="hvr-underline-from-center"
                            href="Services.html"
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            className="hvr-underline-from-center"
                            href="Contact.html"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
