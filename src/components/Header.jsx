import "./Header.css"; // Import du fichier CSS pour les styles


function Header() {

  // function (pour gerer la valeur du formulaire)

  return (
    <header className="header">
      
      <div className="left-section">
        <div className="logo">春江</div>
        <nav className="nav">
          <a href="#home" className="nav-link">Home</a>
          <a href="#add-recipe" className="nav-link">Add a recipe</a>
        </nav>
      </div>

     
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
    </header>
  );
}


export default Header;