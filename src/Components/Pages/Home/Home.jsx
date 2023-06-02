import React from "react";
import FeatureCards from "./Movies";
import BannerSlider from "./BannerSlider";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {

  AOS.init();
  return (
    <div>
      <BannerSlider></BannerSlider>
      <FeatureCards></FeatureCards>
    </div>
  );
};

export default Home;
