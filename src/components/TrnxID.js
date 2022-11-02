import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmOrder from "./ConfirmOrder";
import Modal from "./Modal";
import bkash from "../assets/order/bkashlogo.svg";
import Highlight from "./home/Highlight";

const TrnxID = ({ user, course }) => {
  const [openModal, setOpenModal] = useState(false);
  const [tnx, setTNX] = useState("");

  async function handleTrnxID(event) {
    event.preventDefault();

    const trnxInfo = {
      transactionInfo: [
        {
          transactionID: event.target.trnx.value,
          courseID: course._id,
        },
      ],
    };

    const updateUserWithTrnxID = async () => {
      const request = await fetch(
        `https://server.plannao.com/user/transaction/${user._id}`,
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
        toast.success("TrnxID accepted successfully.");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        // event.target.reset();
      }
    };
    updateUserWithTrnxID();
  }

  return (
    <section>
      <h1 className="font-bold text-2xl text-center border-b-2 border-b-[#ffb96d] w-fit mx-auto mb-8">
      চেক আউট
      </h1>
      <img className="w-40 mb-4" src={bkash} alt="" />
      <h1 className="font-bold mb-8">
        <Highlight>বিকাশ নাম্বার :</Highlight> 0172.......
      </h1>
      <form onSubmit={handleTrnxID}>
        {/* email input */}
        <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center">
          <label htmlFor="email" className="whitespace-nowrap">
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
        <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center">
          <label htmlFor="name" className="whitespace-nowrap">
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
        <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center">
          <label htmlFor="name" className="whitespace-nowrap">
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

        {/* course price input */}
        <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center">
          <label htmlFor="name" className="whitespace-nowrap">
            কোর্স প্রাইস <span className="text-red-500">৳</span>
          </label>
          <input
            type="text"
            name="whatsApp"
            value={course.price}
            readOnly
            className="input input-bordered input-success w-full max-w-xs"
          />
        </div>

        <br />

        {/* transaction ID */}
        <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center">
          <label htmlFor="password">
            TrnxID <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="trnx"
            className="input input-bordered input-success w-full max-w-xs"
            onChange={(e) => setTNX(e.target.value)}
            required
          />
        </div>

        {/* sign up button */}
        <div className="text-center mt-6">
          <input
            type="submit"
            className="btn btn-wide bg-primary hover:bg-white hover:text-black border-0"
            onClick={() => tnx !== "" && setOpenModal(true)}
            value="কনফার্ম কর"
          />
        </div>
      </form>

      {/* ask to open confirm modal */}
      {openModal && tnx !== "" && (
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
