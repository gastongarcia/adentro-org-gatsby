import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"


function Footer(){
  return(
    <div class="font-sans antialiased" id="app">
      <nav class="flex items-center justify-between flex-wrap p-6">
        <div class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
          <div class="text-sm sm:flex mx-auto">Derechos reservados - adentro 2019</div>
        </div>
      </nav>
    </div>
  )
}

export default Footer;