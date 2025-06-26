import React, {useContext} from 'react';
import "../css/home.css"
import Card from "../components/Card.jsx";
import CTABtn from "../components/CTABtn.jsx";
import Video from "../components/Video.jsx";
import Nav from "../components/Nav.jsx";
import FAQ from "../components/FAQ.jsx";
import Footer from "../components/Footer.jsx";
import CampNerdLogo from "../assets/CampNerd-Logo.svg";
import BVCDLogo from "../assets/BVCD-Logo.svg";
import UnternehmerTUMLogo from "../assets/UnternehmerTUM-Logo.svg";
import CookieBanner from "../components/CookieBanner.jsx";
import Popup from "../components/Popup.jsx";
import ContactForm from "../components/ContactForm.jsx";
import {AppContext} from "../AppContext.jsx";
import RegistrationGIF from "../assets/Register.gif"
import EmailGenerationGIF from "../assets/email-generation-GIF.gif"
import ReviewSendGIF from "../assets/review-and-send-GIF.gif";
import SavingsEstimator from "../components/SavingsEstimator.jsx";
import gdpr from "../assets/gdpr-compliant.svg";

export default function Home() {
    const { isContactFormOpen, handleCloseContactForm, isPopupOpen, handleOpenPopup, handleClosePopup }  = useContext(AppContext)

    const handleLinkClick = (event) => {
        event.preventDefault();

        const confirmation = window.confirm("Sind Sie sicher, dass Sie die Seite verlassen wollen?");
        if (confirmation) {
            window.open(event.currentTarget.href, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <React.Fragment>
            <CookieBanner></CookieBanner>
            <ContactForm isOpen={isContactFormOpen} onClose={handleCloseContactForm}></ContactForm>
            <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
            <section id="nav" className="no-margin-bottom">
                <Nav></Nav>
            </section>
            <section id="above-the-fold">
                <div className="container">
                    <h1>
                        <span className="gradient-text">Automate customer service and sales emails with AI.</span>
                    </h1>
                    <h2>
                        Save time and improve the performance of your customer service and sales teams.
                        Mailflow connects to your inbox and automatically generates ready-to-send drafts before your first sip of morning coffee.
                        <br/><br/><strong>Dealing with emails has never been easier!</strong>
                    </h2>
                    <div className="btn-container">
                        <img className="gdpr-badge" src={gdpr} alt="Gdpr Compliant"/>
                        <a href="#savings-estimator" className="btn">Estimate your savings now!</a>
                        <a href="mailto:info@mail-flow.com?subject=Question%20about%20mailflow&body=Ask%20something%20about%20mailflow" className="btn" id="demo-btn">Demo</a>
                        <CTABtn></CTABtn>
                    </div>
                </div>
                <Video></Video>
            </section>
            <section id="partners">
                <div className="container">
                    <h3>Unsere Partner und Unterstützer</h3>
                    <a className="partner-company"
                       href="https://www.unternehmertum.de"
                       rel="noopener noreferrer"
                       target="_blank"
                       onClick={handleLinkClick}>
                        <img src={UnternehmerTUMLogo} alt="UnternehmerTUM Logo"></img>
                    </a>
                    <a className="partner-company"
                       href="https://www.campnerd.camp"
                       rel="noopener noreferrer"
                       target="_blank"
                       onClick={handleLinkClick}>
                        <img src={CampNerdLogo} alt="CampNerd Logo"></img>
                    </a>
                    <a className="partner-company"
                       href="https://www.bvcd.de"
                       rel="noopener noreferrer"
                       target="_blank"
                       onClick={handleLinkClick}>
                        <img src={BVCDLogo} alt="Bundesverband der Campingwirtschaft in Deutschland e.V. Logo"></img>
                    </a>
                </div>
            </section>
            <section id="how-it-works">
                <h3 className="section-heading gradient-text">Mailflow replies faster than you - here is how</h3>
                <h4>
                    Mailflow is an AI email assistant that automates repetitive emails, helping customer service and sales teams save time and improve performance.
                </h4>
                <div className="container">
                    <div className="row">
                        <Card image={RegistrationGIF}></Card>
                        <div className="container">
                            <h3 className="gradient-text">1. Creating an account</h3>
                            <p>Get started by having a coffee chat with us and creating an account.</p>
                        </div>
                    </div>
                    <div className="row reversed">
                        <Card
                            image={EmailGenerationGIF}
                        ></Card>
                        <div className="container">
                            <h3 className="gradient-text">2. Email generation</h3>
                            <p>Mailflow automatically begins to drafts replies using both public data (e.g., FAQ, website) and internal company resources (e.g., SAP, CRM).</p>
                        </div>
                    </div>
                    <div className="row">
                        <Card
                            image={ReviewSendGIF}
                        ></Card>
                        <div className="container">
                            <h3 className="gradient-text">3. Review and send</h3>
                            <p>Replies are either sent as auto-responses or saved as drafts for your review, giving you full control before sending.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="savings-estimator">
                <SavingsEstimator></SavingsEstimator>
            </section>
            <section id="how">
                { /* <div className="mail-container-grid Nx8">
                    <Mail
                        id={"mail-customer"}
                        icon={MailUserPicture}
                        from={"kevin@flow-suite.de"}
                        to={"support@example.de"}
                        subject={"Sendungsverfolgung meiner Bestellung"}
                        text={[
                            "Guten Tag,",
                            <br key="1"></br>,
                            <br key="2"></br>,
                            "Ich habe vor Kurzem bei Ihnen eine Buchung aufgegeben und möchte gerne den Sendungsstatus " +
                            "meiner Bestellung überprüfen. Könnten Sie mir bitte die Sendungsverfolgungsnummer mitteilen?",
                            <br key="3"></br>,
                            <br key="4"></br>,
                            "Meine Bestellnummer lautet: B20250101-12345.",
                            <br key="5"></br>,
                            <br key="6"></br>,
                            "Liebe Grüße,",
                            <br key="5"></br>,
                            "Kevin Fischer"
                        ]}
                    ></Mail>
                    <div className="container">
                        <img id="arrow-mail-1" src={ArrowMail1} alt="Geschwungender Pfeil"/>
                        <h4>
                            <span className="gradient-text">MailFlow beantwortet E-Mails automatisch</span>, prüft
                            Verfügbarkeiten, Preise, Bestand, Kundendaten, Buchungsdaten sowie Bestelldaten und vieles
                            mehr, in Ihren Systemen und nutzt zusätzlichen Kontext (z.B. Website), um eine passende
                            Antwort zu erstellen.
                        </h4>
                        <img id="arrow-mail-2" src={ArrowMail2} alt="Geschwungender Pfeil"/>
                    </div>
                    <Mail
                        id={"mail-campground"}
                        picture={HeartIcon}
                        from={"support@example.de"}
                        to={"kevin@flow-suite.de"}
                        subject={"Re: Sendungsverfolgung meiner Bestellung"}
                        text={[
                            "Guten Tag Herr Fischer,",
                            <br key="1"></br>,
                            <br key="2"></br>,
                            "Vielen Dank für Ihre Anfrage. Ihre Bestellung mit der Bestellnummer B20250101-12345 wurde bearbeitet und heute morgen versandt. " +
                            "Hier ist die Sendungsverfolgungsnummer: DE123456789000.",
                            <br key="3"></br>,
                            <br key="4"></br>,
                            "Mit dieser Nummer können Sie den aktuellen Status Ihrer Sendung auf unserer Website oder beim Versanddienstleister überprüfen.",
                            <br key="5"></br>,
                            <br key="6"></br>,
                            "Falls Sie weitere Fragen haben, stehen wir Ihnen gerne zur Verfügung.",
                            <br key="7"></br>,
                            <br key="8"></br>,
                            "Mit freundlichen Grüßen,",
                            <br key="7"></br>,
                            "Flamur Maliqi - Customer Support"
                        ]}
                    ></Mail>
                </div>
                */ }
                <div className="card-container-grid Nx1">
                    <h3 className="section-heading gradient-text">Smart email automation in action</h3>
                    <Card
                        heading={"Integration with your Inbox in a few clicks!"}
                        body={"Mailflow integrates seamlessly with almost any email inbox in just a few clicks - no learning curve or technical knowledge required. We guide you through the few simple steps needed."}
                    />
                    <Card
                        heading={"Automatic request categorization"}
                        body={"Mailflow automatically sorts emails into categories you define, such as returns, customer data, general inquiries, spam/unimportant, or emails requiring manual handling. This creates structure and significantly eases the workload of your team."}
                    />
                    <Card
                        heading={"Intelligent AI-powered response generation"}
                        body={"Mailflow uses information from your website, internal systems, and additional sources to generate a single reply in about 15 seconds - reducing response times and increasing customer satisfaction."}
                    />
                    <Card
                        heading={"Send automatically or review manually"}
                        body={"Mailflow can either send responses automatically or prepare drafts for your team to review. This ensures communication stays under your control while efficiently automating the bulk of routine inquiries."}
                    />
                    <Card
                        heading={"Data changes in your systems"}
                        body={"Mailflow not only uses your system data to craft accurate responses - it can also write back to your systems. For example, customer-provided updates like address changes can be applied automatically through custom workflows."}
                    />
                </div>
            </section>
            {/*<section id="demo">
                <h3 className="section-heading">Try It Yourself</h3>
                <DemoMailSelector openPopup={handleOpenPopup}></DemoMailSelector>
            </section>*/}
            {/*
            <section id="pricing">
                <PricingCalculator></PricingCalculator>
            </section>
            */}
            <section id="FAQ">
                <FAQ></FAQ>
            </section>
            <section className="no-margin-bottom">
                <Footer></Footer>
            </section>
        </React.Fragment>
    )
}