import React from 'react';

export default function Step({ title, children, isActive }) {
    return (
        <div className={`step ${isActive ? "active" : ""}`}>
            <h5>{title}</h5>
            {children}
        </div>
    );
}
