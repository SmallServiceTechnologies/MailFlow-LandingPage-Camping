// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import "./MainComponent.css";
import Arrow from "../../assets/Arrow.png";

// eslint-disable-next-line react/prop-types
export default function MainComponent({ openCalendly }) {
  useRef(null);
  const handleClick = () => {
    openCalendly();
  };

  return (
    <div>
      <div className="main">
        <div className="arrow-container">
          <img src={Arrow} alt="Arrow Icon" className="arrow-image" />
        </div>
        <div className="margin-center">
          <div className="main-container">
            <div className="cta-container">
              <h1 className="h1-header">
                Keine Zeit mehr verlieren - simple E-Mails mit KI automatisieren!
              </h1>
              <ul>
                <li>
                  Wiederkehrende Fragen eliminieren: Automatische Antworten auf
                  häufige Anfragen.
                </li>
                <li>
                  Buchungen automatisieren: Anfragen direkt mit CRM-Integration
                  bearbeiten.
                </li>
                <li>
                  Gästezufriedenheit erhöhen: Schnelle und präzise Antworten.
                </li>
                <li>
                  Zeit sparen: Fokus auf die wichtigen Aufgaben Ihres
                  Campingplatzes.
                </li>
              </ul>
                <button
                  onClick={handleClick}
                  className="call-to-action button-effect"
                >
                  Termin Vereinbaren
                </button>
            </div>
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/IiB02GFi1FU"
                id="video"
                allowFullScreen
                title="YouTube video"
              ></iframe>
            </div>
            <div>
              <button
                onClick={handleClick}
                className="small-screen-call-to-action button-effect"
              >
                Termin Vereinbaren
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
