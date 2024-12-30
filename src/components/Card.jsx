import React from 'react';
import "../css/card.css"

export default function Card({ image, heading, body }) {
    return (
        <div className="card">
            {image && (
                <img className="card-img-top" src={image} alt="Card visual" />
            )}
            {heading && (
                <div className="card-header">
                    <strong>{heading}</strong>
                </div>
            )}
            <div className="card-body">
                {body}
            </div>
        </div>
    )
}
