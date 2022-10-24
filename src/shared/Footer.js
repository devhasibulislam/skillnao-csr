import React from "react";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <section className="bg-base-300">
      <div className="container mx-auto">
        <FooterTop />
        <hr className="border-gray-500" />
        <FooterBottom />
      </div>
    </section>
  );
};

export default Footer;
