import React from "react";
import { Link } from "react-router-dom";
import { AiOutlinePieChart } from "react-icons/ai";
import "./RecipeCard.scss";

const RecipeCard = ({ recipe }) => {
  const { name, thumbnail_url, id, num_servings } = recipe;
  return (
    <>
      <Link to={`/${id}`}>
        <div className="app__card">
          <div className="card-img">
            <img src={thumbnail_url} alt={name} />
          </div>
          <div className="recipe_info d-flex justify-content-evenly flex-column">
            <p>{name}</p>
            <span>
              <AiOutlinePieChart />
              {num_servings}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default RecipeCard;
