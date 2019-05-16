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

      <Header PageTitle="Msc. Andrea Carranza" />

      <section>
        <div class="max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto">
        <p>
            Andrea Carranza es una psicóloga clínica costarricense, con estudios en arte-terapia y psicoanálisis. Es una de las fundadoras y actual Directora General de la asociación <a href="https://www.asccr.org" title="Sueña en Colores Costa Rica" target="_blank" className="innerLink">
              <style jsx>{`
              .innerLink{
                color:#4a5568;
              }
              `}</style>
              Sueña en Colores</a>. Fundó el proyecto <b>adentro</b> a partir de sus estudios y la práctica de Mindfulness. Actualmente trabaja como terapeuta a nivel privado en la Clínica Litoral.
          </p>

          <p>En su propia búsqueda de sentido, Andrea se fascinó con el psicoanálisis. Eso la llevó a estudiar en la Universidad Centroamericana de Ciencias Sociales, donde concluyó con mención de honor su maestría en Clínica Psicoanalítica. Siendo profesora del curso universitario Creatividad y Psicoanálisis, su búsqueda continuó, intentando abordar la salud mental desde una perspectiva más integral.</p>

          <p>
            Andrea pasa la mayoría de su tiempo estudiando y trabajando en San José. Cada vez que puede se “escapa” a la costa. Desde pequeña el océano y sus alrededores representan una conexión y un sentido de pertenencia. Ha sido el lugar privilegiado para que ella pueda pensar y estar en contacto con la naturaleza, así como apreciar la belleza de todo lo que la rodea. Justamente <StyledLink
              to="http://www.asccr.org"
              target="_blank"
            >Sueña En Colores</StyledLink> inicia sus labores en una comunidad rural ubicada en la zona de Nosara, Guanacaste.
          </p>

          <p>Trabajando en zonas del riesgo es como descubre el arte terapia. Su amor por la fotografía había sido una pieza fundamental para utilizar la creatividad como un medio para alcanzar el bienestar. Rápidamente y de manera empírica, entiende que el arte es una herramienta poderosa para generar conexiones emocionales. El trabajar con niños de bajos recursos, envueltos en altos índices de violencia y emociones difíciles, la hace reflexionar acerca de su propia vida y lo afortunada que fue como niña. Como una manera de expresar su gratitud hacia la vida, Andrea decide dedicar gran parte de su vida ayudar a estos niños.</p>

          <p>Después de haberse colegiado como psicóloga, Andrea está determinada a marcar la diferencia en la vida de las personas sin importar su procedencia. Enfocada en su práctica profesional privada, inicia sus estudios en arte terapia, obteniendo un diplomado de la Universidad Autónoma Metropolitana de México, en Costa Rica. La expresión creativa llega a ser una herramienta para trabajar la salud mental cuando así lo ha requerido.</p>

          <p>Más adelante, Andrea se formó en el curso de psicología positiva con el Maytiv Center de Israel, en Costa Rica.</p>

          <p>En una búsqueda continúa para sentirse plena y más feliz, Andrea llegó a la meditación. Las diferentes circunstancias y retos personales de la vida la llevan al Mindfulness, donde encuentra un balance y un punto de encuentro entre todos sus quehaceres.</p>

          <p>
            Se dedica a investigar y a estudiar el tema, participando de diferentes cursos introductorios como el MBSR entre otros, hasta certificarse con un Diplomado en el Instituto Mexicano de Mindfulness (acreditado por el International Mindfulness Teaching Association) formándose como facilitadora. Lista para enseñar y transmitir todo lo aprendido, Andrea decide compartir su conocimiento y fundar <StyledLink
              to="/"
            >adentro</StyledLink>.
          </p>
        </div>
      </section>

    </Layout>
  );
}

export default IndexPage;
