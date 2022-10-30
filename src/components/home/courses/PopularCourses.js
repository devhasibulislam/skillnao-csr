import React from "react";
import MiniLoading from "../../../shared/MiniLoading";
import useGetAllCourses from "../../../utils/useGetAllCourses";
import Highlight from "../Highlight";
import CourseSlider from "./CourseSlider";

const PopularCourses = () => {
  const { courses, isLoading } = useGetAllCourses();

  if (isLoading) {
    return <MiniLoading/>;
  }

  return (
    <div className="my-20 container mx-auto">
      <h1 className="text-4xl text-center pb-12 font-bold">
        আমাদের জনপ্রিয় <Highlight>মেন্টরশিপসমুহ</Highlight>
      </h1>
      <CourseSlider courses={courses} />
    </div>
  );
};

export default PopularCourses;
