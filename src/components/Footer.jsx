import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Site Map</h3>
        <ul>
          <li>
            {" "}
            <a href="#home">Accueil</a>
          </li>
          <li>Recettes</li>
          <li>Contact</li>
          <li>Politique de confidentialité</li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>Suivez Nous</h3>
        <ul>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="public/R.png" alt="Instagram" className="icon" />
              Instagram
            </a>
          </li>

          <li>
            <a
              href="https://fr-fr.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="public/téléchargé.png"
                alt="Facebook"
                className="icon"
              />
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://x.com/?lang=fr"
              target="_blank"
              rel="noopener norefferer"
            >
              <img
                src="public/Twitter_new_X_logo.png"
                alt="Twitter"
                className="icon"
              />
              Twitter
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Abonnez vous</h3>
        <form>
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" placeholder="toto@..." className="footer-input"/>
        </form>
      </div>
    </footer>
  );
}
export default Footer;
