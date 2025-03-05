import React, {useState} from 'react';
import "../css/demoEmailSelector.css";

export default function DemoEmailSelector() {
    const [selectedEmail, setSelectedEmail] = useState({ subject: "", body: "", reference: "" });
    const [message, setMessage] = useState("");
    const recipient = "demo@flow-suite.de";

    const emailOptions = [
        { subject: "Buchungsanfrage", body: "Das ist eine Buchungsanfrage.", reference: "https://myostseecamp.de/(S(eqarpkq23ksf2v0pusd0k5cw))/Campingplatz-Buchen.aspx" },
        { subject: "Welche Stellplätze gibt es?", body: "Das ist eine Buchungsanfrage.", reference: "https://www.ostseecamp-ferienpark.de/campingplatz/stellplatz.html" },
        { subject: "Indoor Spielwelt geöffnet? Preis?", body: "...", reference: "https://www.ostseecamp-ferienpark.de/campingplatz-an-der-ostsee/oeffnungszeiten.html"},
        { subject: "Gibt es eine Sauna?", body: "...", reference: "https://www.ostseecamp-ferienpark.de/campingplatz/badehaus.html" },
        { subject: "Camping Urlaub mit Hund?", body: "...", reference: "https://www.ostseecamp-ferienpark.de/campingplatz/hund-co.html" },
        { subject: "Internet und WLAN?", body: "...", reference: "https://www.ostseecamp-ferienpark.de/campingplatz/wlan-auf-dem-campingplatz.html" },
    ];

    const handleSelection = (event) => {
        const selected = emailOptions.find(email => email.subject === event.target.value);
        setSelectedEmail(selected || { subject: "", body: "" });
    };

    const openEmailClient = () => {
        setMessage("");

        if (!selectedEmail.subject || !selectedEmail.body) {
            setMessage("Bitte wähle eine E-Mail-Vorlage aus.");
            return;
        }

        const subject = encodeURIComponent(selectedEmail.subject);
        const body = encodeURIComponent(selectedEmail.body.replace(/\n/g, "%0D%0A"));

        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

        setMessage("Falls sich Ihr E-Mail-Programm nicht geöffnet hat, können Sie eine Webmail-Plattform verwenden:")
    };

    return (
        <div className="email-selector">
            <label htmlFor="email-select">Wählen Sie eine E-Mail-Vorlage:</label>
            <select id="email-select" onChange={handleSelection}>
                <option value="">-- Bitte wählen --</option>
                {emailOptions.map((email, index) => (
                    <option key={index} value={email.subject}>{email.subject}</option>
                ))}
            </select>
            <p>Bezieht sich unter anderem auf: <a href={selectedEmail.reference}>diese Seite</a></p>

            {selectedEmail.subject && (
                <div className="email-preview">
                    <h4>Betreff: {selectedEmail.subject}</h4>
                    <p>{selectedEmail.body}</p>
                </div>
            )}

            {message &&
                <p className="message">
                    {message}
                    <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(selectedEmail.subject)}&body=${encodeURIComponent(selectedEmail.body)}`}
                        target="_blank"
                        rel="noopener noreferrer">
                        Gmail
                    </a>
                    <a
                        href={`https://outlook.live.com/mail/deeplink/compose?to=${recipient}&subject=${encodeURIComponent(selectedEmail.subject)}&body=${encodeURIComponent(selectedEmail.body)}`}
                        target="_blank"
                        rel="noopener noreferrer">
                        Outlook
                    </a>
                    <a
                        href={`https://compose.mail.yahoo.com/?to=${recipient}&subject=${encodeURIComponent(selectedEmail.subject)}&body=${encodeURIComponent(selectedEmail.body)}`}
                        target="_blank"
                        rel="noopener noreferrer">
                        Yahoo Mail
                    </a>
                </p>

            }

            <button onClick={openEmailClient} disabled={selectedEmail.subject === ""}>Vorlage verwenden</button>
        </div>
    );
}