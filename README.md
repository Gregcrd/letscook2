# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Let's Cook V2.0

##  Description du projet
Lets'Cook v2 est une application web de partage de recettes de cuisine ayant pour objectif d'ajouter modifier et supprimer des recettes selon les envies.


L'application permet :  
    afficher une liste de recettes sous forme de grille 
    rechercher une recette en fonction d’un mot-clé 
    accéder aux détails d’une recette et consulter ses ingrédients 🍲 
    ajouter une nouvelle recette avec un formulaire   
    modifier une recette existante   
    supprimer une recette 

##  **Technologies utilisées**
-   **ReactJS** 
-   **React Router** 
-   **CSS**
-   **JSON** 
-   **Pixso** 
-   **GitHub** 

## 🎨 **Maquettes & Prototypes**

Les maquettes ont été réalisées avec **Pixso** et prennent en compte les résolutions suivantes :  
 **Mobile** (360x800)  
 **Desktop** (1728x1117)  affichage macbook 16 de pixso
lien pour la maquette https://pixso.net/app/editor/QsthxSsTGdItt5JT8W4MFA?file_type=10&icon_type=1&page-id=0%3A1&item-id=12%3A43 

##  **Fonctionnalités**


###  **Page d'accueil**
Affichage d'une grille de 4 recettes par ligne 
Barre de recherche pour filtrer les recettes  

###  **Détail d'une recette**
 Affichage de l’image de la recette  
 Liste des ingrédients et instructions 
 Affichage du niveau de difficulté en étoiles  

###  **Ajout de recette**
 Formulaire permettant d’ajouter une nouvelle recette  
 Stockage en localStorage pour la persistance des données  

###  **Modification de recette**
 Modification des informations d’une recette via la page de détails  

###  **Suppression de recette**
 Suppression d’une recette en un clic  


📂 src
 ┣ 📂 components       # Contient les composants réutilisables
 ┃ ┣ 📄 Header.jsx     # Barre de navigation
 ┃ ┣ 📄 Footer.jsx     # Pied de page
 ┃ ┣ 📄 RecipeCard.jsx # Affichage des recettes sous forme de cartes
 ┃ ┣ 📄 SearchBar.jsx  # Barre de recherche
 ┃ ┣ 📄 ScrollToTop.jsx # Gestion du scroll
 ┣ 📂 pages           
 ┃ ┣ 📄 Home.jsx       # Page principale avec la grille des recettes
 ┃ ┣ 📄 RecipeDetail.jsx # Page détail d’une recette
 ┃ ┣ 📄 AddRecipe.jsx  # Formulaire d’ajout de recette
 ┣ 📂 data           
 ┃ ┣ 📄 Recettes.json  # Fichier contenant les recettes de base
 ┣ 📂 styles
 ┃ ┣ 📄 App.css        # Styles généraux
 ┃ ┣ 📄 RecipeCard.css # Styles des cartes
 ┃ ┣ 📄 RecipeDetail.css # Styles de la page détail
 ┗ 📄 App.jsx          # Fichier principal

Schiltz Grégoire 
