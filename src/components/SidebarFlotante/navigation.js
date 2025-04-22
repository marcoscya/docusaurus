import React, { useState } from "react";
import Link from "@docusaurus/Link";

export default function Navigation() {
  const [isTutorialOpen, setIsTutorialOpen] = useState(false);
  const [isBasicsOpen, setIsBasicsOpen] = useState(false);
  const [isExtrasOpen, setIsExtrasOpen] = useState(false);

  return (
    <div className="sidebar-navigation">
      <div className="nav-title">Menú</div>

      <div className="nav-dropdown">
        <button
          className="nav-link dropdown-trigger"
          onClick={() => setIsTutorialOpen(!isTutorialOpen)}
        >
          <span className="nav-text">Tutorial</span>
          <span className="dropdown-icon">{isTutorialOpen ? "▼" : "▶"}</span>
        </button>

        {isTutorialOpen && (
          <div className="dropdown-content">
            <Link to="/docs/intro" className="nav-link submenu-link">
              <span className="nav-text">Tutorial Intro</span>
            </Link>

            {/* Tutorial Basics Submenu */}
            <div className="nav-dropdown nested">
              <button
                className="nav-link dropdown-trigger"
                onClick={() => setIsBasicsOpen(!isBasicsOpen)}
              >
                <span className="nav-text">Tutorial - Basics</span>
                <span className="dropdown-icon">
                  {isBasicsOpen ? "▼" : "▶"}
                </span>
              </button>
              {isBasicsOpen && (
                <div className="dropdown-content nested">
                  <Link
                    to="/docs/tutorial-basics/create-a-page"
                    className="nav-link submenu-link"
                  >
                    <span className="nav-text">Create a Page</span>
                  </Link>
                  <Link
                    to="/docs/tutorial-basics/create-a-document"
                    className="nav-link submenu-link"
                  >
                    <span className="nav-text">Create a Document</span>
                  </Link>
                  <Link
                    to="/docs/tutorial-basics/create-a-blog-post"
                    className="nav-link submenu-link"
                  >
                    <span className="nav-text">Create a Blog Post</span>
                  </Link>
                  <Link
                    to="/docs/tutorial-basics/markdown-features"
                    className="nav-link submenu-link"
                  >
                    <span className="nav-text">Markdown Features</span>
                  </Link>
                  <Link
                    to="/docs/tutorial-basics/deploy-your-site"
                    className="nav-link submenu-link"
                  >
                    <span className="nav-text">Deploy Your Site</span>
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
