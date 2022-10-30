import React from "react";
import Carousel from "react-multi-carousel";
import Card from "../../Card";

const CourseSlider = ({ courses }) => {
  const responsive = {
    superLargeDesktop: {
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
    <>
      <Carousel
        swipeable="true"
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite={true}
        className="py-8"
      >
        {courses?.map((course) => (
          <div className="mx-4" key={course._id}>
            <Card course={course}></Card>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default CourseSlider;
