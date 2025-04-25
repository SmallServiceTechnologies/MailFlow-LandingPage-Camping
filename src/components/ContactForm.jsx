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
        campingCare: false,
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

    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        setMessage("⏳ Senden...");

        emailjs.send(
            "service_2a3hg8q",
            "template_s83hgnj",
            {
                firstName: contact.firstName,
                lastName: contact.lastName,
                email: contact.email,
                company: contact.company,
                campNerd: contact.campNerd ? "Ja" : "Nein",
                campingCare: contact.campingCare ? "Ja" : "Nein",
                phone: contact.phone || "Nicht angegeben",
                date: contact.date || "Nicht angegeben",
                timeOfDay: contact.timeOfDay || "Nicht angegeben",
                note: contact.note || "Keine Nachricht angegeben",
            },
            "Y_yNqlwUVsl7t7L0f"
        )
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                setMessage("✅ Vielen Dank. Wir werden uns bald bei Ihnen melden.");
                setTimeout(() => {
                    onClose();
                }, 5000);
            })
            .catch((err) => {
                console.error("FAILED...", err);
                setMessage("❌ Ein Fehler ist aufgetreten, bitte versuchen Sie es erneut.");
            });

    }

    return (
        <div className={`overlay ${isOpen ? "active" : ""}`}>
            <form className="contact-form" onSubmit={sendEmail}>
                <button className="close-btn" onClick={onClose}>✖</button>
                {/*<div className="progress-bar">
                    {[1, 2, 3, 4].map((num) => (
                        <div
                            key={num}
                            className={`progress-bar-step ${step >= num ? "active" : ""}`}
                        ></div>
                    ))}
                </div>*/}

                <h2 className="form-heading"><strong>Schedule a demo</strong></h2>
                <p>Enter your details below and we'll get in touch with you as soon as possible.</p>

                <Step isActive={step === 1} id="step-1">
                    <div className="container">
                        <FormInput
                            type="text"
                            name="firstName"
                            value={contact.firstName}
                            onChange={handleInputChange}
                            placeholder="First Name*" s
                            required={true}
                        />

                        <FormInput
                            type="text"
                            name="lastName"
                            value={contact.lastName}
                            onChange={handleInputChange}
                            placeholder="Last Name*"
                            required={true}
                        />
                    </div>

                    <FormInput
                        type="email"
                        name="email"
                        value={contact.email}
                        onChange={handleInputChange}
                        placeholder="Email*"
                        required={true}
                    />

                    <FormInput
                        type="tel"
                        name="phone"
                        value={contact.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number (Optional)"
                        required={false}
                    />

                    <label id="privacy-checkbox" className="form-input-wrapper">
                        <input
                            type="checkbox"
                            name="privacy"
                            required
                        />
                        <span>I have read the <a href="/datenschutzerklärung">privacy policy</a> and agree to it.</span>
                    </label>
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

                    <select name="campingCare" value={contact.campingCare} onChange={handleInputChange}>
                        <option value="true">Ja, wir nutzen Camping.care</option>
                        <option value="false">Nein, wir nutzen Camping.care nicht</option>
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
                 {/*   <button className="step-btn" onClick={() => setStep(step - 1)}
                            disabled={step === 1}>← Zurück
                    </button>*/}
                    {
                        step === 1 && <button type="submit" className="cta-btn">Schedule a call</button>
                    }
                   {/* {step !== 4 &&
                        <button className="step-btn" onClick={() => setStep(step + 1)}
                                disabled={step === 4 || !isStepValid()}>
                            <span className="gradient-text">Weiter →</span>
                        </button>
                    }*/}
                </div>

                {
                    step === 4 && message && <strong className="message">{message}</strong>
                }
            </form>
        </div>
    );
}