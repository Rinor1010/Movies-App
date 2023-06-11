import React from "react";
import { useNavigate } from "react-router-dom";

const MovieList = (props) => {
  const navigate = useNavigate();

  function setColor(rating) {
    if (rating < 6) {
      return "red";
    } else if (rating < 8) {
      return "orange";
    } else {
      return "rgb(50, 255, 47)";
    }
  }

  return (
    <div
      className="movie fade-in-top"
      key={props.id}
      onClick={() => navigate(`/movie/${props.id}`, { replace: true })}
    >
      <img src={props.image} alt={props.title} />
      <div className="title">
        <div className="title__info">
          <h1>{props.title}</h1>
          <h3>{props.year}</h3>
        </div>
        {props.imDbRating && (
          <div
            className="rating"
            style={{
              color: setColor(props.imDbRating),
            }}
          >
            {props.imDbRating}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;
