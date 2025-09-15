import React from "react";
import { Link } from "react-router-dom";

function FSApp() {
  return (
    <div className="fsapp">
      <h2>FS Practical App</h2>
      <p>This is your Full Stack Product App (you can add all practicals here).</p>
      <Link to="/">⬅ Back to Personal Website</Link>
    </div>
  );
}

export default FSApp;
