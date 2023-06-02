import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  console.log();
  const { show } = movie;
  const summaryWithoutTags = show.summary.replace(/<\/?(p|b)>/g, "");

  return (
    <Card data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000" className="p-3 bg-light h-100 movieCard">
      <div className="movieImgDiv">
        <Card.Img
          className="movieCardImg rounded"
          variant="top"
          src={show?.image?.original}
        />
      </div>
      <Card.Body>
        <Card.Title>{show.name}</Card.Title>
        <Card.Text>
          {summaryWithoutTags.length > 150
            ? summaryWithoutTags.slice(0, 150) + "..."
            : summaryWithoutTags}
        </Card.Text>
      </Card.Body>
          <Link className="py-2 btn btn-dark  fs-5" to={`/moviedetails/${show.id}`} variant="dark">
            View Details
          </Link>
    </Card>
  );
};

export default MovieCard;
