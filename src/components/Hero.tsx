import React from "react";
import Image from "next/image.js";
import { phone } from "../constants/index.js";
import Link from "next/link.js";

const Hero = () => {
  const handleLearnMore = () => {
   const element = document.querySelector(".sound-section");
   window.scrollTo({
    top: element?.getBoundingClientRect().top,
    left: 0,
    behavior: "smooth"
   });
  }
  return (
    <div className="w-full justify-center items-center text-center mt-20 ">
      <p className="text-gray-400 text-1xl">New</p>
      <p className="text-3xl mt-4">Iphone14 Pro</p>
      <p className="text-5xl mt-5 text-purple-400">Big and bigger.</p>
      <p className="text-2xl mt-6 max-md:text-[15px]">
        from $41.62/mo. for 24 mo. or $999 before trade-in
      </p>
      <ul className="flex flex-1 justify-center mt-6">
        <li>
          <button className="px-5 py-2 bg-blue-500 text-sm border border-transparent rounded-3xl hover:bg-transparent hover:border-blue-500">
            Buy
          </button>
        </li>
        <li>
        <p className="text-blue-500 mt-2 ml-8">
        Learn more
      </p>
        </li>
      </ul>
      <Image src={phone} alt="/" className="mt-10 ml-[50%] max-md:w-[10%]" />
    </div>
  );
};

export default Hero;
