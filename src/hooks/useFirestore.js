import { useState, useEffect } from "react";
import { db } from "../firebase/firebase-config";
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";

const useFirestore = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    title: "",
    image: null,
    description: "",
    ingredients: [],
    steps: [],
    timestamp: serverTimestamp(),
  });

  const recipesCollectionRef = collection(db, "recipes");
  const q = query(recipesCollectionRef, orderBy("timestamp", "desc"));

  useEffect(
    () =>
      onSnapshot(q, (snapshot) => {
        setRecipes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setIsLoading(false);
      }),

    []
  );

  //function adds new recipe to database
  const addNewRecipe = async () => {
    const payload = newRecipe;
    await addDoc(recipesCollectionRef, payload);
  };

  //function edits a recipe in database
  const editRecipe = async (id) => {
    const docRef = doc(db, "recipes", id);
    const payload = newRecipe;

    updateDoc(docRef, payload);
  };

  //function deletes a recipe from database
  const deleteRecipe = async (id) => {
    const docRef = doc(db, "recipes", id);
    await deleteDoc(docRef);
  };

  return {
    recipes,
    newRecipe,
    setNewRecipe,
    addNewRecipe,
    editRecipe,
    deleteRecipe,
    isLoading,
  };
};

export default useFirestore;
