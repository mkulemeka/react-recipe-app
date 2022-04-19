import React from "react";
import { Badge, Container } from "react-bootstrap";
import { BsClockHistory } from "react-icons/bs";
import { useParams } from "react-router-dom";
import useRecipeFetch from "../../Hooks/useRecipeFetch";
import { Spinner } from "../../components";
import "./RecipePage.scss";

const RecipePage = () => {
  const { id } = useParams();
  const url = `https://tasty.p.rapidapi.com/recipes/get-more-info?id=${id}`;
  const { data: recipe, isLoading } = useRecipeFetch(url);
  const {
    name,
    thumbnail_url,
    instructions,
    credits,
    description,
    prep_time_minutes,
    cook_time_minutes,
    num_servings,
    topics,
    tags,
  } = recipe;

  console.log(recipe);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="RecipePage">
          <Container>
            <div className="recipe__container">
              <div className="recipe__m-details">
                <div className="recipe__img">
                  <img src={thumbnail_url} alt={name} />
                </div>
                <div className="recipe__demographics">
                  <h1>{name}</h1>
                  <small className="py-1">
                    {" "}
                    By:{" "}
                    {credits.map(({ name }) => (
                      <small>{name}</small>
                    ))}
                  </small>
                  <p className="recipe__description">{description}</p>
                  <div className="recipe__cook-info d-flex justify-content-between">
                    <span className="info-item">
                      <BsClockHistory />
                      <span>Prep: </span> {prep_time_minutes}min
                    </span>
                    <spa className="info-item">
                      <span>Cook: </span> {cook_time_minutes}min
                    </spa>
                    <span className="info-item">
                      <span>Servings: </span> {num_servings}
                    </span>
                  </div>
                  <div className='recipe__tags d-flex justify-content-between'>
                    {tags.map(({display_name}, index) => (<Badge key={index} className='mx-1'>{display_name}</Badge>))}
                  </div>
                </div>
              </div>
              <div className="recipe__info">
                <h2>Instructions</h2>
                <ol className="recipe-instructions">
                  {instructions.map(({ display_text }, index) => (
                    <li key={index}>{display_text}</li>
                  ))}
                </ol>
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default RecipePage;
