import React from 'react';
import {Link} from "react-router-dom";
import "../css/footer.css"
import loadGTMandAnalytics from "./CookieBanner.jsx";

export default function Footer() {

    const toggleFooter = () => {
        const banner = document.getElementById('cookie-banner');
        const gaConsent = localStorage.getItem('gaConsent');

        if (!banner) return;

        // Toggle visibility
        if (banner.style.display === 'none' || !banner.style.display) {
            banner.style.display = 'flex';
        } else {
            banner.style.display = 'none';
        }

        // Load GTM/GA if consent is accepted
        if (gaConsent === 'accepted') {
            loadGTMandAnalytics();
        }
    }

    return (
        <div className="footer-container">
            <Link to="/impressum">Impressum</Link>
            <Link to="/datenschutzerklärung">Datenschutzerklärung</Link>
            <button onClick={toggleFooter}>Cookie Einstellungen</button>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" rel="noopener noreferrer" target="_blank">Nicht klicken ;)</a>
        </div>
    )
}