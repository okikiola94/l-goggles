import { useEffect, useMemo } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import Lenis from "@studio-freight/lenis";
import "./Header.css";

const Header = ({ isMobileMenuOpen, toggleMobileMenu }) => {
  const lenis = useMemo(() => new Lenis(), []);

  useEffect(() => {
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [lenis]);

  return (
    <>
      <header className="text-white  lg:mx-[10%]">
        <ul className="flex justify-between items-center py-6 lg:px-3 ">
          <div className="flex">
            <span className="flex items-center gap-3">
              <div className="w-[4rem] h-[4rem]">
                <img
                  src={process.env.PUBLIC_URL + "/images/logo.png"}
                  alt="An example SVG"
                  className="w-full h-full rounded-full"
                />
              </div>
              <div className="flex flex-col pt-3">
                <p>Okikiola Farominiyi</p>
                <small className="uppercase text-[#737373]">
                  software developer
                </small>
              </div>
            </span>
          </div>
          {/* <div className="hidden md:flex gap-[2rem] items-center">
            <li className="nav-item">
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="works" smooth={true} duration={500}>
                Works
              </Link>
            </li>
          </div> */}
          <div className="hidden md:block bg-gradient-custom ">
            <button className="cursor-pointer border-2 rounded-2xl px-4 py-1 flex items-center border-[#737373]">
              <li className="  ">
                <Link to="contact" smooth={true} duration={500}>
                  Contact
                </Link>
              </li>
            </button>
          </div>
          <div className="md:hidden flex items-center z-50">
            <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </ul>
      </header>

      {isMobileMenuOpen && (
        <div className="mobile-menu md:hidden">
          <ul className="flex flex-col items-start">
            {/* <li className="nav-item">
              <Link
                to="home"
                smooth={true}
                duration={500}
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                smooth={true}
                duration={500}
                onClick={toggleMobileMenu}
              >
                Meet Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="works"
                smooth={true}
                duration={500}
                onClick={toggleMobileMenu}
              >
                Works
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={toggleMobileMenu}
              >
                Contact me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
