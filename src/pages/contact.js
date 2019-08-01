import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header"
import ContactForm from "../components/contactForm"
import styled from "styled-components"
import NavbarEn from "../components/navbar-en"

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

      <NavbarEn />

      <Header PageTitle={data.datoCmsContact.tituloDeLaPagina} />

      <ContactForm />

    </Layout>
  );
}

export const query = graphql`
query Contact {
  datoCmsContact {
    tituloDeLaPagina
  }
}`

export default ContactPage