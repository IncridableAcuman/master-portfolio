import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // npm install lucide-react
import { Button } from '../ui/button';
import '../../app/styles/Global.css';
import { UseTheme } from '../../app/providers/ThemeProvider';
import { useState } from 'react';

const Navbar = () => {
  const { theme, toggleTheme } = UseTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/service", label: "Service" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-[#e0e0e0] dark:from-[#1e1e1e] shadow-md`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1
          className="text-lg md:text-3xl font-semibold cursor-pointer text-blue-500"
          onClick={() => navigate("/")}
        >
          Izzatbek.
        </h1>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="hover:text-blue-500 transition duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side Buttons */}
        <div className="hidden md:flex items-center gap-6">
          <button onClick={toggleTheme}>
            {theme === "light" ? (
              <img
                src="./moon_icon.png"
                alt="moon"
                className="w-6 cursor-pointer"
              />
            ) : (
              <img
                src="./sun_icon.png"
                alt="sun"
                className="w-6 cursor-pointer"
              />
            )}
          </button>

          <Button
            className="text-sm group relative px-6 py-3 bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500
             text-white shadow-md hover:from-sky-400 hover:via-blue-500 hover:to-indigo-600 transition-all duration-300
             hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            variant={"outline"}
          >
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
            </span>
            Connect
            <img
              src="./arrow-icon-dark.png"
              alt="arrow"
              className="w-3 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#1e1e1e] shadow-lg">
          <div className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition duration-300"
              >
                {link.label}
              </Link>
            ))}

            <button onClick={toggleTheme}>
              {theme === "light" ? (
                <img
                  src="./moon_icon.png"
                  alt="moon"
                  className="w-6 cursor-pointer"
                />
              ) : (
                <img
                  src="./sun_icon.png"
                  alt="sun"
                  className="w-6 cursor-pointer"
                />
              )}
            </button>

            <Button
              className="text-sm group relative px-6 py-3 bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500
               text-white shadow-md hover:from-sky-400 hover:via-blue-500 hover:to-indigo-600 transition-all duration-300
               hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              variant={"outline"}
            >
              <span className="relative flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
              </span>
              Connect
              <img
                src="./arrow-icon-dark.png"
                alt="arrow"
                className="w-3 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
