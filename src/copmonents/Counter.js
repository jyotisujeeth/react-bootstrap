import React, { useState } from "react";
import { Button, Card, Col, Row, Container } from "react-bootstrap";

export let Counter = () => {
  let [state, setState] = useState(0);

  let incr = () => {
    setState(value, {
      count: state.count + 1,
    });
  };

  let decr = () => {
    setState(value, {
      count: state.count - 1,
    });
  };
  return (
    <>
      <Container ClassName="mt-3">
        <Row>
          <Col xs={4}>
            <Card className="shadow-lg">
              <Card.Body>
                <p className="display-2 ">Counter{state.count}</p>
                <Button onClick={incr} variant="success" className="m-1">
                  ++
                </Button>
                <Button onClick={decr} variant="warning" className="m-1">
                  --
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
