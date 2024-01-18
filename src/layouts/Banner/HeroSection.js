import React from "react";

const BannerHeroSection = () => {
  return (
    <>
      <section className="bg-gray-100 rounded-[14px] supports-grid:grid grid-cols-4 sm:grid-cols-12 lg:grid-cols-12 gap-x-6 overflow-hidden relative py-8 sm:py-[42px] lg:py-8 px-6 sm:px-15">
        <div className="col-span-full lg:col-span-6">
          <div className="flex flex-col w-[323px]">
            <h2 className="text-black-900 font-poppins text-[36px] sm:text-[32px] leading-[44px] sm:leading-[40px] font-bold">
              Discover Our Delicious Menu
            </h2>
          </div>
        </div>
        <div className="col-span-full lg:col-span-6 flex flex-col items-start justify-start mt-0">
          <p className="text-black-900 font-poppins text-lg font-light mt-4 sm:mt-0">
            Experience a wide range of mouthwatering dishes prepared with the
            finest ingredients.
          </p>
        </div>
      </section>
    </>
  );
};

export default BannerHeroSection;
