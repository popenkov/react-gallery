//core
import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

//users
import { sagaActions } from "../../redux/sagaActions";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import styles from "./ImageInfo.module.scss";

function ImageInfo() {
  const { id } = useParams();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({
      type: sagaActions.FETCH_IMAGE_SAGA,
      args: id,
    });
  }, [id]);

  const image = useSelector((state) => state.images.image);
  return (
    <div>
      <div>
        <Header />
      </div>
      <Container fluid="xl">
        <Row>
          <Col>
            <div>
              {Object.keys(image).length > 0 ? (
                <>
                  <h1>Image details</h1>
                  <img
                    src={image.urls.regular}
                    alt={image.description ? image.description : null}
                    className={styles.mainImg}
                  />
                  <div>
                    <p>{image.description ? image.description : null}</p>
                    <ul>{image.description ? image.description : null}</ul>
                    <p>
                      {image.tags_preview.length > 0 ? (
                        <p>
                          Likes:
                          {image.tags_preview.map((tag) => {
                            return (
                              <li key={`${tag}_${tag.title}`}>{tag.title}</li>
                            );
                          })}
                        </p>
                      ) : null}
                    </p>
                    <p>
                      Link on unsplash:
                      {image.links.html ? (
                        <a
                          href={image.links.html}
                          target="_blank"
                          rel="noreferrer"
                        >
                          link
                        </a>
                      ) : null}
                    </p>

                    <div>
                      <h2>Related images:</h2>
                      <div className={styles.relatedContainer}>
                        {image.related_collections.results.length > 0
                          ? image.related_collections.results.map((img) => {
                              return (
                                <img
                                  src={img.cover_photo.urls.small}
                                  alt={img.title ? img.title : "title"}
                                  key={img.id}
                                  className={styles.relatedImg}
                                />
                              );
                            })
                          : "no related collections"}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <p>Loading</p>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ImageInfo;
