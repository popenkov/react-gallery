//core
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

//users
import styles from "./About.module.scss";

function About() {
  return (
    <Container fluid="xl">
      <Row>
        <Col>
          <h1>About me</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
