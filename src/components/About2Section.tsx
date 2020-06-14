import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap/';
import '../sass/about2-section.scss'
import ScrollAnimation from 'react-animate-on-scroll';
import SectionImage1 from '../images/DSC_6906.jpg';
import SectionImage2 from '../images/IMG_093811.jpg';

function About2Section() {
  return (
    <Row>
      <Container className='about2-section-container'>
        <Row>
          <Col md={7}>
            <div className='about2-title-container'>
              <ScrollAnimation animateIn='fadeInUp' duration={1}>
                <h1>NYT GOD SUSHI I ET VELDIG INTIMT MILJØ</h1>
              </ScrollAnimation>
              <ScrollAnimation animateIn='fadeInUp' duration={1}>
                <h4>OG UPÅKLAGELIG DESIGN</h4>
              </ScrollAnimation>
            </div>
          </Col>
          <Col md={5}></Col>
        </Row>
        <Row>
          <Col md={8}>
            <div className='about2-image-container'>
              <Image src={SectionImage1} alt='Chef Edward explaining about his craft' />
            </div>
          </Col>
          <Col md={4}>
            <div className='about2-text-container'>
              <div className='divider'>
                <hr />
              </div>
              <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
                <p className='lead'>Itamae Sushi Bar tilbyr først og fremst høykvalitets sushi hvor forskjellige stilarter innenfor presentasjon og smak blir servert av Chef Edu. Alt dette laget av de beste råvarer som vil garantere enhver kunde en minnerik og smaksrik sushi opplevelse!</p>
              </ScrollAnimation>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <div className='about2-text2-container'>
              <ScrollAnimation animateIn='fadeInUp' duration={1}>
                <p className='lead'>Ord kan bare gå langt for å beskrive hva du kan forvente på Sabi Itamae. Men å oppleve det fra første hånd er på et helt annet nivå. Reserver plassene dine nå.</p>
              </ScrollAnimation>
            </div>
          </Col>
          <Col md={8}>
            <div className='about2-image2-container d-flex align-items-center'>
              <Image src={SectionImage2} alt='Sushi i en helt annen nivå.' />
            </div>
          </Col>
        </Row>
      </Container>
    </Row>
  );
}

export default About2Section;