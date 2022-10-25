import React from "react";

import logo from "../assets/footer_logo.svg";
import googlePlay from "../assets/home/icons/google_play.svg";
import appleStore from "../assets/home/icons/app-store.svg";
import facebook from "../assets/home/social/facebook.svg";
import instagram from "../assets/home/social/instagram.svg";
import twitter from "../assets/home/social/twitter.svg";
import youtube from "../assets/home/social/youtube.svg";

const FooterTop = () => {
  return (
    <div>
    <div className="container mx-auto text-white text-center lg:text-justify  pt-16">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div>
          <img className="pb-4 mx-auto lg:mx-0" src={logo} alt="" />
          <p className="pb-2">ইন্ডাস্ট্রি এবং একাডেমিক এক্সপার্টদের সঙ্গে </p>
          <p className="pb-4">আলোচনার মাধ্যমে সঠিক ডিসিশন টি পছন্দ করুন</p>

          <div className="text-2xl flex pb-12 justify-center lg:justify-start">
            <a href="/" target={"_blank"} rel="noreferrer" className="mr-4">
              <img src={facebook} alt="fb" />
            </a>
            <a href="/" target={"_blank"} rel="noreferrer" className="mr-4">
              <img src={instagram} alt="" />
            </a>
            <a href="/" target={"_blank"} rel="noreferrer" className="mr-4">
              <img src={twitter} alt="" />
            </a>
            <a href="/" target={"_blank"} rel="noreferrer">
              <img src={youtube} alt="" />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-2xl pb-4">লিংক</h2>
          <div className="flex flex-col gap-y-2">
            <p>কোর্সসমূহ</p>
            <p>উদ্যোক্তা</p>
            <p>আমাদের সম্পর্কে</p>
            <p>ক্যারিয়ার</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl pb-4">অন্যান্য</h2>
          <div className="flex flex-col gap-y-2">
            <p>অফারসমূহ</p>
            <p>নোটস এবং গাইড</p>
            <p>ব্লগ</p>
            <p>ক্রাশ কোর্স</p>
          </div>
        </div>

        <div className="">
          <h2 className="text-2xl pb-4">যোগাযোগ </h2>
          <p className="pb-2">
            <i class="fa-solid fa-phone mr-2"></i> +৮৮০১৪৫৮৯৬৩{" "}
          </p>
          <p className="">
            <i class="fa-solid fa-envelope mr-3"></i>skillnao03@gmail.com
          </p>
        </div>
        <div className="flex flex-col justify-center lg:justify-start ">
          <h2 className="text-2xl pb-4">ডাউনলোড করুন </h2>
          <img
            className="w-2/3 mx-auto lg:mx-0"
            src={googlePlay}
            alt="Google Play"
          />
          <img className="lg:ml-[-30px]" src={appleStore} alt="Apple Store" />
        </div>
      </div>

    
    
    </div>
  </div>
  );
};

export default FooterTop;
