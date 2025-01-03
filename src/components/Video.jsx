import React, {useContext} from 'react';
import "../css/video.css"
import {AppContext} from "../AppContext.jsx";

export default function Video() {
    const { cookiesAccepted, acceptCookies }  = useContext(AppContext);

    const handleAcceptCookies = () => {
        acceptCookies();
    }

    // Dynamically set the iframe src based on cookie consent
    const iframeSrc = cookiesAccepted
        ? "https://www.youtube.com/embed/IiB02GFi1FU?enablejsapi=1"
        : "https://www.youtube-nocookie.com/embed/IiB02GFi1FU?enablejsapi=1";

    return (
        <div className="video-container" onClick={handleAcceptCookies}>
            <span id="video-text-overlay">
                Mit dem Start des Videos stimmen Sie der Verwendung von (analytischen) Cookies zu. Lehnen Sie die Cookies explizit ab, um das Video ohne diese abzuspielen.</span>
            <iframe
                src={iframeSrc}
                id="youtube-video"
                allowFullScreen
                title="MailFlow: KI E-Mail Automatiserung"
            ></iframe>
        </div>
    )
}