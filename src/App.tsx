import React from 'react';
import './sass/app.scss';
import { Container } from 'react-bootstrap/';
import CookieConsent from "react-cookie-consent";
import MainNavbar from './components/MainNavbar';
import HeaderBanner from './components/HeaderBanner';
import AboutSection from './components/AboutSection';
import ChefSection from './components/ChefSection';
import About2Section from './components/About2Section';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <Container fluid className="app-container">
      <MainNavbar />
      <HeaderBanner />
      <AboutSection />
      <ChefSection />
      <About2Section />
      <ContactSection />
      <FooterSection />
      <CookieConsent style={{ background: "rgba(26, 26, 26,.9)", color: "#F2F2F2", justifyContent: "center", textAlign: "center", fontSize: "12px" }}
                     buttonStyle={{ background: "#1A1A1A", color: "#BF9969", padding: ".2rem 2rem", border: "solid 1px #BF9969", fontWeight: "bold", fontSize: "12px" }}
                     buttonText='Jeg forstår'
      >
        Dette nettstedet bruker informasjonskapsler for å forbedre brukeropplevelsen.
      </CookieConsent>
    </Container>
  );
}

export default App;
