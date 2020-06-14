import React from 'react';
import { Row } from 'react-bootstrap/';
import '../sass/footer-container.scss';

function FooterSection() {
  return (
    <>
      <Row className='footer-container d-flex justify-content-center'>
        <p className='small'>Powered by <span>DEVSHAFT MEDIA</span></p>
      </Row>
    </>
  );
}

export default FooterSection;