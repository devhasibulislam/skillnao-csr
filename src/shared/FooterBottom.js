import React from "react";

const FooterBottom = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <section className="px-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between py-5">
        <p>
          Privacy Policy <span className="mx-4">|</span> Terms of Service
        </p>
        <p>
          SkillNao@{year} All Right Reserved by{" "}
          <span className="text-[#4FBB8A]">Jahidul</span> & Developed by{" "}
          <span className="text-[#4FBB8A]">Nipa</span>
        </p>
      </div>
    </section>
  );
};

export default FooterBottom;
