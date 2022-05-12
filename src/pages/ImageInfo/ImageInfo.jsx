import React from "react";
import { sagaActions } from "../../redux/sagaActions";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
function ImageInfo() {
  const { id } = useParams();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({
      type: sagaActions.FETCH_IMAGE_SAGA,
      args: id,
    });
  }, []);

  //{imageId}
  // const image = useSelector((state) => state);
  // console.log(image);
  return (
    <div>
      id картинки {id}
      {/* <img src={image.urls.regular} /> */}
    </div>
  );
}

export default ImageInfo;
