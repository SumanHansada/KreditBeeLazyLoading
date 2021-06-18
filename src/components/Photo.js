import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazy-load';
import { Card } from 'react-bootstrap';

function Photo(props) {
  const { albumId } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/photos?albumId=' + albumId, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((response) => {
        setPhotos(response);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [albumId]);

  return (
    <div className="horizontal-scroll-div">
      {isLoading && <p>Loading Photos</p>}
      {photos.length > 0 &&
        photos.map((photo, index) => (
          <LazyLoad
            key={index}
            offsetHorizontal={50}
            throttle={500}
            debounce={true}
          >
            <Card className="card-container">
              <Card.Body>
                <LazyLoad offsetHorizontal={50} throttle={500} debounce={true}>
                  <Card.Img
                    alt={photo.title}
                    variant="top"
                    src={photo.thumbnailUrl}
                  />
                </LazyLoad>
                <Card.Text className="wrap-text">
                  {photo.title}
                  <br />
                  id: {photo.id}
                </Card.Text>
              </Card.Body>
            </Card>
          </LazyLoad>
        ))}
    </div>
  );
}

export default Photo;
