import React from "react";
import Link from "@docusaurus/Link";
import "./styles.css";

export default function CustomNavigation() {
  return (
    <div className="custom-nav-buttons">
      <Link to="#" className="custom-nav-button prev">
        <span className="nav-label">Anterior</span>
      </Link>
      <Link to="#" className="custom-nav-button next">
        <span className="nav-label">Siguiente</span>
      </Link>
    </div>
  );
}
