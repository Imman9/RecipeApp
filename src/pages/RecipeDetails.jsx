import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RecipeContext } from "../context/RecipeContext";

const RecipeDetails = () => {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    handleAddToFavorites,
    favoritesList,
  } = useContext(RecipeContext);

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();

      if (data?.data) {
        setRecipeDetailsData(data?.data);
      }
    }
    getRecipeDetails();
  }, []);

  return (
    <div className="details-container">
      <div>
        <img src={recipeDetailsData?.recipe?.image_url} />
      </div>

      <div>
        <span>{recipeDetailsData?.recipe?.title}</span>
        <div>
          <button
            onClick={() => handleAddToFavorites(recipeDetailsData?.recipe)}
          >
            {favoritesList &&
            favoritesList.length > 0 &&
            favoritesList.findIndex(
              (item) => item.id === recipeDetailsData?.recipe.id
            ) != -1
              ? "Remove from favorites"
              : "Add to favorites"}
          </button>
        </div>

        <div>
          <span>Ingredients</span>
          <ul>
            {recipeDetailsData?.recipe?.ingredients.map((ingredient) => (
              <li>
                <span>
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span>{ingredient.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
