import React from "react";
//import ReviewMain from "./homePageComponents/ReviewMain";
import HowItWork from "../../globalComponents/HowItWork";
import Banner from "./homePageComponents/Banner";
import Newsletter from "../../globalComponents/Newsletter";
import Categories from "./homePageComponents/Categories";
import ProfileBanner from "./homePageComponents/ProfileBanner";
import Companies from "./homePageComponents/Companies";

const HomePage = () => {
  return (
    <>
      <Banner />

      <Categories />

      <Companies />

      <HowItWork />
      <ProfileBanner />

      {/*
      <ReviewMain />
      */}

      <Newsletter />
    </>
  );
};

export default HomePage;
