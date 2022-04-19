import React from "react";
import { useParams } from "react-router-dom";
function ImageInfo() {
  const { imageId } = useParams();
  console.log(imageId);
  return <div>id картинки{imageId}</div>;
}

export default ImageInfo;
