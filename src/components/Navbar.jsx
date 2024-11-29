import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { RecipeContext } from "../context/RecipeContext";

const NavBar = () => {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(RecipeContext);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>RecipeApp</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="search"
          placeholder="search recipe,ingredients or keywords"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
        ></input>
      </form>
      <ul className="navbar-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
