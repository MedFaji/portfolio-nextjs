import React from "react";
import { SiReact, SiStrapi, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { LuExternalLink } from "react-icons/lu";
import { FaCss3Alt } from "react-icons/fa";
import { RiSupabaseLine } from "react-icons/ri";
import { SiClerk } from "react-icons/si";

import Link from "next/link";

const Works = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="mb-10 lg:mb-0">
            <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
              Portfolio
            </h1>

            <p className="font-normal text-gray-500 text-xs md:text-base">
              I have brought here my favorite works as a<br />
              full-stack web developer.
            </p>
          </div>

          <div className="space-y-24">
            <div className="flex space-x-6 ">
              <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                01
              </h1>

              <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

              <div>
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                  Online Grocery React App Store
                </h1>

                <p className="font-normal text-gray-500 text-sm md:text-base mb-5 max-w-xl">
                  Build and deploy a full-stack Next.js online grocery store
                  app, creating a seamless shopping experience using React,
                  Strapi, and Tailwind CSS!
                </p>

                <div className="flex items-center gap-3 ">
                  <SiReact size={"25"} />
                  <TbBrandNextjs size={"25"} />
                  <SiStrapi size={"25"} />
                  <SiTailwindcss size={"25"} />
                  <span className="w-20 h-0.5 bg-gray-300 mx-3"></span>
                  <Link
                    href="https://grocery-store.medevz.com/"
                    target="_blank"
                    className="text-blue-500 font-semibold text-sm md:text-base flex items-center gap-2"
                  >
                    <LuExternalLink />
                    View Project
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex space-x-6">
              <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                02
              </h1>

              <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

              <div>
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                  Yumrush Food Delivery App
                </h1>

                <p className="font-normal text-gray-500 text-sm md:text-base mb-5 max-w-xl">
                  Yumrush is a front-end project for a food delivery app
                  designed to streamline the ordering process for users. Created
                  using React and Vanilla CSS. I still work on the backend with
                  ExpressJS and it's going to be deployed soon...
                </p>
                <div className="flex items-center gap-3 ">
                  <SiReact size={"25"} />
                  <FaCss3Alt size={"25"} />
                  <span className="w-20 h-0.5 bg-gray-300 mx-3"></span>
                  <Link
                    href="https://yumrush.medevz.com/"
                    target="_blank"
                    className="text-blue-500 font-semibold text-sm md:text-base flex items-center gap-2"
                  >
                    <LuExternalLink />
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
