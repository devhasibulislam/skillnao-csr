import React from "react";
import { Link } from "react-router-dom";

const FooterBottom = () => {
  return (
    <section>
      <footer className="footer footer-center p-4 text-base-content">
        <div className="flex justify-between w-full">
          <p>
            <Link to={"/privacy-policy"}>Privacy Policy</Link> | <Link to={"/terms-of-services"}>Terms of Services</Link>
          </p>
          <p>
            Copyright © 2022 - All right reserved by{" "}
            <span className="text-[#006243]">SkillNao</span>
          </p>
        </div>
      </footer>
    </section>
  );
};

export default FooterBottom;
