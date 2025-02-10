export default function Skills() {
  return (
    <div>
      {/* Sección Skills */}
      <section
        id="skills"
        className="min-h-screen flex flex-col justify-center items-center text-center dynamic-background2 py-12"
      >
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl">
          {/* JavaScript */}
          <div className="group relative">
            <div className="bg-yellow-100 text-yellow-800 px-6 py-3 rounded-lg flex items-center space-x-2 transition-transform transform hover:scale-105">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/javascript.svg"
                alt="JavaScript"
                className="w-6 h-6"
              />
              <span className="font-semibold">JavaScript</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          {/* TypeScript */}
          <div className="group relative">
            <div className="bg-blue-100 text-blue-800 px-6 py-3 rounded-lg flex items-center space-x-2 transition-transform transform hover:scale-105">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/typescript.svg"
                alt="TypeScript"
                className="w-6 h-6"
              />
              <span className="font-semibold">TypeScript</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          {/* React */}
          <div className="group relative">
            <div className="bg-blue-50 text-blue-600 px-6 py-3 rounded-lg flex items-center space-x-2 transition-transform transform hover:scale-105">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/react.svg"
                alt="React"
                className="w-6 h-6"
              />
              <span className="font-semibold">React</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          {/* Next.js */}
          <div className="group relative">
            <div className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg flex items-center space-x-2 transition-transform transform hover:scale-105">
              <img
                src="https://simpleicons.org/icons/nextdotjs.svg"
                alt="Next.js"
                className="w-6 h-6"
              />
              <span className="font-semibold">Next.js</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gray-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          {/* Node.js */}
          <div className="group relative">
            <div className="bg-green-100 text-green-800 px-6 py-3 rounded-lg flex items-center space-x-2 transition-transform transform hover:scale-105">
              <img
                src="https://simpleicons.org/icons/nodedotjs.svg"
                alt="Node.js"
                className="w-6 h-6"
              />
              <span className="font-semibold">Node.js</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          {/* Tailwind CSS */}
          <div className="group relative">
            <div className="bg-teal-100 text-teal-800 px-6 py-3 rounded-lg flex items-center space-x-2 transition-transform transform hover:scale-105">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/tailwindcss.svg"
                alt="Tailwind CSS"
                className="w-6 h-6"
              />
              <span className="font-semibold">Tailwind CSS</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          {/* Python */}
          <div className="group relative">
            <div className="bg-blue-100 text-blue-800 px-6 py-3 rounded-lg flex items-center space-x-2 transition-transform transform hover:scale-105">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/python.svg"
                alt="Python"
                className="w-6 h-6"
              />
              <span className="font-semibold">Python</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          {/* C */}
          <div className="group relative">
            <div className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg flex items-center space-x-2 transition-transform transform hover:scale-105">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/c.svg"
                alt="C"
                className="w-6 h-6"
              />
              <span className="font-semibold">C</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gray-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          {/* C++ */}
          <div className="group relative">
            <div className="bg-blue-100 text-blue-800 px-6 py-3 rounded-lg flex items-center space-x-2 transition-transform transform hover:scale-105">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/cplusplus.svg"
                alt="C++"
                className="w-6 h-6"
              />
              <span className="font-semibold">C++</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
