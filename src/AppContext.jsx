import React, {createContext, useState} from 'react';

export const AppContext = createContext();

// Loading Provider component
export const AppContextProvider = ({ children }) => {
    const [cookiesAccepted, setCookiesAccepted] = useState(localStorage.getItem("cookieConsent") === "accepted");

    function acceptCookies() {
        localStorage.setItem("cookieConsent", "accepted");
        hideBanner();
        hideVideoTextOverlay();
        loadGoogleCookies();
        setCookiesAccepted(true);
    }

    function declineCookies() {
        localStorage.setItem("cookieConsent", "declined");
        hideBanner();
        hideVideoTextOverlay();
        setCookiesAccepted(false);
    }

    function hideBanner() {
        const banner = document.getElementById("cookie-banner");
        if (banner) banner.classList.add("hidden");
    }

    function hideVideoTextOverlay(){
        const overlay = document.getElementById("video-text-overlay");
        if (overlay) overlay.classList.add("hidden");
    }

    // Dynamically load GTM & GA & YT
    function loadGoogleCookies() {
        // Google Tag Manager
        (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({"gtm.start": new Date().getTime(), event: "gtm.js"});
            var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s), dl=l!="dataLayer" ? "&l="+l : "";
            j.async=true; j.src="https://www.googletagmanager.com/gtm.js?id="+i+dl;
            f.parentNode.insertBefore(j,f);
        })(window,document,"script","dataLayer","GTM-5SDNZ3VB");

        // Google Analytics #1
        const gaScript1 = document.createElement("script");
        gaScript1.async = true;
        gaScript1.src = "https://www.googletagmanager.com/gtag/js?id=G-LWMRYYZ8MY";
        document.head.appendChild(gaScript1);

        gaScript1.onload = function() {
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());
            gtag("config", "G-LWMRYYZ8MY");
        };

        // Google Analytics #2
        const gaScript2 = document.createElement("script");
        gaScript2.async = true;
        gaScript2.src = "https://www.googletagmanager.com/gtag/js?id=G-35D8REWCT8";
        document.head.appendChild(gaScript2);

        gaScript2.onload = function() {
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());
            gtag("config", "G-35D8REWCT8");
        };
    }

    return (
        <AppContext.Provider value={{ cookiesAccepted, acceptCookies, declineCookies }}>
            {children}
        </AppContext.Provider>
    );
};