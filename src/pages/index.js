import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import styled from "styled-components";
import Navbar from "../components/navbar";

const StyledLink = styled(Link)`
  color: #4a5568;
  &:hover {
    color: #212529;
  }
  &:visited {
    color: #212529;
  }
`;

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Inicio"
        keywords={[`adentro`, `mindfulness`, `Andrea Carranza`, `Costa Rica`]}
      />

      <Navbar />

      <Header PageTitle={data.datoCmsInicio.tituloDeLaPagina} />

      <section className="decoration">
        <div className="mx-auto border-grey-lightest border-b mt-0 sm:pt-2 sm:pb-5">
          <img
            src={data.datoCmsInicio.fotoDePagina.fluid.src}
            alt="Adentro"
            className="mx-auto pb-3 rounded"
          />
        </div>
      </section>

      <section>
        <div
          className="mx-auto"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsInicio.descripcionDeAdentro
          }}
        />
      </section>

      <section>
        <div
          className="max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsInicio.descripcionDeLosTalleres
          }}
        />
      </section>
    </Layout>
  );
};

export const query = graphql`
  query Inicio {
    datoCmsInicio {
      tituloDeLaPagina
      descripcionDeAdentro
      descripcionDeLosTalleres
      fotoDePagina {
        fluid {
          src
        }
      }
    }
  }
`;

export default IndexPage;
