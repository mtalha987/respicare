import React from "react";
import PageNameBanner from "../Components/PageNameBanner";
import AboutHeroImg from "@/public/images/aboutHeroImg.svg";
import ProductComplete from '../Components/product/ProductComplete';
import Banner from "../Components/Banner";



const page = () => {
  return (
    <>
      <PageNameBanner title="Product Page" image={AboutHeroImg} />
      <ProductComplete />
      <Banner />
    </>
  );
};

export default page;
