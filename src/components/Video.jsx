import React from 'react';
import "../css/video.css"

export default function Video() {
    return (
        <div className="video-container">
            <iframe
                src="https://www.youtube.com/embed/IiB02GFi1FU"
                id="video"
                allowFullScreen
                title="MailFlow: KI E-Mail Automatiserung"
            ></iframe>
        </div>
    )
}