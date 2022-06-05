import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Photo from "./Photo";
import LazyLoad from "react-lazy-load";

function Album() {
  const [isLoading, setIsLoading] = useState(false);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://jsonplaceholder.typicode.com/albums", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        setAlbums(response);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {isLoading && <p>Loading Albums</p>}
      {albums.length > 0 &&
        albums.map((album, index) => (
          <LazyLoad
            key={index}
            offsetVertical={300}
            throttle={500}
            debounce={true}
          >
            <Card>
              <Card.Header>
                <Card.Title>{album.title}</Card.Title>
                <Card.Text>
                  id: {album.id}, userid: {album.userId}
                </Card.Text>
              </Card.Header>
              <LazyLoad throttle={500} debounce={true} offsetHorizontal={50}>
                <Photo albumId={album.id}></Photo>
              </LazyLoad>
            </Card>
          </LazyLoad>
        ))}
    </div>
  );
}

export default Album;
