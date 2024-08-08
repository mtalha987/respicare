import React from "react";
import Image from "next/image";
// import TouchContact from "@/public/images/touchContact.svg";

const TouchWithUs = () => {
  return (
    <>
      <div className="xl:px-[90px] lg:px-[40px] px-5 flex mt-20 bg-white lg:justify-between flex-wrap justify-center  ">
        <div className="py-20 lg:pl-14 xs:pl-3 pl-5 shadow-lg lg:w-6/12">
          <h2 className="text-black text-[32px] font-normal font-nohemi">
            Get In Touch With Us
          </h2>
          <p className="xl:w-[464px] w-[89%] text-black text-base font-normal font-primary leading-normal mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore{" "}
          </p>
          <form action="" className="flex flex-col mt-8">
            <input
              type="text"
              placeholder="Name"
              className="py-3 pl-5 w-[80%] bg-[#FAFAFA] font-primary leading-[17.68px] font-normal text-base text-[#04040466]"
            />
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              className="py-3 pl-5  w-[80%] bg-[#FAFAFA] font-primary leading-[17.68px] font-normal text-base text-[#04040466] mt-5"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="7"
              placeholder="Message"
              className="py-3 pl-5  w-[80%] bg-[#FAFAFA] font-primary leading-[17.68px] font-normal text-base text-[#04040466] mt-5"
            ></textarea>
            <div>
              <button className="bg-primary text-white py-3 px-10 mt-5">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="lg:w-6/12 flex justify-end mt-12 lg:mt-0">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14495.85232539756!2d54.7278259!3d24.7281477!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5effd1737a9a77%3A0x4bdf4e512ac74a2a!2sSafe%20Care%20Medical%20Industry!5e0!3m2!1sen!2s!4v1723027491491!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            // allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen />
        </div>
      </div>
    </>
  );
};

export default TouchWithUs;
