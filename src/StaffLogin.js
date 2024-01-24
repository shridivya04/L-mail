// import React, { useState } from 'react';
// import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; 
// import Nav from 'react-bootstrap/Nav';
// import './index.css';
// const StyledLoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log('Email:', email, 'Password:', password);
//     // Authentication logic here
//   };
//   return (
//     <section className='staff'>
//     <Container className="mt">
//       <Row className="justify-content-center">
//         <Col md={6}>
//           <Card>
//             <Card.Body>
//               <h2 className="text-center mb-4">Staff Login</h2>
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
//                   <Nav.Link as={Link} to="/staffinbox"  className='nav-link'> <Button variant="success" type="submit" block> Login</Button></Nav.Link>
                  
//                 </nav> 
//               </Form>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//     </section>
//   );
// };
// export default StyledLoginPage;




import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import './index.css';
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
          
            
              <h2 className="text-center mb-4">Staff Login</h2>
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
                <Nav.Link as={Link} to="/staffinbox"  className='nav-link'> <Button variant="success" type="submit" block> Login</Button></Nav.Link>
              </Form>
        </Col>
      </Row>
      </Container>
    </Container>
    </section>
  );
};
export default LoginPage;






