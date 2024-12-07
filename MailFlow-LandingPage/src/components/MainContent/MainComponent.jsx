import React from "react";
import "./MainComponent.css";
import Card from "../Card/Card"

export default function MainComponent({ openCalendly }) {  // Empfang der Funktion als Prop

  const handleClick = () => {
    openCalendly();  
  };

  return (
    <div>
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
    <div className="card-container">
      <Card 
        title="Anfrage"
        subject="Buchungsanfrage Februar 2025"
        email="info@campingplatz.com"
        body='Guten Tag lieber Campingplatz,
          
          Ich möchte gerne mit meiner Familie am 10.02.2025 mit unserem 
          Wohnmobile anreisen und eine Woche bei Ihnen Urlaub machen,

          Ist noch ein Platz verfügbar? Haben Sie überhaupt schon offen?

          Gibt es kostenloses WLAN?

          Liebe Grüße,
          Moritz'
        note = "1. Kunde stellt eine Anfrage zu einer Buchung oder stellt eine allgemeine Frage."
      />
    </div>
    </div>
    </div>
  );
}
