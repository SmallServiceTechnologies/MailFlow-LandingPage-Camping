import React, {createContext, useState} from 'react';

export const AppContext = createContext();

// Loading Provider component
export const AppContextProvider = ({ children }) => {
    const [cookieConsent, setCookieConsent] = useState(localStorage.getItem("cookieConsent") === "accepted");

    const GA4_MEASUREMENT_ID="G-1MFY55M7FQ";

    function acceptCookies() {
        localStorage.setItem("cookieConsent", "accepted");
        hideBanner();
        hideVideoTextOverlay();
        updateConsent(false, false, false, true);
        setCookieConsent(true);
    }

    function declineCookies() {
        localStorage.setItem("cookieConsent", "declined");
        hideBanner();
        hideVideoTextOverlay();
        updateConsent(false, false, false, false);
        setCookieConsent(false);
    }

    // Function to update consent settings (e.g., based on user interaction)
    function updateConsent(adUserData, adPersonalization, adStorage, analyticsConsent) {
        gtag('consent', 'update', {
            'ad_user_data': adUserData ? 'granted' : 'denied',
            'ad_personalization': adPersonalization ? 'granted' : 'denied',
            'ad_storage': adStorage ? 'granted' : 'denied',
            'analytics_storage': analyticsConsent ? 'granted' : 'denied'
        });
    }

    function hideBanner() {
        const banner = document.getElementById("cookie-banner");
        if (banner) banner.classList.add("hidden");
    }

    function hideVideoTextOverlay(){
        const overlay = document.getElementById("video-text-overlay");
        if (overlay) overlay.classList.add("hidden");
    }

    function gtag() {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push(arguments);
    }

    (function () {
        // Dynamically load the Google Analytics script
        var script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_MEASUREMENT_ID;
        document.head.appendChild(script);

        // Configure Consent Mode
        gtag('consent', 'default', {
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'analytics_storage': 'denied',
            'wait_for_update': 500
        });

        gtag('set', 'url_passthrough', true);
        gtag('set', 'ads_data_redaction', true);

        // Initialize Google Analytics
        gtag('js', new Date());
        gtag('config', GA4_MEASUREMENT_ID);
    })();

    return (
        <AppContext.Provider value={{ cookieConsent, acceptCookies, declineCookies }}>
            {children}
        </AppContext.Provider>
    );
};