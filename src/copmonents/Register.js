import React    from 'react';
import { Form , Button, Card, Col, Row, Container } from "react-bootstrap";

let Register =() => {
return (
  <>
    <Container className="mt-3">
      <Row>
        <Col xs={3}>
          <Card className="shadow-lg">
            <Card.Header className="p-3" style={{ backgroundColor: "blue" }}>
              <h4>Register</h4>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>  
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </>
);
};

export default Register;