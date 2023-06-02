import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
import useDataFetch from "../../../Hooks/useDataFetch";

const FeatureCards = () => {
 const [movies, setMovies] = useDataFetch()
  console.log(movies)

  return (
    <div className="container">
      <h2 className="text-white text-center fw-bold mb-5">Our Movie Collection</h2>

      <Row xs={1} lg={3} md={2} className="g-4">
        {movies.map((movie) => (
          <Col key={movie.show.id}>
            <MovieCard movie={movie}></MovieCard>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeatureCards;
