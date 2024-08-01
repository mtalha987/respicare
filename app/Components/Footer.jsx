import React from 'react'
import Image from 'next/image'
import Logo from "@/public/images/logo.svg"

const Footer = () => {
  return (
    <>
    <div className='mt-44  border-t border-black/20 lg:pt-16 pt-5'>
        <div className='flex flex-col lg:flex-row gap-7 lg:gap-0 lg:justify-between  lg:mx-[90px] mx-5 flex-wrap lg:flex-nowrap'>
            <div>
                <div><Image src={Logo} /></div>
                <h2 className="xl:w-[407px] w-[80%] text-black text-base font-normal font-['Inter'] leading-normal mt-7">Enhancing your quality of life with exceptional respiratory products.</h2>
            </div>
            <div>
                <h2 className=" text-black text-2xl font-normal font-['Arial'] leading-9">About Us</h2>
                <div>
                    <ul className='flex flex-col gap-3 mt-3 text-black text-base font-normal font-["Inter"] leading-normal"'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Product</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div>
                <h2 className=" text-black text-2xl font-normal font-['Arial'] leading-9">Location</h2>
                <p className="xl:w-80 w-[75%] text-black text-base font-normal font-['Inter'] leading-normal mt-3">PPGH+X76 - Kizad - Khalifa Industrial Zone - Abu Dhabi</p>
            </div>
        </div>
        <div className=' sm:h-16 bg-[#95669d] lg:mt-20 mt-6'>
            <div className='flex flex-wrap lg:flex-nowrap lg:mx-[90px] mx-3 justify-between py-5 text-white text-base font-normal font-["Inter"] leading-normal'>
            <h3>© Safecaretechnology. All Rights Reserved 2024</h3>
            <h4 className='xs:mt-3'>Terms & Conditions</h4>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer