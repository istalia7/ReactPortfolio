import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black">
      <nav className="flex">
        <ul className="flex justify-around w-full text-blue-400">
          <Link className="hover:bg-blue-400 hover:text-black" to="/">
            Accueil
          </Link>
          <Link className="hover:bg-blue-400 hover:text-black" to="/a-propos">
            A propos
          </Link>
          <Link
            className="hover:bg-blue-400 hover:text-black"
            to="/competences"
          >
            Compétences
          </Link>
          <Link className="hover:bg-blue-400 hover:text-black" to="/projets">
            Projets
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
