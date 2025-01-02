import React from 'react';
import {Link} from "react-router-dom";
import "../css/footer.css"
import loadGTMandAnalytics from "./CookieBanner.jsx";

export default function Footer() {

    const toggleFooter = () => {
        const banner = document.getElementById('cookie-banner');
        const cookieConsent = localStorage.getItem('cookieConsent');

        if (!banner) return;

        // Toggle visibility
        if (banner.style.display === 'none' || !banner.style.display) {
            banner.style.display = 'flex';
        } else {
            banner.style.display = 'none';
        }

        // Load GTM/GA if consent is accepted
        if (cookieConsent === 'accepted') {
            loadGTMandAnalytics();
        }
    }

    return (
        <div className="footer-container">
            <Link className="footer-btn" to="/impressum">Impressum</Link>
            <Link className="footer-btn" to="/datenschutzerklärung">Datenschutzerklärung</Link>
            <button className="footer-btn" onClick={toggleFooter}>Cookie Einstellungen</button>
            <a className="footer-btn" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" rel="noopener noreferrer" target="_blank">Nicht klicken ;)</a>
        </div>
    )
}