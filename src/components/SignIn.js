import axios from "axios";
import React, { useState } from "react";
import Modal from "./Modal";
// import Reset from "./Reset";
import SignUp from "./SignUp";
import toast from "react-hot-toast";

const SignIn = () => {
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  // const [openForgotModal, setOpenForgotModal] = useState(false);

  function handleSignIn(event) {
    event.preventDefault();

    const userSignInInfo = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    axios
      .post("https://skillnao-ssr.onrender.com/user/signin", userSignInInfo)
      .then((response) => {
        if (response.data.acknowledgement) {
          toast.success("Successfully signed in new user");
          localStorage.setItem("skillNaoToken", response.data.data.token);
        }
      })
      .catch((error) => {
        if (error) {
          toast.error("Sign up error, retry.");
        }
      });

    event.target.reset();
  }

  return (
    <section>
      <div>
        <h1 className="font-bold text-2xl text-center border-b-2 border-b-[#ffb96d] w-fit mx-auto mb-8">
          সাইন- ইন করুন
        </h1>
        <form onSubmit={handleSignIn}>
          {/* email input */}
          <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center">
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
          <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center">
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
            <input
              type="submit"
              className="btn btn-wide bg-[#006243] hover:bg-white hover:text-black border-0"
              value="Sign In"
            />
          </div>
        </form>

        {/* ask for sign up or forgot */}
        <div className="mt-4">
          <div className="flex lg:justify-between md:justify-between lg:flex-row md:flex-row flex-col">
            <p>
              Did'nt have an account?{" "}
              <label
                htmlFor="skillnao-modal"
                className="text-secondary font-bold hover:underline"
                onClick={() => setOpenSignUpModal(true)}
              >
                Create account
              </label>
            </p>
            {/* <p className="hover:underline">
              <label
                htmlFor="skillnao-modal"
                onClick={() => setOpenForgotModal(true)}
              >
                Forgot password?
              </label>
            </p> */}
          </div>
        </div>
      </div>

      {/* open modal */}
      {openSignUpModal && (
        <Modal
          openModal={openSignUpModal}
          setOpenModal={setOpenSignUpModal}
          content={<SignUp />}
        />
      )}
      {/* {openForgotModal && (
        <Modal
          openModal={openForgotModal}
          setOpenModal={setOpenForgotModal}
          content={<Reset />}
        />
      )} */}
    </section>
  );
};

export default SignIn;
