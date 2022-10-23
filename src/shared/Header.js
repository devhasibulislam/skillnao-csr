import React, { useState } from "react";
import { Link } from "react-router-dom";
import headerLogo from "../assets/header_logo.svg";
import Modal from "../components/Modal";
import SignIn from "../components/SignIn";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  const dropDownMenu = [
    {
      title: "Academic",
      anchor: "/academic",
    },
    {
      title: "Professional",
      anchor: "/professional",
    },
  ];

  return (
    <section className="bg-[#3f876f] py-4">
      <div className="container mx-auto">
        <div className="flex justify-between">
          {/* logo */}
          <div>
            <Link to={"/"}>
              <img src={headerLogo} alt="skill nao logo" />
            </Link>
          </div>

          {/* buttons */}
          <div className="flex items-center gap-x-4">
            <div>
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="btn rounded m-1 border-0 text-black bg-[#ffb663] hover:bg-white"
                >
                  কি হতে চাও?
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow-lg bg-base-100 rounded w-52"
                >
                  {dropDownMenu.map((ddm, index) => (
                    <li key={index}>
                      <Link to={ddm.anchor}>{ddm.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="self-center">
              <label
                htmlFor="skillnao-modal"
                className="btn rounded modal-button border-0 text-black bg-white hover:bg-[#ffb663]"
                onClick={() => setOpenModal(true)}
              >
                লগ-ইন
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* open modal */}
      {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal} content={<SignIn />} />}
    </section>
  );
};

export default Header;
