import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import {TiSocialFacebook,TiSocialInstagram} from "react-icons/ti"

const StyledLink = styled.a`
  color: #4a5568;
  &:hover{
    color: #212529;
  }
`

const StyledIcon = styled.a`
  color: #4a5568;
  font-size:20px;
  margin-left:6px;
  &:hover{
    color: #212529;
  }
`

function Navbar({}) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="block sm:hidden">
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="flex items-center px-3 py-2 border rounded text-grey-dark border-grey-dark hover:text-grey-darker hover:border-grey-darker"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>

        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } w-full flex-grow sm:flex sm:items-center sm:w-auto`}
        >
          <div className="text-sm sm:flex mx-auto">
            <StyledLink
              href="/"
              className="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white mr-4"
            >Inicio</StyledLink>
            <StyledLink
              href="/andy/"
              className="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white mr-4"
            >Msc. Andrea Carranza E.</StyledLink>
            <StyledLink
              href="/contacto/"
              className="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white"
            >Contacto</StyledLink>
            <StyledIcon
              href="https://www.instagram.com/adentro.mindfulness/"
              target="_blank"
              className="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white"
            ><TiSocialInstagram/></StyledIcon>
            <StyledIcon
              href="https://www.facebook.com/adentro.mindfulness/"
              target="_blank"
              className="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white"
            ><TiSocialFacebook/></StyledIcon  >
          </div>
        </div>
      </nav>
  );
}


export default Navbar;