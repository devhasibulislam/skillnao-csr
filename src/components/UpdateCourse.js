import React from "react";
import { useState } from "react";
import Highlight from "./home/Highlight";
import Axios from "axios";
import toast from "react-hot-toast";

const UpdateCourse = ({ course }) => {
  const [title, setTitle] = useState(course.title);
  const [category, setCategory] = useState(course.category);
  const [about, setAbout] = useState(course.about);
  const [thumbnail, setThumbnail] = useState("");
  const [reason, setReason] = useState(course.description.reason);
  const [purpose, setPurpose] = useState(course.description.purpose);
  const [price, setPrice] = useState(course.price);

  function handleCourseThumbnail(event) {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    formData.append("upload_preset", "gvtyd6ul");

    Axios.post(
      "https://api.cloudinary.com/v1_1/db3rsl7jn/image/upload",
      formData
    ).then((response) => {
      setThumbnail(response.data.url);
      toast.success("Course thumbnail uploaded.");
    });
  }

  async function handleUpdateCourse(event) {
    event.preventDefault();

    const courseInfo = {
      title: event.target.title.value,
      category: category,
      about: event.target.about.value,
      thumbnail: thumbnail || course.thumbnail,
      description: {
        reason: event.target.reason.value,
        purpose: event.target.purpose.value,
      },
      price: event.target.price.value,
    };

    const updateExistingCourse = async () => {
      const request = await fetch(
        `http://localhost:8080/course/${course._id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("skillNaoToken")}`,
          },
          body: JSON.stringify(courseInfo),
        }
      );
      const response = await request.json();
      if (response.acknowledgement) {
        toast.success("New course insertion complete.");
        event.target.reset();
        window.location.reload();
      }
    };
    updateExistingCourse();
  }

  return (
    <section>
      <h1 className="font-bold mb-4">
        <Highlight>{course._id}</Highlight>
      </h1>

      <form onSubmit={handleUpdateCourse}>
        {/* title input */}
        <div className="mb-4">
          <label className="block mb-1" htmlFor="name">
            Course Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="title"
            className="input input-bordered input-success w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* category input */}
        <div className="mb-4">
          <label className="block mb-1" htmlFor="name">
            Course Category <span className="text-red-500">*</span>
          </label>
          <select
            className="select select-success w-full"
            onChange={(event) => setCategory(event.target.value)}
          >
            <option disabled selected>
              {category}
            </option>
            <option value={"academic"}>একাডেমিক</option>
            <option value={"professional"}>প্রফেশনাল</option>
            <option value={"job-related"}>জব সংক্রান্ত</option>
          </select>
        </div>

        {/* about input */}
        <div className="mb-4">
          <label className="block mb-1" htmlFor="name">
            Course About <span className="text-red-500">*</span>
          </label>
          <textarea
            name="about"
            className="textarea textarea-success w-full"
            placeholder="Enter course about"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>

        {/* reason input */}
        <div className="mb-4">
          <label className="block mb-1" htmlFor="name">
            Course Reason <span className="text-red-500">*</span>
          </label>
          <textarea
            name="reason"
            className="textarea textarea-success w-full"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </div>

        {/* purpose input */}
        <div className="mb-4">
          <label className="block mb-1" htmlFor="name">
            Course Purpose <span className="text-red-500">*</span>
          </label>
          <textarea
            name="purpose"
            className="textarea textarea-success w-full"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
          />
        </div>

        {/* price input */}
        <div className="mb-4">
          <label className="block mb-1" htmlFor="name">
            Course Price <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="price"
            className="input input-bordered input-success w-full pt-2"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        {/* thumbnail input */}
        <div className="mb-4">
          <label className="block mb-1" htmlFor="name">
            Course Thumbnail,{" "}
            <span className="text-red-500">less than 1MB</span>
          </label>
          <input
            type="file"
            name="thumbnail"
            className="input input-bordered input-success w-full pt-2"
            placeholder="png/jpg/jpeg/webp"
            onChange={handleCourseThumbnail}
          />
        </div>

        {/* sign up button */}
        <div className="text-left mt-6">
          <input
            type="submit"
            className="btn btn-wide bg-[#006243] hover:bg-white hover:text-black border-0"
            value="Update Course"
          />
        </div>
      </form>
    </section>
  );
};

export default UpdateCourse;
