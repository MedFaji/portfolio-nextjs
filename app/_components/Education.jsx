import React from "react";

const Education = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
          Education
        </h1>

        <p className="font-normal text-gray-500 text-xs md:text-base mb-20">
          Below is a summary of the places I studied
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 px-8 py-10 rounded-md">
            <h4 className="font-medium text-gray-700 text-lg mb-4">
              2021 - 2023
            </h4>

            <p className="font-normal text-gray-500 text-md h-16 mb-4">
              Specialized Master - Information Systems Engineering
            </p>
            <div className="relative">
              <h6 className="font-semibold text-gray-500 text-md relative z-10">
                Faculty of Science Semlalia, Marrakech
                <br />
                Morocco
              </h6>
              <span className="w-32 h-1 bg-blue-200 absolute bottom-0 left-0 z-0"></span>
            </div>
          </div>

          <div className="bg-gray-50 px-8 py-10 rounded-md">
            <h4 className="font-medium text-gray-700 text-lg mb-4">
              2020 - 2021
            </h4>

            <p className="font-normal text-gray-500 text-md h-16 mb-4">
              Professional license - Technologies and web programming
            </p>

            <div className="relative">
              <h6 className="font-semibold text-gray-500 text-md relative z-10">
                Faculty of Science Semlalia, Marrakech
                <br />
                Morocco
              </h6>
              <span className="w-32 h-1 bg-blue-200 absolute bottom-0 left-0 z-0"></span>
            </div>
          </div>

          <div className="bg-gray-50 px-8 py-10 rounded-md">
            <h4 className="font-medium text-gray-700 text-lg mb-4">
              2018 - 2020
            </h4>

            <p className="font-normal text-gray-500 text-md h-16 mb-4">
              BTS - Information systems development
            </p>

            <div className="relative">
              <h6 className="font-semibold text-gray-500 text-md relative z-10">
                BTS preparation classes, Settat <br />
                Morocco
              </h6>
              <span className="w-32 h-1 bg-blue-200 absolute bottom-0 left-0 z-0"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
