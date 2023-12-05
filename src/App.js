import React from 'react';
import Button from "react-bootstrap/Button";
 import './App.css';
import Alert from "react-bootstrap/Alert";
let App =() => {
   return (
     <>
       <h2> my react component</h2>
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
     </>
   );
}

export default App;









