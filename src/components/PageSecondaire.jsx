import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PageSecondaire.css";

function PageSecondaire() {
  const [nom, setNom] = useState("");
  const [categorie, setCategorie] = useState("");
  const [difficulte, setDifficulte] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault(); // Empêcher le rechargement de la page

    const nouvelleRecette = {
      id: Date.now(), // Générer un ID unique
      title: nom,
      category: categorie,
      difficulty: parseInt(difficulte, 10),
      description: description,
      imageUrl: "/default.jpg", // Image par défaut si l'utilisateur ne met pas d'image
    };

    // Récupérer les recettes existantes depuis localStorage
    const recettesExistantes = JSON.parse(localStorage.getItem("recettes")) || [];

    // Ajouter la nouvelle recette
    const recettesMiseAJour = [...recettesExistantes, nouvelleRecette];

    // Sauvegarder dans localStorage
    localStorage.setItem("recettes", JSON.stringify(recettesMiseAJour));

    // Rediriger vers la page des recettes
    navigate("/recettes");
  }

  return (
    <div className="container-2">
      <div className="left-column-2">
        <div className="title-2">
          <h3>Ajoutez une nouvelle recette</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Nom de la recette</label>
          <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} required />

          <label>Catégorie de la recette</label>
          <input type="text" value={categorie} onChange={(e) => setCategorie(e.target.value)} required />

          <label>Difficulté (1 à 5)</label>
          <input type="number" value={difficulte} onChange={(e) => setDifficulte(e.target.value)} min="1" max="5" required />

          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

          <div className="form-buttons">
            <button type="submit" className="submit-button">Ajouter</button>
          </div>
        </form>
      </div>

      <div className="right-column-2">
        <img src="/Capture d'écran 2025-01-24 092438.png" alt="Ramen" className="right-image" />
      </div>
    </div>
  );
}

export default PageSecondaire;
