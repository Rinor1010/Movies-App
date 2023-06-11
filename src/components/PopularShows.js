import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import MovieList from "./MovieList";
import "./css/main/main.css";
import { url1 } from "../codes.js";

const PopularShows = () => {
  const [items, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const dataFunction = async () => {
    try {
      await axios.get(url1).then((response) => {
        console.log(response.data.items);
        setData(response.data.items);
      });
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    dataFunction();
  }, []);

  return (
    <div className="main">
      <Navbar />
      <div className="main__div">
        <h1>Most Popular TV Shows</h1>
        <div className="movies">
          {loading ? (
            items.map((movie) => {
              return (
                <MovieList
                  id={movie.id}
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
      </div>
    </div>
  );
};

export default PopularShows;
