
"use client";

import { Hero } from "./components/Hero";
import { How } from "./components/How";
import { Aboutus } from "./components/Aboutus";
import { BeforeAndAfter } from "./components/BeforeAndAfter";
import { Faq } from "./components/Faq";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

            <Hero
              headline="¡Revolutionize Your Business with Webgo!"
              subheadline="At Webgo, we create expert selling web pages, fully optimized for speed, persuasive texts, technology, and AI systems."
              cta1="Start Your Transformation Now"
              cta2="Learn More About Our Services"
            />

            <How
              step1Title="Consulta Inicial"
              step1Desc="Nuestro equipo de expertos se comunicará con usted para conocer sus necesidades específicas y objetivos comerciales."
              step2Title="Diseño y Desarrollo"
              step2Desc="Utilizamos tecnología de punta y sistemas AI para crear un sitio web altamente optimizado, con textos persuasivos y un diseño atrayente que promueva las ventas."
              step3Title="Lanzamiento y Optimización"
              step3Desc="Lanzamos su sitio web optimizado para la velocidad y continuamos realizando ajustes para garantizar que su sitio esté siempre en su máximo rendimiento."
            />

            <Aboutus
              step1Title="Acerca de nosotros"
              step1Desc="Descripción"
              step2Title="Beneficio 1"
              step2Desc="Descripción beneficio 1"
              step3Title="Beneficio 2"
              step3Desc="Descripción beneficio 2"
            />
<Services />
<BeforeAndAfter />

            <Faq
              faqs={[{"pregunta":"¿Qué servicios ofrece Webgo?","respuesta":"Webgo se especializa en la creación de páginas web optimizadas al 100% en velocidad. También ofrecemos textos persuasivos, tecnología avanzada y sistemas de inteligencia artificial para maximizar las ventas."},{"pregunta":"¿Cómo puede Webgo ayudarme a aumentar mis ventas?","respuesta":"Webgo crea páginas web que están diseñadas para vender. Nuestras webs están optimizadas en velocidad para mantener a los usuarios en su sitio y utilizamos textos persuasivos y tecnología de inteligencia artificial para impulsar las conversiones."},{"pregunta":"¿Qué significa que una página web esté 100% optimizada en velocidad?","respuesta":"Una página web optimizada en velocidad significa que se carga rápidamente, proporcionando una experiencia de usuario fluida. Esto es crucial para mantener a los usuarios en su sitio y para mejorar su clasificación en los motores de búsqueda."},{"pregunta":"¿Cómo utiliza Webgo la inteligencia artificial en sus servicios?","respuesta":"Webgo utiliza la inteligencia artificial para analizar los comportamientos de los usuarios y hacer ajustes en tiempo real para maximizar las conversiones. Esto puede incluir cambios en el diseño del sitio, recomendaciones de productos personalizadas y más."},{"pregunta":"¿Puedo ver algunas páginas web que Webgo ha creado?","respuesta":"Sí, estaremos encantados de mostrarte algunas de las páginas web que hemos creado. Por favor, ponte en contacto con nosotros para organizar una demostración."}]}
            />
<BookAppoinment />
<Footer />
    </main>
  );
}
    