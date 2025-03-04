"use client";
import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <Navbar />
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/image/me-min.png"
              alt="Image"
              className="rounded-full"
              width={200}
              height={200}
            />
          </div>

          <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">
            Mohamed Faji
          </h6>

          <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">
            Software Engineer | Specialized in Full-Stack Web Development
          </h1>

          <div className="flex justify-center">
            <p className="font-normal text-gray-600 text-md md:text-xl mb-16 w-9/12">
              Full Stack Engineer specializing in end-to-end web solutions with
              Java Spring Boot and modern JavaScript frameworks. Passionate
              about building scalable applications that solve real-world
              problems, with a focus on collaboration and continuous learning.
            </p>
          </div>

          <Link
            to="contact"
            smooth={true}
            duration={800}
            className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500 cursor-pointer"
          >
            Hire me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
