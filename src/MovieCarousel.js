import React from "react";
import { Carousel, Container } from "react-bootstrap";
import { useGlobalContext } from "./context";



const MovieCarousel = () => {
  const { movie } = useGlobalContext();


  return (
    <Container className="mt-5">
     
      <Carousel>
        {movie.map((movie) => (
          <Carousel.Item key={movie.imdbID}>
            <img
              className="d-block "
              src={movie.Poster}
              alt={movie.Title}
              style={{ width: "1000px",   // Set desired width
                height: "400px" , // Set desired height
                margin: "0 auto"// Ensure it fits within the size
                  }}
            />
            <Carousel.Caption>
              <h3>{movie.Title} ({movie.Year})</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default MovieCarousel;
