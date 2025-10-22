import { useState } from "react";

function Formulaire() {
  const [name, setNom] = useState("");

  const handleClick = () => {
    alert(`Bonjour, ${name} !`);
  };

  return (
    <div className="formulaire-container">
      <h2>Entrez votre nom</h2>
      <input
        type="text"
        placeholder="Votre nom"
        value={name}
        onChange={(e) => setNom(e.target.value)}
      />
      <button onClick={handleClick}>Dire Bonjour</button>
    </div>
  );
}

export default Formulaire;
