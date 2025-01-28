import recettes from "../data/Recettes.json"; // Import des données JSON
import "./RecipeLibrary.css"; // Import des styles CSS

function Cards() {
  function genererEtoiles(difficulte) {
    const etoiles = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= difficulte) {
        etoiles.push(<span key={i} style={{ color: "#e45f5f", fontSize: "1.5rem" }}>★</span>); // Étoile pleine
      } else {
        etoiles.push(<span key={i} style={{ color: "#d3d3d3", fontSize: "1.5rem" }}>☆</span>); // Étoile vide
      }
    }
    return etoiles;
  }
  return (
    <main>
      <div className="title">
      <h1>料 理をしましょう</h1>
      </div>
      <section className="Card-container">
        {recettes.map((recipe) => (
          <div key={recipe.id} className="Card-item">
            {/* Image de la recette */}
            <img
              className="Card-img"
              src={recipe.imageUrl} // Lien de l'image
              alt={recipe.image} // Texte alternatif
            />

            {/* Titre de la recette */}
            <h2 className="Card-title">{recipe.title}</h2>

            {/* Difficulté */}
            <p className="Card-difficulty">Difficulté : {genererEtoiles(recipe.difficulty)}</p>

            {/* Description */}
            <p className="Card-description">{recipe.description}</p>

            {/* Bouton */}
            <button className="Card-button">En savoir plus</button>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Cards;
