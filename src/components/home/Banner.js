import React from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/home/hero/bannerHero.svg"

const Banner = () => {
  return (
    <div className="bg-primary pt-28 text-white">
      <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h1 className="leading-relaxed text-4xl">
          All you need is a mentor.
          
          </h1>
          <p className="py-8">  কোন পথে এগুবে ভেবে 
            পাচ্ছো না? আমরাই  তোমাকে পথ বলে দিব!{" "}</p>
          <Link
            to="/category"
            className="btn btn-md btn-secondary border-0 text-black"
          >
            কি হতে চাও ?
          </Link>
        </div>
        <div>
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
