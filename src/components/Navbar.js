import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./css/navbar/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Menu = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <div className="menu slide-left">
      <form
        className="navbar__div-search"
        onSubmit={(e) => {
          e.preventDefault();
          navigate(`/search/${search}`, { replace: true });
          setSearch();
        }}
      >
        <input
          type="search"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </form>
      <Link to="/" className="link">
        <h4>Most Popular Movies</h4>
      </Link>
      <Link to="/most-popular-tv-shows" className="link">
        <h4>Most popular TV Shows</h4>
      </Link>
      <Link to="/top-250-movies" className="link">
        <h4>Top 250 Movies</h4>
      </Link>
      <Link to="/top-250-tv-shows" className="link">
        <h4>Top 250 TV Shows</h4>
      </Link>
    </div>
  );
};

const Navbar = () => {
  const [button, toggle] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navbar__div">
        <div className="navbar__div__logo">
          <button
            onClick={() => {
              toggle(!button);
            }}
          >
            {button ? <FaTimes /> : <FaBars />}
          </button>
          <h1>Movies App</h1>
        </div>
        <form
          className="navbar__div-search"
          onSubmit={(e) => {
            e.preventDefault();
            navigate(`/search/${search}`, { replace: true });
            setSearch();
          }}
        >
          <input
            type="search"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </form>
      </div>
      {button && <Menu />}
    </div>
  );
};

export default Navbar;
