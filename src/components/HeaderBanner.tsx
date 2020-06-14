import React from 'react';
import '../sass/header-banner.scss';
import { Container, Row, Col, Image, Modal, Button, ResponsiveEmbed } from 'react-bootstrap/';
import ScrollAnimation from 'react-animate-on-scroll';
const ChefEdu = require('../images/DSC_7111.jpg');

function HeaderBanner() {
  const [modalShow, setModalShow] = React.useState(false);
  
  return (
    <>
      <Container fluid className='header-banner-container'>
        <Container className='banner-inner-container'>
          <Row className='header-banner-title d-flex align-items-end'>
            <Col md={12}>
              <ScrollAnimation animateIn='fadeInUp' duration={1}>
                <h1 className='main-title'>OPPLEV SUSHI SOM DU ALDRI<br/>HAR HATT FØR</h1>
              </ScrollAnimation>
              <ScrollAnimation animateIn='fadeInUp' delay={200} duration={1}>
                <h2 className='sub-title'>MIDT I HJERTE AV OSLO</h2>
              </ScrollAnimation>
              <ScrollAnimation animateIn='fadeInUp' delay={400} duration={2}>
                <Button size='lg' onClick={() => setModalShow(true)}>BESTILL BORD</Button>
              </ScrollAnimation>
            </Col>
          </Row>
          <Row className='header-banner-body'>
            <Col md={8} className='header-banner-image'>
              <Image src={ChefEdu} alt='Chef Edward' />
            </Col>
            <Col md={4} className='header-banner-text'>
              <div className='lead d-flex align-items-center'>
                <ScrollAnimation animateIn='fadeInUp' duration={2}>
                  <p>Itamae Sushi Bar tilbyr først og fremst høykvalitets sushi hvor forskjellige stilarter innenfor presentasjon og smak blir servert av Chef Edu. Alt dette laget av de beste råvarer som vil garantere enhver kunde en minnerik og smaksrik sushi opplevelse!</p>
                </ScrollAnimation>
              </div>
            </Col>
            <Col md={12} className='d-flex justify-content-center'>
              <hr />
            </Col>
          </Row>
        </Container>
      </Container>

      <Modal size="lg" centered show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5>BESTILL BORD</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ResponsiveEmbed>
            <embed src="https://my.xxltable.com/sabistoro/onlineBooking" />
          </ResponsiveEmbed>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default HeaderBanner;