import { useEffect, useState } from "react";
import wub from "../../assets/wub.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navState, setNavState] = useState(false);
  const navigate = useNavigate();

  const onNavScroll = () => {
    if (window.scrollY > 300) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  // Scroll top
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full flex justify-between gap-5 items-center px-5 py-2 z-50 ${
        navState
          ? "backdrop-blur-md bg-dark/60 shadow-primary/20"
          : "bg-dark backdrop-blur-md"
      }`}
    >
      {/* Logo and name */}
      <div className="flex gap-5">
        <div className="flex justify-center items-center gap-3">
          <Link to="/">
            <img className="w-20 md:w-28 duration-300" src={wub} alt="" />
          </Link>
          <p className="text-xl md:text-3xl font-semibold text-primary">
            {/* WUBCS */}
          </p>
        </div>
      </div>

      {/* Navbar in the center for larger screens */}
      <ul className="hidden lg:flex justify-center gap-5 items-center text-white">
        <Navbar />
      </ul>

      {/* Mobile menu toggle button */}
      <button
        className="lg:hidden text-white focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <span className="text-2xl">&#10005;</span> 
        ) : (
          <span className="text-2xl">&#9776;</span> 
        )}
      </button>

      {/* SideNav for mobile */}
      <ul
        onClick={() => setIsMenuOpen(false)}
        className={`absolute lg:hidden top-[69px] right-2 bg-black bg-dark/60 z-50 p-2 text-white w-40 rounded-box transition-all duration-500 ease-in-out ${
          isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <Navbar />
      </ul>
    </div>
  );
};

export default Header;
