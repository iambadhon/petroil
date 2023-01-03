import React from "react";
import { RiMailUnreadLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

const Header = () => {
  return (
    <header
      id="home"
      className="bg-lightdark py-3.5 border-b-4 border-solid border-yellow"
    >
      <div className="md:max-w-mdcontainer lg:max-w-container mx-auto px-2.5">
        <div className="sml:flex">
          <div className="w-full sml:w-3/4 md:sml:w-3/5 text-white sml:flex">
            <p className="font-pop text-xs pl-6 font-normal relative after:absolute after:top-0 after:right-[-24px] after:w-0 sml:after:w-0.5 after:h-full after:bg-yellow after:content-['']">
              <RiMailUnreadLine className="text-xl absolute top-[-1px] left-0" />
              mail@yourcompany.com
            </p>
            <p className="font-pop text-xs pl-6 font-normal relative sml:ml-12 my-2.5 sml:my-0">
              <FiPhoneCall className="text-xl absolute top-[-1px] left-0" />
              +896 120 5889 (Toll free)
            </p>
          </div>
          <div className="w-full sml:w-1/4 md:sml:w-2/5 text-white ">
            <ul className="flex sml:justify-end gap-x-4 sml:gap-x-5 ">
              <li>
                <a href="#" className="text-lg hover:text-primary duration-300">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#" className="text-lg hover:text-primary duration-300">
                  <AiOutlineTwitter />
                </a>
              </li>
              <li>
                <a href="#" className="text-lg hover:text-primary duration-300">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="#" className="text-lg hover:text-primary duration-300">
                  <AiOutlineInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
