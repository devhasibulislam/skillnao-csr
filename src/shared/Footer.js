import React from "react";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <section className="bg-[#181818] ">
      <div >
        <FooterTop />
        <hr className="border-gray-500" />
        <FooterBottom />
      </div>
    </section>
  );
};

export default Footer;
