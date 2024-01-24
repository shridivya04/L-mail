import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import './index.css';                  
function Example() {  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Container className="text-align-start">
      <p>Choose the letter formats!!!!!!</p>
      <Button variant="primary" onClick={handleShow}>
      Get formats
      </Button>
      </Container>
      <Offcanvas show={show} onHide={handleClose}>  
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Letter Formats</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body > 
        <p className="text-align-end" >
                <Link to="/leaveletter">Leave Letter</Link>
                <br>
                </br>
                <br>
                </br>
                <Link to="/odletter">OD Letter</Link>
                <br>
                </br>
                <br>
                </br>
                <Link to="/apologyletter">Apology Letter</Link>
                <br>
                </br>
                <br>
                </br>
                <Link to="/permissionletter">Permission Letter </Link>
                <br>
                </br>
                <br>
                </br>
                <Link to="/requestletter">Request Letter </Link>
                </p>
        </Offcanvas.Body>
        <div className='justify-content-center'>
        <Nav.Link as={Link} to="/studentlogin"  className='nav-link'> <Button variant="success" type="submit" block>Back</Button></Nav.Link>
        </div>
      </Offcanvas>
    </>
  );
}
export default Example;