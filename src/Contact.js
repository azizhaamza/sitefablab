import "./Contact.css";
import { Helmet } from "react-helmet";

function Contact() {
    return (
        <div className="contactUs">
            <div className="title">
                <h2>Get in Touch</h2>
            </div>
            <div className="box">
                <div className="contact form">
                    <h3>Send a Message</h3>
                    <form>
                        <div className="formBox">
                            <div className="row50">
                                <div className="inputBox">
                                    <span>First Name</span>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div className="inputBox">
                                    <span>Last Name</span>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>
                            <div className="row50">
                                <div className="inputBox">
                                    <span>Email</span>
                                    <input
                                        type="text"
                                        placeholder="email@email.com"
                                    />
                                </div>
                                <div className="inputBox">
                                    <span>Phone Number</span>
                                    <input
                                        type="text"
                                        placeholder="00 000 000"
                                    />
                                </div>
                            </div>
                            <div className="row100">
                                <div className="inputBox">
                                    <span>Message</span>
                                    <textarea placeholder="Write your message here ..."></textarea>
                                </div>
                            </div>
                            <div className="row100">
                                <div className="inputBox">
                                    <input type="submit" value="Send" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="contact info">
                    <h3>Contact Info</h3>
                    <div className="infoBox">
                        <div>
                            <span>
                                <ion-icon name="location-outline"></ion-icon>
                            </span>
                            <p>Rue du Lac d'Annecy, Tunis 1053</p>
                        </div>
                        <div>
                            <span>
                                <ion-icon name="mail-outline"></ion-icon>
                            </span>
                            <a href="mailto:fablab@pi.tn">fablab@pi.tn</a>
                        </div>
                        <div>
                            <span>
                                <ion-icon name="call-outline"></ion-icon>
                            </span>
                            <a href="tel:+21650721216">+216 52 057 059</a>
                        </div>
                    </div>
                    <ul className="sci">
                        <li>
                            <a href="https://www.facebook.com/profile.php?id=100083065876343">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/polytech_intl.fablab/?hl=fr">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com">
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="contact map">
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.2387983927047!2d10.229505315266938!3d36.83675657994097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd353c2a9bdafb%3A0xf40a3b2820de190d!2sPolytech-Intl!5e0!3m2!1sfr!2stn!4v1662147531901!5m2!1sfr!2stn"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <Helmet>
                <script
                    type="module"
                    src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
                ></script>
                <script
                    nomodule
                    src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
                ></script>
            </Helmet>
        </div>
    );
}

export default Contact;
