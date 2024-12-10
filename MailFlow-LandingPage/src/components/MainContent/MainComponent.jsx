import React, { useState, useEffect } from "react";
import "./MainComponent.css";
import FAQ from "../FAQ/FAQ";
import Arrow from '../../assets/Arrow.png';  
import cardsWithArrow from "../../assets/cardsWithArrow.png";
import cardsWithArrowResponsive from "../../assets/cardsWithArrow-responsive.png";
import ExplainerComponent from "../ExplainerComponent/ExplainerComponent";

export default function MainComponent({ openCalendly }) {
  const [currentImage, setCurrentImage] = useState(cardsWithArrow);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCurrentImage(cardsWithArrowResponsive);
      } else {
        setCurrentImage(cardsWithArrow);
      }
    } ;

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
                Schluss mit wiederholten E-Mails – keine Zeit mehr verschwenden.
              </h1>
              <ul>
                <li>Wiederkehrende Fragen eliminieren: Automatische Antworten auf häufige Anfragen.</li>
                <li>Buchungen automatisieren: Anfragen direkt mit CRM-Integration bearbeiten.</li>
                <li>Gästezufriedenheit erhöhen: Schnelle und präzise Antworten.</li>
                <li>Zeit sparen: Fokus auf die wichtigen Aufgaben Ihres Campingplatzes.</li>
              </ul>
              <button onClick={handleClick} className="call-to-action">Jetzt Termin vereinbaren!</button>
            </div>
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/IiB02GFi1FU"
                id = "video"
                allowFullScreen
                title="YouTube video"
              ></iframe>
            </div>
            <button
                onClick={handleClick}
                className="small-screen-call-to-action"
              >
                Jetzt Termin vereinbaren!
              </button>
          </div>
        </div>
      </div>
      <div className="margin-center">
       <ExplainerComponent></ExplainerComponent> 
      </div>
      <div className="margin-center">
        <FAQ></FAQ>
      </div>
    </div>
  );
}
