import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap/';
import '../sass/about-section.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import { Parallax } from 'react-scroll-parallax';
import ImageParallax from '../images/IMG_3584.jpg';
import ImageStatic from '../images/DSC_7127.jpg';
import Sushi from '../images/DSC_6877.jpg';

function AboutSection() {
  return (
    <>
      <Container fluid className='about-section-background' id='headerBanner'>
        <Container className='about-part1'>
          <Row className='about-section-container'>
            <Col md={6}>
              <div className='about-image-parallax'>
                <Parallax  y={[30, -30]}>
                  <Image src={ImageParallax} alt='Opplevelse' />
                </Parallax>
              </div>
            </Col>
            <Col md={6}>
              <ScrollAnimation animateIn='fadeInUp' duration={1}>
                <div className='about-title'>
                  <h1>EN UNIK OPPLEVELSE</h1>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn='fadeInUp' duration={2} animateOnce={true}>
                <div className='about-text'>
                  <p className='lead'>
                    Itamae betyr direkte oversatt fra Japansk; <i>foran brettet</i>, som blir gjerne referert til foran skjærebrettet, herav Itamae Sushi Bar! Tanken bak Itamae baren er å kunne tilby kundene en mer lavskuldret stil med mindre andakt og protokoll enn det man er vant med fra de mer kjente Omakase restaurantene. Her vil man oppleve at kokkene snakker med gjestene og forklarer. Det er dette som er itamae-stilen, der man avslappet kombinerer forskjellige tradisjoner, innfallsvinker og innfall.
                  </p>
                </div>
              </ScrollAnimation>
              <div className='about-image-static shadow-lg'>
                <Image src={ImageStatic} alt='Mer Opplevelse' className='shadow-lg' />
              </div>
            </Col>
          </Row>
        </Container>

        <Container className='about-part2'>
          <Row>
            <Col md={12} className='text-right'>
              <ScrollAnimation animateIn='fadeInUp' duration={1}>
                <div className='about-title'>
                  <h1>EN KLASSISK TRADISJON MØTER DE FERSKESTE INGREDIENSENE</h1>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn='fadeInUp' duration={1}>
                <div className='about-text'>
                  <h4>
                    DEN BESTE OPPLEVELSE DU VIL ALDRI GLEMME
                  </h4>
                </div>
              </ScrollAnimation>
            </Col>
          </Row>
          <Row className='menu-container'>
            <Col md={12} className='menu-inner-container'>
              <div className='menu-image'>
                <Image src={Sushi} alt='Itamae Menu' />
              </div>
              <div className='menu-text'>
                <ScrollAnimation animateIn='fadeInUp' duration={1} animateOnce={true}>
                  <p className='lead'><span>Bare én meny.</span> Sabi Itamae serverer en fast meny basert på norsk sesongfisk og skalldyr. Vi tilbyr både en vinkobling og en alkoholfri juiceparing til dagens meny, spesielt valgt for å imøtekomme måltidet.</p>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeInUp' duration={1} animateOnce={true}>
                  <p className="lead">Dessverre kan ikke sabi itamae-menyen tilpasses for personer som er allergiske mot sjømat</p>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeInUp' duration={1} animateOnce={true}>
                  <p className="lead">En komplett matmeny på Itamae koster <span>kr 1200,-</span> per person. Med tilpasset drikke (med og uten alkohol) <span>kr 1600,-</span> per person.</p>
                </ScrollAnimation>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default AboutSection;