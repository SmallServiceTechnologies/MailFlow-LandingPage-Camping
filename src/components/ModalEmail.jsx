import React, { useRef } from 'react';
import "../css/modalEmail.css";
export default function ModalEmail({ onClose }) {
    const modalRef = useRef();
    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    };
    const openEmailClient = () => {
        const email = "test@example.com";  
        const subject = "Moritz gay";
        const body = "Moritz gay";
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };
    return (
        <div ref={modalRef} onClick={closeModal} className='modal-container'>
            <div className='modal-content'>
                <button className="exit-button" onClick={onClose}>x</button>
                <h1>Moritz ist gay</h1>
                <p>Choose your favorite email</p>
                <button onClick={openEmailClient}>Get test email</button>
            </div>
        </div>
    );
}