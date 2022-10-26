import React from "react";

const Reset = () => {
  return (
    <section>
      <div>
        <h1 className="font-bold text-2xl text-center border-b-2 border-b-[#ffb96d] w-fit mx-auto mb-8">
          Reset Password
        </h1>
        <form action="">
          {/* email input */}
          <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center">
            <label htmlFor="email">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="input input-bordered input-success w-full max-w-xs"
              required
            />
          </div>

          <br />

          {/* password input */}
          <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center">
            <label htmlFor="password">
              New Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter new password"
              className="input input-bordered input-success w-full max-w-xs"
              required
            />
          </div>

          {/* sign in button */}
          <div className="text-center mt-6">
            <input
              type="submit"
              className="btn btn-wide bg-[#006243] hover:bg-white hover:text-black border-0"
              value="Reset"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Reset;
