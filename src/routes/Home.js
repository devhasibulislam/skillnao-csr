import React from "react";
import { useState } from "react";
import Banner from "../components/home/Banner";
import Count from "../components/home/Count";
import AcademicCourses from "../components/home/courses/AcademicCourses";
// import PopularCourses from "../components/home/courses/PopularCourses";
import ProfessionalCourses from "../components/home/courses/ProfessionalCourses";
import Necessary from "../components/home/Necessary";
import Review from "../components/home/Review";
import Solution from "../components/home/Solution";
import Modal from "../components/Modal";
import SignIn from "../components/SignIn";
import TrnxID from "../components/TrnxID";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [course, setCourse] = useState({});
  const [user, setUser] = useState({});

  return (
    <section>
      <Banner />
      {/* <PopularCourses/> */}
      <Solution />
      <Necessary />
      <Count />
      <AcademicCourses
        setOpenModal={setOpenModal}
        setCourse={setCourse}
        setUser={setUser}
      />
      <ProfessionalCourses
        setOpenModal={setOpenModal}
        setCourse={setCourse}
        setUser={setUser}
      />
      <Review />

      {/* ask to open modal */}
      {/* {openModal && (
        <Modal
          openModal={openModal}
          setOpenModal={setOpenModal}
          content={<SignIn />}
        />
      )} */}

      {openModal && user?.role === "user" && user?.role !== "admin" ? (
        <Modal
          openModal={openModal}
          setOpenModal={setOpenModal}
          content={<TrnxID course={course} user={user} />}
        />
      ) : (
        openModal &&
        user?.role !== "admin" && (
          <Modal
            openModal={openModal}
            setOpenModal={setOpenModal}
            content={<SignIn />}
          />
        )
      )}
    </section>
  );
};

export default Home;
