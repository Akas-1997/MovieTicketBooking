import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Button, Nav, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";
import MovieCarousel from "./MovieCarousel";

const LandingPage = () => {
  const { movie } = useGlobalContext();
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    // Check if the movies data is fetched
    debugger;
    if (movie && movie.length > 0) {
      setLoading(false); // Set loading to false once movies are available
    }
  }, [movie]); 

  return (
    <div>
      {/* Navigation */}
      <Container>
        
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link as={Link} to="/latestmovies">Latest Movies</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/upcomingmovies">Upcoming Movies</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/nearbyevents">Nearby Events</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Button variant="outline-primary">Search</Button>
          </Nav.Item>
        </Nav>

        {/* Movies Image Slider */}
        <MovieCarousel />

        {/* Recommended Movies */}
        <h3 className="mt-5">Recommended Movies</h3>
         <Row className="mt-3">
          {movie.map((movie, index) => (
            <Col key={index} xs={12} sm={6} md={3}>
              <Card>
                <Card.Body>
                  <Card.Title>{movie.Title}</Card.Title>
                  <Button variant="primary">Book</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      
      </Container>
    </div>
  );
};

export default LandingPage;
