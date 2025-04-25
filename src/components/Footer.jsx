import React from 'react';
import {Link} from "react-router-dom";
import "../css/footer.css"
import CTABtn from "./CTABtn.jsx";
import gdpr from "../assets/gdpr-compliant.svg"

export default function Footer() {

    const toggleCookieBanner = () => {
        const banner = document.getElementById("cookie-banner");
        if (banner) banner.classList.toggle("hidden");
    }

    return (
        <div className="footer-container">
            <img src={gdpr} alt="Gdpr Compliant"/>
            {/*<CTABtn></CTABtn>*/}
            <Link className="footer-btn" to="/impressum">Imprint</Link>
            <Link className="footer-btn" to="/datenschutzerklärung">Privacy Policy</Link>
            <button className="footer-btn" onClick={toggleCookieBanner}>Cookies</button>
        </div>
    )
}