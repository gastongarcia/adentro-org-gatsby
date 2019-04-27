import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header"
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
      
      <section>
        <div class="max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto">
        
        <form
            class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            name="contact"
            data-netlify="true"
            method="POST"
          >
            <div class="mb-4">
              <label
                class="block text-grey-darker text-sm font-bold mb-2"
                for="nombre"
              >Nombre Completo:
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Tu nombre y apellido"
              />
              </label>
              
            </div>

            <div class="mb-4">
              <label class="block text-grey-darker text-sm font-bold mb-2" for="email">Email:
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="Tu email"
              />
              </label>
              
            </div>

            <div class="mb-4">
              <label class="block text-grey-darker text-sm font-bold mb-2" for="telefono">Teléfono:
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                id="telefono"
                name="telefono"
                type="text"
                placeholder="Tu teléfono"
              />
              </label>
              
            </div>

            <div class="mb-4">
              <label class="block text-grey-darker text-sm font-bold mb-2" for="mensaje">Mensaje:
              
              <textarea
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline h-24"
                id="mensaje"
                name="mensaje"
              ></textarea>
              
              </label>
              
            </div>
            <div>
              <input
                type="submit"
                class="bg-black hover:bg-black text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline "
                value="Enviar"
                name="submit"
              />
            </div>

          </form>
                
        </div>
      </section>
      
    </Layout>
  );
}

export default IndexPage;
