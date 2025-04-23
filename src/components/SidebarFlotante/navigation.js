import React, { useState } from "react";
import Link from "@docusaurus/Link";

export default function Navigation() {
  const [isTutorialOpen, setIsTutorialOpen] = useState(false);
  const [isBasicsOpen, setIsBasicsOpen] = useState(false);
  const [isExtrasOpen, setIsExtrasOpen] = useState(false);

  return (
    <div className="sidebar-navigation">
      <div className="nav-title">Documentacion</div>

      <div className="nav-dropdown">
        <button
          className="nav-link dropdown-trigger"
          onClick={() => setIsTutorialOpen(!isTutorialOpen)}
        >
          <span className="nav-text">Manual Inspector de Elementos</span>
          <span className="dropdown-icon">{isTutorialOpen ? "▼" : "▶"}</span>
        </button>

        {isTutorialOpen && (
          <div className="dropdown-content">
            <Link to="/docs/intro" className="nav-link submenu-link">
              <span className="nav-text">Manual Basico</span>
            </Link>

            {/* Manual Avanzado Submenu */}
            <div className="nav-dropdown nested">
              <button
                className="nav-link dropdown-trigger"
                onClick={() => setIsBasicsOpen(!isBasicsOpen)}
              >
                <span className="nav-text">Manual Avanzado</span>
                <span className="dropdown-icon">
                  {isBasicsOpen ? "▼" : "▶"}
                </span>
              </button>
              {isBasicsOpen && (
                <div className="dropdown-content nested">
                  <Link
                    to="/docs/manual-avanzado/uno-elementos"
                    className="nav-link submenu-link"
                  >
                    <span className="nav-text">Elementos</span>
                  </Link>
                  <Link
                    to="/docs/manual-avanzado/dos-consola"
                    className="nav-link submenu-link"
                  >
                    <span className="nav-text">Consola</span>
                  </Link>
                  <Link
                    to="/docs/manual-avanzado/tres-fuentes"
                    className="nav-link submenu-link"
                  >
                    <span className="nav-text">Fuentes</span>
                  </Link>
                  <Link
                    to="/docs/manual-avanzado/cuatro-red"
                    className="nav-link submenu-link"
                  >
                    <span className="nav-text">Red</span>
                  </Link>
                  <Link
                    to="/docs/manual-avanzado/cinco-rendimiento"
                    className="nav-link submenu-link"
                  >
                    <span className="nav-text">Rendimiento</span>
                  </Link>
                  <Link
                    to="/docs/manual-avanzado/seis-memoria"
                    className="nav-link submenu-link"
                  >
                    <span className="nav-text">Memoria</span>
                  </Link>
                  <Link
                    to="/docs/manual-avanzado/siete-aplicacion"
                    className="nav-link submenu-link"
                  >
                    <span className="nav-text">Aplicación</span>
                  </Link>
                  <Link
                    to="/docs/manual-avanzado/ocho-seguridad"
                    className="nav-link submenu-link"
                  >
                    <span className="nav-text">Seguridad</span>
                  </Link>
                  <Link
                    to="/docs/manual-avanzado/nueve-faro"
                    className="nav-link submenu-link"
                  >
                    <span className="nav-text">Faro</span>
                  </Link>
                  <Link
                    to="/docs/manual-avanzado/diez-grabar"
                    className="nav-link submenu-link"
                  >
                    <span className="nav-text">Recorder</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Tutorial Extras Submenu */}
            <div className="nav-dropdown nested">
              <button
                className="nav-link dropdown-trigger"
                onClick={() => setIsExtrasOpen(!isExtrasOpen)}
              >
                <span className="nav-text">Tutorial - Extras</span>
                <span className="dropdown-icon">
                  {isExtrasOpen ? "▼" : "▶"}
                </span>
              </button>
              {isExtrasOpen && (
                <div className="dropdown-content nested">
                  <Link
                    to="/docs/tutorial-extras/manage-docs-versions"
                    className="nav-link submenu-link"
                  >
                    <span className="nav-text">Manage Docs Versions</span>
                  </Link>
                  <Link
                    to="/docs/tutorial-extras/translate-your-site"
                    className="nav-link submenu-link"
                  >
                    <span className="nav-text">Translate Your Site</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <Link to="/blog" className="nav-link">
        <span className="nav-text">Blog</span>
      </Link>
    </div>
  );
}
