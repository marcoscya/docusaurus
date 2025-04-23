import React, { useState, useEffect } from "react";
import clsx from "clsx";
import "./style.sidebar.css";
import Navigation from "./navigation";

export default function FloatingSidebar({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({
    x: 20,
    y: window.innerHeight - 20,
  });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);

  const handleMouseDown = (e) => {
    const sidebarElement = e.currentTarget;
    if (sidebarElement.contains(e.target) && !e.target.closest(".nav-link")) {
      setIsDragging(true);
      setHasMoved(false);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const [isDocked, setIsDocked] = useState(false);

  const handleMouseMove = (e) => {
    if (isDragging) {
      setHasMoved(true);
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;

      // Verificar si está cerca del dock
      const dockElement = document.querySelector(".dock-container");
      if (dockElement) {
        const dockRect = dockElement.getBoundingClientRect();
        const distance = Math.abs(newX - dockRect.left);

        if (distance < 20) {
          // Distancia de "magnetismo"
          setPosition({
            x: dockRect.left,
            y: newY,
          });
          setIsDocked(true);
          return;
        }
      }

      setIsDocked(false);
      setPosition({
        x: Math.max(0, Math.min(window.innerWidth - 50, newX)),
        y: Math.max(0, Math.min(window.innerHeight - 20, newY)),
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleClick = () => {
    if (!hasMoved) {
      setIsExpanded(!isExpanded);
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      className={clsx("floating-sidebar", {
        expanded: isExpanded,
        dragging: isDragging,
      })}
      style={{
        left: `${position.x}px`,
        bottom: `${window.innerHeight - position.y}px`,
      }}
      onMouseDown={handleMouseDown}
    >
      <button className="toggle-button" onClick={handleClick}>
        {isExpanded ? "−" : "+"}
      </button>
      <Navigation />
      {children}
    </div>
  );
}
