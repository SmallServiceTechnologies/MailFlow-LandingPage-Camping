import React from "react";
import "./MainComponent.css";
import FAQ from "../FAQ/FAQ";
import Arrow from '../../assets/Arrow.png';  

export default function MainComponent({ openCalendly }) {

  const handleClick = () => {
    openCalendly();
  };

  return (
    <div>
    <div className="backgroundcolor-grey">
      <div className="arrow-container">
      <img src={Arrow} alt="Arrow Icon" className="arrow-image" />
      </div>
      <div className="margin-center ">
        <div className="main-container">
          <div className="cta-container">
            <h1 className="h1-header">
              Schluss mit wiederholten E-Mails – keine Zeit mehr verschwenden.
            </h1>
            <ul>
              <li>
                <strong className= "strong">Wiederkehrende Fragen eliminieren</strong>: Automatische
                Antworten auf häufige Anfragen.
              </li>
              <li>
                <strong className= "strong">Buchungen automatisieren</strong>: Anfragen direkt mit
                CRM-Integration bearbeiten.
              </li>
              <li>
                <strong className= "strong">Gästezufriedenheit erhöhen</strong>: Schnelle und
                präzise Antworten.
              </li>
              <li>
                <strong className= "strong" >Zeit sparen</strong>: Fokus auf die wichtigen Aufgaben
                Ihres Campingplatzes.
              </li>
            </ul>
            <button onClick={handleClick} className="call-to-action">
              Jetzt Termin vereinbaren!
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
            <button
              onClick={handleClick}
              className="small-screen-call-to-action"
            >
              Jetzt Termin vereinbaren!
            </button>
          </div>
        </div>
      </div>
      </div>
      <div className="margin-center ">
      <FAQ></FAQ>
      </div>
    </div>
  );
}
