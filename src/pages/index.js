import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Lotus from "../components/lotus";

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
        <div className="mx-auto mt-0 sm:pt-2 sm:pb-2">
          <img
            src={data.datoCmsInicio.fotoDePagina.fluid.src}
            alt="Adentro"
            className="mx-auto pb-3 rounded"
          />
        </div>
      </section>

      <Lotus />

      <section>
        <div
          className="mx-auto"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsInicio.descripcionDeAdentro
          }}
        />
      </section>

      <Lotus />

      <section>
        <div
          className="max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsInicio.descripcionDeLosTalleres
          }}
        />
      </section>

      <Lotus />
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
