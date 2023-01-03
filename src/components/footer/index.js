import React from "react";
import { RiMailUnreadLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoMdArrowRoundUp } from "react-icons/io";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <>
      <section id="footer">
        <div className="bg-[#1F1F1F] py-20 md:sml:py-36 ">
          <div className="md:max-w-mdcontainer lg:max-w-container mx-auto px-2.5">
            <div className="flex flex-col sml:flex-row justify-between">
              <div>
                <a href="#" className="mb-8 inline-block">
                  <picture>
                    <img src="images/footer-logo.png" alt="Logo" />
                  </picture>
                </a>
                <ul className="leading-9 mb-9">
                  <li>
                    <a
                      href="#"
                      className="inline-block text-white font-pop text-sm font-normal  relative pl-6"
                    >
                      <RiMailUnreadLine className="text-xl absolute top-0 left-0" />
                      mail@yourcompany.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block text-white font-pop text-sm font-normal  relative pl-6"
                    >
                      <FiPhoneCall className="text-xl absolute top-[-1px] left-0" />
                      +896 120 5889 (Toll free)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block text-white font-pop text-sm font-normal  relative pl-6"
                    >
                      <GoLocation className="text-xl absolute top-[-1px] left-0" />
                      101 Baker Street, New York, USA, 12345
                    </a>
                  </li>
                </ul>

                <ul className="flex justify-betwwen gap-x-3">
                  <li>
                    <a
                      href="#"
                      className="inline-block text-lg text-white w-8 h-8 rounded-full bg-primary relative border-[1px] border-solid border-transparent hover:border-white hover:bg-transparent duration-300"
                    >
                      <FaFacebookF className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block text-lg text-white w-8 h-8 rounded-full bg-primary relative border-[1px] border-solid border-transparent hover:border-white hover:bg-transparent duration-300"
                    >
                      <AiOutlineTwitter className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block text-lg text-white w-8 h-8 rounded-full bg-primary relative border-[1px] border-solid border-transparent hover:border-white hover:bg-transparent duration-300"
                    >
                      <FaLinkedinIn className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block text-lg text-white w-8 h-8 rounded-full bg-primary relative border-[1px] border-solid border-transparent hover:border-white hover:bg-transparent duration-300"
                    >
                      <AiOutlineInstagram className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="flex justify-between sml:self-center sml:gap-x-10 md:!gap-x-12 lg:!gap-x-28 sml:ml-10 md:!ml-16 mt-8 sml:mt-0 flex-wrap sml:flex-nowrap">
                <div className="w-1/2 sml:w-auto">
                  <h4 className="font-pop text-white text-base font-bold mb-5">
                    Company
                  </h4>
                  <ul className="leading-9">
                    <li>
                      <a
                        href="#"
                        className="font-pop text-white text-sm font-normal hover:text-primary duration-300"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-pop text-white text-sm font-normal hover:text-primary duration-300"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-pop text-white text-sm font-normal hover:text-primary duration-300"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-pop text-white text-sm font-normal hover:text-primary duration-300"
                      >
                        Gallery
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-1/2 sml:w-auto">
                  <h4 className="font-pop text-white text-base font-bold mb-5">
                    Others
                  </h4>
                  <ul className="leading-9">
                    <li>
                      <a
                        href="#"
                        className="font-pop text-white text-sm font-normal hover:text-primary duration-300"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-pop text-white text-sm font-normal hover:text-primary duration-300"
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-pop text-white text-sm font-normal hover:text-primary duration-300"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-pop text-white text-sm font-normal hover:text-primary duration-300"
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full sml:w-auto">
                  <h4 className="font-pop text-white text-base font-bold mb-5 mt-8 sml:mt-0">
                    Certificate
                  </h4>
                  <div className="flex gap-x-1.5">
                    <a href="#">
                      <picture>
                        <img src="images/certificate1.png" alt="Certificate" />
                      </picture>
                    </a>
                    <a href="#">
                      <picture>
                        <img src="images/certificate2.png" alt="Certificate" />
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lightdark">
          <div className="md:max-w-mdcontainer lg:max-w-container mx-auto px-2.5">
            <a
              href="#"
              className="inline-block text-para font-pop text-base font-medium py-11"
            >
              © Copyright 2022 by AltDesain Studio – All right reserved.
            </a>
          </div>
        </div>
      </section>

      <div>
        <ScrollToTop
          smooth
          component={
            <p>
              <IoMdArrowRoundUp />
            </p>
          }
          top="300"
          className="!bg-primary hover:!bg-black text-3xl text-white !right-6 !bottom-6 pl-[5px] !shadow-[0_0_20px_5px_#3634343d]"
        />
      </div>
    </>
  );
};

export default Footer;
