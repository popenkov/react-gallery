import { useState } from "react";
import { Image } from "react-bootstrap";
import styles from "./ImageItem.module.scss";
import { Link, useLocation } from "react-router-dom";

function ImageItem({ item }) {
  const [isHovered, setIsHovered] = useState(false);
  let location = useLocation();
  return (
    <Link to={`/images/${item.id}`}>
      <div className={styles.imgContainer}>
        <Image
          src={item.urls.small}
          thumbnail
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        />
        {isHovered ? (
          <div
            className={styles.hoveredDiv}
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            {item.description ? item.description : "There is no description"}
          </div>
        ) : null}
      </div>
    </Link>
  );
}

export default ImageItem;
