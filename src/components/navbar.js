import * as React from "react";


const Content: React.FC = () => {
  return (
    <nav className="nav">
      <a href="index.html" className="logo-box hue-shift App-logo">
      </a>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">
            Case Study
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">
            FAQ
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Content;