import React from "react";

const Service = () => {
  return (
    <section id="service">
      <div className="flex flex-col md:flex-row gap-y-5 md:gap-y-0 flex-wrap px-2.5 md:px-0">
        <div className="md:w-2/4 flex flex-col md:justify-center md:items-end mb-3 md:mb-0">
          <h1 className="font-pop font-bold text-4xl md:text-5xl lg:!text-[64px] leading-normal md:mr-12 lg:mr-20 xl:mr-36 mb-3 md:mb-1">
            Our Services
          </h1>
          <p className="font-pop text-base text-para font-medium md:w-[300px] lg:w-[410px] md:mr-12 lg:mr-20 xl:mr-36">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div
          className="md:w-2/4"
          style={{
            background: "url(images/service-bg1.webp) no-repeat center / cover",
          }}
        >
          <div className="h-full w-full bg-overlay py-20 md:py-20 lg:!py-36 px-10 md:px-12 lg:!px-20 xl:!px-28">
            <h3 className="font-pop font-bold text-white text-3xl md:text-4xl md:leading-normal">
              Modern natural oil and gas refineries.
            </h3>
            <a
              href="#"
              className="text-white font-pop font-semibold text-base bg-primary border-solid border-transparent border-2 inline-block py-3 px-7 mt-8 hover:bg-transparent hover:border-white duration-300"
            >
              LEARN MORE
            </a>
          </div>
        </div>
        <div
          className="md:w-2/4"
          style={{
            background: "url(images/service-bg2.webp) no-repeat center / cover",
          }}
        >
          <div className="h-full w-full bg-overlay py-20 md:py-20 lg:!py-36 px-10 md:px-12 lg:!px-20 xl:!px-28">
            <h3 className="font-pop font-bold text-white text-3xl md:text-4xl md:leading-normal">
              Supply of national industries.
            </h3>
            <a
              href="#"
              className="text-white font-pop font-semibold text-base bg-primary border-solid border-transparent border-2 inline-block py-3 px-7 mt-8 hover:bg-transparent hover:border-white duration-300"
            >
              LEARN MORE
            </a>
          </div>
        </div>
        <div
          className="md:w-2/4"
          style={{
            background: "url(images/service-bg3.webp) no-repeat center / cover",
          }}
        >
          <div className="h-full w-full bg-overlay py-20 md:py-20 lg:!py-36 px-10 md:px-12 lg:!px-20 xl:!px-28">
            <h3 className="font-pop font-bold text-white text-3xl md:text-4xl md:leading-normal">
              National fuel distribution and supply.
            </h3>
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

export default Service;
