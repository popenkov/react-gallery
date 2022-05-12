import React from 'react';
import { sagaActions } from '../../redux/sagaActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';
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
      <Link to={`/`}>Back to main</Link>
      <div>
        {Object.keys(image).length > 0 ? (
          <>
            <img
              src={image.urls.regular}
              alt={image.description ? image.description : null}
            />
            <div>
              <p>{image.description ? image.description : null}</p>
              <ul>{image.description ? image.description : null}</ul>
              <p>
                Likes:
                {image.tags_preview.length > 0
                  ? image.tags_preview.map((tag) => {
                      return <li key={`${tag}_${tag.title}`}>{tag.title}</li>;
                    })
                  : null}
              </p>
              <p>
                Link on unsplash:{' '}
                {image.links.html ? (
                  <a href={image.links.html} target="_blank" rel="noreferrer">
                    link
                  </a>
                ) : null}
              </p>

              <div>
                Related images{' '}
                {image.related_collections.results.length > 0
                  ? image.related_collections.results.map((img) => {
                      return (
                        <img
                          src={img.cover_photo.urls.small}
                          alt={img.title ? img.title : 'title'}
                        />
                      );
                    })
                  : 'no related collections'}
              </div>
            </div>
          </>
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  );
}

export default ImageInfo;
