"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import Link from "next/link";
import Skills from "./components/Skills";
import { Proyects } from "./components/Proyects";
import { MouseEffect } from "./components/MouseEffect";


export default function Home() {
  return (
    <div className="min-h-screen dynamic-background text-gray-300 relative overflow-hidden">
        <div className="fixed top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg opacity-75 hover:opacity-100 transition-opacity">
    juanguerrero.dev@gmail.com
  </div>
      <main className="container mx-auto px-4 py-8 space-y-16">
        {/* Sección Home */}
        <section
          id="home"
          className="min-h-screen flex flex-col justify-center items-center text-center"
        >
          <MouseEffect />
          <div className="flex flex-col items-center">
            <img
              src="/juan_guerrero.jpg"
              alt="Juan Guerrero"
              className="mb-10 w-40 h-50 object-cover rounded-full border-4 border-gray-300 shadow-lg"
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
            trabajo en equipo, cualidades que aplico para enfrentar desafíos
            yaportar valor en proyectos tecnológicos. Soy adaptable, meticuloso,
            siempre busco la innovación tecnológica y la eficiencia en
            missoluciones. Además, cuento con conocimientos en programación
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
  <div className="flex flex-col items-center space-y-4">
    <div className="flex items-center space-x-2">
      <input
        type="text"
        value="juanguerrero.dev@gmail.com"
        readOnly
        className="px-5 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-700"
      />
      <a
        href="mailto:juanguerrero.dev@gmail.com"
        className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
      >
        Enviar Email
      </a>
      <button
        onClick={() => navigator.clipboard.writeText('juanguerrero.dev@gmail.com')}
        className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
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
  );
}

// Icono combinado de Escudo + Código
const ShieldCodeIcon = ({ className }) => (
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
