import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

function Footer() {
  return (
    <div className="font-sans antialiased" id="app">
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="w-full flex-grow sm:flex sm:items-center sm:w-auto">
          <div className="text-sm sm:flex mx-auto">
            Derechos reservados - adentro 2021
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
