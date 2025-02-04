import { useState, useEffect } from "react";
import "./RecipeLibrary.css";
import { Link } from "react-router-dom";
import recettes from "../data/Recettes.json"; 

function RecipeLibrary({ searchTerm }) {
  const [toutesRecettes, setToutesRecettes] = useState([...recettes]);

  
  useEffect(() => {
    const recettesSauvegardees = JSON.parse(localStorage.getItem("recettes")) || [];
    setToutesRecettes([...recettes, ...recettesSauvegardees]);
  }, []);

 
  useEffect(() => {
    const handleStorageChange = () => {
      const recettesSauvegardees = JSON.parse(localStorage.getItem("recettes")) || [];
      setToutesRecettes([...recettes, ...recettesSauvegardees]);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  function supprimerRecette(id) {
    const nouvellesRecettes = toutesRecettes.filter((recipe) => recipe.id !== id);
    setToutesRecettes(nouvellesRecettes);
    const recettesSauvegardees = nouvellesRecettes.filter((recipe) => !recettes.some(r => r.id === recipe.id));
    localStorage.setItem("recettes", JSON.stringify(recettesSauvegardees));

    // ✅ Forcer la mise à jour des recettes sauvegardées
    window.dispatchEvent(new Event("storage"));
  }

  function genererEtoiles(difficulte) {
    const etoiles = [];
    for (let i = 1; i <= 5; i++) {
      etoiles.push(
        <span key={i} style={{ color: i <= difficulte ? "#e45f5f" : "#d3d3d3", fontSize: "1.5rem" }}>
          ★
        </span>
      );
    }
    return etoiles;
  }


  const recettesFiltrees = toutesRecettes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <div className="title">
        <h1>料 理をしましょう</h1>
      </div>

      <section className="Card-container">
        {recettesFiltrees.length > 0 ? (
          recettesFiltrees.map((recipe) => (
            <div key={recipe.id} className="Card-item">
              <img className="Card-img" src={recipe.imageUrl} alt={recipe.title} />
              <h2 className="Card-title">{recipe.title}</h2>
              <p className="Card-difficulty">Difficulté : {genererEtoiles(recipe.difficulty)}</p>
              <p className="Card-description">{recipe.description}</p>
              <div className="Card-buttons">
                <Link to={`/recettes/${recipe.id}`} className="Card-button">
                  En savoir plus
                </Link>
                <button className="delete-button" onClick={() => supprimerRecette(recipe.id)}>Supprimer</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">Aucune recette trouvée.</p>
        )}
      </section>
    </main>
  );
}

export default RecipeLibrary;
