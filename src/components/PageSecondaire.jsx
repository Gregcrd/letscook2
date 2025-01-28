import React from "react";

function PageSecondaire() {
  return (
    <div className="container-2">
      {/* Colonne gauche */}
      <div className="left-column-2">
        <div className="title-2">
          <h3>
            Bienvenue dans votre espace de cuisine : ajoutez, explorez, devenez
            une star des fourneaux !
          </h3>
        </div>
        <form>
          <label htmlFor="recipeName">Nom de la recette</label>
          <input
            type="text"
            id="recipeName"
            placeholder="Ramen..."
            className="input-field"
          />

          <label htmlFor="category">Catégorie de la recette</label>
          <input
            type="text"
            id="category"
            placeholder="Salée..."
            className="input-field"
          />

          <label htmlFor="difficulty">Difficulté (1 à 5)</label>
          <input
            type="number"
            id="difficulty"
            placeholder="1 à 5 étoiles"
            className="input-field"
            min="1"
            max="5"
          />

          <label htmlFor="description">Description de votre recette</label>
          <textarea
            id="description"
            placeholder="Méthode de préparation..."
            className="textarea-field"
          ></textarea>

          <div className="form-buttons">
            <button type="button" className="cancel-button">
              Annuler
            </button>
            <button type="submit" className="submit-button">
              Ajouter
            </button>
          </div>
        </form>
      </div>

     
      <div className="right-column-2">
        <img
          src="/Capture d'écran 2025-01-24 092438.png" 
          alt="Ramen"
          className="right-image"
        />
      </div>
    </div>
  );
}

export default PageSecondaire;
