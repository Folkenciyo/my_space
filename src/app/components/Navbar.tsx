export function Navbar() {
    return (
      <nav className="fixed left-4 top-1/2 -translate-y-1/2 backdrop-blur-sm bg-white/10 shadow-lg shadow-black/10 rounded-full p-3 z-50">
        <div className="flex flex-col gap-4 items-center">
          <a href="#home" className="p-2 hover:bg-white/5 rounded-full transition-all">
            <HomeIcon className="h-5 w-5 text-cyan-400" />
          </a>
          <a href="#about" className="p-2 hover:bg-white/5 rounded-full transition-all">
            <UserIcon className="h-5 w-5 text-cyan-400" />
          </a>
          <a href="#skills" className="p-2 hover:bg-white/5 rounded-full transition-all">
            <SkillsIcon className="h-5 w-5 text-cyan-400" />
          </a>
          <a href="#projects" className="p-2 hover:bg-white/5 rounded-full transition-all">
            <FolderIcon className="h-5 w-5 text-cyan-400" />
          </a>
          <a href="#contact" className="p-2 hover:bg-white/5 rounded-full transition-all">
            <ChatIcon className="h-5 w-5 text-cyan-400" />
          </a>
        </div>
      </nav>
    );
  }
  interface IconProps {
    className: string;
  }
  
  // Iconos (puedes usar Heroicons o cualquier otra librería)
  const HomeIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  );
  
// Iconos SVG
const UserIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);
  
const FolderIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
  </svg>
);

const ChatIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.052v-4.508c0-1.131-.673-2.136-1.711-2.584l-1.447-.719a6.372 6.372 0 00-3.476 0l-1.447.719c-1.038.448-1.711 1.453-1.711 2.584v4.508c-.34 0-.68-.025-1.02-.052-1.133-.094-1.98-1.057-1.98-2.193V10.608c0-.97.616-1.813 1.5-2.097V6.25a3 3 0 013-3h3.379c.796 0 1.559.316 2.122.879l1.582 1.582a3 3 0 002.122.879H18a3 3 0 013 3v2.261z" />
  </svg>
);

  const SkillsIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-4.97 0-9 4.03-9 9 0 3.9 2.51 7.24 6.04 8.48.34.11.71.02.97-.24l1.59-1.59a1.5 1.5 0 011.06-.44h.68a1.5 1.5 0 011.06.44l1.59 1.59c.26.26.63.35.97.24 3.53-1.24 6.04-4.58 6.04-8.48 0-4.97-4.03-9-9-9zm0 1.5c4.14 0 7.5 3.36 7.5 7.5 0 3.14-1.91 5.83-4.68 6.97l-1.59-1.59a3 3 0 00-2.12-.88h-.68a3 3 0 00-2.12.88l-1.59 1.59C6.41 17.08 4.5 14.39 4.5 11.25c0-4.14 3.36-7.5 7.5-7.5z" />
    </svg>
  );