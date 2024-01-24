import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';
const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Registration Number:', registrationNumber);
    // Your signup logic here
  };
  return (
    <section className='student'>
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
              <h2 className="text-center mb-4">Signup</h2>
              <Form onSubmit={handleSignup}>
              <Form.Group controlId="formBasicRegistrationNumber">
                  <Form.Label>Registration Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Registration Number"
                    value={registrationNumber}
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </Form.Group>         
<br>
</br>
                <Button variant="success" type="submit" block>
                  Sign Up
                </Button>
                <p className="mt-3 text-center">
                  Already have an account? <Link to="/studentlogin">Login</Link>
                </p>
              </Form>
        </Col>
      </Row>
    </Container>
    </section>
  );
};
export default SignupPage;
