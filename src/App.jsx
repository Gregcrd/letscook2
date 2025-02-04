import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import PagePrincipal from "./components/PagePrincipal";
import RecipeLibrary from "./components/RecipeLibrary";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PageSecondaire from "./components/PageSecondaire";
import recettesData from "./data/Recettes.json"; 
import RecipeDetail from "./components/RecipeDetail";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recettes, setRecettes] = useState(recettesData);


  function ajouterRecette(nouvelleRecette) {
    setRecettes([...recettes, nouvelleRecette]); 
  }

  return (
    <Router>
      <ScrollToTop />
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Routes>
        <Route path="/" element={<PagePrincipal />} />
        <Route path="/add-recipe" element={<PageSecondaire ajouterRecette={ajouterRecette} />} />
        <Route path="/recettes/:id" element={<RecipeDetail />} />
        
      </Routes>

      <RecipeLibrary searchTerm={searchTerm} recettes={recettes} /> 

      <Footer />
    </Router>
  );
}

export default App;
 