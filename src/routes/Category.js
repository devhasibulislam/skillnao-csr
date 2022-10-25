import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import CategoryBanner from "../components/CategoryBanner";

const Category = () => {
  const location = useLocation();

  /* new routes added here, just */
  const routes = [
    {
      title: "Academic",
      anchor: "/category/academic",
    },
    {
      title: "Professional",
      anchor: "/category/professional",
    },
  ];

  return (
    <section>
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
          <CategoryBanner />
          <Outlet />
        </div>
     
        <div className="drawer-side shadow-lg">
          <label htmlFor="skill-nao-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
            {routes.map((route, index) => (
              <li key={index}>
                <NavLink
                  to={route.anchor}
                  className={({ isActive }) =>
                    isActive ? "font-bold underline" : undefined
                  }
                >
                  <input
                    type="checkbox"
                    className="checkbox checkbox-accent"
                    checked={location.pathname.includes(
                      route.title.toLowerCase()
                    )}
                  />{" "}
                  {route.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Category;

/**
 * current url & pathname
 * https://bobbyhadz.com/blog/react-get-current-url#:~:text=Use%20the%20window%20object%20to,access%20the%20path%2C%20use%20window.
 */
