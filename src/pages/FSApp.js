import { Link } from "react-router-dom";

function FSApp() {
  const productWebsiteURL = "https://product-website-zeta.vercel.app/"; 

  return (
    <div className="fsapp-card">
      <h2>FS Practical App</h2>
      <p>This is your Full Stack Practical App.</p>
      <a
        href={productWebsiteURL}
        rel="noopener noreferrer"
        className="back-btn"
      >
        Open App
      </a>
      <br />
      <Link to="/" className="back-btn">
        ⬅ Back to Portfolio
      </Link>
    </div>
  );
}

export default FSApp;


