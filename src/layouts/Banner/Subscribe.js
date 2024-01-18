import React from "react";

const BannerSubscribe = () => {
  return (
    <>
      <section className="bg-black-900 rounded-[14px] supports-grid:grid grid-cols-4 sm:grid-cols-12 lg:grid-cols-12 gap-x-6 overflow-hidden relative mt-20 sm:mt-[162px] mb-13 py-8 sm:py-10 lg:py-8 px-6 sm:px-11">
        <div className="col-span-full lg:col-span-6">
          <div className="flex flex-col">
            <h2 className="text-white font-poppins text-[36px] sm:text-[32px] leading-[44px] sm:leading-[40px] font-bold">
              Discover Delicious Homemade Recipes Here
            </h2>
            <p className="text-white font-poppins text-lg font-light mt-4">
              Join our community and get access to exclusive content
            </p>
          </div>
        </div>
        <div className="col-span-full lg:col-span-6 flex flex-col items-start lg:items-end justify-start lg:justify-center mt-8 lg:mt-0">
          <button className="inline-flex flex-col items-center justify-center rounded-xl bg-white text-black-900 font-poppins text-base font-semibold text-center py-6 px-8 w-full sm:w-[235px]">
            Subscribe
          </button>
        </div>
      </section>
    </>
  );
};

export default BannerSubscribe;
