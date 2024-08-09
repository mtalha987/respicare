import React from "react";
import Image from "next/image";
import Wave from "@/public/images/wave.svg";
import ArrowLeft from "@/public/images/Arrow-left.svg";

const Hero = () => {
  return (
    <>
      <div className="sm:h-[850px] xs:h-[85vh] 2xl:h-[1000px] bg-hero-section bg-no-repeat bg-cover xl:bg-center w-full h-full rounded-b-[50% 60%] relative 2xl:overflow-hidden mt-8">
        <div className="lg:mx-[90px] mx-5 xl:pt-[200px] lg:pt-[140px] sm:pt-[100px] pt-28">
          <h1 className="text-white text-[56px] xs:text-[42px] font-medium font-['Neue Haas Grotesk Display Pro'] leading-[59px] xs:leading-[44pxs] lg:w-[50%]">
            Breathe Better, Live Better with Respicare
          </h1>
          <p className="xl:w-[548px] text-white text-base font-normal font-secondary leading-normal mt-3">
            Enhancing your quality of life with exceptional respiratory products.
          </p>
          <button className="h-[47px] px-[25px] py-[15px] bg-white rounded-lg justify-center items-center gap-3 inline-flex text-[#95669d] text-base font-normal font-['Arial'] leading-[16.86px] mt-9">
            Get Started <Image src={ArrowLeft} className="" />
          </button>
        </div>
        <div>
          <Image src={Wave} alt="Wave" className="absolute -bottom-6 -z-10 w-full 2xl:-bottom-1 2xl:top-10" />
        </div>
      </div>
    </>
  );
};

export default Hero;
