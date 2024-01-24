import React from 'react'
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import './index.css';
import Figure from 'react-bootstrap/Figure';
function Home() {
  return (
    <div className='home'>
      <Row className='justify-content-center'>
<Col md={9}>
    <h1>L-MAIL</h1>
    <br>
    </br>
<p>Create a professional letters in minutes. </p>
<p>Choose from L-mail letter templates.</p>
<p>Get editable,fillable document templates with customizable heading greeting,body of the letter.</p>
</Col>
</Row>
 <Figure.Image
        width={300}
        height={300}
        src="https://images.pexels.com/photos/4544716/pexels-photo-4544716.jpeg?cs=srgb&dl=pexels-leeloo-the-first-4544716.jpg&fm=jpg&_gl=1*i9bdx2*_ga*NDc1OTg0MjE0LjE3MDQ3MDQ3OTk.*_ga_8JE65Q40S6*MTcwNjAwMjEyMy4zLjEuMTcwNjAwMjI2MS4wLjAuMA.."
          />
</div>
  )
}

export default Home