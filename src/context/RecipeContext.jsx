import { createContext, useState } from "react";

export const RecipeContext = createContext(null);

export const RecipeProvider = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState([]);

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );

      const data = await response.json();

      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      setSearchParam("");
    }
  }
  console.log(loading, recipeList);

  function handleAddToFavorites(getCurrentItem) {
    console.log(getCurrentItem);
    let cpyFavoritesList = [...favoritesList];
    const index = cpyFavoritesList.findIndex(
      (item) => item.id === getCurrentItem.id
    );

    if (index === -1) {
      cpyFavoritesList.push(getCurrentItem);
    } else {
      cpyFavoritesList.splice(index);
    }
    setFavoritesList(cpyFavoritesList);
  }
  console.log(favoritesList, "favoritelist");

  return (
    <RecipeContext.Provider
      value={{
        loading,
        recipeList,
        searchParam,
        setSearchParam,
        recipeDetailsData,
        setRecipeDetailsData,
        handleSubmit,
        handleAddToFavorites,
        favoritesList,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
