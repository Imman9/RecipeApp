import React, { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import RecipeItem from "../components/RecipeItem";

const Home = () => {
  const { loading, recipeList } = useContext(RecipeContext);

  if (loading)
    return (
      <div className="loading-container">
        <p className="loading-text">Loading...Please wasit</p>
      </div>
    );

  return (
    <div className="home">
      {recipeList && recipeList.length > 0 ? (
        <div className="recipe-list">
          {recipeList.map((item, index) => (
            <RecipeItem key={index} item={item} />
          ))}
        </div>
      ) : (
        <div className="empty-message">
          <p>Nothing to show. Please search something.</p>
        </div>
      )}
    </div>
  );
};

export default Home;
