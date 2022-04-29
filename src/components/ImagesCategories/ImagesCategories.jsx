import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { sagaActions } from "../../redux/sagaActions";
import { useDispatch } from "react-redux";

function ImagesCategories() {
  const dispatch = useDispatch();
  return (
    <Container fluid="xl">
      <Row>
        <Col>
          <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
              <Nav.Link
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch({ type: sagaActions.FETCH_IMAGES_SAGA });
                }}
              >
                Все
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch({ type: sagaActions.FETCH_IMAGES_LANDSCAPE_SAGA });
                }}
              >
                Пейзаж
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch({ type: sagaActions.FETCH_IMAGES_PORTRAIT_SAGA });
                }}
              >
                Портрет
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch({ type: sagaActions.FETCH_IMAGES_CARS_SAGA });
                }}
              >
                Автомобили
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch({ type: sagaActions.FETCH_IMAGES_SNAKES_SAGA });
                }}
              >
                Змеи
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
}

export default ImagesCategories;
