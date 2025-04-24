import React, { useState, useEffect } from "react";
import clsx from "clsx";
import "./style.sidebar.css";
import Navigation from "./navigation";
import { useLocation } from "@docusaurus/router";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

export default function FloatingSidebar({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(() => {
    if (ExecutionEnvironment.canUseDOM) {
      return {
        x: 20,
        y: window.innerHeight - 20,
      };
    }
    return { x: 20, y: 0 };
  });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);
  const [isDocked, setIsDocked] = useState(false);

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

  const handleMouseMove = (e) => {
    if (isDragging && ExecutionEnvironment.canUseDOM) {
      setHasMoved(true);
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;

      const dockElement = document.querySelector(".dock-container");
      if (dockElement) {
        const dockRect = dockElement.getBoundingClientRect();
        const distance = Math.abs(newX - dockRect.left);

        if (
          distance < 20 &&
          !isDocked &&
          !dockElement.classList.contains("open")
        ) {
          // Notificar al dock que el sidebar está cerca
          dockElement.classList.add("sidebar-nearby");
          // Posicionar el sidebar junto al dock
          setPosition({
            x: dockRect.left,
            y: newY,
          });
          setIsDocked(true);

          // Disparar un evento personalizado para que el dock lo detecte
          const event = new CustomEvent("sidebarDocked", {
            detail: { position: { x: dockRect.right, y: newY } },
          });
          document.dispatchEvent(event);

          return;
        } else if (distance >= 20 && isDocked) {
          setIsDocked(false);
          dockElement.classList.remove("sidebar-nearby");
        }
      }

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
    if (!ExecutionEnvironment.canUseDOM) return;

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) return;

    const handleResize = () => {
      setPosition((prev) => ({
        x: Math.min(prev.x, window.innerWidth - 50),
        y: Math.min(prev.y, window.innerHeight - 20),
      }));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  return (
    <div
      className={clsx("floating-sidebar", {
        expanded: isExpanded,
        dragging: isDragging,
        docked: isDocked,
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
