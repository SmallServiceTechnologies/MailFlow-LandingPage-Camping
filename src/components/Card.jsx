import React from 'react';
import "../css/card.css"

export default function Card({ image, heading, body }) {
    return (
        <div className="card">
            {heading && (
                <div className="card-heading">
                    <h4>{heading}</h4>
                </div>
            )}
            {body && (
                <p className="card-body">
                    {body}
                </p>
            )}
            {image && (
                <img className="card-img" src={image} alt="Icon" />
            )}
        </div>
    )
}
