import React, { useState } from "react";
import ReactPlayer from "react-player/lazy";
import ReactHtmlParser from "react-html-parser";
import getConfig from "next/config";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

// @Get .config
const { publicRuntimeConfig } = getConfig();

// @lib
import { getFetch } from "@lib/controller/API";

// @components
import Container from "@components/Container";

// @layouts
import BannerHeroLabelSection from "@layouts/Banner/HeroLabelSection";
import BannerSubscribe from "@layouts/Banner/Subscribe";

const MenuDetail = (props) => {
  const [isMenuDetail, setMenuDetail] = useState(props.menuDetail.meals[0]);

  const santzdContent = ReactHtmlParser(isMenuDetail.strInstructions);

  return (
    <>
      {/* @Head */}
      <Head>
        <title>{`${isMenuDetail.strMeal} | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`${isMenuDetail.strMeal} | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`${isMenuDetail.strMeal} | ${publicRuntimeConfig.siteTitle}`}
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
          content={`${isMenuDetail.strMeal} | ${publicRuntimeConfig.siteTitle}`}
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
        <Container>
          <section className="mb-4 sm:mb-6">
            <ol
              className="flex items-center whitespace-nowrap"
              aria-label="Breadcrumb"
            >
              <li className="inline-flex items-center">
                <Link
                  className="flex items-center text-black-900 font-poppins text-base font-medium hover:underline"
                  href="/"
                >
                  Home
                </Link>

                <svg
                  className="mx-3 h-auto w-5"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 15.5L12.5 10.5L7.5 5.5"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
              <li className="inline-flex items-center">
                <Link
                  className="flex items-center text-black-900 font-poppins text-base font-medium hover:underline"
                  href="/menu"
                >
                  Menu
                </Link>

                <svg
                  className="mx-3 h-auto w-5"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 15.5L12.5 10.5L7.5 5.5"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
              <li
                className="inline-flex items-center text-black-900 font-poppins text-base font-medium hover:underline"
                aria-current="page"
              >
                {isMenuDetail.strMeal}
              </li>
            </ol>
          </section>

          {/* @bannerHeroSection */}
          <BannerHeroLabelSection title={isMenuDetail.strMeal} />

          <section className="block rounded-[14px] overflow-hidden relative mt-6 sm:mt-8 w-full">
            <ReactPlayer
              url={isMenuDetail.strYoutube}
              height={"555px"}
              width={"100%"}
            />
          </section>

          <section className="supports-grid:grid grid-cols-4 sm:grid-cols-12 lg:grid-cols-12 gap-x-6 mt-8">
            <div className="col-span-full lg:col-span-6">
              <div className="block relative">
                <Image
                  className=" rounded-[14px] overflow-hidden object-cover object-center h-[113px] sm:h-[131px] xl:h-[523px] w-full"
                  src={isMenuDetail.strMealThumb}
                  alt={`Mealapp (${isMenuDetail.strMeal} - MenuDetail)`}
                  height={170}
                  width={282}
                  loading="lazy"
                  quality="87"
                />
              </div>
            </div>
            <div className="col-span-full lg:col-span-6">
              {santzdContent ? (
                <div className="artlceContentFormat">{santzdContent}</div>
              ) : null}
            </div>
          </section>

          {/* @bannerSubscribe */}
          <BannerSubscribe />
        </Container>
      </main>
    </>
  );
};

export default MenuDetail;

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;

  const gMenuDetail = await getFetch(
    `http://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  try {
    return {
      props: {
        // detail: slug,
        menuDetail: gMenuDetail || [],
      },

      revalidate: 3600,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
