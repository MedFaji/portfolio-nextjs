import React from "react";
import { FiServer } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import { LuLayoutPanelLeft } from "react-icons/lu";

const Skills = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 px-8 py-10 rounded-md">
            <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
              <FiServer size={"25"} />
            </div>

            <h4 className="font-medium text-gray-700 text-lg mb-4">
              Backend Development
            </h4>

            <p className="font-normal text-gray-500 text-md">
              Building robust and scalable backend <br /> solutions for optimal
              performance and functionality.
            </p>
          </div>

          <div className="bg-gray-50 px-8 py-10 rounded-md">
            <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
              <CgWebsite size={"25"} />
            </div>

            <h4 className="font-medium text-gray-700 text-lg mb-4">
              Frontend Development
            </h4>

            <p className="font-normal text-gray-500 text-md">
              Designing and making captivating <br /> user interfaces with a
              focus on seamless <br />
              functionality and engaging user experiences.
            </p>
          </div>

          <div className="bg-gray-50 px-8 py-10 rounded-md">
            <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
              <LuLayoutPanelLeft size={"25"} />
            </div>

            <h4 className="font-medium text-gray-700 text-lg mb-4">
              UI/UX design
            </h4>

            <p className="font-normal text-gray-500 text-md">
              Elevating digital interactions through <br /> intuitive UI/UX
              design, creating user-centric experiences that resonate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
