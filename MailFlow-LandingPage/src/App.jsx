import React from "react";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import MainComponent from "./components/MainContent/MainComponent";
import { PopupWidget } from 'react-calendly'


export default function App() {
  const openCalendly = () => {
    window.Calendly.initPopupWidget({ url: 'https://calendly.com/flow-suite-info/30min' });
    return false;
  };

  return (
    <div>
      <HeaderComponent openCalendly={openCalendly}/>
      <MainComponent openCalendly={openCalendly} /> 
    </div>
  );
}
