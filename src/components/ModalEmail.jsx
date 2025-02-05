import React, { useRef, useState } from "react";
import Accordion from "./Accordion.jsx";
import "../css/modalEmail.css";

export default function ModalEmail({ onClose }) {
  const modalRef = useRef();
  const [selectedId, setSelectedId] = useState(null);
  const [emailData, setEmailData] = useState({ subject: "", body: "" });

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
    if (!emailData.subject || !emailData.body) return;
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
        <button onClick={openEmailClient} disabled={!emailData.subject}>
          Get test email (Btw Moritz is gay)
        </button>
      </div>
    </div>
  );
}
