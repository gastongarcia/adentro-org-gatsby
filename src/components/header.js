import React from "react"
import { Link } from "gatsby";
import propTypes from "prop-types";
import AdentroLogo from "../images/logo.svg"


function Header({PageTitle}) {

  return (
    <header>
        <div
          className="max-w-xl md:max-w-3xl xl:max-w-4xl mx-auto text-center px-6 py-12 lg:py-12 md:py-32 border-b border-gray-300"
        >
          <img src={AdentroLogo} alt="Adentro" width="180" className="mx-auto pb-10"/>

          <p className="text-gray-700 text-lg sm:text-3xl asap-title">{PageTitle}</p>
        </div>
      </header>
  );
}

Header.propTypes = {
  PageTitle: propTypes.string.isRequired
}

export default Header;
