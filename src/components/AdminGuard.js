import React from "react";
import Unauthorized from "../routes/Unauthorized";
import MiniLoading from "../shared/MiniLoading";
import useGetUser from "../utils/useGetUser";

const AdminGuard = ({ children }) => {
  const { user, isLoading } = useGetUser();

  if (isLoading) {
    return <MiniLoading/>;
  }

  return (
    <section>{user?.role === "admin" ? children : <Unauthorized />}</section>
  );
};

export default AdminGuard;
