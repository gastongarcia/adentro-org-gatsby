import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header"
import DeepWater from "../images/ryan-loughlin-765211-unsplash.jpg"
import styled from "styled-components"

const a = styled(Link)`
  color: #4a5568;
  &:hover{
    color: #212529;
  }
  &:visited{
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

      <Header PageTitle="Audios" />
      
      <section>
        <div class="max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto">
          <p>A continuación encontrarán un grupo de audios para practicar.</p>

          <p>
            <b>Descargas:</b>
          </p>

          <ul class="mb-5">
            <li class="mb-4">
              Audio 1 - 5 Minutos <a
                href="/audio/01_adentro_5_minutos.m4a"
                class="rounded text-center lg:w-1/4 w-1/2"
              >Descargar - 3 Mb</a>
            </li>
            <li class="mb-4">
              Audio 2 - Atención a la respiración <a
                href="/audio/02_adentro_atencion_a_la_respiración.m4a"
                class="rounded text-center lg:w-1/4 w-1/2"
              >Descargar - 2 Mb</a>
            </li>
            <li class="mb-4">
              Audio 3 - Escaneo corporal <a
                href="/audio/03_adentro_escaneo_corporal.m4a"
                class="rounded text-center lg:w-1/4 w-1/2"
              >Descargar - 19 Mb</a>
            </li>
            <li class="mb-4">
              Audio 4 - Grounding <a
                href="/audio/05_adentro_grounding.m4a"
                class="rounded text-center lg:w-1/4 w-1/2"
              >Descargar - 4 Mb</a>
            </li>
            <li class="mb-4">
              Audio 5 - Bondad Amorosa <a
                href="/audio/07_adentro_bondad_amorosa.m4a"
                class="rounded text-center lg:w-1/4 w-1/2"
              >Descargar - 9 Mb</a>
            </li>
            <li class="mb-4">
              Audio 6 - Movimiento <a
                href="/audio/08_adentro_movimiento.m4a"
                class="rounded text-center lg:w-1/4 w-1/2"
              >Descargar - 10 Mb</a>
            </li>
          </ul>
        </div>
      </section>
      
    </Layout>
  );
}

export default IndexPage;
