
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import './index.css';
import Navbar from 'react-bootstrap/Navbar';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      // Validation passed
      console.log('Email:', email, 'Password:', password);
      // Your login/authentication logic here
    }        
    setValidated(true);
  };
  return (
    <section className='student'>
    <Container className="mt-5" >
      <Container className='backgroundImageClass'>
      <Row className="justify-content-center">
        <Col md={4}>
          <h2 className="text-center mb-4">Student Login</h2>
              <Form noValidate validated={validated} onSubmit={handleLogin}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
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
                  <Form.Control.Feedback type="invalid">
                    Please provide a password.
                  </Form.Control.Feedback>
                </Form.Group>
                <br>
                </br>
                <Nav.Link as={Link} to="/letterformats"  className='nav-link'> <Button variant="success" type="submit" block> Login</Button></Nav.Link>
                {/* <Button variant="success" type="submit" block>
                  Login
                </Button> */}
                
                <p className="mt-3 text-center">
                  Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
                <p className="mt-3 text-center">
                  Are you a staff? <Link to="/stafflogin">Staff Login</Link>
                </p>
              </Form>
        </Col>
      </Row>
      </Container>
    </Container>
    </section>
  );
};

export default LoginPage;






























// import React, { useState } from 'react';
// import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; 
// import Nav from 'react-bootstrap/Nav';
// const StyledLoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log('Email:', email, 'Password:', password);
//     // Authentication logic here
//   };
//   return (
//     <Container className="mt-5">
//       <Row className="justify-content-center">
//         <Col md={6}>
//           <Card>
//             <Card.Body>
//               <h2 className="text-center mb-4">Student Login</h2>
//               <Form onSubmit={handleLogin}>
//                 <Form.Group controlId="formBasicEmail">
//                   <Form.Label>Email address</Form.Label>
//                   <Form.Control
//                     type="email"
//                     placeholder="Enter email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group controlId="formBasicPassword">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                 </Form.Group>
//                 <nav>
//                   <br>
//                   </br>
//                   <Nav.Link as={Link} to="/letterformats"  className='nav-link'> <Button variant="success" type="submit" block>   Login</Button></Nav.Link>
                  
//                   <br>
//                   </br>
//                   <p>Don't have an account? <Card.Link href="/signup">Signup</Card.Link></p>
//                   <p>Are you a staff? <Card.Link href="/stafflogin">Staff Login</Card.Link></p>
//                 </nav> 
               
//               </Form>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };
// export default StyledLoginPage;

