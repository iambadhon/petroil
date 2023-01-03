import React from "react";

const Banner = () => {
  return (
    <section
      style={{
        background: "url(images/banner.webp) no-repeat center / cover",
      }}
    >
      <div className="h-full w-full bg-overlay pt-48 pb-28 md:pt-64 md:pb-48 lg:!pt-80 lg:!pb-64">
        <div className="md:max-w-mdcontainer lg:max-w-container mx-auto px-2.5">
          <div>
            <h1 className=" font-pop text-white text-4xl md:text-[55px] lg:!text-[64px] sml:leading-10 md:sml:leading-normal font-bold lg:w-[842px]">
              We exist since 1975 on the oil and gas industry.
            </h1>
            <a
              href="#"
              className="text-white font-pop font-semibold text-base bg-primary border-solid border-transparent border-2 inline-block py-3 px-7 mt-8 hover:bg-transparent hover:border-white duration-300"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
