import React from 'react';
import "../css/video.css"
import ArrowVideo from "../assets/arrow-video.png"

export default function Video() {
    return (
        <div className="video-container">
            <img id="arrow-video" src={ArrowVideo} alt="Gerader Pfeil der auf das Video zeigt" />
            <iframe
                src="https://www.youtube.com/embed/IiB02GFi1FU"
                id="video"
                allowFullScreen
                title="MailFlow: KI E-Mail Automatiserung"
            ></iframe>
        </div>
    )
}