import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header"
import DeepWater from "../images/ryan-loughlin-765211-unsplash.jpg"
import styled from "styled-components"

const StyledLink = styled(Link)`
  color: #4a5568;
  &:hover{
    color: #212529;
  }
`


function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Inicio"
        keywords={[`adentro`, `mindfulness`, `Andrea Carranza`, `Costa Rica`]}
      />

      <Header PageTitle="¡Gracias!" />
      
      

      <section class="decoration">
        <div
          class="max-w-lg md:max-w-lg lg:max-w-3xl mx-auto .border-grey-lightest border-b pt-12 mt-10 sm:pt-5 sm:pb-5"
        >
          <img
            src={DeepWater}
            alt="Adentro"
            class="mx-auto pb-10 m:rounded-lg sm:rounded-sm rounded-lg"
          />
        </div>
      </section>
      
    </Layout>
  );
}

export default IndexPage;
