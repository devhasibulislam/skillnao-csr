import React, { useState } from "react";
import Modal from "./Modal";
import SignUp from "./SignUp";

const SignIn = () => {
  const [openModal, setOpenModal] = useState("");

  return (
    <section>
      <div>
        <h1 className="font-bold text-2xl text-center border-b-2 border-b-[#ffb96d] w-fit mx-auto mb-8">
          সাইন- ইন করুন
        </h1>
        <form action="">
          {/* email input */}
          <div className="flex justify-between items-center">
            <label htmlFor="email">
              ইমেইল অ্যাড্রেস <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="ইমেইল লিখুন"
              className="input input-bordered input-success w-full max-w-xs"
              required
            />
          </div>

          <br />

          {/* password input */}
          <div className="flex justify-between items-center">
            <label htmlFor="password">
              পাসওয়ার্ড <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="পাসওয়ার্ড লিখুন"
              className="input input-bordered input-success w-full max-w-xs"
              required
            />
          </div>

          {/* sign in button */}
          <div className="text-center mt-6">
            {/* <button className="btn btn-wide bg-[#006243] text-white hover:bg-white hover:text-black border-0">
              Sign In
            </button> */}
            <label
              htmlFor="skillnao-modal"
              className="btn btn-wide bg-[#006243] hover:bg-white hover:text-black border-0"
            >
              Sign In
            </label>
          </div>
        </form>

        {/* ask for sign up or forgot */}
        <div className="mt-4">
          <div className="flex lg:justify-between md:justify-between lg:flex-row md:flex-row flex-col">
            <p>
              Did'nt have an account?{" "}
              <label
                htmlFor="skillnao-modal"
                className="text-[#ffb96d] hover:underline"
                onClick={() => setOpenModal("signup")}
              >
                Create account
              </label>
            </p>
            <p className="hover:underline">
              <label
                htmlFor="skillnao-modal"
                onClick={() => setOpenModal("forgot")}
              >
                Forgot password?
              </label>
            </p>
          </div>
        </div>
      </div>

      {/* open modal */}
      {openModal === "signup" && <Modal content={<SignUp />} />}
      {openModal === "forgot" && <Modal />}
    </section>
  );
};

export default SignIn;
