import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import MovieList from "./MovieList";
import "./css/main/main.css";
import { movieUrl } from "../codes.js";

const Movie = () => {
  const [movie, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hght, setHeight] = useState(false);
  const [similar, setSimilar] = useState(false);
  let { id } = useParams();

  const dataFunction = async () => {
    try {
      await axios.get(movieUrl + `${id}/Trailer,`).then((response) => {
        console.log(movieUrl + `${id}/Trailer,`);
        console.log(response.data);
        setData(response.data);
      });
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    dataFunction();
  }, [id]);

  return (
    <div className="main">
      <Navbar />
      <div
        className="main__movie"
        style={{
          background: `url(${movie.image}) no-repeat fixed center/cover`,
        }}
      ></div>
      <div className="movie__div">
        {loading ? (
          <div className="movie-trailer" key={movie.id}>
            <h1 className=" fade-in-top">{movie.fullTitle}</h1>
            <div className="video fade-in-right">
              <iframe
                title={movie.title}
                src={movie.trailer.linkEmbed + "?autoplay=false"}
                width="640"
                height="360"
                allowfullscreen="true"
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                frameborder="no"
                scrolling="no"
              ></iframe>
            </div>
            <div className="info fade-in-bottom">
              <h3 className="runtime">
                {movie.runtimeStr
                  ? `Runtime: ${movie.runtimeStr}`
                  : `Seasons: ${movie.tvSeriesInfo.seasons.length}`}
              </h3>
              <p className="plot">{movie.plot}</p>
              <h3>Genres: </h3>
              <p className="genres">{movie.genres}</p>
              <h3>Actors:</h3>
              <div
                className="actor-list"
                style={{ height: hght ? "100%" : "110px" }}
              >
                {movie.actorList.map((actor) => (
                  <div className="actor fade-in-top" key={actor.id}>
                    <img src={actor.image} alt={actor.name} />
                    <p>
                      {actor.name} - {actor.asCharacter}
                    </p>
                  </div>
                ))}
              </div>
              <button className="see-more" onClick={() => setHeight(!hght)}>
                {hght ? "See Less" : "See More"}
              </button>
              {similar && (
                <div className="movies">
                  {loading ? (
                    movie.similars.map((movie) => {
                      return (
                        <MovieList
                          id={movie.id}
                          key={movie.id}
                          image={movie.image}
                          title={movie.title}
                          year={movie.year}
                          imDbRating={movie.imDbRating}
                        />
                      );
                    })
                  ) : (
                    <h1>Loading...</h1>
                  )}
                </div>
              )}
              <button className="see-more" onClick={() => setSimilar(!similar)}>
                Similar Movies
              </button>
            </div>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default Movie;
