import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

export const Navbar = () => {
  return (
    <nav className="bg-black text-green-500 shadow-md p-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        {/* Información de contacto */}
        <div className="flex items-center space-x-2 text-sm sm:text-base lg:text-lg"> 
          <span className="ml-2">bryanjc.dev@gmail.com</span>
          <span className="ml-2">- Tel: 3233092155</span>
          <a href="https://wa.me/+573233092155" className="text-green-500 hover:text-green-300">
            <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" /> {/* Ajustamos el tamaño del ícono */}
          </a>
        </div>

        {/* Íconos de redes sociales */}
        <div className="flex space-x-4">
          <a href="https://linkedin.com/in/bryan-jimenez-392783228" className="text-green-500 hover:text-green-300">
            <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" /> {/* Ajustamos el tamaño del ícono */}
          </a>
          <a href="https://github.com/bjcGit" className="text-green-500 hover:text-green-300">
            <FaGithub className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" /> {/* Ajustamos el tamaño del ícono */}
          </a>
        </div>
      </div>
    </nav>
  );
};
