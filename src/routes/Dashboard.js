import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import MiniLoading from "../shared/MiniLoading";
import useGetUser from "../utils/useGetUser";

const Dashboard = () => {
  const location = useLocation();
  const { user, isLoading } = useGetUser();

  if (isLoading) {
    return <MiniLoading/>;
  }

  /* new routes added here, just */
  const routes = [
    {
      title: "Add Course",
      anchor: "/dashboard/add-course",
    },
    {
      title: "Manage Courses",
      anchor: "/dashboard/manage-courses",
    },
    {
      title: "Manage Users",
      anchor: "/dashboard/manage-users",
    },
  ];

  return (
    <section>
      <div className="text-center bg-[#1A6241] py-20 mb-4 rounded">
        <div className="text-4xl text-white leading-relaxed font-bold">
          <h1>
            Welcome to Dashboard,{" "}
            <span className="text-[#ffb96d]">{user.name}</span>
          </h1>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="drawer drawer-mobile">
          <input
            id="skill-nao-drawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content p-4">
            {/* <!-- Page content here --> */}
            <label
              htmlFor="skill-nao-drawer"
              className="btn btn-outline drawer-button lg:hidden mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </label>
            <Outlet />
          </div>
          <div className="drawer-side shadow-lg">
            <label
              htmlFor="skill-nao-drawer"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
              {routes?.map((route, index) => (
                <li key={index}>
                  <NavLink
                    to={route.anchor}
                    className={({ isActive }) =>
                      isActive ? "font-bold text-primary" : undefined
                    }
                  >
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                      checked={location.pathname === route.anchor}
                    />{" "}
                    {route.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
