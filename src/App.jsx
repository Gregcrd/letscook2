import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PagePrincipal from "./components/PagePrincipal";
import RecipeLibrary from "./components/RecipeLibrary";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import PageSecondaire from "./components/PageSecondaire.jsx";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<PagePrincipal/>} />
          
         

          <Route path="/add-recipe" element={<PageSecondaire/>}/>
        </Routes>

        <RecipeLibrary />
        <Footer />
      </Router>
    </>
  );
}
export default App;


