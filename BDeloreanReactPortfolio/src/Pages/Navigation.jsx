import { Link } from "react-router-dom";
import { useState } from "react"; // Importeer useState voor het beheren van de menu-status
import Logo from "../components/Logo";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className={`flex flex-col md:flex-row justify-between items-center px-10 py-5 bg-customGray bg-opacity-[0.70] transition-all duration-300 ${
          isMenuOpen ? "h-auto" : "h-16"
        }`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <Logo />

          {/* Button for mobile menu */}
          <div className="md:hidden">
            <button className="text-white" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row justify-around items-center gap-5 bg-bgLinks  shadow-sm w-[50%] hover:bg-accentColor">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/#about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/#contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="flex flex-col mt-5 md:hidden gap-5 bg-bgLinks w-full p-5 shadow-md bg-opacity-60">
            <li>
              <Link to="/home" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navigation;
