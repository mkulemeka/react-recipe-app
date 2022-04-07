import React from "react";

const RecipeForm = ({ setFile }) => {
  const handleChange = (e) => {
    setFile();
  };
  return (
    <form className="recipe__form">
      <div className="form-group">
        <input type="file" onChange={handleChange} />
      </div>
      <div className="form-group"></div>
      <div className="form-group"></div>
      <div className="form-group"></div>
    </form>
  );
};

export default RecipeForm;
