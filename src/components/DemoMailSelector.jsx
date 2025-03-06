import React, { useState } from "react";
import "../css/demo.css";
import Mail from "./Mail.jsx";
import Step from "./Step";
import DemoEmailForm from "./DemoEmailForm";
import MailIcon from "../assets/mail-pencil-svgrepo-com.svg"

export default function DemoMailSelector({ openPopup }) {
    const [selectedEmail, setSelectedEmail] = useState({
        subject: "MailFlow live erleben",
        body: "Schritt 1: Geben Sie dem Absender einen Vor- und Nachnamen.\n\n" +
            "Schritt 2: Wählen Sie eine Vorlage aus.\n\n" +
            "Schritt 3: Senden Sie die Anfrage ab (öffnet Ihr Standard-E-Mail-Programm).\n\n" +
            "Schritt 4 (Optional): Passen Sie die Anfrage nach Ihrem Belieben an.\n\n" +
            "Alternativ können Sie auch eine völlig individuelle Anfrage an demo@flow-suite.de senden.",
        reference: ""
    });
    const [name, setName] = useState("Vorname Nachname");
    let [step, setStep] = useState(1);
    const [popupTimer, setPopupTimer] = useState(null);
    const recipient = "demo@flow-suite.de";

    const emailOptions = [
        {
            "subject": "Spontane Buchungsanfrage",
            "body": "Hallo,\n\nich interessiere mich für einen Stellplatz auf Ihrem Campingplatz am kommenden Wochenende. Wir sind zwei Erwachsene mit einem Wohnwagen. Können Sie mir bitte die Verfügbarkeiten und Preise mitteilen?\n\nVielen Dank!\nMit freundlichen Grüßen\n[NAME]",
            "reference": "https://www.myostseecamp.de/(S(sn0reupg2p0xs52yw2o4u05u))/Belegungsplan.aspx?Von=&Bis=&Art=&submit=Pr%C3%BCfen"
        },
        {
            "subject": "Frage zu Sanitäranlagen",
            "body": "Hallo,\n\nich plane einen Aufenthalt auf Ihrem Campingplatz und wollte fragen, ob Ihre Sanitäranlagen barrierefrei sind und ob es Familienbäder gibt. Gibt es außerdem Föhns oder muss man diesen selbst mitbringen?\n\nDanke für die Infos!\nViele Grüße\n[NAME]",
            "reference": "https://www.ostseecamp-ferienpark.de/campingplatz/sanitaeranlagen.html"
        },
        {
            "subject": "Hunde erlaubt?",
            "body": "Hallo,\n\nwir würden gerne unseren Urlaub auf Ihrem Campingplatz verbringen und unseren Hund mitbringen. Gibt es spezielle Stellplätze für Gäste mit Hund? Gibt es auf dem Campingplatz oder in der Nähe eine Hundewiese oder einen Hundestrand?\n\nVielen Dank für Ihre Antwort!\nBeste Grüße\n[NAME]",
            "reference": "https://www.ostseecamp-ferienpark.de/campingplatz/hund-co.html"
        },
        {
            "subject": "Surf-Möglichkeiten in der Nähe?",
            "body": "Hallo,\n\nich plane einen Aufenthalt auf Ihrem Campingplatz und interessiere mich für Surf-Möglichkeiten in der Umgebung. Gibt es in der Nähe geeignete Spots zum Wellenreiten oder Windsurfen? Bieten Sie eventuell Surfkurse oder Kooperationen mit Surfschulen an?\n\nVielen Dank für Ihre Informationen!\nMit freundlichen Grüßen\n[NAME]",
            "reference": "https://www.ostseecamp-ferienpark.de/freizeit/surfen.html"
        },
        {
            "subject": "Fragen zu Spiel- & Sportangeboten",
            "body": "Hallo,\n\nwir planen einen Aufenthalt auf Ihrem Campingplatz und interessieren uns für die Spiel- und Sportangebote vor Ort. Können Sie uns nähere Informationen zu den Spielplätzen, Minigolf, Tischtennis sowie den Sportplätzen geben? Gibt es bestimmte Öffnungszeiten oder Reservierungsmöglichkeiten für Minigolf oder Volleyball?\n\nZudem würden wir gerne wissen, ob während unseres Aufenthalts eine Kinderanimation angeboten wird.\n\nVielen Dank für Ihre Rückmeldung!\n\nMit freundlichen Grüßen\n[NAME]",
            "reference": "https://www.ostseecamp-ferienpark.de/campingplatz/spiel-spass.html"
        },
        {
            "subject": "Fragen zum Internet",
            "body": "Hallo,\n\nwir planen einen Aufenthalt auf Ihrem Campingplatz und möchten gerne mehr über den WLAN-Zugang erfahren. Ist das WLAN auf allen Stellplätzen verfügbar, und gibt es Einschränkungen bei der Nutzung? \n\nBenötigen wir für den Zugang einen Voucher, und wo erhalten wir diesen? Gibt es eine maximale Nutzungsdauer oder besondere Bedingungen, die wir beachten sollten?\n\nZudem würde uns interessieren, ob das WLAN auch für Streaming geeignet ist oder ob es hier Beschränkungen gibt.\n\nVielen Dank für Ihre Rückmeldung!\n\nMit freundlichen Grüßen\n[NAME]",
            "reference": "https://www.ostseecamp-ferienpark.de/campingplatz/wlan-auf-dem-campingplatz.html"
        },
        {
            "subject": "Fragen zu Ladesäulen",
            "body": "Hallo,\n\nwir planen einen Aufenthalt auf Ihrem Campingplatz und möchten gerne wissen, wie die Nutzung der Ladesäulen für Elektroautos funktioniert. Sind die Ladesäulen jederzeit verfügbar, oder ist eine Reservierung erforderlich?\n\nWelche Ladekarten werden unterstützt, und gibt es Alternativen, falls wir keine Karte eines Roamingverbunds besitzen? Gibt es Einschränkungen bei der Nutzung, z. B. eine maximale Ladezeit?\n\nZudem würden wir gerne wissen, wo genau sich die Ladesäulen auf dem Gelände befinden und ob es besondere Regeln für das Parken während des Ladevorgangs gibt.\n\nVielen Dank für Ihre Informationen!\n\nMit freundlichen Grüßen\n[NAME]",
            "reference": "https://www.ostseecamp-ferienpark.de/campingplatz/ladesaeulen.html"
        }
    ];

    const handleSelection = (event) => {
        const selected = emailOptions.find(email => email.subject === event.target.value);
        selected.body = selected.body.replace("[NAME]", name || "");
        setSelectedEmail(selected || { subject: "", body: "" });
    };

    const openEmailClient = () => {
        const subject = encodeURIComponent(selectedEmail.subject);
        const body = encodeURIComponent(selectedEmail.body.replace(/%0A/g, "%0D%0A"));

        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

        if (popupTimer) {
            clearTimeout(popupTimer);
        }

        const newTimer = setTimeout(() => {
            openPopup();
        }, 30000);

        setPopupTimer(newTimer);
    };

    return (
        <div className="email-selector">
            <div>
                <h3 className="section-heading gradient-text">MailFlow live erleben – jetzt testen!</h3>
                <h4>Senden Sie eine Anfrage an <a href="mailto:demo@flow-suite.de">demo@flow-suite.de</a> und erhalten Sie in unter einer Minute eine Antwort.</h4>
                <p>Alle Anfragen werden so behandelt, als wären sie an den <strong>Campingplatz <a href="https://www.ostseecamp-ferienpark.de/campingplatz-an-der-ostsee.html" target="_blank" rel="noopener noreferrer">Ostseecamp Rostocker Heide</a></strong> gerichtet.<br/><br/>Formulieren Sie Ihre Nachricht bitte entsprechend, als wären Sie
                    ein Kunde des Campingplatzes, oder verwenden Sie eine der folgenden Vorlagen und passen Sie diese
                    nach Bedarf an.
                </p>

                <div className="email-form">
                    <Step title="1. Absender benennen" isActive={step === 1}>
                        <input
                            type="text"
                            placeholder="Name des Absenders"
                            onChange={e => setName(e.target.value)}
                        />
                    </Step>

                    <Step title="2. Vorlage wählen" isActive={step === 2}>
                        <DemoEmailForm
                            emailOptions={emailOptions}
                            handleSelection={handleSelection}
                            selectedEmail={selectedEmail}
                        />
                    </Step>

                    <Step title="3. Absenden & Antwort erhalten" isActive={step === 3}>
                        <button onClick={openEmailClient} disabled={!selectedEmail.subject}>Anfrage absenden</button>
                    </Step>

                    {selectedEmail.reference && <p id="hint">Die gewählte Vorlage bezieht sich auf die Inhalte von <a href={selectedEmail.reference} target="_blank" rel="noopener noreferrer">dieser Seite</a>. Vergleichen Sie die erhaltene Antwort mit den dort angegebenen Informationen.</p>}

                    <div className="form-controls">
                        <button className="step-btn" onClick={() => setStep(step - 1)} disabled={step === 1}>← Zurück</button>
                        <button className="step-btn" onClick={() => name && setStep(step + 1)} disabled={name === "Vorname Nachname" || !name || step === 3}>Weiter →</button>
                    </div>
                </div>
            </div>

            {selectedEmail.subject && (
                <Mail icon={MailIcon} to={"demo@flow-suite.de"} from={name} subject={selectedEmail.subject}
                      text={selectedEmail.body.replace(/\n/g, "<br/>")} html={true}></Mail>
            )}
        </div>
    );
}
