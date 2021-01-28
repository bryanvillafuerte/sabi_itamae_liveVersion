import React from 'react';
import { Container, Row, Col, Image, Button, Modal, ResponsiveEmbed } from 'react-bootstrap/';
import '../sass/contact-section.scss'
import ScrollAnimation from 'react-animate-on-scroll';
import LogoImage from '../images/sabi-final-dark_1.png';

function ContactSection() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Container>
        <Row className='contact-heading-container'>
          <Col md={12} className='d-flex justify-content-center'>
            <ScrollAnimation animateIn='fadeInUp' duration={1}>
              <div className='logo-image'>
                <Image src={LogoImage} alt='Sabi Itamae Logo' />
              </div>
            </ScrollAnimation>
          </Col>
          <Col md={12}>
            <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
              <p className='lead text-center'>Sabi Itamae-opplevelsen består av en kokkens valgmeny og noen overraskelser. Maten er kombinert med en unik drikke-meny valgt av våre meget kompetente sommeliers. Hvis du foretrekker å bestemme deg for sammenkobling av drikkevarer, har vi en omfattende liste over alkoholiske og ikke-alkoliske drikkevarer å velge mellom.</p>
            </ScrollAnimation>
          </Col>
          <Col md={12} className='text-center'>
            <Button size='lg' onClick={() => setModalShow(true)}>BESTILL BORD</Button>
          </Col>
        </Row>

        <Row className='contact-body-container' id='contactSection'>
          <Col md={6} className='contact-column'>
            <div className='content1'>
              <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                <h4>KONTAKT OSS</h4>
                <div className='divider'>
                  <hr />
                </div>
                <div className='map'>
                  <ResponsiveEmbed aspectRatio='16by9'>
                    <embed src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.1620186237528!2d10.770706216301416!3d59.946046181878906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416f724aa8d629%3A0x890d9fc24f14e275!2sSabi%20Sushi%20Storo!5e0!3m2!1sen!2sno!4v1588767926296!5m2!1sen!2sno' />
                  </ResponsiveEmbed>
                </div>
                <p className='lead'>
                  <i className="fas fa-map-marker-alt"></i> Nycoveien 2, 0485 Oslo
                </p>
                <p className='lead'>
                  <i className="fas fa-envelope-open-text"></i> kathleen@sabi.no
                </p>
                <p className='lead'>
                  <i className="fas fa-phone"></i> +47 90 40 60 70
                </p>
              </ScrollAnimation>
            </div>
          </Col>
          <Col md={6} className='contact-column'>
            <div className='content1'>
              <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                <h4>FØLG OSS PÅ</h4>
                <div className='divider'>
                  <hr />
                </div>
                <div className='d-flex'>
                  <a href='https://www.facebook.com/sabisushistoro/'><i className="fab fa-facebook-f"></i></a>
                  <a href='https://www.instagram.com/sabisushistoro/'><i className="fab fa-instagram"></i></a>
                </div>
              </ScrollAnimation>
            </div>
            <div className='content2'>
              <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                <h4>ÅPNINGSTIDER</h4>
                <div className='divider'>
                  <hr />
                </div>
                <p className='lead'>onsdag-fredag: Kl 17.00 - 23.00</p>
                <p className='lead'>lørdag: Kl 17.00 - 23.00</p>
                <p className='lead'>søndag: Kl 17.00 - 23.00</p>
              </ScrollAnimation>
            </div>
          </Col>
        </Row>
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

export default ContactSection;