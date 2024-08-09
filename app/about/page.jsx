import React from "react";
import PageNameBanner from "../Components/PageNameBanner";
import AboutHeroImg from "@/public/images/aboutHeroImg.svg";
import AboutRespicCare from "../Components/about/AboutRespicCare";
import DiagnosticsProfile from "@/public/images/diagnostics.png";
import About1 from "@/public/images/about1.svg";
import About2 from "@/public/images/about2.svg";
import About3 from "@/public/images/about3.svg";

const page = () => {
  return (
    <>
      <PageNameBanner title="About Us" image={AboutHeroImg} />
      <AboutRespicCare
        image={About1}
        buttonText="About Company"
        title="About Respicare"
        para="When breathing is compromised, quality of life
              diminishes. Our family of spirometry, complete PFT, and
              CPET testing products help to classify pathophysiology
              and offer valuable information for differential diagnoses."
        orderOf={true}
      />
      <AboutRespicCare
        image={About2}
        buttonText="About Company"
        title="Our Vision"
        para="When breathing is compromised, quality of life
              diminishes. Our family of spirometry, complete PFT, and
              CPET testing products help to classify pathophysiology
              and offer valuable information for differential diagnoses."
        orderOf={false}
      />
      <AboutRespicCare
        image={About3}
        buttonText="About Company"
        title="Our Mission"
        para="When breathing is compromised, quality of life
              diminishes. Our family of spirometry, complete PFT, and
              CPET testing products help to classify pathophysiology
              and offer valuable information for differential diagnoses."
        orderOf={true}
      />
    </>
  );
};

export default page;
