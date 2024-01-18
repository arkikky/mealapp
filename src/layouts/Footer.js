import React from "react";
import Image from "next/image";
import Link from "next/link";

// @components
import Container from "@components/Container";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col py-8 px-0">
        <Container>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between">
            <p className="text-black-900 font-poppins text-base font-light">
              © <b>2024 mealapp</b>, All right reserved, Design by{" "}
              <b>Dicky Pratama A</b>
            </p>
            <ul className="flex flex-row space-x-5 mt-6 lg:mt-0 pl-0 list-none">
              <li className="relative">
                <Link href="">
                  <Image
                    className="h-6 w-6"
                    src={"/assets/svg/facebook.svg"}
                    alt={`Mealapp (Facebook - Social Media)`}
                    height={24}
                    width={24}
                    loading="lazy"
                    quality="87"
                  />
                </Link>
              </li>
              <li className="relative">
                <Link href="">
                  <Image
                    className="h-6 w-6"
                    src={"/assets/svg/twitter.svg"}
                    alt={`Mealapp (Twitter - Social Media)`}
                    height={24}
                    width={24}
                    loading="lazy"
                    quality="87"
                  />
                </Link>
              </li>
              <li className="relative">
                <Link href="">
                  <Image
                    className="h-6 w-6"
                    src={"/assets/svg/instagram.svg"}
                    alt={`Mealapp (Instagram - Social Media)`}
                    height={24}
                    width={24}
                    loading="lazy"
                    quality="87"
                  />
                </Link>
              </li>
              <li className="relative">
                <Link href="">
                  <Image
                    className="h-6 w-6"
                    src={"/assets/svg/youtube.svg"}
                    alt={`Mealapp (Youtube - Social Media)`}
                    height={24}
                    width={24}
                    loading="lazy"
                    quality="87"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
