import React, { useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import Status from "./Components/Status";

const URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const App = () => {
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleClick = () => {
    if (!searchText) {
      setError("Please Enter Something !");
      return;
    }
    fetchRecipes();
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const fetchRecipes = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(URL + searchText);
      if (!res.ok) throw new Error("Sorry,no available recipes to show !");
      const data = await res.json();
      if (!data.meals) throw new Error("Sorry,no available recipes to show !");
      setRecipes(data.meals);
      setError(null);
      setSearchText("");
    } catch (error) {
      setError(error.message);
      setRecipes(null);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="main">
      <h1>Find Food Recipes</h1>
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          onChange={handleChange}
          placeholder="type recipes..."
        />
        <button onClick={handleClick}>Search</button>
      </div>
      <Status loading={loading} error={error} recipes={recipes} />
      <div className="recipes-container">
        {recipes &&
          recipes.map(({ idMeal, strMeal, strMealThumb }) => (
            <Card key={idMeal} name={strMeal} imgSrc={strMealThumb} />
          ))}
      </div>
    </div>
  );
};

export default App;
