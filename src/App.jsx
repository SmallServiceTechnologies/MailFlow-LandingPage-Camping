import React from "react";
import Datenschutz from './pages/Datenschutz.jsx';
import MainPage from './pages/MainPage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
    </Router>
  );
}

export default App;
