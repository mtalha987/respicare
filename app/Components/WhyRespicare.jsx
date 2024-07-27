import React from "react";
import Image from "next/image";
import ArrowLeft from "@/public/images/Arrow-left.svg";
import WhyRespicareImg from "@/public/images/WhyRespicare.png";

const WhyRespicare = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row ">
        <div className="ml-16">
          <Image src={WhyRespicareImg} alt="Diagnostics" />
        </div>
        <div className="lg:mt-44 lg:m-14 mx-10 xs:mx-5">
          <h2 className="text-[#95669d] text-[42px] font-normal font-['Arial'] leading-[44.25px] mt-3">
            Why Respicare
          </h2>
          <p className="lg:w-[441px] text-[#2f2f2f] text-base font-normal font-['Inter'] leading-normal mt-5">
            The Respicare Ventilation brings a 70-year history of clinical
            experience, leadership, and expertise. our diverse portfolio helps
            advance healthcare through every stage of life with integrated.
            ventilation industry-leading solutions including the bellavistcr
            family, fabiar-r family and 3100 HFOV.
          </p>
          <button className="h-[47px] px-[25px] py-[15px] bg-white rounded-lg  border border-[#95669d] justify-center items-center gap-3 inline-flex text-[#95669d] text-base font-normal font-['Arial'] leading-[16.86px] mt-9">
            Get Start <Image src={ArrowLeft} className="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default WhyRespicare;
