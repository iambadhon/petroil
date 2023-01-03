import React from "react";

const Supplier = () => {
  return (
    <section className="mt-16 md:mt-[78px]">
      <div
        className="md:max-w-mdcontainer lg:max-w-container mx-auto px-2.5"
        id="about"
      >
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-auto md:w-[275px] lg:!w-[290px]">
            <h1 className="font-pop font-bold text-4xl lg:text-5xl md:!leading-normal mb-4 md:mb-0">
              The biggest supplier on the country
            </h1>
          </div>
          <div className="w-auto sml:w-[550px] lg:!w-[650px] flex items-center">
            <p className="font-pop text-base text-para font-medium">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution.
            </p>
          </div>
        </div>
      </div>
      <div
        id="gallery"
        className="flex flex-col sml:flex-row flex-wrap lg:flex-nowrap justify-between gap-y-5 lg:gap-y-0 lg:gap-x-7 mt-8 md:mt-14 mb-10 lg:mb-7 px-2.5 lg:px-0"
      >
        <div className="w-full sml:w-[48.5%] lg:!w-auto">
          <picture>
            <img
              className="w-full"
              src="images/supplier1.webp"
              alt="Supplier"
            />
          </picture>
        </div>
        <div className="w-full sml:w-[48.5%] lg:!w-auto">
          <picture>
            <img
              className="w-full"
              src="images/supplier2.webp"
              alt="Supplier"
            />
          </picture>
        </div>
        <div className="w-full sml:w-[48.5%] lg:!w-auto">
          <picture>
            <img
              className="w-full"
              src="images/supplier3.webp"
              alt="Supplier"
            />
          </picture>
        </div>
        <div className="w-full sml:w-[48.5%] lg:!w-auto">
          <picture>
            <img
              className="w-full"
              src="images/supplier4.webp"
              alt="Supplier"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Supplier;
