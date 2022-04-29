import { Container, Row, Col, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setImages } from "../../redux/reducers/imageSlice";
import { getAllData } from "../../utils/getData";
import Loader from "../UI/Loader/Loader";
import ImageItem from "../ImageItem/ImageItem";

function ImagesList() {
  const { images } = useSelector((state) => state.images);

  return (
    <>
      {images && images.length > 0 ? (
        <Container fluid="xl">
          <Row xxl="6" xl="4" md="2" xs="1">
            {images.map((item) => {
              return (
                <Col key={item.id}>
                  <ImageItem item={item} />
                </Col>
              );
            })}
          </Row>
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default ImagesList;
