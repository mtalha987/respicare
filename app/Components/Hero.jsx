import React from "react";
import Image from "next/image";
import Wave from "@/public/images/wave.svg";
import ArrowLeft from "@/public/images/arrow-left.svg";


const Hero = () => {
  return (
    <>
      <div className="sm:h-[850px] xs:h-[85vh]  bg-hero-section bg-no-repeat bg-cover  rounded-b-[50% 60%] relative">
        <div className="lg:mx-[90px] mx-5 sm:pt-[200px] pt-10">
          <h1 className="text-white text-[56px] font-medium font-['Neue Haas Grotesk Display Pro'] leading-[59px] lg:w-[50%]">Breathe Better, Live 
          Better with Respicare</h1>
          <p className="xl:w-[548px] text-white text-base font-normal font-['Inter'] leading-normal mt-3">Enhancing your quality of life with exceptional respiratory products.</p>
          <button className="h-[47px] px-[25px] py-[15px] bg-white rounded-lg justify-center items-center gap-3 inline-flex text-[#95669d] text-base font-normal font-['Arial'] leading-[16.86px] mt-9">Get Start <Image src={ArrowLeft} className=""/></button>
        </div>
        <div>
          <Image src={Wave} alt="Wave" className="absolute -bottom-6 -z-10 w-full " />
        </div>
      
      </div>
    </>
  );
};

export default Hero;
