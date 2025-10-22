import { useState } from "react";
function Bienvenue({ name }) {
  return <h1>Bienvenue, {name} !</h1>;
}

function App() {
  return <Bienvenue name="Yosra" />;
}

export default App;


