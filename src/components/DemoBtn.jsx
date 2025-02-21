import React, { useState } from 'react';
import "../css/demoBtn.css"
import ModalEmail from './ModalEmail'  
export default function DemoBtn() {
    const [showModal, setShowModal] = useState(false)
    return (
        <div>
            <div className='demo-container'>
                <button className="demo-btn" onClick={() => setShowModal(true)}>
                    <span className="gradient-text"> Probier MailFlow aus!</span>
                </button>
                {showModal && <ModalEmail onClose={() => setShowModal((false))}/>}
            </div>
        </div>
    );
}