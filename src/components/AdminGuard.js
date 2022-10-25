import React from "react";
import NotFound from "../routes/NotFound";
import useGetUser from "../utils/useGetUser";

const AdminGuard = ({ children }) => {
  const { user, isLoading } = useGetUser();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <section>{user?.role === "admin" ? children : <NotFound />}</section>;
};

export default AdminGuard;
