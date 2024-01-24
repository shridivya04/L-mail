import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';
import StudentLogin from './StudentLogin';
import StaffLogin from './StaffLogin';
import Signup from './Signup';
import {Routes, Route} from "react-router-dom";
import Letterformats from './Letterformats';
import StaffInbox from './StaffInbox';
import Contactus from './Contactus';
import Aboutus from './Aboutus';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Leaveletter from './Leaveletter';
import ODletter from './Leaveletter';
function App() {
  return (
    <section className='hero'>
    <div className='content'>
  <>
    <Navbar  extend="lg" className='align-self-end'>
      <Container>
        <Navbar.Brand as={Link} to="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home" className='nav-link'><b>HOME</b></Nav.Link>
            <Nav.Link as={Link} to="/studentlogin"  className='nav-link'><b>STUDENT LOGIN</b></Nav.Link>
            <Nav.Link as={Link} to="/stafflogin"  className='nav-link'><b> STAFF LOGIN</b></Nav.Link>
            <Nav.Link as={Link} to="/contactus"  className='nav-link'><b>CONTACT</b></Nav.Link>
            <Nav.Link as={Link} to="/aboutus"  className='nav-link'><b> ABOUT</b></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</>
  <div >
    <Routes>
      <Route path="/" element={<Navbar/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/studentlogin" element={<StudentLogin/>}></Route>
      <Route path="/stafflogin" element={<StaffLogin/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route> 
      <Route path="/letterformats" element={<Letterformats/>}></Route>
      <Route path="/staffinbox" element={<StaffInbox/>}></Route>
      <Route path="/contactus" element={<Contactus/>}></Route>
      <Route path="/aboutus" element={<Aboutus/>}></Route>
      <Route path="/leaveletter" element={<Leaveletter/>}></Route>
      <Route path="/odletter" element={<ODletter/>}></Route>
      <Route path="/permissionletter" element={<permissionletter/>}></Route>
 </Routes>
    </div>
    </div>
    </section>
  );
}
export default App;

