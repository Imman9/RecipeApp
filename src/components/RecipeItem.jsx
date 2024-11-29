import React from "react";
import { Link } from "react-router-dom";

const RecipeItem = ({ item }) => {
  return (
    <div className="recipe-item">
      <img src={item.image_url} alt="recipe item" className="recipe-image" />
      <span>
        <h3 className="recipe-title">{item.title}</h3>
        <Link className="details-link" to={`/recipe/${item.id}`}>
          Recipe Details
        </Link>
      </span>
    </div>
  );
};

export default RecipeItem;
