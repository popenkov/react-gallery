import { Container, Row, Col, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getAllData } from "../../utils/getData";
import Loader from "../UI/Loader/Loader";
import ImageItem from "../ImageItem/ImageItem";

function ImagesList() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      getAllData().then((data) => {
        setImages(data.data);
      });
    }, 2000);
  }, []);

  console.log(images);

  return (
    <>
      {images.length > 0 ? (
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
