import React from 'react';
import { Row } from 'react-bootstrap/';
import '../sass/footer-container.scss';

function FooterSection() {
  return (
    <>
      <Row className='footer-container d-flex justify-content-center'>
        <p className='small'>Powered by <span><a href="https://www.devshaft.media/" target="_blank" rel="noopener noreferrer">DEVSHAFT MEDIA</a></span></p>
      </Row>
    </>
  );
}

export default FooterSection;
