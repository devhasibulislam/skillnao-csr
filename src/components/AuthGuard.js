import React from "react";
import Unauthorized from "../routes/Unauthorized";
import useGetUser from "../utils/useGetUser";

const AuthGuard = ({ children }) => {
  const { user, isLoading } = useGetUser();

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <section>
      {user?.role === "admin" || user?.role === "user" ? (
        children
      ) : (
        <Unauthorized />
      )}
    </section>
  );
};

export default AuthGuard;
