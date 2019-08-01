import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header"
import styled from "styled-components"
import NavbarEn from "../components/navbar-en"

const StyledLink = styled(Link)`
  color: #4a5568;
  &:hover{
    color: #212529;
  }
  &:visited{
    color: #212529;
  }
`


const AndyPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Andrea Carranza"
        keywords={[`adentro`, `mindfulness`, `Andrea Carranza`, `Costa Rica`]}
      />

      <NavbarEn />

      <Header PageTitle={data.datoCmsProfileAndy.tituloDeLaPagina} />

      <section>

        <div className="sm:flex">
          <div className="profile-pic">
            <img src={data.datoCmsProfileAndy.picture.fluid.src} alt={data.datoCmsProfileAndy.tituloDeLaPagina}
            className="p-3 border border-grey-light mt-3" />
          </div>

          <div
            class="max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto"
            dangerouslySetInnerHTML={{
            __html: data.datoCmsProfileAndy.bio
            }}
          />
        </div>

      </section>

    </Layout>
  );
}
export const query = graphql`
query AndyBio {
  datoCmsProfileAndy {
    bio
    tituloDeLaPagina
    picture {
      fluid {
        src
      }
    }
  }
}`

export default AndyPage;
