import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './index.css';
const ContactDetails = () => {
  return (
    <section className='contact'>
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          {/* <h2 className="text-center mb-6">Contact Us</h2> */}
          <br>
          </br>
              <Row>
                <Col md={6}>
                  <h5>Address</h5>
                  <p>Karpagam College Of Engineering</p>
                  <p>Othakkalmandapam post,Myleripalayam</p>
                  <p>Pincode-641032</p>
                </Col>
                </Row>
                <br>
                      </br>
                      <br>
                      </br>
                    <Row>
                <Col md={6}>
                  <h5>Contact</h5>
                  <p>Phone: +91 - 422 02619005</p>
                  <p>Email: info@kce.ac.in</p>
                </Col>
              </Row>
              <Row>
              </Row>
        </Col>
      </Row>
    </Container>
    </section>
  );
};
export default ContactDetails;
