<Form className='justify-content-center          '>
<Row className="mb-3">
  <Form.Group as={Col} controlId="formGridEmail">
    <Form.Label align>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group as={Col} controlId="formGridPassword">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="name" />
  </Form.Group>
</Row>
<Row className="mb-3">
<Form.Group as={Col} controlId="formGridPassword">
    <Form.Label>Register Number</Form.Label>
    <Form.Control type="name" placeholder='reg no' />
  </Form.Group>
  <Form.Group as={Col} controlId="formGridEmail">
    <Form.Label>Department</Form.Label>
    <Form.Select defaultValue="Choose...">
      <option>  </option>
      <option>AI & DS</option>
      <option>CSD</option>
      <option>CSE</option>
      <option>CST</option>
      <option>CY</option>
      <option>ECE</option>
      <option>EEE</option>
      <option>ETE</option>
      <option>IT</option>
    </Form.Select>
  </Form.Group>
</Row>
<Form.Group className="mb-6" controlId="formGridAddress1">
  <Form.Label>Reason for leave</Form.Label>
  <Form.Control placeholder="" />
</Form.Group>
<Row className="mb-3">
  <Form.Group as={Col} controlId="formGridState">
    <Form.Label>Leave already taken</Form.Label>
    <Form.Select defaultValue="Choose...">
      <option>None</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
    </Form.Select>
  </Form.Group>
  <Form.Group as={Col} controlId="formGridState">
    <Form.Label>No of days leave required</Form.Label>
    <Form.Select defaultValue="Choose...">
      <option> </option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
    </Form.Select>
  </Form.Group>
</Row>
<Button variant="primary" type="submit">
  Submit 
</Button>
</Form>