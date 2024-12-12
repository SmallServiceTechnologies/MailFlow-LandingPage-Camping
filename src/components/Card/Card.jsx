import React from 'react';
import './Card.css';

const Card = ({ title, subject, email, body, note }) => {
  return (
    <div className="card-container">
      {note && <div className="note text-left-align">{note}</div>}  
      
      <div className="card">
        <div className="card-title text-left-align">{title}</div>
        <div className="card-body">
          <p className='text-left-align'>
            <span className="label">To:</span> <span className="dynamic-data email-background">{email}</span>
          </p>
          <div className="divider"></div>
          <p  className='text-left-align' >
            <span className="label">Subject:</span> <span className="dynamic-data">{subject}</span>
          </p>
          <div className="divider"></div>
          <p className="dynamic-data text-left-align">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
