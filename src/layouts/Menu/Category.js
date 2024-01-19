import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const MenuCategory = ({
  categories,
  meals,
  config = {
    label: "xl",
  },
}) => {
  const [isMenuCategory, setMenuCategory] = useState({
    menuCategories: categories,
    menuMeals: meals,
  });

  return (
    <>
      <section className="supports-grid:grid grid-cols-4 sm:grid-cols-12 lg:grid-cols-12 gap-y-2 sm:gap-y-4 lg:gap-y-6 gap-x-2 sm:gap-x-4 lg:gap-x-6 relative mt-6 sm:mt-8">
        {isMenuCategory.menuCategories?.map((gtRslt, i) => (
          <div className="col-span-2 sm:col-span-4 lg:col-span-3" key={i}>
            <Link
              className="crdMealappMnuCatgry flex flex-col relative"
              href={`/menu/${gtRslt.strCategory}`}
            >
              <div className="block relative">
                <Image
                  className=" object-cover object-center h-[113px] sm:h-[131px] xl:h-[153px] w-full"
                  src={gtRslt.strCategoryThumb}
                  alt={`Mealapp (${gtRslt.strCategory} - MenuCategory)`}
                  height={170}
                  width={282}
                  loading="lazy"
                  quality="87"
                />
              </div>
              <div className="flex flex-col items-center justify-center absolute inset-y-0 inset-x-0 px-1 sm:px-5 z-[4]">
                <h3 className="text-white font-poppins text-base sm:text-lg xl:text-2xl font-semibold uppercase">
                  {gtRslt.strCategory}
                </h3>
              </div>
            </Link>
          </div>
        ))}

        {isMenuCategory.menuMeals?.map((gtRslt, i) => (
          <div className="col-span-2 sm:col-span-4 lg:col-span-3" key={i}>
            <Link
              className="crdMealappMnuCatgry flex flex-col relative"
              href={`/menu/detail/${gtRslt.idMeal}`}
            >
              <div className="block relative">
                <Image
                  className=" object-cover object-center h-[113px] sm:h-[131px] xl:h-[153px] w-full"
                  src={gtRslt.strMealThumb}
                  alt={`Mealapp (${gtRslt.strMeal} - MenuCategory)`}
                  height={170}
                  width={282}
                  loading="lazy"
                  quality="87"
                />
              </div>
              <div className="flex flex-col items-center justify-center absolute inset-y-0 inset-x-0 px-1 sm:px-5 z-[4]">
                <h3
                  className={`text-white font-poppins ${
                    config.label === "xl"
                      ? "text-base sm:text-lg xl:text-2xl"
                      : "text-base sm:text-lg"
                  } font-semibold text-center uppercase`}
                >
                  {gtRslt.strMeal}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
};

export default MenuCategory;
