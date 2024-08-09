import React from "react";
import Image from "next/image";
import ArrowLeft from "@/public/images/Arrow-left.svg";
import DiagnosticsProfile from "@/public/images/diagnostics.png";

const AboutRespicCare = (props) => {
  return (
    <>
      <div className="flex flex-col md:flex-row xl:justify-center mt-10 ">
        <div  className={`ml-16 ${
          !props.orderOf  ? "order-1 md:order-1" : "order-0 md:order-0"
        }`}>
          <Image src={props.image} alt="Diagnostics" />
        </div>
        <div className="lg:mt-44 lg:m-14 mx-10 xs:mx-5">
          <button className="h-[31px] px-[11px] py-[7px] rounded-[32px] border border-[#95669d] justify-center items-center gap-1 inline-flex text-[#95669d] text-base font-normal font-['Arial'] leading-[16.86px]">
            {props.buttonText}
          </button>
          <h2 className="text-[#95669d] text-[42px] font-normal font-['Arial'] leading-[44.25px] mt-3">
            {props.title}
          </h2>
          <p className="lg:w-[441px] text-[#2f2f2f] text-base font-normal font-['Inter'] leading-normal mt-5">
            {props.para}
          </p>
          <button className="h-[47px] px-[25px] py-[15px] bg-white rounded-lg  border border-[#95669d] justify-center items-center gap-3 inline-flex text-[#95669d] text-base font-normal font-['Arial'] leading-[16.86px] mt-9">
            Get Start <Image src={ArrowLeft} className="" />
          </button>
        </div>
        {/* <div className="bg-primary">sdsfsdf</div> */}
      </div>
    </>
  );
};

export default AboutRespicCare;
