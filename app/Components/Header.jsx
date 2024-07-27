'use client'
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/images/logo.svg";
import { HiMenu, HiX } from "react-icons/hi"; // Import icons for the mobile menu

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the mobile menu state
  };

  return (
    <>
      <div className="flex items-center justify-between lg:mx-[90px] mx-5 h-20">
        <div>
          <Image src={Logo} alt="Respicare Logo" />
        </div>
        <div className="hidden lg:flex items-center">
          <div className="lg:mr-[173px] mr-4 text-black text-base font-normal font-['Arial'] leading-[16.86px]">
            <ul className="flex gap-7">
              <li>Home</li>
              <li>About Us</li>
              <li>Product</li>
            </ul>
          </div>
          <div className="h-[41px] px-[19px] py-3 rounded-lg border border-[#95669d] justify-center items-center gap-1 inline-flex text-[#95669d] text-base font-normal font-['Arial'] leading-[16.86px]">
            Contact Us
          </div>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-[#95669d]">
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <ul className="flex flex-col gap-4 p-4">
            <li>Home</li>
            <li>About Us</li>
            <li>Product</li>
            <li className="h-[41px] px-[19px] py-3 rounded-lg border border-[#95669d] justify-center items-center gap-1 inline-flex text-[#95669d] text-base font-normal font-['Arial'] leading-[16.86px]">
              Contact Us
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;

