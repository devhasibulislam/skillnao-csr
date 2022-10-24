import React from "react";
const Card = ({ course }) => {
  return (
    <div className="card bg-base-100 shadow-xl relative">
      <figure>
        <img
          src={
            course.thumbnail.includes("http")
              ? course.thumbnail
              : `http://localhost:8080/${course.thumbnail}`
          }
          alt={course.title}
          className="h-[197px] w-[272px] object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-between">
          {course.title.toUpperCase()}
        </h2>
        <p>{course.about.slice(0, 45)}...</p>
        <div className="card-actions justify-between items-center">
          <div
            className="badge bg-[#ffb96d] text-black whitespace-nowrap tooltip"
            data-tip="Price ৳"
          >
            ৳ {Number(course.price).toLocaleString("bn-BD")}
          </div>
          <button className="btn-sm bg-[#1A6241] rounded text-white hover:text-black hover:bg-white">
            অর্ডার কর
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
