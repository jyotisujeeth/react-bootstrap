import React from "react";
import Button from "react-bootstrap/Button";
import "./App.css";
import Badge from "react-bootstrap/Badge";

import Accordion from "react-bootstrap/Accordion";
import Counter from "./copmonents/count";
import Register from "./copmonents/Register";

import { container, Navbar } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
let App = () => {
  return (
    <>
      <Navbar bg="success" expand="sm" variant="dark">
        <container>
          <Navbar.Brand href="/">React Bootstrap</Navbar.Brand>
        </container>
      </Navbar>
      {/* <Counter /> */}
      <Register/>
    </>
  );
};

export default App;
