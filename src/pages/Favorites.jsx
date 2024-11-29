import React, { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import RecipeItem from "../components/RecipeItem";

const Favorites = () => {
  const { favoritesList } = useContext(RecipeContext);

  return (
    <div className="home">
      {favoritesList && favoritesList.length > 0 ? (
        <div className="recipe-list">
          {favoritesList.map((item, index) => (
            <RecipeItem key={index} item={item} />
          ))}
        </div>
      ) : (
        <div className="empty-message">
          <p>Nothing is added to favorites</p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
