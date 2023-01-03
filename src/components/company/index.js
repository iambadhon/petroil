import React from "react";

const Company = () => {
  return (
    <section className="py-20 md:py-28 bg-gray">
      <div className="md:max-w-mdcontainer lg:max-w-container mx-auto px-2.5">
        <div className="flex flex-col sml:flex-row">
          <div className="sml:w-2/4 md:sml:w-[415px] bg-primary">
            <h3 className="font-pop text-white font-bold text-4xl md:leading-normal md:w-72 py-16 px-10 md:px-0 md:py-24 md:pl-16">
              Learn more about our company
            </h3>
          </div>
          <div
            className="sml:w-2/4 md:sml:w-[724px] flex justify-center items-center py-20 md:py-0"
            style={{
              background:
                "url(images/company-bg.webp) no-repeat center / cover",
            }}
          >
            <a
              href="#"
              className="text-primary font-pop font-semibold text-base bg-white inline-block py-3 px-7 hover:bg-primary hover:text-white duration-300"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
