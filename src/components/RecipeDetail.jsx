import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import recettes from "../data/Recettes.json"; 
import "./RecipeDetail.css";

function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recette, setRecette] = useState(null);
  const [edition, setEdition] = useState(false);
  const [modifications, setModifications] = useState({});

  useEffect(() => {
    console.log("🔹 ID récupéré depuis l'URL :", id);

    const recettesSauvegardees = JSON.parse(localStorage.getItem("recettes")) || [];
    console.log("🔹 Recettes dans localStorage :", recettesSauvegardees);

    // Rechercher dans localStorage d'abord, sinon prendre le fichier JSON
    const recetteTrouvee =
      recettesSauvegardees.find((r) => r.id === id) || // Vérifie dans localStorage
      recettes.find((r) => r.id === id); // Vérifie dans Recettes.json

    console.log("🔹 Recette trouvée :", recetteTrouvee);

    if (recetteTrouvee) {
      setRecette(recetteTrouvee);
      setModifications(recetteTrouvee);
    }
  }, [id]);

  if (!recette) {
    return <h2>Recette non trouvée</h2>;
  }

  return (
    <div className="recipe-detail-container">
      <img className="recipe-image" src={recette.imageUrl} alt={recette.title} />
      <div className="recipe-content">
        <h1>{recette.title}</h1>
        <p><strong>Difficulté :</strong> {"★".repeat(recette.difficulty)}</p>
        <p><strong>Description :</strong> {recette.description}</p>

        {/* Ajout du formulaire de modification */}
        {edition ? (
          <form onSubmit={(e) => {
            e.preventDefault();
            const recettesSauvegardees = JSON.parse(localStorage.getItem("recettes")) || [];
            const nouvellesRecettes = recettesSauvegardees.map((r) =>
              r.id === recette.id ? modifications : r
            );
            localStorage.setItem("recettes", JSON.stringify(nouvellesRecettes));
            setRecette(modifications);
            setEdition(false);
          }}>
            <label>Titre :</label>
            <input
              type="text"
              value={modifications.title}
              onChange={(e) => setModifications({ ...modifications, title: e.target.value })}
            />

            <label>Description :</label>
            <textarea
              value={modifications.description}
              onChange={(e) => setModifications({ ...modifications, description: e.target.value })}
            />

            <button type="submit">Sauvegarder</button>
          </form>
        ) : (
          <button onClick={() => setEdition(true)}>Modifier</button>
        )}
      </div>
    </div>
  );
}

export default RecipeDetail;
