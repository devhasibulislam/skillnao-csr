import React from "react";
import Carousel from "react-multi-carousel";
import { useNavigate } from "react-router-dom";
import useGetUser from "../../../utils/useGetUser";
// import Card from "../../Card";

const CourseSlider = ({ courses, setOpenModal, setCourse, setUser }) => {
  const { user, isLoading } = useGetUser();
  const navigate = useNavigate();

  if (isLoading) {
    return <p>Loading...</p>;
  }

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
          <div className="mx-4 shadow rounded-2xl" key={course._id}>
            {/* <Card course={course} setOpenModal={setOpenModal} ></Card> */}

            <>
              <figure
                onClick={() => navigate(`/popularPackages/${course._id}`)}
              >
                <img
                  src={
                    course?.thumbnail?.includes("http")
                      ? course?.thumbnail
                      : `https://server.plannao.com/uploads/${course?.thumbnail}`
                  }
                  alt={course.title}
                  className="h-[250px] w-full object-cover rounded-t-2xl"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-between">
                  {course.title.toUpperCase()}
                </h2>
                {/* <p>{course.about.slice(0, 45)}...</p> */}
                <div className="card-actions justify-between items-center">
                  <p
                    className="font-bold"
                    // className="badge bg-[#ffb96d] text-black whitespace-nowrap tooltip"
                    // data-tip="Price ৳"
                  >
                    ৳ {Number(course.price).toLocaleString("bn-BD")}
                  </p>
                  <button
                    className="btn-sm bg-[#1A6241] rounded text-white hover:text-black hover:bg-white"
                    onClick={() => {
                      setOpenModal(true);
                      setCourse(course);
                      setUser(user);
                    }}
                  >
                    অর্ডার কর
                  </button>
                </div>
              </div>
            </>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default CourseSlider;
