"use client";

import Skills from "./components/Skills";
import { Proyects } from "./components/Proyects";
import { MouseEffect } from "./components/MouseEffect";
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Navbar } from './components/Navbar';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [copied, setCopied] = useState(false);
  const isNotMobile = useMediaQuery({ minWidth: 768 });

  const handleCopy = () => {
    navigator.clipboard.writeText("juanguerrero.dev@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
    });
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setCurrentSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (event.deltaY > 0 && currentSection < sections.length - 1) {
        sections[currentSection + 1].scrollIntoView({ behavior: "smooth" });
      } else if (event.deltaY < 0 && currentSection > 0) {
        sections[currentSection - 1].scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentSection]);

  return (
    <>
      {isNotMobile && <Navbar />}
        <main className="container mx-auto px-4">

          <div className="min-h-screen dynamic-background text-gray-300 relative overflow-hidden">
            <div className="fixed top-4  md:left-4 flex md:space-x-4 bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg opacity-75 hover:opacity-100 transition-opacity pointer-events-auto">
              <a href="https://www.linkedin.com/in/juanguerrerodeveloper/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/Folkenciyo" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
            <div
              className="pointer-events-auto fixed top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg opacity-75 hover:opacity-100 transition-opacity cursor-pointer hidden md:block"
              onClick={handleCopy}
            >
              {copied ? "¡Copiado!" : "juanguerrero.dev@gmail.com"}
            </div>
            <main className="container mx-auto px-4 py-8 space-y-16">

              {/* Sección Home */}

              <section
                id="home"
                className="min-h-screen flex flex-col justify-center items-center text-center"
              >
                {isNotMobile && <MouseEffect />}
                <div className="flex flex-col items-center">
                  <img
                    src="/juan_guerrero.jpg"
                    alt="Juan Guerrero"
                    className="mb-10 w-60 h-50 object-cover rounded-full border-4 border-gray-300 shadow-lg"
                  />
                  <h1 className="text-5xl font-bold mb-4">&lt;/&gt;Juan Guerrero</h1>
                  <p className="text-xl text-gray-400 max-w-2xl">
                    No soy un robot, soy un desarrollador especialista en
                    ciberseguridad, apasionado por la programación y la tecnología.
                  </p>
                </div>
              </section>
              {/* Sección About Me */}
              <section
                id="about"
                className="min-h-screen flex flex-col justify-center items-center text-center"
              >
                <h2 className="text-4xl font-bold mb-4">Sobre Mí</h2>
                <p className="text-lg text-gray-400 max-w-2xl">
                  Destaco por mi capacidad analítica, resolución de problemas y
                  trabajo en equipo, cualidades que aplico para enfrentar desafíos y
                  aportar valor en proyectos tecnológicos. Soy adaptable, meticuloso,
                  siempre busco la innovación tecnológica y la eficiencia en mis
                  soluciones. A demás, cuento con conocimientos en programación
                  general, incluyendo lenguajes como C++, Python y JavaScript.
                </p>
              </section>

              <Skills />

              {/* Sección Proyectos */}
              <Proyects />
              {/* Sección Contacto */}
              <section
                id="contact"
                className="min-h-screen flex flex-col justify-center items-center text-center"
              >
                <h2 className="text-4xl font-bold mb-4">Contacto</h2>
                <p className="text-lg text-gray-400 mb-4">
                  ¿Quieres ponerte en contacto conmigo? ¡Envíame un mensaje!
                </p>
                <div className="flex flex-col items-center space-y-4 mt-8">
                  <input
                    type="text"
                    value="juanguerrero.dev@gmail.com"
                    readOnly
                    className="px-5 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 w-64"
                  />
                  <div className="flex items-center space-x-2">
                    <a
                      href="mailto:juanguerrero.dev@gmail.com"
                      className="pointer-events-auto px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                    >
                      Enviar Email
                    </a>
                    <button
                      onClick={() =>
                        navigator.clipboard.writeText("juanguerrero.dev@gmail.com")
                      }
                      className="pointer-events-auto px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                    >
                      Copiar Email
                    </button>
                  </div>
                </div>
              </section>
            </main>
            <footer className="bg-gray-950 py-4 flex flex-row">
              <ShieldCodeIcon className="w-8 h-8 text-cyan-500 mb-2" />
              <div className="container mx-auto flex flex-col items-center">
                <p className="text-gray-500">
                  &copy; {new Date().getFullYear()} Juan Guerrero. Todos los derechos
                  reservados.
                </p>
              </div>
            </footer>
          </div>
        </main>
    </>
  );
}
interface IconProps {
  className: string;
}

// Icono combinado de Escudo + Código
const ShieldCodeIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32 4.79999L54.4 12.8V32C54.4 44.8 44.8 56 32 59.2C19.2 56 9.6 44.8 9.6 32V12.8L32 4.79999Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.3999 28.8L28.7999 35.2L41.5999 22.4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 44L28 40L24 36"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M40 36L36 40L40 44"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
