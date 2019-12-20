import React from "react";
import { Link } from "gatsby";
import propTypes from "prop-types";
import AdentroLogo from "../images/logo.svg";

function Header({ PageTitle }) {
  return (
    <header>
      <div className="w-full mx-auto text-center px-6 py-3 md:py-12 ">
        <img
          src={AdentroLogo}
          alt="Adentro"
          width="180"
          className="mx-auto pb-5"
        />

        <p className="text-gray-700 text-lg sm:text-3xl asap-title">
          {PageTitle}
        </p>
      </div>
    </header>
  );
}

Header.propTypes = {
  PageTitle: propTypes.string.isRequired
};

export default Header;
