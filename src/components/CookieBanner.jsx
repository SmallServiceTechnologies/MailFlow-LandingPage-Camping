import React, {useEffect} from 'react';
import "../css/cookieBanner.css"
import globals from "globals";
import {Link} from "react-router-dom";

export default function CookieBanner() {
    useEffect(() => {
        const banner = document.getElementById('cookie-banner');
        const gaConsent = localStorage.getItem('gaConsent');

        if (!banner) return;

        if (!gaConsent) {
            banner.style.display = 'flex';
        } else if (gaConsent === 'accepted') {
            loadGTMandAnalytics();
        }

        document.getElementById('accept-cookie')?.addEventListener('click', () => {
            localStorage.setItem('gaConsent', 'accepted');
            banner.style.display = 'none';
            loadGTMandAnalytics();
        });

        document.getElementById('decline-cookie')?.addEventListener('click', () => {
            localStorage.setItem('gaConsent', 'declined');
            banner.style.display = 'none';
        });
    }, []); // Run only once

    // Dynamically load GTM & GA
    function loadGTMandAnalytics() {
        // --- Google Tag Manager ---
        (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s), dl=l!='dataLayer' ? '&l='+l : '';
            j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5SDNZ3VB');

        // --- Google Analytics #1 ---
        const gaScript1 = document.createElement('script');
        gaScript1.async = true;
        gaScript1.src = 'https://www.googletagmanager.com/gtag/js?id=G-LWMRYYZ8MY';
        document.head.appendChild(gaScript1);

        gaScript1.onload = function() {
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LWMRYYZ8MY');
        };

        // --- Google Analytics #2 ---
        const gaScript2 = document.createElement('script');
        gaScript2.async = true;
        gaScript2.src = 'https://www.googletagmanager.com/gtag/js?id=G-35D8REWCT8';
        document.head.appendChild(gaScript2);

        gaScript2.onload = function() {
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-35D8REWCT8');
        };
    }

    return (
        <div id="cookie-banner">
            <p>
                Wir verwenden YouTube, Google Tag Manager und Google Analytics, um unser Angebot zu verbessern und das
                Nutzungsverhalten auf unserer Website zu analysieren. Die Verarbeitung Ihrer Daten erfolgt gemäß unserer
                <Link to="/datenschutzerklärung">Datenschutzerklärung</Link>. Sie können Ihre Cookie-Einstellungen jederzeit i
                Footer anpassen.
            </p>
            <div id="cookie-buttons-container">
                <button className="cookie-btn" id="accept-cookie">Annehmen</button>
                <button className="cookie-btn" id="decline-cookie">Ablehnen</button>
            </div>
        </div>
    )
}