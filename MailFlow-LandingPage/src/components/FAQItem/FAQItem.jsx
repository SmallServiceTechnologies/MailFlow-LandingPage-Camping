import React, { useState } from 'react';
import './FAQItem.css';
import arrowRight from '../../assets/arrow-right.png'; 
import arrowDown from '../../assets/arrow-down.png';  

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleAnswer}>
        <img
          src={isOpen ? arrowDown : arrowRight} 
          alt="Arrow"
          className="arrow"
        />
        <p>{question}</p>
      </div>
      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
