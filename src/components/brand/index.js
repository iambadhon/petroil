import React from "react";

const Brand = () => {
  return (
    <section className="py-16 md:py-28">
      <div className="md:max-w-mdcontainer lg:max-w-container mx-auto px-2.5">
        <div className="flex flex-wrap md:flex-nowrap gap-y-7 md:gap-x-7">
          <div className="w-2/4 md:w-auto">
            <a href="#">
              <picture>
                <img src="images/brand1.png" alt="Brand" />
              </picture>
            </a>
          </div>
          <div className="w-2/4 md:w-auto md:flex md:justify-end">
            <a href="#">
              <picture>
                <img src="images/brand2.png" alt="Brand" />
              </picture>
            </a>
          </div>
          <div className="w-2/4 md:w-auto">
            <a href="#">
              <picture>
                <img src="images/brand3.png" alt="Brand" />
              </picture>
            </a>
          </div>
          <div className="w-2/4 md:w-auto md:flex md:justify-end">
            <a href="#">
              <picture>
                <img src="images/brand4.png" alt="Brand" />
              </picture>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
