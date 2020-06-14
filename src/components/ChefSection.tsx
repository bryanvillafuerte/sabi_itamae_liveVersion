import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap/';
import '../sass/chef-section.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import ChefEdu from '../images/chef-edu.png';

function ChefSection() {
  return (
    <>
      <Container className='chef-section-container' id='sushiMesteren'>
        <Row>
          <Col md={7}>
            <ScrollAnimation animateIn='fadeInUp' duration={1}>
              <div className='chef-title'>
                <h1>EN PERFEKT KOMBINASJON AV LIDENSKAP, KUNNSKAP, OG SERVICE</h1>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
              <div className='lead chef-text'>
                <p>
                  Edward Kiocho, ofte kalt som Edu, startet opp hos Alex Sushi for flere år tilbake. Gjennom god opplæring blant annet av selveste Alex Cabiao, mannen som var med å starte og bygge opp Alex Sushi i sin tid har hjulpet Edu masse til å utvikle seg.
                </p>
              </div>
            </ScrollAnimation>
          </Col>
          <Col md={5}></Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className='chef-image-container'>
              <div className='d-flex justify-content-center'>
                <Image src={ChefEdu} />
              </div>
              <div className='chef-name'>
                <ScrollAnimation animateIn='fadeInDown' animateOut='fadeOutUp' duration={2}>
                  <h3>EDWARD<br/>KIOCHO</h3>
                </ScrollAnimation>
                <div className='divider'>
                  <hr />
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className='lead chef-text2'>
              <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
                <p>Her har Edu også fått muligheten til å jobbe med Chef Mark Jayson Subia hvor han tilegnet seg ytterligere erfaring om håndtering av gode råvarer som resulterte i sushi på høyt nivå. Etter perioden hos Alex Sushi gikk ferden videre til Jonathan Romano hvor han fikk æren av å jobbe tett sammen med World Cup Sushi mester Vladimir Pak under oppstarten til Kamai Itamae Bar i 2018.</p>
              </ScrollAnimation>
              <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
                <p>Det var først her Itamae-stilen ble startet i Oslo. Senere overtok han ene ansvaret etter at Vladimir Pak flyttet til Omakase på Vika. Etter en vellykket periode med gode anmeldelser fra de store avisene ble ideen om å starte opp Sabi Sushi på Storo iverksatt og tilslutt gjort til live. Han ser frem til å videreføre kunnskapen og erfaringen hans sammen med Michelin-stjerne Roger Joya og Sabi Sushis CEO Eva Idsøe til å bygge opp videre dette hos Sabi Sushi Storo.</p>
              </ScrollAnimation>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ChefSection;