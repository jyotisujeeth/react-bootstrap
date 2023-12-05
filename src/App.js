import React from 'react';
import Button from "react-bootstrap/Button";
 import './App.css';
 import Badge from "react-bootstrap/Badge";

 import Accordion from "react-bootstrap/Accordion";
import Alert from "react-bootstrap/Alert";
let App =() => {
   return (
     <>
       <h2> my react component</h2>
         <h1>
        Example heading <Badge bg="secondary">New</Badge>
      </h1>
      <h2>
        Example heading <Badge bg="secondary">New</Badge>
      </h2>
      <h3>
        Example heading <Badge bg="secondary">New</Badge>
      </h3>
      <h4>
        Example heading <Badge bg="secondary">New</Badge>
      </h4>
      <h5>
        Example heading <Badge bg="secondary">New</Badge>
      </h5>
      <h6>
        Example heading <Badge bg="secondary">New</Badge>
      </h6>
       {[
         "primary",
         "secondary",
         "success",
         "danger",
         "warning",
         "info",
         "light",
         "dark",
       ].map((variant) => (
         <Alert key={variant} variant={variant}>
           This is a {variant} alert—check it out!
         </Alert>
       ))}
       <Button variant="primary">Primary</Button>{" "}
       <Button variant="secondary">Secondary</Button>{" "}
       <Button variant="success">Success</Button>{" "}
       <Button variant="warning">Warning</Button>{" "}
       <Button variant="danger">Danger</Button>{" "}
       <Button variant="info">Info</Button>{" "}
       <Button variant="light">Light</Button>{" "}
       <Button variant="dark">Dark</Button>
       <Button variant="link">Link to video</Button>
       <Accordion defaultActiveKey="0">
         <Accordion.Item eventKey="0">
           <Accordion.Header>Accordion Item #1</Accordion.Header>
           <Accordion.Body>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
             aliquip ex ea commodo consequat. Duis aute irure dolor in
             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
             culpa qui officia deserunt mollit anim id est laborum.
           </Accordion.Body>
         </Accordion.Item>
         <Accordion.Item eventKey="1">
           <Accordion.Header>Accordion Item #2</Accordion.Header>
           <Accordion.Body>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
             aliquip ex ea commodo consequat. Duis aute irure dolor in
             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
             culpa qui officia deserunt mollit anim id est laborum.
           </Accordion.Body>
         </Accordion.Item>
       </Accordion>
     </>
   );
}

export default App;









