import React from "react";
import { Link, graphql } from "gatsby";
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

const BegoPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Begoña García"
        keywords={[
          `adentro`,
          `mindfulness`,
          `Begoña García`,
          `Breathwork`,
          `Costa Rica`
        ]}
      />

      <Navbar />

      <Header PageTitle={data.datoCmsProfileBego.tituloDeLaPagina} />

      <section>
        <div className="block md:flex">
          <div className="w-full md:w-2/6">
            <img
              src={data.datoCmsProfileBego.picture.fluid.src}
              alt={data.datoCmsProfileBego.tituloDeLaPagina}
              className="p-5 pl-0 rounded mt-3"
            />
          </div>
          <div
            class="w-full md:w-4/6"
            dangerouslySetInnerHTML={{
              __html: data.datoCmsProfileBego.bio
            }}
          />
        </div>
      </section>
    </Layout>
  );
};
export const query = graphql`
  query BegoBio {
    datoCmsProfileBego {
      tituloDeLaPagina
      bio
      picture {
        fluid {
          src
        }
      }
    }
  }
`;

export default BegoPage;
