import React from "react";
import "./RecipeCard.css";

const RecipeCard = ({ recipe, loading, error }) => {
  if (loading) {
    return <div className="loading-message">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">Error: {error.message}</div>;
  }

  return (
    <div className="recipe-card">
      <img className="recipe-image" src={recipe.image} alt={recipe.label} />
      <div className="recipe-details">
        <h2 className="recipe-title">{recipe.label}</h2>
        <p className="recipe-source">Source: {recipe.source}</p>
        <p className="recipe-description">{recipe.description}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
