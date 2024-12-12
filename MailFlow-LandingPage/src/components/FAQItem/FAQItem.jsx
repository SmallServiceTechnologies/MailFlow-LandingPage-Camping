import React, { useState } from 'react';
import './FAQItem.css';
import arrowRight from '../../assets/arrow-right.png'; 
import arrowLeft from '../../assets/arrow-prev-small-svgrepo-com.svg';
import arrowDown from '../../assets/arrow-down-svgrepo-com.svg';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div className="faq-question-answer-div">
        <div className="faq-question" onClick={toggleAnswer}>
          <p>{question}</p>
          <img
              src={isOpen ? arrowDown : arrowLeft}
              alt="Arrow"
              className="arrow"
          />
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
