import React from "react";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import MainComponent from "./components/MainContent/MainComponent";
import ExplainerComponent from "./components/ExplainerComponent/ExplainerComponent";
import FAQ from "./components/FAQ/FAQ";
import { PopupWidget } from 'react-calendly'
import Footer from "./components/Footer/Footer.jsx";


export default function App() {
  const openCalendly = () => {
    window.Calendly.initPopupWidget({ url: 'https://calendly.com/flow-suite-info/30min' });
    return false;
  };

  return (
    <div>
        <HeaderComponent openCalendly={openCalendly}/>
        <MainComponent openCalendly={openCalendly} />
        <ExplainerComponent />
        <FAQ />
        <Footer></Footer>
    </div>
  );
}
