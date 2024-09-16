import React from "react";
import { Link } from "react-router-dom"; // Si estás usando React Router para la navegación

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>𝓜𝓲 𝓑𝓵𝓸𝓰 𝓟𝓮𝓻𝓼𝓸𝓷𝓪𝓵 </h1>
        <nav>
          <ul>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Inicio Sesión GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
