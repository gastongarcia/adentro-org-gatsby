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

      <Header PageTitle="Atención, presencia y mente sana" />
      
      <section>
        <div class="max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto">
          <p>Adentro es una plataforma de servicios que busca el bienestar de las personas. Todo ser humano puede alcanzar un proceso de introspección que le permita llevar una vida más plena, balanceada y más feliz.</p>
          <p>El mindfulness es la capacidad de toda persona para prestar atención al momento presente. Con una atención dirigida e intencionada, se da un proceso natural y accesible, que permite a cualquiera estar en el presente en el día a día. Al traer esa atención plena por medio de los sentidos, se entrena la mente y se modifica el cerebro, llevándonos a canalizar los pensamientos y las emociones de una manera nueva, una manera más saludable y armoniosa.</p>
          <p>La meditación mindfulness, es una manera de explorar y de “limpiar” nuestros pensamientos y emociones, usualmente cargados de distracciones y estrés.</p>
          <p>
            <b>Beneficios de meditar:</b>
          </p>
          <ul>
            <li>Reducción de estrés y ansiedad y los síntomas asociados (insomnio, fatiga, dolores corporales, etc)</li>
            <li>Mejora los estados de ánimo y manejar emociones difíciles</li>
            <li>Fortalece el sistema inmunológico</li>
            <li>Potencia la felicidad</li>
            <li>Favorece la comunicación, la concentración y el aprendizaje</li>
          </ul>

          <p>Al cultivar la práctica del Mindfulness, la ciencia y la experiencia demuestran beneficios en la salud, relaciones, trabajo y felicidad.</p>
          <p>
            Si quiere aprender a meditar con nosotros haga
             <StyledLink to="/contacto/" class="underline"> clic aquí</StyledLink>.
          </p>
        </div>
      </section>

      <section class="decoration">
        <div
          class="max-w-lg md:max-w-lg lg:max-w-3xl mx-auto .border-grey-lightest border-t border-b pt-12 mt-10 sm:pt-5 sm:pb-5"
        >
          <img
            src={DeepWater}
            alt="Adentro"
            class="mx-auto pb-10 m:rounded-lg sm:rounded-sm rounded-lg"
          />
        </div>
      </section>

      <section>
        <div class="max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto">
          <p>Nuestros talleres son aplicables en contextos laborales, de educación, así como personales.</p>

          <p>
            <b>Taller “Mindfulness para la vida”</b>
          </p>
          <p>Un curso de ocho sesiones que brinda herramientas para una profunda transformación. Consiste en una práctica guiada que lleva a cambios positivos comprobados por la comunidad científica.</p>
          <p>
            <b>Taller “Práctico básico de Mindfulness”</b>
          </p>
          <p>Un espacio para romper con la cotidianidad estresante, donde se realizan prácticas informales y formales del Mindfulness. Este taller se realiza en un día.</p>
          <p>
            <b>Taller de “Expresión Creativa”</b>
          </p>
          <p>La creatividad es una de las fortalezas humanas más valoradas en nuestra época. Hoy en día, necesitamos “saber hacer” con la información y la tecnología que tenemos a nuestro alcance. Enfrentamos retos que deben ser abordados con nuevas propuestas integrales y sostenibles. Desarrollar la creatividad por medio de actividades y técnicas mindful, hace que podamos enfrentar la vida con diferentes perspectivas, con acercamientos innovadores, además produciendo bienestar al crear. La creatividad en sí es una herramienta útil para resolver conflictos interpersonales así como personales, que conllevan un proceso de exploración subjetiva. Abre la posibilidad de un proceso de introspección beneficiando al creador.</p>
        </div>
      </section>
      
    </Layout>
  );
}

export default IndexPage;
