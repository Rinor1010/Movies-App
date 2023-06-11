import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import { searchUrl } from "../codes";

const Search = () => {
  const [items, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { term } = useParams();
  const navigate = useNavigate();

  const dataFunction = async () => {
    try {
      const data = await axios.get(searchUrl + `${term}`).then((response) => {
        console.log(searchUrl + `${term}`);
        console.log(response.data.results);
        setData(response.data.results);
      });
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    dataFunction();
  }, [term]);

  return (
    <div className="main">
      <Navbar />
      <div className="main__div">
        <h1>Results for: {term}</h1>
        <div className="movies">
          {loading ? (
            items.map((movie) => {
              return (
                <div
                  className="movie fade-in-top"
                  key={movie.id}
                  onClick={() =>
                    navigate(`/movie/${movie.id}`, { replace: true })
                  }
                >
                  <img src={movie.image} alt={movie.title} />
                  <div className="title">
                    <div className="title__info">
                      <h1>{movie.title}</h1>
                      <h3>{movie.year}</h3>
                    </div>
                  </div>
                </div>
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

export default Search;
