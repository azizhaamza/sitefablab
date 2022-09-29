import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>Fablab</h4>
                            <ul>
                                <li>
                                    <a href="https://developer.mozilla.org/fr/docs/Web/CSS/-webkit-text-fill-color">
                                        about us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.privacypolicygenerator.info/live.php?token=Bi3MWHGxJJeYHUL00k8w2yQ9qMtKQMU9"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        privacy policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Services</h4>
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/PI-FabLab-107110225324739">
                                        design and manufacturing
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/PI-FabLab-107110225324739">
                                        Web Development
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/PI-FabLab-107110225324739">
                                        3D Printing
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Location</h4>
                            <ul>
                                <li>
                                    <a
                                        href="https://g.page/Polytechintl?share"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Rue du Lac d'Annecy, Tunis 1053
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>follow us</h4>
                            <div className="social-links">
                                <a
                                    href="https://www.facebook.com/profile.php?id=100083065876343"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a
                                    href="https://www.instagram.com/polytech_intl.fablab/?hl=fr"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a
                                    href="https://developer.mozilla.org/fr/docs/Web/CSS/-webkit-text-fill-color"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
