import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import MiniLoading from "../shared/MiniLoading";
import useGetAllUsers from "../utils/useGetAllUsers";

const ManageUsers = () => {
  const { users, isLoading } = useGetAllUsers();

  if (isLoading) {
    return <MiniLoading/>;
  }

  function handleUserToAdmin(id) {
    // translate an user to admin
    const makeAnUserToAdmin = async () => {
      const request = await fetch(`http://localhost:8080/user/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("skillNaoToken")}`,
        },
        body: JSON.stringify({ role: "admin" }),
      });
      const response = await request.json();
      if (response.acknowledgement) {
        toast.success("Successfully convert role from user to admin.");
      }
    };
    makeAnUserToAdmin();
  }

  // remove an user
  async function handleRemoveUser(id) {
    const { data } = await axios.delete(`http://localhost:8080/user/${id}`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("skillNaoToken")}`,
      },
    });
    if (data.acknowledgement) {
      toast.success("Successfully deleted user.");
    }
  }

  return (
    <section>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>WhatsApp</th>
              <th>Trnx ID</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr className="hover" key={index}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.whatsApp}</td>
                <td>
                  {/* <span
                    className={`badge badge-success text-black`}
                  >
                    {user.trnxID}
                  </span> */}
                  <select className="select select-sm select-success w-full">
                    {user?.role === "admin" ? (
                      <option disabled selected>
                        No TrnxID available
                      </option>
                    ) : (
                      user.transactionInfo?.map((trnx, index) => (
                        <option key={index}>{trnx.transactionID}</option>
                      ))
                    )}
                  </select>
                </td>
                <td>{user.role}</td>
                <td className="flex flex-row gap-x-4 mt-[8px]">
                  {/* make admin */}
                  <span
                    className="tooltip"
                    data-tip="Make Admin"
                    onClick={() =>
                      user?.role !== "admin" && handleUserToAdmin(user._id)
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                      />
                    </svg>
                  </span>
                  |{/* delete user */}
                  <span
                    className="tooltip"
                    data-tip="Delete User"
                    onClick={() =>
                      user?.role !== "admin" && handleRemoveUser(user._id)
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageUsers;
