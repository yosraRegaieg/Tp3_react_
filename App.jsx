import React from "react";
import Bienvenue from "./Bienvenue";
import Compteur from "./Compteur";
import Formulaire from "./Formulaire";
import ListeCourses from "./ListeCourses";

function App() {
  return (
    <div>
      <h1>Mon projet React tp3</h1>
      <Bienvenue name="yosra" />
      <Compteur />
      <Formulaire />
      <ListeCourses />
    </div>
  );
}

export default App; 