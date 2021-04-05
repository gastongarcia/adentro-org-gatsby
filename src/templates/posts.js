import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Lotus from "../components/lotus";
import Mexico from "../images/mexico.png";
import Asc from "../images/asc.gif";

export const query = graphql`
  query($slug: String!) {
    datoCmsBlog(slug: { eq: $slug }) {
      titulo
      contenido
      ilustracion {
        fluid {
          src
        }
      }
      categoria {
        categoria
      }
      meta {
        updatedAt(formatString: "D/M/Y")
      }
    }
  }
`;

const Post = ({ data }) => {
  const post = data.datoCmsBlog;
  return (
    <Layout>
      <SEO
        title="Inicio"
        keywords={[`adentro`, `mindfulness`, `Andrea Carranza`, `Costa Rica`]}
      />

      <Navbar />

      <Header PageTitle="Experciencias Adentro" />

      <div className="blog-post" key={post.slug}>
        <h1 className="text-2xl text-gray-800 text-center mx-auto">
          {post.titulo}
        </h1>
        <img
          src={post.ilustracion.fluid.src}
          alt="{post.titulo}"
          className="bg-white p-2 border border-gray-300 mt-5 text-center mx-auto"
        />
        <div
          className="post-body mt-12"
          dangerouslySetInnerHTML={{ __html: post.contenido }}
        />
        <div className="post-meta">
          <p className="text-sm text-gray-600 italic">
            Publicado el: {post.meta.updatedAt}, Categorías:{" "}
            {post.categoria.categoria}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Post;
