import React from "react";
import { FaAngleRight } from "react-icons/fa";

const Blog = () => {
  return (
    <section className="py-20 md:py-28 bg-gray" id="blog">
      <div className="md:max-w-mdcontainer lg:max-w-container mx-auto px-2.5">
        <div className="grid sml:grid-cols-2 lg:!grid-cols-3 gap-y-5 lg:gap-y-0 sml:gap-x-5 lg:!gap-x-7">
          <div
            style={{
              background: "url(images/blog1.webp) no-repeat center / cover",
            }}
          >
            <div className="h-ful w-ful bg-overlay px-11 pt-[75px]">
              <h3 className=" font-pop text-white text-[24px] font-bold md:w-[250px]">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h3>
              <a
                href="#"
                className="text-white font-pop font-semibold text-base bg-[#FFFFFF80] border-solid border-transparent border-2 inline-block py-3 px-7 mt-[52px] mb-14 hover:bg-transparent hover:border-white duration-300"
              >
                LEARN MORE
              </a>
            </div>
          </div>
          <div
            style={{
              background: "url(images/blog2.webp) no-repeat center / cover",
            }}
          >
            <div className="h-ful w-ful bg-overlay px-11 pt-[75px]">
              <h3 className=" font-pop text-white text-[24px] font-bold md:w-[250px]">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h3>
              <a
                href="#"
                className="text-white font-pop font-semibold text-base bg-[#FFFFFF80] border-solid border-transparent border-2 inline-block py-3 px-7 mt-[52px] mb-14 hover:bg-transparent hover:border-white duration-300"
              >
                LEARN MORE
              </a>
            </div>
          </div>
          <div
            style={{
              background: "url(images/blog3.webp) no-repeat center / cover",
            }}
          >
            <div className="h-ful w-ful bg-overlay px-11 pt-[75px]">
              <h3 className=" font-pop text-white text-[24px] font-bold md:w-[250px]">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h3>
              <a
                href="#"
                className="text-white font-pop font-semibold text-base bg-[#FFFFFF80] border-solid border-transparent border-2 inline-block py-3 px-7 mt-[52px] mb-14 hover:bg-transparent hover:border-white duration-300"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <a
            href="#"
            className="text-black font-pop font-bold text-base inline-block mt-7 hover:text-primary duration-300 relative pr-6"
          >
            MORE FROM THE BLLOG
            <FaAngleRight className="text-2xl absolute top-0 right-0" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
