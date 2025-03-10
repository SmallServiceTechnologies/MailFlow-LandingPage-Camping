import React, {useState} from "react";
import "../css/contactForm.css";
import "../css/step.css"
import "../css/popup.css"
import FormInput from "./FormInput.jsx";
import Step from "./Step.jsx";
import emailjs from "@emailjs/browser";

export default function ContactForm({ isOpen, onClose }) {
    if (!isOpen) return null;

    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);

    const twoWeeksLater = new Date(tomorrow);
    twoWeeksLater.setDate(tomorrow.getDate() + 13);

    const [contact, setContact] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        campNerd: false,
        phone: "",
        date: "",
        timeOfDay: "",
        note: ""
    });

    const [step, setStep] = useState(1);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContact((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isStepValid = () => {
        if (step === 1) {
            return contact.firstName && contact.lastName && emailRegex.test(contact.email);
        }
        if (step === 2) {
            return contact.company;
        }
        if (step === 3) {
            return true;
        }
        if (step === 4) {
            return true;
        }
        return false;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_2a3hg8q",
            "template_s83hgnj",
            {
                firstName: contact.firstName,
                lastName: contact.lastName,
                email: contact.email,
                company: contact.company,
                campNerd: contact.campNerd ? "Ja" : "Nein",
                phone: contact.phone || "Nicht angegeben",
                date: contact.date || "Nicht angegeben",
                timeOfDay: contact.timeOfDay || "Nicht angegeben",
                note: contact.note || "Keine Nachricht angegeben",
            },
            "Y_yNqlwUVsl7t7L0f"
        )
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                alert("Message sent successfully!");
            })
            .catch((err) => {
                console.error("FAILED...", err);
                alert("Failed to send message. Please try again.");
            });

    }

    return (
        <div className={`overlay ${isOpen ? "active" : ""}`}>
            <form className="contact-form" onSubmit={sendEmail}>
                <button className="close-btn" onClick={onClose}>❌</button>
                <div className="progress-bar">
                    {[1, 2, 3, 4].map((num) => (
                        <div
                            key={num}
                            className={`progress-bar-step ${step >= num ? "active" : ""}`}
                        ></div>
                    ))}
                </div>

                <p className="form-heading gradient-text"><strong>Wir melden uns bei Ihnen!</strong></p>

                <Step isActive={step === 1} id="step-1">
                    <div className="container">
                        <FormInput
                            label="Vorname*"
                            type="text"
                            name="firstName"
                            value={contact.firstName}
                            onChange={handleInputChange}
                            placeholder="Vorname"
                            required={true}
                        />

                        <FormInput
                            label="Nachname*"
                            type="text"
                            name="lastName"
                            value={contact.lastName}
                            onChange={handleInputChange}
                            placeholder="Nachname"
                            required={true}
                        />
                    </div>

                    <FormInput
                        label="E-Mail*"
                        type="email"
                        name="email"
                        value={contact.email}
                        onChange={handleInputChange}
                        placeholder="E-Mail"
                        required={true}
                    />
                </Step>

                <Step isActive={step === 2} id="step-2">
                    <FormInput
                        label="Firma (Name oder Website)*"
                        type="text"
                        name="company"
                        value={contact.company}
                        onChange={handleInputChange}
                        placeholder="Firma"
                        required={true}
                    />

                    <select name="campNerd" value={contact.campNerd} onChange={handleInputChange}>
                        <option value="true">Ja, wir nutzen CampNerd</option>
                        <option value="false">Nein, wir nutzen CampNerd nicht</option>
                    </select>
                </Step>

                <Step isActive={step === 3} id="step-3">
                    <FormInput
                        label="Optional: Telefon"
                        type="tel"
                        name="phone"
                        value={contact.phone}
                        onChange={handleInputChange}
                        placeholder="Telefon"
                        required={false}
                    />

                    <div className="container">
                        <div className="form-input-wrapper">
                            <label>
                                {"Optional: Termin Vorschlag"}
                                <input
                                    name="date"
                                    type="date"
                                    min={tomorrow.toISOString().split("T")[0]}
                                    max={twoWeeksLater.toISOString().split("T")[0]}
                                    value={contact.date}
                                    onChange={handleInputChange}
                                    className="form-input"
                                />
                            </label>
                        </div>

                        <select name="timeOfDay" value={contact.timeOfDay} onChange={handleInputChange}
                                disabled={contact.date === ""}>
                            <option selected disabled value="">Optional: Tageszeit</option>
                            <option value="Vormittags">Vormittags</option>
                            <option value="Nachmittags">Nachmittags</option>
                        </select>
                    </div>
                </Step>

                <Step isActive={step === 4} id="step-4">
                    <FormInput
                        label="Optional: Notiz"
                        type="text"
                        name="note"
                        value={contact.note}
                        onChange={handleInputChange}
                        placeholder="Notiz"
                        required={false}
                    />

                    <label id="privacy-checkbox" className="form-input-wrapper">
                        <input
                            type="checkbox"
                            name="privacy"
                            required
                        />
                        <span>Ich habe die <a href="/datenschutzerklärung">Datenschutzerklärung</a> gelesen und erkläre
                            mich damit einverstanden.</span>
                    </label>
                </Step>

                <div className="form-controls">
                    <button className="step-btn" onClick={() => setStep(step - 1)}
                            disabled={step === 1}>← Zurück
                    </button>
                    {
                        step === 4 && <button type="submit" className="cta-btn">
                            <span className="gradient-text">Senden</span>
                        </button>
                    }
                    {step !== 4 &&
                        <button className="step-btn" onClick={() => setStep(step + 1)}
                                disabled={step === 4 || !isStepValid()}>
                            <span className="gradient-text">Weiter →</span>
                        </button>
                    }
                </div>
            </form>
        </div>
    );
}