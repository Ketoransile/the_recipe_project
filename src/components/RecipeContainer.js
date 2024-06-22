import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import SearchBar from "./SearchBar";
import "./RecipeContainer.css";

function RecipeContainer() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const recipesPerPage = 12;

  const MY_APP_ID = "19d7984c";
  const MY_APP_KEY = "252d99cf8561af79bb53400dfc635b52";

  const fetchRecipes = async (query) => {
    setLoading(true);
    try {
      let queryString = "";
      if (typeof query === "string") {
        queryString = query;
      } else if (Array.isArray(query) && query.length > 0) {
        queryString = query.map((obj) => obj.label).join(",");
      } else {
        throw new Error("Invalid query format");
      }

      const response = await axios.get(
        `https://api.edamam.com/search?q=${queryString}&app_id=${MY_APP_ID}&app_key=${MY_APP_KEY}&from=${startIndex}&to=${
          startIndex + recipesPerPage
        }`
      );
      console.log("Fetched recipes:", response.data.hits);
      setLoading(false);
      setRecipes(response.data.hits);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes("chicken");
  }, [startIndex]);

  const handleSearch = (query) => {
    fetchRecipes(query);
  };

  const handleNextPage = () => {
    setStartIndex(startIndex + recipesPerPage);
  };

  const handlePrevPage = () => {
    setStartIndex(Math.max(startIndex - recipesPerPage, 0));
  };

  if (loading) return <div className="loading-message">Loading...</div>;
  if (error) return <div className="error-message">Error: {error.message}</div>;

  return (
    <div>
      <SearchBar onSearch={handleSearch} />{" "}
      <div className="recipe-container">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe.recipe} />
        ))}
      </div>
      <div className="pagination">
        <button
          className="pagination-btn"
          onClick={handlePrevPage}
          disabled={startIndex === 0}
        >
          Previous
        </button>
        <button className="pagination-btn" onClick={handleNextPage}>
          Next
        </button>
      </div>
    </div>
  );
}

export default RecipeContainer;
