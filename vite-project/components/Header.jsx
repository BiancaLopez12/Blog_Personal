import React from "react";
import { Link } from "react-router-dom"; // Si estás usando React Router para la navegación

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>Mi Blog Personal</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about">Acerca de</Link>
            </li>
            <li>
              <Link to="/posts">Publicaciones</Link>
            </li>
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
