import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
import useDataFetch from "../../../Hooks/useDataFetch";

const FeatureCards = () => {
 const [movies, setMovies] = useDataFetch()
  console.log(movies)

  return (
    <div className="container">
      <Row xs={1} md={3} className="g-4">
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
