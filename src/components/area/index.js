import React from "react";

const Area = () => {
  return (
    <section>
      <div>
        <picture>
          <img className="w-full" src="images/area.webp" alt="Area" />
        </picture>
      </div>
      <div className="bg-primary border-b-4 border-solid border-yellow">
        <div className="md:max-w-mdcontainer lg:max-w-container mx-auto px-2.5">
          <div className="flex flex-col sml:flex-row justify-between py-11">
            <div className="self-center">
              <h3 className="font-pop text-white text-center sml:text-left font-bold text-4xl ">
                Want to join as member branch in your area?
              </h3>
            </div>
            <div className="self-center mt-8 sml:mt-0">
              <a
                href="#"
                className="text-white font-pop font-semibold text-base uppercase border-solid border-white border-2 inline-block py-3 px-7 sml:ml-16 hover:bg-white hover:text-primary duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Area;
