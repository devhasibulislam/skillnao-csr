import React from 'react';
import useGetCoursesWithQuery from '../../../utils/useGetCoursesWithQuery';
import Highlight from '../Highlight';
import Carousel from "react-multi-carousel";
import Card from '../../Card';


const ProfessionalCourses = () => {
    const { courses, isLoading } = useGetCoursesWithQuery("category=professional");

    if (isLoading) {
      return <p>Loading...</p>;
    }
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
    return (
        <div className="my-20 container mx-auto">
        <h1 className="text-4xl text-center pb-12 font-bold">
        প্রফেশনাল  <Highlight> সেকশান</Highlight>
        </h1>
        <Carousel
          swipeable="true"
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={5000}
          infinite={true}
        >
          {courses.map((course) => (
            <div className='mx-4' key={course._id}>
   <Card  course={course}></Card>
            </div>
         
          ))}
        </Carousel>
      </div>
    );
};

export default ProfessionalCourses;