import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Home, Login, PersonalRecipes, RecipePage } from "./Pages";
import useToken from "./Hooks/useToken";
import "./App.scss";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  //const {isAuth, setIsAuth} = useToken();
  // if (!isAuth) {
  //   return <Login setIsAuth={setIsAuth} />;
  // }

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/login" element={<Login setIsAuth={setIsAuth} />} /> */}
          <Route path="/personalrecipes" element={<PersonalRecipes />} />
          <Route path="/:id" element={<RecipePage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
