import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} Mi Blog Personal. Todos los derechos
          reservados.
        </p>
        <nav>
          <ul>
            <li>
              <a href="/privacy-policy">Política de Privacidad</a>
            </li>
            <li>
              <a href="/terms-of-service">Términos de Servicio</a>
            </li>
            <li>
              <a href="/contact">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
