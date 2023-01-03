import React, { useEffect, useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";

const Navbar = () => {
  let [navOpen, setNavOpen] = useState(false);
  let [sticky, setsticky] = useState(false);

  let handleNavOpen = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setNavOpen(true);
    }

    function screenResize(e) {
      if (window.innerWidth >= 1024) {
        setNavOpen(true);
      } else {
        setNavOpen(false);
      }
    }
    window.addEventListener("resize", screenResize);

    let handleScroll = () => {
      setsticky(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${sticky ? "nav_sticky" : ""}`}>
      <div className="bg-primary py-5 lg:py-7 relative sticky_padding">
        <div className="md:max-w-mdcontainer lg:max-w-container mx-auto px-2.5">
          <div className="lg:flex relative">
            <div className="lg:w-1/5">
              <a href="/" className="cursor-pointer inline-block">
                <picture>
                  <img src="images/logo.png" alt="Logo" />
                </picture>
              </a>
            </div>
            <button
              onClick={handleNavOpen}
              className="block lg:hidden absolute top-0.5 right-2.5 sml:right-0 text-4xl text-white border-2 border-white border-solid"
            >
              {navOpen ? <IoMdClose /> : <AiOutlineBars />}
            </button>
            {navOpen && (
              <div className="memu bg-red-700 lg:bg-transparent pb-2.5 lg:pb-0 mt-2 lg:mt-0 lg:w-4/5 lg:flex items-center justify-end">
                <ul className="flex flex-col lg:flex-row lg:gap-x-12 gap-y-3 lg:gap-y-0  font-pop text-white font-semibold text-base text-center lg:text-left py-2.5">
                  <li className="overflow-x-hidden">
                    <Link
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={800}
                      className="relative block lg:inline-block py-1 after:absolute  after:content-[''] after:bottom-0 after:left-[-100%] after:h-0.5 after:w-[calc(100%-0%)] after:bg-white hover:after:left-0 after:duration-300 cursor-pointer"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="overflow-x-hidden ">
                    <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={800}
                      className="relative block lg:inline-block py-1 after:absolute  after:content-[''] after:bottom-0 after:left-[-100%] after:h-0.5 after:w-[calc(100%-0%)] after:bg-white hover:after:left-0 after:duration-300 cursor-pointer"
                    >
                      About
                    </Link>
                  </li>
                  <li className="overflow-x-hidden">
                    <Link
                      to="gallery"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={800}
                      className="relative block lg:inline-block py-1 after:absolute  after:content-[''] after:bottom-0 after:left-[-100%] after:h-0.5 after:w-[calc(100%-0%)] after:bg-white hover:after:left-0 after:duration-300 cursor-pointer"
                    >
                      Gallery
                    </Link>
                  </li>
                  <li className="overflow-x-hidden">
                    <Link
                      to="service"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={800}
                      className="relative block lg:inline-block py-1 after:absolute  after:content-[''] after:bottom-0 after:left-[-100%] after:h-0.5 after:w-[calc(100%-0%)] after:bg-white hover:after:left-0 after:duration-300 cursor-pointer"
                    >
                      Services
                    </Link>
                  </li>
                  <li className="overflow-x-hidden">
                    <Link
                      to="blog"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={800}
                      className="relative block lg:inline-block py-1 after:absolute  after:content-[''] after:bottom-0 after:left-[-100%] after:h-0.5 after:w-[calc(100%-0%)] after:bg-white hover:after:left-0 after:duration-300 cursor-pointer"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
                <div className="text-center lg:text-left">
                  <Link
                    to="footer"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={800}
                    className="text-white font-pop font-semibold text-base uppercase border-solid border-white border-2 inline-block py-3 px-7 lg:ml-16 hover:bg-white hover:text-primary duration-300 cursor-pointer"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
