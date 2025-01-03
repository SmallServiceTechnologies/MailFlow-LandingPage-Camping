import React from "react";
import "../css/mail.css"

export default function Mail({id, picture, from, to, subject, text}) {
    return (
        <div id={id} className="mail-container">
            <div className="container">
                <img src={picture} className="mail-user-picture" alt="Icon"></img>
                <p>
                    <strong className="mail-from gradient-text">{from}</strong>
                    <br></br><strong className="mail-subject">{subject}</strong>
                    <br></br>An: {to}
                </p>
            </div>
            <hr></hr>
            <p>{text}</p>
        </div>
    )
}