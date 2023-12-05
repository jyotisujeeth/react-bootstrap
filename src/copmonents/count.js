import React from 'react';
import { Button, Card, Col, Row, Container } from "react-bootstrap";
let Counter = () => {
    return (
      <>
        <Container>
          <Row>
            <Col xs={4}>
              <Card className="shadow-lg">
                <Card.Body>
                  <p className="display-3 ">Counter</p>
                  <Button variant="success">++</Button>
                  <Button variant="warning">--</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
};

export default Counter;