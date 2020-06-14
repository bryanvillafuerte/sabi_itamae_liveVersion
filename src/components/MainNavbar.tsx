import React from 'react';
import '../sass/main-navbar.scss';
import { Navbar, Nav, Image, Button, Modal, ResponsiveEmbed } from 'react-bootstrap/';
import Logo from '../images/sabi-final-dark_1.png';
import { Link } from "react-scroll";

function MainNavbar() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Navbar variant='dark' expand='lg' fixed='top' collapseOnSelect={true}>
        <Navbar.Brand href="/">
          <Image src={Logo} alt='Itamae Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link className="ml-auto" >
              <Link
                activeClass="active"
                to="headerBanner"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {1000}
              >Om Itamae</Link>
            </Nav.Link>
            <Nav.Link href='#contactSection' className="ml-auto">
              <Link
                activeClass="active"
                to="sushiMesteren"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {1000}
              >Sushi Mesteren</Link>
            </Nav.Link>
            <Nav.Link href='#contactSection' className="ml-auto">
              <Link
                activeClass="active"
                to="contactSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {1000}
              >Kontakt Oss</Link>
            </Nav.Link>
            <Nav.Link>
              <Button variant="link" className="nav-link ml-auto" onClick={() => setModalShow(true)}>Bestill Bord <i className="far fa-calendar-alt"></i></Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

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

export default MainNavbar;