import React from 'react';
import {Link} from "react-router-dom";
import "../css/footer.css"
import CTABtn from "./CTABtn.jsx";
import gdpr from "../assets/gdpr-compliant.svg"
import mailflowlogo from "../assets/mailflow-logo-color.svg";

export default function Footer() {

    const toggleCookieBanner = () => {
        const banner = document.getElementById("cookie-banner");
        if (banner) banner.classList.toggle("hidden");
    }

    return (
        <div className="footer-container">
            <div className="container">
                <a href="/" className="logo">
                    <img src={mailflowlogo}/>
                </a>
                <p>Crafted with ❤️ and 🧠 in Germany 🇩🇪</p>
                <p>Hosted in Germany, fully GDPR compliant 🇪🇺</p>
            </div>
            <div className="row">
                <img className="gdpr-badge" src={gdpr} alt="Gdpr Compliant"/>
                <Link className="footer-btn" to="https://circular-hovercraft-852.notion.site/Case-Study-PULS-Power-GmbH-218182eb20d880c48e12f9ab646ed4b5">Case study (German)</Link>
                <Link className="footer-btn" to="/impressum">Imprint</Link>
                <Link className="footer-btn" to="/datenschutzerklärung">Privacy policy</Link>
                <button className="footer-btn" onClick={toggleCookieBanner}>Cookies</button>
            </div>
        </div>
    )
}