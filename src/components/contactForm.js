import React from "react"
import { Link } from "gatsby";

function ContactForm(){
  return(
    <section>
        <div class="max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto">
        
        <form
            class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            name="contact"
            data-netlify="true"
            method="POST"
            action="/enviado"
            netlify-honeypot="no-bots-gracias"
          >
            <div class="mb-4">
              <label class="hidden" for="no-bots-gracias">
                A los bots
                <input type="text" name="no-bots-gracias"/>
              </label>

              <label
                class="block text-grey-darker text-sm font-bold mb-2"
                for="nombre"
              >Nombre Completo:
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline mt-3"
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
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline mt-3"
                id="email"
                name="email"
                type="email"
                placeholder="Tu email"
              />
              </label>
              
            </div>

            <div class="mb-4">
              <label class="block text-grey-darker text-sm font-bold mb-2" for="telefono">Teléfono:
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline mt-3"
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
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline h-24 mt-3"
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
  )
}

export default ContactForm;

