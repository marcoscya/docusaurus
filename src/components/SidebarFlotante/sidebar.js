import React, { useState } from "react";
import clsx from "clsx";
import "./style.sidebar.css";
import Navigation from "./navigation";

export default function FloatingSidebar({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={clsx("floating-sidebar", { expanded: isExpanded })}>
      <button
        className="toggle-button"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "−" : "+"}
      </button>
      <Navigation />
      {children}
    </div>
  );
}
