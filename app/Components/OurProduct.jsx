import React from "react";
import Image from "next/image";
import WingImg from "@/public/images/wing.png";
import WingImg2 from "@/public/images/wing2.svg";
import WingImg3 from "@/public/images/wing3.svg";
import WingImg4 from "@/public/images/wing4.svg";
import WingImg5 from "@/public/images/wing5.svg";
import WingImg6 from "@/public/images/wing6.svg";
import MobileDropDown from "./MobileDropDown";

const OurProduct = () => {
  return (
    <>
      <div className="flex flex-col items-center lg:mt-20 mt-12">
        <div className="xs:flex xs:items-center xs:justify-center xs:gap-5 xs:flex-wrap">
          <div>
            <h2 className="text-[#95669d] text-[42px] xs:text-[32px] font-normal font-['Arial'] leading-[44.25px] ">
              Our Product
            </h2>
          </div>
          <MobileDropDown />
        </div>

        <div className="lg:mt-11 mt-5 flex gap-3 flex-wrap justify-center xs:hidden">
          <div className='h-[35px] px-[15px] py-2.5 bg-[#f7f7f7] rounded-lg justify-center items-center gap-2.5 inline-flex text-[#6f6f6f] text-[13px] font-normal font-["Arial"]'>
            All Products
          </div>
          <div className='h-[35px] px-[15px] py-2.5 bg-[#f7f7f7] rounded-lg justify-center items-center gap-2.5 inline-flex text-[#6f6f6f] text-[13px] font-normal font-["Arial"]'>
            Clinical
          </div>
          <div className='h-[35px] px-[15px] py-2.5 bg-[#f7f7f7] rounded-lg justify-center items-center gap-2.5 inline-flex text-[#6f6f6f] text-[13px] font-normal font-["Arial"]'>
            Veterinary Food
          </div>
          <div className='h-[35px] px-[15px] py-2.5 bg-[#f7f7f7] rounded-lg justify-center items-center gap-2.5 inline-flex text-[#6f6f6f] text-[13px] font-normal font-["Arial"]'>
            {" "}
            water & Environmental
          </div>
          <div className='h-[35px] px-[15px] py-2.5 bg-[#f7f7f7] rounded-lg justify-center items-center gap-2.5 inline-flex text-[#6f6f6f] text-[13px] font-normal font-["Arial"]'>
            Pharmaceutical
          </div>
          <div className='h-[35px] px-[15px] py-2.5 bg-[#f7f7f7] rounded-lg justify-center items-center gap-2.5 inline-flex text-[#6f6f6f] text-[13px] font-normal font-["Arial"]'>
            {" "}
            Industrial and Cosmetic
          </div>
        </div>
      </div>

      <div className="md:mx-[90px] mx-9 mt-28">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-7">
          <div className="sm:col-span-2 bg-[#f4f0f5] rounded-xl h-[386px] ">
            <div className="flex flex-col justify-center items-center mt-12">
              <Image src={WingImg} />
            </div>
            <div className='text-black text-2xl font-normal font-["Arial"] leading-relaxed mt-5 ml-6'>
              Product 01
            </div>
          </div>
          <div className="bg-[#f4f0f5] rounded-xl">
            <div className="flex flex-col justify-center items-center mt-4">
              <Image src={WingImg2} />
            </div>
            <div className='text-black text-2xl font-normal font-["Arial"] leading-relaxed mt-5 ml-6'>
              Product 01
            </div>
          </div>
          <div className="bg-[#f4f0f5] rounded-xl">
            <div className="flex flex-col justify-center items-center mt-1">
              <Image src={WingImg3} />
            </div>
            <div className='text-black text-2xl font-normal font-["Arial"] leading-relaxed mt-5 ml-6'>
              Product 01
            </div>
          </div>
          <div className="bg-[#f4f0f5] rounded-xl">
            <div className="flex flex-col justify-center items-center mt-12">
              <Image src={WingImg4} />
            </div>
            <div className='text-black text-2xl font-normal font-["Arial"] leading-relaxed mt-5 ml-6'>
              Product 01
            </div>
          </div>
          <div className="bg-[#f4f0f5] rounded-xl">
            <div className="flex flex-col justify-center items-center ">
              <Image src={WingImg5} width={220} height={228} />
            </div>
            <div className='text-black text-2xl font-normal font-["Arial"] leading-relaxed mt-1 ml-6'>
              Product 01
            </div>
          </div>
          <div className="sm:col-span-2 bg-[#f4f0f5] rounded-xl h-[386px] ">
            <div className="flex flex-col justify-center items-center mt-12">
              <Image src={WingImg6} />
            </div>
            <div className='text-black text-2xl font-normal font-["Arial"] leading-relaxed mt-16 ml-6'>
              Product 01
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProduct;
