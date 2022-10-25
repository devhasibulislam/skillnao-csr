import React from "react";
import { useParams } from "react-router-dom";
import useGetSpecificCourse from "../utils/useGetSpecificCourse";

const CourseDescription = () => {
  const { id } = useParams();
  const { course, isLoading } = useGetSpecificCourse(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log(course);

  return <section>This is course description {id} </section>;
};

export default CourseDescription;
