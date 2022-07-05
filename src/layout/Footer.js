import React from "react";

const Footer = () => {
  return (
    <div className="mx-auto container py-16 xl:px-20 lg:px-12 sm:px-6 px-4">
      <div className="md:gap-8 gap-4 text-center border-t pt-6">
        <div className="flex flex-col flex-shrink-0">
          <div className="text-lg font-extrabold">SWEETEN</div>
          <p className="text-sm leading-none text-gray-800 mt-4">
            Copyright © 2022 SWEETEN
          </p>
          <p className="text-sm leading-none text-gray-800 mt-4">
            All rights reserved
          </p>
        </div>

        {/* <div className="text-right">
          <h2 className="text-base font-semibold leading-4 text-gray-800">
            管理人員
          </h2>
          <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">
            Legal policy
          </p>
          <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">
            Status policy
          </p>
          <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">
            Privacy policy
          </p>
          <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">
            Terms of service
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
