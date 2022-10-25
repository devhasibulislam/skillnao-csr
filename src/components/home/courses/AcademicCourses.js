import React from "react";
import useGetCoursesWithQuery from "../../../utils/useGetCoursesWithQuery";
import Highlight from "../Highlight";
import CourseSlider from "./CourseSlider";

const AcademicCourses = () => {
  const { courses, isLoading } = useGetCoursesWithQuery("category=academic");

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="my-20 container mx-auto">
      <h1 className="text-4xl text-center pb-12 font-bold">
        একাডেমিক <Highlight>সেকশান</Highlight>
      </h1>
      <CourseSlider courses={courses} />
    </div>
  );
};

export default AcademicCourses;
