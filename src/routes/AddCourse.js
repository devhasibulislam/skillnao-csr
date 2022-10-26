import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AddCourse = () => {
  const [thumbnail, setThumbnail] = useState("");

  async function handleCourseThumbnail(event) {
    const formData = new FormData();
    formData.append("thumbnail", event.target.files[0]);

    const { data } = await axios.post(
      "https://skillnao-ssr.onrender.com/course/thumbnail",
      formData
    );
    if (data.acknowledgement) {
      setThumbnail(data.data.filename);
      toast.success("Course thumbnail uploaded.");
    }
  }

  async function handleAddCourse(event) {
    event.preventDefault();

    const courseInfo = {
      title: event.target.title.value,
      category: event.target.category.value,
      about: event.target.about.value,
      thumbnail: thumbnail || undefined,
      description: {
        reason: event.target.reason.value,
        purpose: event.target.purpose.value,
      },
      price: event.target.price.value,
    };

    const addNewCourse = async () => {
      const request = await fetch("https://skillnao-ssr.onrender.com/course/", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("skillNaoToken")}`,
        },
        body: JSON.stringify(courseInfo),
      });
      const response = await request.json();
      if (response.acknowledgement) {
        toast.success("New course insertion complete.");
        event.target.reset();
      }
    };
    addNewCourse();
  }

  return (
    <section>
      <form
        onSubmit={handleAddCourse}
        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center"
      >
        {/* title input */}
        <div className="mb-4">
          <label className="block mb-1" htmlFor="name">
            Course Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter course title"
            className="input input-bordered input-success w-full max-w-xs"
            required
          />
        </div>

        {/* category input */}
        <div className="mb-4">
          <label className="block mb-1" htmlFor="name">
            Course Category <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="category"
            placeholder="Enter course category"
            className="input input-bordered input-success w-full max-w-xs"
            required
          />
        </div>

        {/* about input */}
        <div className="mb-4">
          <label className="block mb-1" htmlFor="name">
            Course About <span className="text-red-500">*</span>
          </label>
          <textarea
            name="about"
            className="textarea textarea-success w-full max-w-xs"
            placeholder="Enter course about"
            required
          />
        </div>

        {/* reason input */}
        <div className="mb-4">
          <label className="block mb-1" htmlFor="name">
            Course Reason <span className="text-red-500">*</span>
          </label>
          <textarea
            name="reason"
            className="textarea textarea-success w-full max-w-xs"
            placeholder="Enter course reason"
            required
          />
        </div>

        {/* purpose input */}
        <div className="mb-4">
          <label className="block mb-1" htmlFor="name">
            Course Purpose <span className="text-red-500">*</span>
          </label>
          <textarea
            name="purpose"
            className="textarea textarea-success w-full max-w-xs"
            placeholder="Enter course purpose"
            required
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
            placeholder="Enter course price"
            className="input input-bordered input-success w-full max-w-xs"
            required
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
            className="input input-bordered input-success w-full max-w-xs pt-2"
            onChange={handleCourseThumbnail}
          />
        </div>

        {/* sign up button */}
        <div className="text-left mt-6">
          <input
            type="submit"
            className="btn btn-wide bg-[#006243] hover:bg-white hover:text-black border-0"
            value="Add Course"
          />
        </div>
      </form>
    </section>
  );
};

export default AddCourse;
