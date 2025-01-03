import React from 'react';
import {Link} from "react-router-dom";
import "../css/footer.css"
import CTABtn from "./CTABtn.jsx";

export default function Footer() {

    const toggleCookieBanner = () => {
        const banner = document.getElementById("cookie-banner");
        if (banner) banner.classList.toggle("hidden");
    }

    return (
        <div className="footer-container">
            <CTABtn></CTABtn>
            <Link className="footer-btn" to="/impressum">Impressum</Link>
            <Link className="footer-btn" to="/datenschutzerklärung">Datenschutzerklärung</Link>
            <button className="footer-btn" onClick={toggleCookieBanner}>Cookie Einstellungen</button>
            <a className="footer-btn" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" rel="noopener noreferrer" target="_blank">© 2025</a>
        </div>
    )
}