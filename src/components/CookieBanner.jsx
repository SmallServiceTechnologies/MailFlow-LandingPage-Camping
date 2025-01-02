import React, {useContext, useEffect} from 'react';
import "../css/cookieBanner.css"
import {Link} from "react-router-dom";
import {AppContext} from "../AppContext.jsx";


export default function CookieBanner() {
    const { acceptCookies, declineCookies }  = useContext(AppContext)

    useEffect(() => {
        const banner = document.getElementById('cookie-banner');
        const cookieConsent = localStorage.getItem('cookieConsent');

        if (!banner) return;

        if (!cookieConsent) {
            banner.classList.remove("hidden");
        } else if (cookieConsent === 'accepted') {
            acceptCookies()
        }
    }, []); // Run only once

    return (
        <div id="cookie-banner">
            <p>
                Wir verwenden YouTube, Google Tag Manager und Google Analytics, um unser Angebot zu verbessern und das
                Nutzungsverhalten auf unserer Website zu analysieren. Die Verarbeitung Ihrer Daten erfolgt gemäß
                unserer <Link to="/datenschutzerklärung">Datenschutzerklärung</Link>. Sie können Ihre
                Cookie-Einstellungen jederzeit anpassen.
            </p>
            <div className="container">
                <button className="cookie-btn" id="accept-cookies" onClick={acceptCookies}>Annehmen</button>
                <button className="cookie-btn"  onClick={declineCookies}>Ablehnen</button>
            </div>
        </div>
    )
}