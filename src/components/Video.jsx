import React, {useContext} from 'react';
import "../css/video.css"
import {AppContext} from "../AppContext.jsx";

export default function Video() {
    const { cookieConsent, acceptCookies }  = useContext(AppContext);

    const handleAcceptCookies = () => {
        acceptCookies();
    }

    // Dynamically set the iframe src based on cookie consent
    const iframeSrc = cookieConsent
        ? "https://www.youtube.com/embed/ZONUPHhtbsY?si=1XdJpAjt7igbavcn&enablejsapi=1&vq=hd1080&rel=0"
        : "https://www.youtube-nocookie.com/embed/ZONUPHhtbsY?si=1XdJpAjt7igbavcn&enablejsapi=1&vq=hd1080&rel=0";

    return (
        <div className="video-container" onClick={handleAcceptCookies}>
            <span id="video-text-overlay">
               By starting the video, you agree to the use of cookies. Explicitly reject cookies to play the video without them.</span>
            <iframe
                src={iframeSrc}
                id="youtube-video"
                allowFullScreen
                title="AI Email Automation | mailflow"
            ></iframe>
        </div>
    )
}