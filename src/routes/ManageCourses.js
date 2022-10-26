import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import useGetAllCourses from "../utils/useGetAllCourses";

const ManageCourses = () => {
  const { courses, isLoading } = useGetAllCourses();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  async function handleCourseRemove(id) {
    const { data } = await axios.delete(`https://skillnao-ssr.onrender.com/course/${id}`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("skillNaoToken")}`,
      },
    });
    if (data.acknowledgement) {
      toast.success("Successfully removed a course.");
    }
  }


  /**
   * display image from node server to react
   * ----------------------------------------
   * https://stackoverflow.com/questions/21235696/display-images-in-html-nodejs
   */

  return (
    <section>
      <div>
        <h2 className="mb-4">
          Total Courses:{" "}
          <span className="text-[#ffb96d] font-semibold">
            {courses?.length}
          </span>
        </h2>

        {/* display courses */}
        <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-6 gap-y-4">
          {courses
            .map((course, index) => (
              <div className="card bg-base-100 shadow-xl relative" key={index}>
                <button
                  className="btn btn-circle absolute top-2 left-2 shadow-lg"
                  onClick={() => handleCourseRemove(course._id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
                <figure>
                  <img
                    src={
                      course.thumbnail.includes("http")
                        ? course.thumbnail
                        : `https://skillnao-ssr.onrender.com/uploads/${course.thumbnail}`
                    }
                    alt={course.title}
                    className="h-[250px] w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title justify-between">
                    {course.title.toUpperCase()}
                    <div
                      className="badge bg-[#ffb96d] text-black whitespace-nowrap tooltip"
                      data-tip="Price ৳"
                    >
                      ৳ {Number(course.price).toLocaleString("bn-BD")}
                    </div>
                  </h2>
                  <p>{course.about.slice(0, 45)}...</p>
                  <div className="card-actions justify-end">
                    <div className="flex gap-x-2">
                      <div
                        className="badge badge-outline tooltip"
                        data-tip="Category"
                      >
                        {course.category}
                      </div>
                      <div
                        className="badge badge-outline tooltip"
                        data-tip="Status"
                      >
                        {course.status}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
            .reverse()}
        </section>
      </div>
    </section>
  );
};

export default ManageCourses;
