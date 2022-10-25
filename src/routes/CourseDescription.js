import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Modal from "../components/Modal";
import SignIn from "../components/SignIn";
import TrnxID from "../components/TrnxID";
import useGetSpecificCourse from "../utils/useGetSpecificCourse";
import useGetUser from "../utils/useGetUser";
import video from "../assets/details-page/video.svg";
import clock from "../assets/details-page/clock.svg";
import layers from "../assets/details-page/layers.svg";
import support from "../assets/details-page/support.svg";

const CourseDescription = () => {
  const { id } = useParams();
  const { course, isLoading } = useGetSpecificCourse(id);
  const [openModal, setOpenModal] = useState(false);
  const [toggleState, setToggleState] = useState(1);
  const { user } = useGetUser();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="m-5">
        <h1 className="text-2xl font-bold">{course?.title}</h1>
        <p className="text-[#4A4A4A] py-4">{course?.about}</p>
        <img className="rounded-lg" src={course?.thumbnail} alt="" />

        <div>
          <div className="flex rounded-lg mt-16 mb-8">
            <button
              className={
                toggleState === 1
                  ? "tabs active-tabs-left"
                  : "tabs rounded-tl-lg rounded-bl-lg"
              }
              onClick={() => toggleTab(1)}
            >
              কোর্স ওভারভিউ
            </button>
            {/* <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              কোর্স কারিকুলাম
            </button> */}
            <button
              className={
                toggleState === 3
                  ? "tabs active-tabs-right"
                  : "tabs rounded-tr-lg rounded-br-lg"
              }
              onClick={() => toggleTab(3)}
            >
              প্রশিক্ষক
            </button>
          </div>

          <div>
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <div
                tabindex="0"
                class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-2"
              >
                <div class="collapse-title text-xl font-bold">
                  কেন এ কোর্সটি করবেন?
                </div>
                <hr />
                <div class="collapse-content">
                  <p className="text-[#4A4A4A]">{course?.description?.reason}</p>
                </div>
              </div>
              <div
                tabindex="0"
                class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-2"
              >
                <div class="collapse-title text-xl font-bold">
                  কোর্সের মূল উদ্দেশ্য
                </div>
                <hr />
                <div class="collapse-content">
                  <p className="text-[#4A4A4A]">{course?.description?.purpose}</p>
                </div>
              </div>
            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <h2>Content 2</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente voluptatum qui adipisci.
              </p>
            </div>

            <div
              className={
                toggleState === 3 ? "content  active-content" : "content"
              }
            >
              <h2>Content 3</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                sed nostrum rerum laudantium totam unde adipisci incidunt modi
                alias! Accusamus in quia odit aspernatur provident et ad vel
                distinctio recusandae totam quidem repudiandae omnis veritatis
                nostrum laboriosam architecto optio rem, dignissimos voluptatum
                beatae aperiam voluptatem atque. Beatae rerum dolores sunt.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F9F9F9] p-5 rounded-lg m-5">
        <h2 className="text-xl font-bold">ক্যারিয়ার প্লেসমেন্ট করুন !</h2>
        <p className="text-[#8C8C8C] py-4">
          যে কোন ব্যাচে সুবিধামতো যে কোন সময় বেছে নিয়ে ভর্তি হতে পারেন এখনই।
        </p>
        <div className="bg-primary rounded-lg text-white p-5">
          <div className="flex flex-col gap-y-3">
            <div className="flex">
              <img className="mr-4" src={video} alt="" />
              <p>প্রোগ্রাম সংক্রান্ত ভিডিও প্রদান</p>
            </div>
            <div className="flex">
              <img className="mr-4" src={support} alt="" />
              <p>মেন্টর্স লাইফটাইম সাপোর্ট </p>
            </div>
            <div className="flex">
              <img className="mr-4" src={clock} alt="" />
              <p>ওভার টাইম ডিউরেশন</p>
            </div>
            <div className="flex">
              <img className="mr-4" src={layers} alt="" />
              <p>প্রয়োজনীয় এক্সেসোরিজ প্রদান</p>
            </div>
          </div>
          <div className="flex justify-between bg-[#32DB8E] text-[#4D876E] my-5 px-8 py-3 rounded-lg font-bold">
            <p>কোর্সের মূল্য</p>
            <p>৳ {course?.price}</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 my-5">
          <div className="text-center">
            <label
            onClick={() => setOpenModal(true)}
              for="order"
              class="btn modal-button w-full bg-[#FFB357] text-black hover:text-white border-0"
            >
              এখনই অর্ডার করুন
            </label>
          </div>
          <button
            className="btn w-full bg-[#F9F9F9] border-[#FFB357] text-black hover:text-white"
            onClick={() => (!user ? Navigate("/signIn") : "")}
          >
            অর্ডার করতে সাইন-ইন করুন
          </button>
        </div>
      </div>
      {/* open modal */}
      {openModal && user?.role === "user" && user?.role !== "admin" ? (
        <Modal
          openModal={openModal}
          setOpenModal={setOpenModal}
          content={<TrnxID />}
        />
      ) : (
        user?.role !== "admin" && (
          <Modal
            openModal={openModal}
            setOpenModal={setOpenModal}
            content={<SignIn />}
          />
        )
      )}
    </div>
  );
};

export default CourseDescription;
