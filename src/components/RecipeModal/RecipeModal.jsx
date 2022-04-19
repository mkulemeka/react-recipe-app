import { FieldValue } from "firebase/firestore";
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const RecipeModal = ({ newRecipe, setNewRecipe, addNewRecipe }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //!Functions handles adding indivual ingredient to array of ingredients
  const handleIngredient = (e, index) => {
    const ingredientArray = [...newRecipe.ingredients];
    ingredientArray[index] = e.target.value;

    setNewRecipe({
      ...newRecipe,
      ingredients: ingredientArray,
    });
  };

  //!Function adds a new ingredient input inside form
  const handleIngredientCount = () => {
    setNewRecipe({
      ...newRecipe,
      ingredients: [...newRecipe.ingredients, ""],
    });
  };

  //!Function handles adding individual steps to array
  const handleStep = (e, index) => {
    const stepsArray = [...newRecipe.steps];
    stepsArray[index] = e.target.value;

    setNewRecipe({
      ...newRecipe,
      steps: stepsArray,
    });
  };

  //!Function adds a new step input inside form
  const handleStepCount = () => {
    setNewRecipe({
      ...newRecipe,
      steps: [...newRecipe.steps, ""],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addNewRecipe();
    handleClose();
    setNewRecipe({
      title: "",
      description: "",
      ingredients: [],
      steps: [],
      timestamp: FieldValue,
    });
  };

  return (
    <>
      <Button variant="success" className="mt-5" onClick={handleShow}>
        Add New Recipe
      </Button>
      <Modal
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            New Recipe
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="my-3">
              <Form.Label>Recipe Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                required
                onChange={(e) =>
                  setNewRecipe({ ...newRecipe, title: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                value={newRecipe.description}
                required
                onChange={(e) =>
                  setNewRecipe({ ...newRecipe, description: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="my-3">
              {newRecipe.ingredients.map((ingredient, index) => (
                <Form.Control
                  key={index}
                  type="text"
                  value={ingredient}
                  placeholder="Ingredient"
                  required
                  onChange={(e) => handleIngredient(e, index)}
                  className="mt-2"
                />
              ))}
              <Button className="my-2" onClick={handleIngredientCount}>
                Add Ingredient
              </Button>
            </Form.Group>
            <Form.Group className="my-3">
              {newRecipe.steps.map((step, index) => (
                <Form.Control
                  key={index}
                  type="text"
                  value={step}
                  placeholder="Step"
                  required
                  onChange={(e) => handleStep(e, index)}
                  className="mt-2"
                />
              ))}
              <Button className="my-2" onClick={handleStepCount}>
                Add Step
              </Button>
            </Form.Group>
            <Modal.Footer>
              <Button type="submit">Submit Recipe</Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RecipeModal;
