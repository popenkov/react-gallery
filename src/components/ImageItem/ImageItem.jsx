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
          onMouseOver={() => {
            setIsHovered(true);
          }}
          onMouseOut={() => {
            setIsHovered(false);
          }}
        />
        {isHovered ? (
          <div className={styles.hoveredDiv}> {item.id} </div>
        ) : null}
      </div>
    </Link>
  );
}

export default ImageItem;
