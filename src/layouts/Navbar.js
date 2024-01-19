import React, { useRef, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

// @components
import Container from "@components/Container";

const Navbar = () => {
  const router = useRouter();
  const isNavbar = useRef(null);
  const isNavMenuPrimry = useRef(null);
  const isNavBtnToggle = useRef(null);
  const [isMenu, setMenu] = useState(false);

  const intToggleMenu = useCallback(() => {
    setMenu((prev) => !prev);
  }, [setMenu]);

  useEffect(() => {
    const nvBtnToggle = isNavBtnToggle.current;
    const nvMnu = isNavMenuPrimry.current;

    const hndleComplete = () => {
      if (nvMnu.classList.contains("active") == true) {
        nvBtnToggle.click();
      }
    };

    router.events.on("routeChangeComplete", hndleComplete);
    router.events.on("routeChangeError", hndleComplete);

    return () => {
      router.events.off("routeChangeComplete", hndleComplete);
      router.events.off("routeChangeError", hndleComplete);
    };
  }, [router]);

  return (
    <>
      <navbar
        ref={isNavbar}
        className={`mealappNavbar bg-white fixed top-0 inset-x-0 h-[82px] sm:h-[102px] w-full ${
          isMenu ? "active z-base" : "deflt z-sm"
        }`}
      >
        <Container className={"h-full"}>
          <div
            className={`mealappNavbarMain flex flex-row items-center justify-between h-full w-full ${
              isMenu ? "active" : "deflt"
            }`}
          >
            <Link
              href="/"
              className={`outline-none focus-visible:outline-none relative transition ease-in-out`}
            >
              <Image
                className="h-[38px] w-auto"
                src="/assets/images/mealapp.svg"
                alt="Mealapp (Brand Primary)"
                height={38}
                width={153}
                quality="87"
              />
            </Link>
            {/* @Button Nav (Toggle) */}
            <div className="flex sm:hidden flex-row items-center justify-end">
              <button
                ref={isNavBtnToggle}
                className={`hmbrgrStairs flex lg:hidden flex-col items-center justify-center border border-solid border-white outline-none focus:outline-none -mr-1 lg:mr-0 ${
                  isMenu ? "deactive" : "active"
                }`}
                id="navBtnToggle"
                aria-label="Button Nav (Toggle)"
                onClick={intToggleMenu}
              >
                <span className="hmbrgrStairsLine"></span>
                <span className="hmbrgrStairsLine"></span>
                <span className="hmbrgrStairsLine"></span>
              </button>
            </div>
            <div
              ref={isNavMenuPrimry}
              className={`mealappNavbarMainMenu flex flex-col lg:flex-row items-center lg:items-center justify-start lg:justify-center ${
                isMenu ? "active" : "false"
              }`}
            >
              <ul className={`mealappNavbarMenu w-full lg:w-max`}>
                <>
                  <li>
                    <Link href="/">About</Link>
                  </li>
                  <li>
                    <Link href="/menu">Menu</Link>
                  </li>
                  <li>
                    <Link href="/">Ingredients</Link>
                  </li>
                  <li>
                    <Link href="/">Chefs</Link>
                  </li>
                  <li>
                    <Link href="/">Blog</Link>
                  </li>
                </>
              </ul>
            </div>
          </div>
        </Container>
      </navbar>
    </>
  );
};

export default Navbar;
