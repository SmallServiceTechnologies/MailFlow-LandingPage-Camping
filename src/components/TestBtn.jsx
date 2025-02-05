import React, { useState } from 'react';
import "../css/testBtn.css"
import ModalEmail from './ModalEmail'  
export default function TestBtn() {
    const [showModal, setShowModal] = useState(false)
    return (
        <div>
            <div className='test-container'>
                <button className="test-btn" onClick={() => setShowModal(true)}>
                    <span className="gradient-text"> Probier MailFlow aus!</span>
                </button>
                {showModal && <ModalEmail onClose={() => setShowModal((false))}/>}
            </div>
        </div>
    );
}