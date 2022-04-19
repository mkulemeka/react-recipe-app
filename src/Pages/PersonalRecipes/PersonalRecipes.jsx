import React from "react";
import useFirestore from "../../Hooks/useFirestore";
import { Container, Card, Button } from "react-bootstrap";
import { RecipeModal, Spinner } from "../../components";

const PersonalRecipes = () => {
  const {
    recipes,
    newRecipe,
    setNewRecipe,
    addNewRecipe,
    isLoading,
    deleteRecipe,
  } = useFirestore();
  
  return (
    <>
      <Container>
        <RecipeModal
          newRecipe={newRecipe}
          setNewRecipe={setNewRecipe}
          addNewRecipe={addNewRecipe}
        />
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="d-flex my-5 gap-5 flex-wrap">
            {recipes.map((recipe, index) => (
              <Card key={index} style={{ maxWidth: "18rem" }}>
                <Card.Body>
                  <Card.Title>{recipe.title}</Card.Title>
                  <Card.Text>{recipe.description}</Card.Text>
                </Card.Body>
                <div className="d-flex justify-content-between p-2">
                  <Button variant="outline-success" size="sm">
                    Edit
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => deleteRecipe(recipe.id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </>
  );
};

export default PersonalRecipes;
