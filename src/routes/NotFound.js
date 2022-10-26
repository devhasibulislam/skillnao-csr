import React from "react";

const NotFound = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <p className="py-6">404</p>
          <h1 className="text-5xl font-bold">Not Found!</h1>
          <p className="py-6">
            The requested page could not be found but may be available again in
            the future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
