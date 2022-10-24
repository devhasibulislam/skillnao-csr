import React from "react";
import useGetCoursesWithQuery from "../utils/useGetCoursesWithQuery";
import Card from "./Card";

const Professional = () => {
  const { courses, isLoading } = useGetCoursesWithQuery(
    "category=professional"
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <h2 className="mb-4">
        Total Courses:{" "}
        <span className="text-[#ffb96d] font-semibold">{courses?.length}</span>
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-6 gap-y-4">
        {courses.map((course, index) => (
          <Card key={index} course={course} />
        ))}
      </div>
    </section>
  );
};

export default Professional;
