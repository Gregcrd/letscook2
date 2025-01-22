import "./PagePrincipal.css";



function PagePrincipal() {
  return (
    <>
    <div className="container">
      {/* Colonne gauche */}
      <div className="left-column">
        <div className="vertical-text">料理をしましょう</div>
        <div className="title">
          <h1>Harue</h1>
          <p>Cuisine Franco-Japonaise</p>
        </div>
      </div>

      {/* Colonne droite */}
      <div className="right-column">
        <img
          src="/PPLTS.png" // Chemin vers l'image dans public/
          alt="Japon"
          className="background-image"
        />
      </div>

     
    </div>
    <div className="bottom-columns">
      <img 
        src ="/Capture d'écran 2025-01-21 153239.png" 
        alt = "neon"
        className="botom-image"
      />
      </div>
    </>
  );
}

  export default PagePrincipal;
  