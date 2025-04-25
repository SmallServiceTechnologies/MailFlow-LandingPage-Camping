import React from "react";
import "../css/mail.css"

export default function Mail({id, icon, from, to, subject, text, html = false}) {
    return (
        <div id={id} className="mail-container">
            <div className="container">
                {icon && <img src={icon} className="mail-user-picture" alt="Icon"></img>}
                <p>
                    <strong className="mail-from gradient-text">{from}</strong>
                    <br></br><strong className="mail-subject">{subject}</strong>
                    <br></br>An: {to}
                </p>
            </div>
            <hr></hr>
            {html ? (
                <p dangerouslySetInnerHTML={{ __html: text }}></p>
            ) : (
                <p>{text}</p>
            )}

        </div>
    )
}