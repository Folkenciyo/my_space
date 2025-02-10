// components/Header.js
import Link from 'next/link';

export function Header () {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-950/80 backdrop-blur-md z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
         {/*  <ShieldCodeIcon className="w-8 h-8 text-cyan-500" /> */}
          <span className="text-xl font-bold text-gray-300">Juan Guerrero</span>
        </div>
        <nav className="space-x-4">
          <Link href="#home">
            <a className="text-gray-300 hover:text-cyan-500">Home</a>
          </Link>
          <Link href="#about">
            <a className="text-gray-300 hover:text-cyan-500">Sobre Mí</a>
          </Link>
          <Link href="#skills">
            <a className="text-gray-300 hover:text-cyan-500">Skills</a>
          </Link>
          <Link href="#projects">
            <a className="text-gray-300 hover:text-cyan-500">Proyectos</a>
          </Link>
          <Link href="#contact">
            <a className="text-gray-300 hover:text-cyan-500">Contacto</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

