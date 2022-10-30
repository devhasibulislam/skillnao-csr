import React from "react";
const Unauthorized = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <p className="py-6">Please Sign in / Sign up</p>
          <h1 className="text-5xl font-bold">Unauthorized!</h1>
          <p className="py-6">
            The request was a legal request, but the server is refusing to
            respond to it. For use when authentication is possible but has
            failed or not yet been provided.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Unauthorized;
