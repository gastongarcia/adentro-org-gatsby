import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header"
import ContactForm from "../components/contactForm"
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

      <Header PageTitle="Contacto" />
      
      <ContactForm />
      
    </Layout>
  );
}

export default IndexPage;
