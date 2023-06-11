import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main.js";
import PopularShows from "./components/PopularShows.js";
import TopMovies from "./components/TopMovies.js";
import TopShows from "./components/TopShows.js";
import Movie from "./components/Movie.js";
import Search from "./components/Search.js";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/most-popular-tv-shows" element={<PopularShows />} />
        <Route path="/top-250-movies" element={<TopMovies />} />
        <Route path="/top-250-tv-shows" element={<TopShows />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/search/:term" element={<Search />} />
      </Routes>
    </div>
  );
};

export default App;
