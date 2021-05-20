import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Lotus from "../components/lotus";
import Mexico from "../images/mexico.png";
import Asc from "../images/asc.gif";

const Eventos = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Inicio"
        keywords={[`adentro`, `mindfulness`, `Andrea Carranza`, `Costa Rica`]}
      />

      <Navbar />

      <Header PageTitle={data.datoCmsEvento.tituloDeLaPagina} />

      <section>
        <div className="max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto">
          <img
            src={data.datoCmsEvento.fotoDePagina.fluid.src}
            alt="Evento de Adentro.org"
          />
        </div>
      </section>

      <Lotus />

      <section>
        <div className="max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto">
          <p className="text-sm">En conjunto con:</p>
          <img
            src={Mexico}
            alt="Instituto Mexicano de Mindfulness"
            style={{ maxWidth: "200px", border: "3px solid white" }}
          />
          <p className="text-sm">A beneficio de:</p>
          <img
            src={Asc}
            alt="Asociación Sueña en Colores"
            style={{ maxWidth: "200px", border: "3px solid white" }}
          />
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query Eventos {
    datoCmsEvento {
      tituloDeLaPagina
      descripcionDelEvento
      fotoDePagina {
        fluid {
          src
        }
      }
    }
  }
`;

export default Eventos;
