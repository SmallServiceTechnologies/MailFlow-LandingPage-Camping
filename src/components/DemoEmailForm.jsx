import React from "react";

export default function DemoEmailForm({ emailOptions, handleSelection }) {
    return (
        <div>
            <select onChange={handleSelection}>
                <option value="" disabled selected>Vorlage wählen</option>
                {emailOptions.map((email, index) => (
                    <option key={index} value={email.subject}>{email.subject}</option>
                ))}
            </select>
        </div>
    );
}
