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

  const Cub3D ={
    project: "Cub3D",
    image: "/cub3d.jpg",
    description: "El proyecto Cub3D es un juego de tipo FPS (First Person Shooter) que permite al jugador moverse por un laberinto en 3D, con la capacidad de abrir y cerrar puertas, así como de disparar proyectiles. Se implementó un motor gráfico desde cero, utilizando miniLibX.",
    url_git: "",
    url_web: "",
    tags: [
      { color: "orange", text: "C" },
      { color: "blue", text: "miniLibX" }
    ]
  }

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
            <Card {...Cub3D} />
          </div>
        </div>
      </section>
    </div>
  );
}
