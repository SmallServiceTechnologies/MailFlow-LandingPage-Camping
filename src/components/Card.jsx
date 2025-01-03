import React from 'react';
import "../css/card.css"

export default function Card({ image, heading, body }) {
    return (
        <div className="card">
            {image && (
                <img className="card-img" src={image} alt="Icon" />
            )}
            {heading && (
                <div className="card-heading gradient-text">
                    <h4>{heading}</h4>
                </div>
            )}
            {body && (
                <p className="card-body">
                    {body}
                </p>
            )}
        </div>
    )
}
