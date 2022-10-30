import React from "react";
import { Link } from "react-router-dom";
import man from "../../assets/home/solution/man1.svg";
import Highlight from "./Highlight";


const Solution = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 my-20 px-8">
      <div className="my-auto">
        <div className="text-4xl ">
          <p className="leading-relaxed">
            তোমার একাডেমিক এবং <br /> প্রফেশনাল ক্যারিয়ারের <br />
            <Highlight>ওয়ানস্টপ গাইডলাইন </Highlight>
          </p>
        </div>
        <p className="mt-4 text-[#4A4A4A]">
          ইন্ডাস্ট্রি এবং একাডেমিক এক্সপার্টদের সঙ্গে আলোচনার মাধ্যমে <br />{" "}
          সঠিক সিধান্ত নাও!
        </p>
        <Link
          to="/category"
          className="btn btn-md bg-primary border-0 text-white my-4"
        >
          কি হতে চাও?
        </Link>
      </div>
      <div>
        <img src={man} alt="" />
      </div>
    </div>
  );
};

export default Solution;
