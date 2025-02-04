import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header({ searchTerm, setSearchTerm }) {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="left-section">
        <div className="logo">春江</div>
        <nav className="nav">
          <span className="nav-link" onClick={() => navigate("/")}>Home</span>
          <span className="nav-link" onClick={() => navigate("/add-recipe")}>Add a recipe</span>
        </nav>
      </div>

    
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </div>
    </header>
  );
}

export default Header;
