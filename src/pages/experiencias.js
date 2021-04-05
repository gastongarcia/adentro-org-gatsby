import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Lotus from "../components/lotus";
import Mexico from "../images/mexico.png";
import Asc from "../images/asc.gif";

export const query = graphql`
  {
    blog: allDatoCmsBlog {
      nodes {
        titulo
        contenido
        slug
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
  }
`;

const Experiencias = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Inicio"
        keywords={[`adentro`, `mindfulness`, `Andrea Carranza`, `Costa Rica`]}
      />

      <Navbar />

      <Header PageTitle="Experciencias Adentro" />

      <div className="w-full md:flex">
        <div className="md:w-4/6">
          {data.blog.nodes.map(post => (
            <div className="post-preview" key={post.slug}>
              <Link to={`/${post.slug}`} className="text-xl text-gray-800">
                {post.titulo}
              </Link>
              <div className="post-meta">
                <p className="text-sm text-gray-600 italic">
                  Publicado el: {post.meta.updatedAt}, Categorías:{" "}
                  {post.categoria.categoria}
                </p>
              </div>
              <div className="post-img">
                <Link to={`/${post.slug}`} className="text-xl text-gray-800">
                  <img
                    src={post.ilustracion.fluid.src}
                    alt="{post.titulo}"
                    className="bg-white p-2 border border-gray-300 mt-5"
                  />
                </Link>
                <Link
                  to={`/${post.slug}`}
                  className="text-md underline italic text-gray-700 mt-5 block"
                >
                  &hellip;leer el post
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:block md:w-2/6">
          <p className="text-gray-700">Categorías del blog:</p>
        </div>
      </div>
    </Layout>
  );
};

export default Experiencias;
