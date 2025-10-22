import React, { useState } from "react";

function ListeCourses() {
  const [articles, setArticles] = useState([]);
  const [nouvelArticle, setNouvelArticle] = useState("");
  const ajouterArticle = () => {
    if (nouvelArticle.trim() !== "") {
      setArticles([...articles, nouvelArticle]);
      setNouvelArticle("");
    }
  };

  return (
    <div>
      <h2>Liste de courses</h2>
      <input
        type="text"
        placeholder="Nouvel article"
        value={nouvelArticle}
        onChange={(e) => setNouvelArticle(e.target.value)}
      />
      <button onClick={ajouterArticle}>Ajouter</button>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>{article}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListeCourses;