import React, { useState, useEffect } from "react";
import getConfig from "next/config";
import Head from "next/head";
import Image from "next/image";

// @Get .config
const { publicRuntimeConfig } = getConfig();

// @lib
import { getFetch } from "@lib/controller/API";

// @components
import Container from "@components/Container";

// @layouts
import BannerHeroSection from "@layouts/Banner/HeroSection";
import MenuCategory from "@layouts/Menu/Category";
import BannerSubscribe from "@layouts/Banner/Subscribe";

const Home = (props) => {
  const [isMenuCategory, setMenuCategory] = useState(props.menuCategory);

  return (
    <>
      {/* @Head */}
      <Head>
        <title>{`${publicRuntimeConfig.siteTitle}`}</title>
        <meta name="title" content={`${publicRuntimeConfig.siteTitle}`} />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          property="og:description"
          content={publicRuntimeConfig.siteDesc}
        />
        <meta
          property="og:image"
          content="https://fybcklahukimaqfaepry.supabase.co/storage/v1/object/public/Thumbnails/mealapp/mealappShareLink.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="twitter:title"
          content={`${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          property="twitter:description"
          content={publicRuntimeConfig.siteDesc}
        />
        <meta
          property="twitter:image"
          content="https://fybcklahukimaqfaepry.supabase.co/storage/v1/object/public/Thumbnails/mealapp/mealappShareLink.jpg"
        />
      </Head>

      <main className="relative mt-[122px]">
        {/* @header */}
        <header>
          <Container>
            <div className="supports-grid:grid grid-cols-4 sm:grid-cols-12 lg:grid-cols-12 gap-y-2 sm:gap-y-4 lg:gap-y-6 gap-x-2 sm:gap-x-4 lg:gap-x-6 relative mt-6 sm:mt-8">
              <div className="col-span-full lg:col-span-6">
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <span className="text-black-900 font-poppins text-lg font-normal">
                      Discover something new and exciting!
                    </span>
                    <h1 className="text-black-900 font-poppins text-[58px] leading-[72px] font-bold mt-3">
                      Find Delicious Recipes in Minutes.
                    </h1>
                  </div>
                  <p className="text-black-900 font-poppins text-lg font-normal mt-8">
                    Mealapp makes it easy to discover new recipes and cook
                    delicious meals in no time. With our extensive collection of
                    recipes, you'll never run out of ideas for your next meal.
                  </p>
                  <div className="inline-flex flex-col sm:flex-row gap-y-6 gap-x-6 mt-8">
                    <div className="flex-1 flex flex-col">
                      <h2 className="text-black-900 font-poppins text-xl font-semibold">
                        Easy Cooking
                      </h2>
                      <p className="text-black-900 font-poppins text-lg mt-4.5">
                        Explore a wide variety of recipes from around the world
                        and unleash your inner chef.
                      </p>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <h2 className="text-black-900 font-poppins text-xl font-semibold">
                        Quick Results
                      </h2>
                      <p className="text-black-900 font-poppins text-lg mt-4.5">
                        Get access to step-by-step instructions and create
                        delicious meals in no time.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col mt-11">
                    <button className="inline-flex flex-col items-center justify-center rounded-xl bg-black-900 text-white font-poppins text-base font-semibold text-center py-6 px-8 w-full sm:w-[235px]">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-span-full lg:col-span-6 mt-8 sm:mt-0 pl-0 lg:pl-11">
                <div>
                  <Image
                    className="rounded-[20px] overflow-hidden object-cover object-center h-[495px] lg:h-[651px] w-full"
                    src={"/assets/images/mealappHeader.jpg"}
                    alt={`Mealapp (Header)`}
                    height={2000}
                    width={1335}
                    loading="lazy"
                    quality="87"
                  />
                </div>
              </div>
            </div>
          </Container>
        </header>

        {/* @quote */}
        <section className="overflow-hidden xl:overflow-[none] relative mt-[122px] mb-28 xl:mb-[142px]">
          <Container>
            <blockquote className="relative mt-8 mx-auto w-full max-w-[926px]">
              <svg
                className="text-gray-100 absolute -top-6 -start-8 h-16 w-16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                  fill="currentColor"
                />
              </svg>

              <div className="relative z-10">
                <p className="text-black-900 font-poppins text-[24px] sm:text-[32px] leading-[32px] sm:leading-[40px] font-bold">
                  <em>
                    Jelajahi beragam pilihan resep lezat kami, mulai dari resep
                    klasik populer hingga favorit musiman. Dengan Mealapp, Anda
                    tidak akan pernah kehabisan inspirasi untuk makanan Anda
                    berikutnya
                  </em>
                </p>
              </div>
            </blockquote>
          </Container>
        </section>

        <Container>
          {/* @bannerHeroSection */}
          <BannerHeroSection />

          {/* @menuCategory */}
          <MenuCategory {...isMenuCategory} />

          {/* @bannerSubscribe */}
          <BannerSubscribe />
        </Container>
      </main>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const gMenuCategory = await getFetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );

  try {
    return {
      props: {
        menuCategory: gMenuCategory || [],
      },

      revalidate: 3600,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
