import React, { useState, useEffect } from "react";
import "./DockContainer.css";

export default function DockContainer() {
  const [isActive, setIsActive] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleUndock = () => {
    const sidebar = document.querySelector(".floating-sidebar");
    if (sidebar) {
      sidebar.classList.remove("docked");
      sidebar.classList.remove("minimized");
      setIsActive(false);
      setIsMinimized(false);
    }
  };

  const handleMinimize = () => {
    const dock = document.querySelector(".dock-container");
    const sidebar = document.querySelector(".floating-sidebar");

    setIsMinimized(!isMinimized);
    if (sidebar && sidebar.classList.contains("docked")) {
      const combinedContent = document.createElement("div");
      combinedContent.className = "combined-content";

      if (!isMinimized) {
        // Al minimizar
        dock.style.width = "30px";
        sidebar.style.width = "0";
        sidebar.style.opacity = "0";
      } else {
        // Al expandir
        dock.style.width = "250px";
        sidebar.style.width = "250px";
        sidebar.style.opacity = "1";
      }
    }
  };

  useEffect(() => {
    let timeout;
    const checkCollision = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const dockRect = document
          .querySelector(".dock-container")
          .getBoundingClientRect();
        const sidebar = document.querySelector(".floating-sidebar");

        if (sidebar && !sidebar.classList.contains("docked")) {
          const sidebarRect = sidebar.getBoundingClientRect();
          const isNear = Math.abs(sidebarRect.left - dockRect.left) < 20;

          if (isNear && !isActive) {
            setIsActive(true);
            sidebar.classList.add("docked");
          }
        }
      }, 100);
    };

    document.addEventListener("mousemove", checkCollision);
    return () => {
      document.removeEventListener("mousemove", checkCollision);
      clearTimeout(timeout);
    };
  }, [isActive]);

  return (
    <div
      className={`dock-container ${isActive ? "active" : ""} ${
        isMinimized ? "minimized" : ""
      }`}
    >
      <div className="dock-indicator"></div>
      {isActive && (
        <div className="dock-buttons">
          <button className="minimize-dock-button" onClick={handleMinimize}>
            {isMinimized ? "Expandir" : "Minimizar"}
          </button>
          <button className="break-dock-button" onClick={handleUndock}>
            Romper Unión
          </button>
        </div>
      )}
    </div>
  );
}
