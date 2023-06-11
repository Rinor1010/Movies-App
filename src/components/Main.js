import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import MovieList from "./MovieList";
import "./css/main/main.css";
import { url } from "../codes.js";

const Main = () => {
  const [items, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const dataFunction = async () => {
    try {
      await axios.get(url).then((response) => {
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
        <h1>Most Popular Movies</h1>
        <div className="movies">
          {loading ? (
            items.map((movie) => {
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
      </div>
    </div>
  );
};

export default Main;
