import React, { useState, useEffect } from "react";
import { db } from "./firebase/firebase-config";
import { collection, onSnapshot, addDoc } from "firebase/firestore";
import { Navbar, RecipeForm } from "./components";

const App = () => {
  const [file, setFile] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    title: "",
    image: null,
    description: "",
    ingredients: [],
    steps: [],
  });
  const recipesCollectionRef = collection(db, "recipes");

  useEffect(
    () =>
      onSnapshot(recipesCollectionRef, (snapshot) =>
        setRecipes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  //function adds new recipe to firestore database
  const addNewRecipe = async () => {
    const payload = newRecipe;
    const docRef = await addDoc(recipesCollectionRef, payload);
  };

  return (
    <div>
      <Navbar />
      <RecipeForm setFile={setFile} />
    </div>
  );
};

export default App;
