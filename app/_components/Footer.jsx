import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div class="px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
        <div class="flex flex-col items-baseline space-y-4">
          <div class="mx-auto">
            <Image
              src="/logo-medevs.svg"
              alt="Mohamed Faji"
              width={30}
              height={30}
            />
          </div>
          <div class="mx-auto" x-data="{ year: new Date().getFullYear() }">
            <span class="mx-auto mt-2 text-sm font-medium text-gray-500">
              Copyright © <span x-text="year">{new Date().getFullYear()}</span>
              <a
                aria-label="Michael Andreuzza"
                href="#_"
                class="mx-2 text-blue-500 hover:text-gray-500"
              >
                Medevs Tech
              </a>
              All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
