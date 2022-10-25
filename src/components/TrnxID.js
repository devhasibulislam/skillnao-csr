import React, { useState } from "react";
import toast from "react-hot-toast";
import addCourseId from "../utils/useCourseIds";
import ConfirmOrder from "./ConfirmOrder";
import Modal from "./Modal";

const TrnxID = ({ user, courseId }) => {
  const [openModal, setOpenModal] = useState(false);

  async function handleTrnxID(event) {
    event.preventDefault();

    const trnxInfo = {
      transactionInfo: [
        {
          transactionID: event.target.trnx.value,
          courseID: courseId,
        },
      ],
    };

    const updateUserWithTrnxID = async () => {
      const request = await fetch(
        `http://localhost:8080/user/transaction/${user._id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("skillNaoToken")}`,
          },
          body: JSON.stringify(trnxInfo),
        }
      );
      const response = await request.json();
      if (response.acknowledgement) {
        toast.success("TrnxID accepted and store on DB.");
        addCourseId(courseId);
        event.target.reset();
      }
    };
    updateUserWithTrnxID();
  }

  return (
    <section>
      <h1 className="font-bold text-2xl text-center border-b-2 border-b-[#ffb96d] w-fit mx-auto mb-8">
        Submit TrnxID
      </h1>
      <form onSubmit={handleTrnxID}>
        {/* email input */}
        <div className="flex justify-between items-center">
          <label htmlFor="email">
            ইমেইল অ্যাড্রেস <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={user.email}
            readOnly
            className="input input-bordered input-success w-full max-w-xs"
          />
        </div>

        <br />

        {/* user name input */}
        <div className="flex justify-between items-center">
          <label htmlFor="name">
            ইউজার নেম <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={user.name}
            readOnly
            className="input input-bordered input-success w-full max-w-xs"
          />
        </div>

        <br />

        {/* whatsApp number input */}
        <div className="flex justify-between items-center">
          <label htmlFor="name">
            হয়াটস-এপ নাম্বার <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="whatsApp"
            value={user.whatsApp}
            readOnly
            className="input input-bordered input-success w-full max-w-xs"
          />
        </div>

        <br />

        {/* transaction ID */}
        <div className="flex justify-between items-center">
          <label htmlFor="password">
            TrnxID <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="trnx"
            className="input input-bordered input-success w-full max-w-xs"
            required
          />
        </div>

        {/* sign up button */}
        <div className="text-right mt-6">
          <input
            type="submit"
            className="btn btn-wide bg-[#006243] hover:bg-white hover:text-black border-0"
            onClick={() => setOpenModal(true)}
            value="কনফার্ম কর"
          />
        </div>
      </form>

      {/* ask to open confirm modal */}
      {openModal && (
        <Modal
          openModal={openModal}
          setOpenModal={setOpenModal}
          content={<ConfirmOrder />}
        />
      )}
    </section>
  );
};

export default TrnxID;
