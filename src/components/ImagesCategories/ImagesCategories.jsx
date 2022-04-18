import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getCertainData } from '../../utils/getData';

function ImagesCategories() {
  return (
    <Container fluid="xl">
      <Row>
        <Col>
          <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
              <Nav.Link>Пейзаж</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                data="portrait"
                onClick={(evt) => {
                  evt.preventDefault();
                  getCertainData('portrait');
                }}
              >
                Портрет
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Автомобили</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Змеи</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
}

export default ImagesCategories;
