import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mb-40">
      <Image src="/logo-medevs.svg" alt="Logo" width={50} height={50} />
      <Link
        href={
          "https://drive.google.com/file/d/1Blg-j6pQiMxkAJ-n_zOnCIf0h9uStpEl/view?usp=sharing"
        }
        target="_blank"
      >
        <button className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">
          Get my CV
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
