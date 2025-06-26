import React, {useContext, useEffect} from 'react';
import "../css/cookieBanner.css"
import {Link} from "react-router-dom";
import {AppContext} from "../AppContext.jsx";


export default function CookieBanner() {
    const { cookieConsent, acceptCookies, declineCookies }  = useContext(AppContext)

    useEffect(() => {
        const banner = document.getElementById('cookie-banner');

        if (!banner) return;

        if (!cookieConsent) {
            banner.classList.remove("hidden");
        } else if (cookieConsent) {
            acceptCookies();
        }
    }, []); // Run only once

    return (
        <div id="cookie-banner">
            <p>
                We use YouTube, Google Tag Manager and Google Analytics to improve our offer and analyze user behavior on our website.
                Your data is processed in accordance with our <Link to="/datenschutzerklärung">privacy policy</Link>.
                You can adjust your cookie settings at any time.
            </p>
            <div className="container">
                <button className="cookie-btn" id="accept-cookies" onClick={acceptCookies}>🍪 Accept</button>
                <button className="cookie-btn" id="decline-cookies" onClick={declineCookies}>🍪 Reject</button>
            </div>
        </div>
    )
}