import React from "react";
import NotFound from "../routes/NotFound";
import useGetUser from "../utils/useGetUser";

const AuthGuard = ({ children }) => {
  const { user, isLoading } = useGetUser();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      {user?.role === "admin" || user?.role === "user" ? (
        children
      ) : (
        <NotFound />
      )}
    </section>
  );
};

export default AuthGuard;
