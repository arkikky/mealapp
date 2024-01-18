import React from "react";

const BannerHeroLabelSection = ({ title = "Discover Our Delicious Menu" }) => {
  return (
    <>
      <section className="bg-gray-100 rounded-[14px] supports-grid:grid grid-cols-4 sm:grid-cols-12 lg:grid-cols-12 gap-x-6 overflow-hidden relative py-8 sm:py-[42px] lg:py-12 px-6 sm:px-15">
        <div className="col-span-full">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-black-900 font-poppins text-[36px] sm:text-[32px] leading-[44px] sm:leading-[40px] font-bold">
              {title}
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerHeroLabelSection;
