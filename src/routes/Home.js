import React from "react";
import Banner from "../components/home/Banner";
import Count from "../components/home/Count";
import Necessary from "../components/home/Necessary";
import OurPartners from "../components/home/OurPartners";
import Review from "../components/home/Review";
import Solution from "../components/home/Solution";

const Home = () => {
  return <section>
   <Banner/>
   <Solution/>
   <Count/>
   <Necessary/>
   <Review/>
   <OurPartners/>
  </section>;
};

export default Home;
