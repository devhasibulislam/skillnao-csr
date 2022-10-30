import axios from "axios";
import React, { useState } from "react";
import Modal from "./Modal";
import SignIn from "./SignIn";
import toast from "react-hot-toast";

const SignUp = () => {
  const [openModal, setOpenModal] = useState(false);

  function handleSignIn(event) {
    event.preventDefault();

    const userSignUpInfo = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
      whatsApp:
        event.target.number.value.toString().length === 11
          ? `+88${event.target.number.value}`
          : `+880${event.target.number.value}`,
    };

    axios
      .post("http://localhost:8080/user/signup", userSignUpInfo)
      .then((data) => {
        if (data.data.acknowledgement) {
          toast.success("Successfully signed up new user.");
          event.target.reset();
        }
      })
      .catch((error) => {
        if (error) {
          toast.error("Sign up error, retry.");
        }
      });
  }

  return (
    <section>
      <div>
        <h1 className="font-bold text-2xl text-center border-b-2 border-b-[#ffb96d] w-fit mx-auto mb-8">
          একাউন্ট তৈরি করুণ
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

          {/* user name input */}
          <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center">
            <label htmlFor="name">
              ইউজার নেম <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="পুরো নাম লিখুন"
              className="input input-bordered input-success w-full max-w-xs"
              required
            />
          </div>

          <br />

          {/* whatsApp number input */}
          <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center">
            <label htmlFor="name">
              হয়াটস-এপ নাম্বার <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="number"
              placeholder="হয়াটস-এপ নাম্বার"
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

          {/* sign up button */}
          <div className="text-center mt-6">
            <input
              type="submit"
              className="btn btn-wide bg-[#006243] hover:bg-white hover:text-black border-0"
              value="Sign Up"
            />
          </div>
        </form>

        {/* ask for sign in */}
        <div className="mt-4">
          <p>
            Already have an account?{" "}
            <label
              htmlFor="skillnao-modal"
              className="text-secondary font-bold hover:underline"
              onClick={() => setOpenModal("signup")}
            >
              Login
            </label>
          </p>
        </div>
      </div>

      {/* open modal */}
      {openModal && (
        <Modal
          openModal={openModal}
          setOpenModal={setOpenModal}
          content={<SignIn />}
        />
      )}
    </section>
  );
};

export default SignUp;
