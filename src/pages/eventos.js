import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import styled from "styled-components";
import Navbar from "../components/navbar";
import Lotus from "../components/lotus";
import Mexico from "../images/mexico.png";
import Asc from "../images/asc.gif";

const StyledLink = styled(Link)`
  color: #4a5568;
  &:hover {
    color: #212529;
  }
  &:visited {
    color: #212529;
  }
`;

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
        <div
          className="mx-auto"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsEvento.descripcionDelEvento
          }}
        />
      </section>

      <section>
        <div className="max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto mt-5 text-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdmoldIWcdZp6z56QfeFTTbe5Pq1p5fteuw2dB2ySgph8jXDg/viewform"
            target="_blank"
            className="rounded-full bg-red-400 hover:bg-red-600 text-white mx-auto px-5 py-3"
          >
            Formulario de Registro
          </a>
        </div>
      </section>

      <Lotus />

      <section>
        <div
          className="max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsEvento.registroYDetalles
          }}
        />
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
      registroYDetalles
      fotoDePagina {
        fluid {
          src
        }
      }
    }
  }
`;

export default Eventos;
