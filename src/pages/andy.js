import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header"
import styled from "styled-components"
import Navbar from "../components/navbar"

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

      <Navbar />

      <Header PageTitle={data.datoCmsBioAndy.tituloDeLaPagina} />

      <section>
        <div
        class="max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto"
        dangerouslySetInnerHTML={{
          __html: data.datoCmsBioAndy.bio
        }}
        />

      </section>

    </Layout>
  );
}
export const query = graphql`
query Andy{
  datoCmsBioAndy{
   tituloDeLaPagina
   bio
 }
 }`

export default AndyPage;
