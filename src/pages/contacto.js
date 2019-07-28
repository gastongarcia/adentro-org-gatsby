import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header"
import ContactForm from "../components/contactForm"
import styled from "styled-components"

const StyledLink = styled(Link)`
  color: #4a5568;
  &:hover{
    color: #212529;
  }
`


const ContactPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Contacto"
        keywords={[`adentro`, `mindfulness`, `Andrea Carranza`, `Costa Rica`]}
      />

      <Header PageTitle={data.datoCmsContacto.tituloDeLaPagina} />

      <ContactForm />

    </Layout>
  );
}

export const query = graphql`
query Contacto {
  datoCmsContacto {
    tituloDeLaPagina
  }
}`

export default ContactPage