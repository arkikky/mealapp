import React, { useState } from "react";
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
import MenuCategory from "@layouts/Menu/Category";
import BannerSubscribe from "@layouts/Banner/Subscribe";

const MenuDetail = (props) => {
  const [isMenuCategory, setMenuCategory] = useState(props.menuCategory);

  return (
    <>
      {/* @Head */}
      <Head>
        <title>{`${props.detail} | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`${props.detail} | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`${props.detail} | ${publicRuntimeConfig.siteTitle}`}
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
          content={`${props.detail} | ${publicRuntimeConfig.siteTitle}`}
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
                {props.detail}
              </li>
            </ol>
          </section>

          {/* @bannerHeroSection */}
          <BannerHeroLabelSection title={props.detail} />

          {/* @menuCategory */}
          <MenuCategory {...isMenuCategory} config={{ label: "sm" }} />

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
  const { slug } = params;

  const gMenuCategory = await getFetch(
    `http://www.themealdb.com/api/json/v1/1/filter.php?c=${slug}`
  );

  try {
    return {
      props: {
        detail: slug,
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
