import React, { useState } from "react";
import { Link } from "react-router-dom";
import useGetUser from "../utils/useGetUser";
import headerLogo from "../assets/header_logo.svg";
import Modal from "../components/Modal";
import SignIn from "../components/SignIn";
import MiniLoading from "./MiniLoading";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const { user, isLoading } = useGetUser();

  if (isLoading) {
    return <MiniLoading />;
  }

  const dropDownMenu = [
    {
      title: "একাডেমিক",
      anchor: "/category/academic",
    },
    {
      title: "প্রফেশনাল",
      anchor: "/category/professional",
    },
    {
      title: "জব সংক্রান্ত",
      anchor: "/category/jobRelated",
    },
  ];

  const submenu = (
    <>
      {dropDownMenu?.map((ddm, index) => (
        <li key={index}>
          <Link to={ddm.anchor}>{ddm.title}</Link>
        </li>
      ))}
    </>
  );

  return (
    <section className="bg-[#3f876f]">
      <div className="container mx-auto">
        <div className="navbar">
          <div className="navbar-start w-full justify-between">
            {/* header logo */}
            <Link to={"/home"}>
              <img src={headerLogo} alt="skill nao logo" />
            </Link>

            {/* for small device */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#ffb663]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  {user?.role === "admin" && (
                    <div>
                      <span className="btn btn-outline rounded hover:text-black hover:bg-white w-full">
                        <Link to={"dashboard"}>ড্যাশবোর্ড</Link>
                      </span>
                    </div>
                  )}
                </li>
                <li tabIndex={0}>
                  <label
                    tabIndex={0}
                    className="btn rounded m-1 border-0 text-black bg-[#ffb663] hover:bg-white"
                  >
                    কি হতে চাও?
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </label>
                  <div className="dropdown dropdown-open">
                    <ul className="p-2 bg-white w-full rounded">{submenu}</ul>
                  </div>
                </li>
                <li>
                  <label
                    htmlFor="skillnao-modal"
                    className="btn rounded modal-button border-0 text-black bg-white hover:bg-[#ffb663]"
                  >
                    {user ? (
                      <span
                        onClick={() => {
                          localStorage.removeItem("skillNaoToken");
                          window.location.replace(
                            "https://skillnao-csr.vercel.app/"
                          );
                          // window.location.reload();
                        }}
                      >
                        লগ-আউট
                      </span>
                    ) : (
                      <span onClick={() => setOpenModal(true)}>লগ-ইন</span>
                    )}
                  </label>
                </li>
              </ul>
            </div>
          </div>

          {/* for large device */}
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal p-0 items-center">
              <li>
                {user?.role === "admin" && (
                  <div className="p-0">
                    <span className="btn btn-outline text-white rounded hover:text-black hover:bg-white">
                      <Link to={"dashboard"}>ড্যাশবোর্ড</Link>
                    </span>
                  </div>
                )}
              </li>
              <li tabIndex={0}>
                <label
                  tabIndex={0}
                  className="btn rounded m-1 border-0 text-black bg-[#ffb663] hover:bg-white"
                >
                  কি হতে চাও?
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </label>
                <ul className="p-2 bg-white">{submenu}</ul>
              </li>
              <li>
                <label
                  htmlFor="skillnao-modal"
                  className="btn rounded modal-button border-0 text-black bg-white hover:bg-[#ffb663]"
                >
                  {user ? (
                    <span
                      onClick={() => {
                        localStorage.removeItem("skillNaoToken");
                        // window.location.replace(
                        //   "https://skillnao-csr.vercel.app/"
                        // );
                        window.location.reload();
                      }}
                    >
                      লগ-আউট
                    </span>
                  ) : (
                    <span onClick={() => setOpenModal(true)}>লগ-ইন</span>
                  )}
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* open modal */}
      {openModal && (
        <Modal
          openModal={openModal}
          setOpenModal={setOpenModal}
          content={<SignIn />}
        />
      )}
    </section>
  );
};

export default Header;
