import React from "react";

export const Experience = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
          Experience
        </h1>

        <p className="font-normal text-gray-500 text-xs md:text-base mb-20">
          Below is a summary of the places where I have worked.
        </p>

        <div className="flex flex-col lg:flex-row justify-between">
          <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
            <h6 className="font-medium text-gray-400 text-base uppercase">
              Company
            </h6>

            <p className="font-semibold text-gray-600 text-base">
              Freelancer
              <span className="font-normal text-gray-300">/ Casablanca</span>
            </p>

            <p className="font-semibold text-gray-600 text-base">
              VOID Agency
              <span className="font-normal text-gray-300">/ Casablanca</span>
            </p>

            <p className="font-semibold text-gray-600 text-base">
              Faculty of Science Semlalia
              <span className="font-normal text-gray-300">/ Marrakech</span>
            </p>

            <p className="font-semibold text-gray-600 text-base">
              BTS
              <span className="font-normal text-gray-300">/ Settat</span>
            </p>
          </div>

          <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
            <h6 className="font-medium text-gray-400 text-base uppercase">
              Position
            </h6>

            <p className="font-normal text-gray-400 text-base">
              Software Developer
            </p>

            <p className="font-normal text-gray-400 text-base">
              Full-stack Web Developer
            </p>

            <p className="font-normal text-gray-400 text-base">
              Full-stack Web Developer
            </p>

            <p className="font-normal text-gray-400 text-base">
              Mobile Developer
            </p>
          </div>

          <div className="space-y-8 md:space-y-16">
            <h6 className="font-medium text-gray-400 text-base uppercase">
              Year
            </h6>

            <p className="font-normal text-gray-400 text-base">
              2023 - Present
            </p>

            <p className="font-normal text-gray-400 text-base">
              02/2023 - 08/2023
            </p>

            <p className="font-normal text-gray-400 text-base">
              04/2021 - 08/2021
            </p>

            <p className="font-normal text-gray-400 text-base">
              04/2020 - 07/2020
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
