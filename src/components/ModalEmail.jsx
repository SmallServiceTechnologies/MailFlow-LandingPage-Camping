import React, { useRef, useState } from "react";
import Accordion from "./Accordion.jsx";
import "../css/modalEmail.css";

export default function ModalEmail({ onClose }) {
  const modalRef = useRef();
  const [selectedId, setSelectedId] = useState(null);
  const [emailData, setEmailData] = useState({ subject: "", body: "" });
  const [agbsAccepted, setAgbsAccepted] = useState(false); 
  const [error, setError] = useState(""); 

  const emailOptions = [
    {
      id: "verfügbarkeitsanfrage",
      title: "Verfügbarkeitsanfrage",
      content: "Das ist eine Verfügbarkeitsanfrage",
    },
    {
      id: "buchungsanfrage",
      title: "Buchungsanfrage",
      content: "Das ist eine Buchungsanfrage",
    },
    { 
        id: "bewerbung", 
        title: "Bewerbung", 
        content: "Das ist eine Bewerbung" 
    },
  ];

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const openEmailClient = () => {
    setError(""); // Fehler zuerst zurücksetzen

    if (!emailData.subject || !emailData.body) {
        setError("Bitte wähle eine E-Mail-Option aus.");
        return;
    }
    if (!agbsAccepted) {
        setError("Bitte akzeptiere die AGBs, um fortzufahren.");
        return; 
    }
    const email = "demo@flow-suite.de";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      emailData.subject
    )}&body=${encodeURIComponent(emailData.body)}`;
};


  const handleSelection = (id, title, content) => {
    setSelectedId(id);
    setEmailData({ subject: title, body: content });
  };

  return (
    <div ref={modalRef} onClick={closeModal} className="modal-container">
      <div className="modal-content">
        <button className="exit-button" onClick={onClose}>
          x
        </button>
        <h1>Moritz ist gay</h1>
        <p>Choose your favorite email: </p>
        <div className="email-options">
          {emailOptions.map(({ id, title, content }) => (
            <div className="email-option" key={id}>
              <input
                type="radio"
                name="option"
                id={id}
                checked={selectedId === id}
                onChange={() => handleSelection(id, title, content)}
              />
              <Accordion title={title} content={content} htmlFor={id} />
            </div>
          ))}
        </div>
        <div className="agbs-checkbox">
          <input
            type="checkbox"
            id="acceptAgbs"
            checked={agbsAccepted}
            onChange={() => setAgbsAccepted(!agbsAccepted)}
          />
          <label htmlFor="acceptAgbs" c>
            Ich akzeptiere die <a href="/agbs" className="agb-font">AGBs</a>.
          </label>
        </div>
        {error && <div className="error-message">{error}</div>} 
        <button onClick={openEmailClient}>
          Get test email (Btw Moritz is gay)
        </button>
      </div>
    </div>
  );
}
