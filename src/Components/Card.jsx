import React from "react";

const Card = ({ name, imgSrc }) => {
  return (
    <div className="recipe-card">
      <img src={imgSrc} alt={name} />
      <h3>{name}</h3>
      <button>Recipe</button>
    </div>
  );
};

export default Card;
