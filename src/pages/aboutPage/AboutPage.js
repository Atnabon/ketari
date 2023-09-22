import React from "react";
import About from "./aboutPageComponents/About";
//import TeamMembers from "./aboutPageComponents/TeamMembers";
import HowItWork from "../../globalComponents/HowItWork";
//import ReviewMain from "../homePage/homePageComponents/ReviewMain";
import PageTitleBanner from "../../globalComponents/PageTitleBanner";
import Vision from "./aboutPageComponents/Vision";

const AboutPage = () => {
  return (
    <>
      <PageTitleBanner title="About Us" />

      <About />

      <Vision />

      {/*
      <TeamMembers />
     */}

      <HowItWork />

      {/*
      <ReviewMain />
      */}
    </>
  );
};

export default AboutPage;
