import React from "react";
import Banner from "../components/home/Banner";
import Count from "../components/home/Count";
import AcademicCourses from "../components/home/courses/AcademicCourses";
import PopularCourses from "../components/home/courses/PopularCourses";
import ProfessionalCourses from "../components/home/courses/ProfessionalCourses";
import Necessary from "../components/home/Necessary";
import OurPartners from "../components/home/OurPartners";
import Review from "../components/home/Review";
import Solution from "../components/home/Solution";

const Home = () => {
  return <section>
   <Banner/>
   <PopularCourses/>
   <Solution/>
   <Necessary/>
   <Count/>
   <AcademicCourses/>
   <ProfessionalCourses/>
   <Review/>
   <OurPartners/>
  </section>;
};

export default Home;
