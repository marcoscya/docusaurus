import React, { useState, useEffect } from "react";
import "./DockContainer.css";
import Link from "@docusaurus/Link";
import BrowserOnly from "@docusaurus/BrowserOnly";

// Componente principal que se renderizará solo en el navegador
export default function DockContainer() {
  return <BrowserOnly>{() => <DockContainerContent />}</BrowserOnly>;
}

// Componente con toda la funcionalidad
function DockContainerContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTutorialOpen, setIsTutorialOpen] = useState(false);
  const [isAdvancedPopupOpen, setIsAdvancedPopupOpen] = useState(false);
  const [isSidebarDocked, setIsSidebarDocked] = useState(false);
  const [recentlySeparated, setRecentlySeparated] = useState(false);

  // Detectar cuando el sidebar toca el docker
  useEffect(() => {
    const checkSidebarDocking = () => {
      // Si se separó recientemente, no permitir acoplamiento
      if (recentlySeparated) {
        return;
      }

      const sidebar = document.querySelector(".floating-sidebar");
      const docker = document.querySelector(".dock-container");

      if (sidebar && docker && !isOpen) {
        const sidebarRect = sidebar.getBoundingClientRect();
        const dockerRect = docker.getBoundingClientRect();

        // Verificar si están cerca uno del otro
        if (Math.abs(sidebarRect.left - dockerRect.right) < 20) {
          // Si el docker está en estado minimizado después de separación
          if (docker.classList.contains("minimized-after-separation")) {
            // Quitar la clase especial y restaurar el comportamiento normal
            docker.classList.remove("minimized-after-separation");
            docker.onclick = toggleOpen; // Restaurar la capacidad de abrir con clic
          }

          setIsSidebarDocked(true);
          sidebar.style.display = "none"; // Ocultar el sidebar
        }
      }
    };

    window.addEventListener("mousemove", checkSidebarDocking);
    return () => window.removeEventListener("mousemove", checkSidebarDocking);
  }, [isOpen, recentlySeparated]);

  // Efecto para desactivar el estado "recientemente separado" después de un tiempo
  useEffect(() => {
    if (recentlySeparated) {
      const timer = setTimeout(() => {
        setRecentlySeparated(false);
      }, 5000); // 5 segundos de protección contra re-acoplamiento

      return () => clearTimeout(timer);
    }
  }, [recentlySeparated]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const toggleAdvancedPopup = (e) => {
    e.stopPropagation();
    setIsAdvancedPopupOpen(!isAdvancedPopupOpen);
  };

  const closeAdvancedPopup = () => {
    setIsAdvancedPopupOpen(false);
  };

  const handleSeparate = () => {
    const sidebar = document.querySelector(".floating-sidebar");
    if (sidebar) {
      // Marcar como recientemente separado para evitar re-acoplamiento inmediato
      setRecentlySeparated(true);

      sidebar.style.display = "block"; // Mostrar el sidebar nuevamente
      sidebar.classList.add("separated"); // Añadir clase para evitar interacciones automáticas

      // Posicionar el sidebar a una distancia segura del docker
      const docker = document.querySelector(".dock-container");
      if (docker) {
        const dockerRect = docker.getBoundingClientRect();
        // Aumentar la distancia a 150px para evitar re-acoplamiento accidental
        sidebar.style.left = `${dockerRect.right + 150}px`;
        // Mantener la posición vertical actual
        const currentBottom =
          window.innerHeight - dockerRect.top - dockerRect.height / 2;
        sidebar.style.bottom = `${currentBottom}px`;
      }
    }

    // Minimizar el docker y bloquearlo hasta que el sidebar lo toque nuevamente
    setIsOpen(false);
    setIsSidebarDocked(false);

    // Añadir clase especial para el estado minimizado después de separación
    const dockerElement = document.querySelector(".dock-container");
    if (dockerElement) {
      dockerElement.classList.add("minimized-after-separation");

      // Desactivar temporalmente la capacidad de abrir el docker con clic
      dockerElement.onclick = null;

      // Restaurar pointer-events después de un tiempo
      setTimeout(() => {
        if (dockerElement.classList.contains("minimized-after-separation")) {
          dockerElement.style.pointerEvents = "auto";
        }
      }, 2000); // 2 segundos de tiempo de espera
    }
  };

  // Lista de enlaces del manual avanzado
  const advancedLinks = [
    { title: "Elementos", path: "/docs/manual-avanzado/uno-elementos" },
    { title: "Consola", path: "/docs/manual-avanzado/dos-consola" },
    { title: "Fuentes", path: "/docs/manual-avanzado/tres-fuentes" },
    { title: "Red", path: "/docs/manual-avanzado/cuatro-red" },
    { title: "Rendimiento", path: "/docs/manual-avanzado/cinco-rendimiento" },
    { title: "Memoria", path: "/docs/manual-avanzado/seis-memoria" },
    { title: "Aplicación", path: "/docs/manual-avanzado/siete-aplicacion" },
    { title: "Seguridad", path: "/docs/manual-avanzado/ocho-seguridad" },
    { title: "Faro", path: "/docs/manual-avanzado/nueve-faro" },
    { title: "Recorder", path: "/docs/manual-avanzado/diez-grabar" },
  ];

  return (
    <>
      <div
        className={`dock-container ${isOpen ? "open" : ""} ${
          isSidebarDocked ? "with-sidebar" : ""
        }`}
        onClick={
          !isOpen &&
          !document.querySelector(".dock-container.minimized-after-separation")
            ? toggleOpen
            : undefined
        }
      >
        {!isOpen && <div className="dock-indicator"></div>}

        {isOpen && (
          <div className="dock-content">
            <button className="close-dock-button" onClick={toggleOpen}>
              Cerrar
            </button>
            {isSidebarDocked && (
              <button className="separate-button" onClick={handleSeparate}>
                Separar
              </button>
            )}

            <div className="dock-content-inner">
              <h3>Documentación</h3>

              <div className="dock-navigation">
                <div className="nav-dropdown">
                  <button
                    className="nav-link dropdown-trigger"
                    onClick={() => setIsTutorialOpen(!isTutorialOpen)}
                  >
                    <span className="nav-text">
                      Manual Inspector de Elementos
                    </span>
                    <span className="dropdown-icon">
                      {isTutorialOpen ? "▼" : "▶"}
                    </span>
                  </button>

                  {isTutorialOpen && (
                    <div className="dropdown-content">
                      <Link to="/docs/intro" className="nav-link submenu-link">
                        <span className="nav-text">Manual Básico</span>
                      </Link>

                      {/* Manual Avanzado - ahora abre popup */}
                      <button
                        className="nav-link dropdown-trigger"
                        onClick={toggleAdvancedPopup}
                      >
                        <span className="nav-text">Manual Avanzado</span>
                        <span className="dropdown-icon">▶</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Popup del Manual Avanzado */}
      <div className={`submenu-popup ${isAdvancedPopupOpen ? "visible" : ""}`}>
        <div className="submenu-popup-header">
          <div className="submenu-popup-title">Manual Avanzado</div>
          <button className="submenu-popup-close" onClick={closeAdvancedPopup}>
            ×
          </button>
        </div>
        <div className="submenu-popup-content">
          {advancedLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="submenu-popup-link"
              onClick={closeAdvancedPopup}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
