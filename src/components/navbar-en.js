import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import {TiSocialFacebook,TiSocialInstagram} from "react-icons/ti"
import { css } from "@emotion/core"
import ES from "../images/spain.svg"


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
            <Link
              to="/home/"
              className="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-teal-darker mr-4 menuitem"
            >Home</Link>
            <Link
              to="/andrea-carranza-bio/"
              className="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-teal-darker hover:underline mr-4 menuitem"
            >Msc. Andrea Carranza E.</Link>
            <Link
              to="/contact/"
              className="no-underline block mt-4 mr-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-teal-darker hover:underline menuitem"
            >Contact</Link>
            <Link
              to="/"
              className="no-underline block mt-4 pl-5 sm:inline-block sm:mt-0 text-teal-lighter hover:text-teal-darker mr-5 menuitem spain-flag"
            >Español</Link>
            <StyledIcon
              href="https://www.instagram.com/adentro.mindfulness/"
              target="_blank"
              className="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-teal-darker hover:underline"
            ><TiSocialInstagram/></StyledIcon>
            <StyledIcon
              href="https://www.facebook.com/adentro.mindfulness/"
              target="_blank"
              className="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-teal-darker hover:underline"
            ><TiSocialFacebook/></StyledIcon  >

          </div>
        </div>
      </nav>
  );
}


export default Navbar;