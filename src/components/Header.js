import React from "react";
import logo from "../../assets/header_logo.svg";

const Header = () => {
  return <section>
    <div className="bg-[#3f876f]">
        {/* logo */}
        <div>
            <img src={logo} alt="skill nao logo" />
        </div>

        {/* buttons */}
        <div>
            <div></div>
            <div></div>
        </div>
    </div>
  </section>;
};

export default Header;
