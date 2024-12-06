import React from "react";
import "./MainComponent.css";

export default function MainComponent({ openCalendly }) {  // Empfang der Funktion als Prop

  const handleClick = () => {
    openCalendly();  
  };

  return (
    <div className="main-container">
      <div className="cta-container">
        <h1 className="h1-header">Automated Email Replies, Tailored for Camping Sites</h1>
        <p>Insert cool thing about the thing</p>
        <button onClick={handleClick} className="call-to-action">
          Book a free call
        </button>
      </div>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/IiB02GFi1FU"
          allowFullScreen
          title="YouTube video"
        ></iframe>
        <button onClick={handleClick} className="small-screen-call-to-action">
          Book a free call (mobile)
        </button>
      </div>
    </div>
  );
}
