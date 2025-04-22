import React from "react";
import Link from "@docusaurus/Link";

export default function Navigation() {
  return (
    <div className="sidebar-navigation">
      <div className="nav-title">Menú</div>
      <Link to="/docs/intro" className="nav-link">
        <span className="nav-text">Tutorial</span>
      </Link>
      <Link to="/blog" className="nav-link">
        <span className="nav-text">Blog</span>
      </Link>
    </div>
  );
}
