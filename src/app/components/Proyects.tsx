export function Proyects() {
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
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
              <img
                src="/porfolio_room.png"
                alt="Proyecto 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Porfolio personal</h3>
                <p className="text-gray-600 mb-4">
                    Proyecto donde buscaba el aprendizaje de three.js y la creación de un porfolio personal atractivo. Me enfoqué en dominar técnicas de renderizado 3D y en implementar animaciones interactivas para mejorar la experiencia del usuario.
                </p>
                <div className="flex flex-wrap justify-center items-center gap-2 mb-4">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                    JavaScript
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    Three.js
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    Blender
                  </span>
                </div>
                <div className="flex flex-row justify-center items-center space-x-4">
                    <a
                    href="https://github.com/Folkenciyo/PorfolioJuanGuerrero"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                    Ver en GitHub
                    </a>
                    <a
                    href="https://porfolio-juan-guerrero.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                    Ir a la página
                    </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
              <img
                src="/minishell.png"
                alt="Proyecto 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Minishell</h3>
                <p className="text-gray-600 mb-4">
                El proyecto MiniShell es un intérprete de línea de comandos que permite ejecutar comandos e interactuar con 
                el sistema operativo, ofreciendo redirección de entrada/salida y piping.
                </p>
                <div className="flex flex-wrap justify-center items-center gap-2 mb-4">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                    JavaScript
                  </span>
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                    Tailwind CSS
                  </span>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                    Firebase
                  </span>
                </div>
                <a
                  href="https://github.com/tu-usuario/tu-repositorio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Ver en GitHub
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Proyecto 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Nombre del Proyecto</h3>
                <p className="text-gray-600 mb-4">
                  Breve descripción del proyecto. Puedes mencionar el objetivo
                  principal y las características clave.
                </p>
                <div className="flex flex-wrap justify-center items-center gap-2 mb-4">
                  <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">
                    Python
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                    Flask
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    PostgreSQL
                  </span>
                </div>
                <a
                  href="https://github.com/tu-usuario/tu-repositorio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Ver en GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
