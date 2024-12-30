import React from "react";
import "../css/mail.css"

export default function Mail({to, subject, text}) {
    return (
        <div className="mail-contianer">
            <div className="circle"></div>
            <strong>{to}</strong>
            <p>{subject}</p>
            <hr></hr>
            <p>{text}</p>
        </div>
    )
}