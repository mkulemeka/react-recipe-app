import React from "react";
import { Container } from "react-bootstrap";
import { RecipeCard } from "../../components";
import useRecipesFetch from "../../Hooks/useRecipesFetch";
import './Home.scss'

const Home = () => {
  const url = "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes";
  const {data: recipes, isLoading} = useRecipesFetch(url);
  return (
    <div className="app__home">
      <Container>
        {!isLoading && (
          <div className="d-flex flex-wrap justify-content-between">
            {recipes.map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Home;
