"use client";
import { useEffect } from 'react';

import { Card } from './Card';

export function Proyects(){
  const Porfolio = {
    project: "Porfolio personal",
    image: "/porfolio_room.png",
    description: "Proyecto donde buscaba el aprendizaje de three.js y la creación de un porfolio personal atractivo. Me enfoqué en dominar técnicas de renderizado 3D y en implementar animaciones interactivas para mejorar la experiencia del usuario.",
    url_git: "https://github.com/Folkenciyo/PorfolioJuanGuerrero",
    url_web: "https://porfolio-juan-guerrero.vercel.app",
    tags: [
      { color: "yellow", text: "JavaScript" },
      { color: "green", text: "Three.js" },
      { color: "blue", text: "Blender" }
    ]
  };

  const Minishell = {
    project: "Minishell",
    image: "/minishell.png",
    description: "El proyecto MiniShell es un intérprete de línea de comandos que permite ejecutar comandos e interactuar con el sistema operativo, ofreciendo redirección in/out y piping, implementación de estructuras de datos y manipulación de procesos.",
    url_git: "https://github.com/Folkenciyo/MiniShell",
    url_web: "",
    tags: [
      { color: "orange", text: "C" },
    ]
  };

  return (
    <div>
      {/* Sección Proyectos */}
      <section
        id="projects"
        className="min-h-screen flex flex-col justify-center items-center text-center"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <Card {...Porfolio} />

            {/* Card 2 */}
            <Card {...Minishell} />

            {/* Card 3 */}
            
          </div>
        </div>
      </section>
    </div>
  );
}
