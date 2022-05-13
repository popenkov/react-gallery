import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <div>
      <Container fluid="xl">
        <Row>
          <Col>
            <Navigation />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
