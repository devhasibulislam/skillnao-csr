import React from "react";

import logo from "../assets/footer_logo.svg";
import googlePlay from "../assets/home/icons/google_play.svg";
import appleStore from "../assets/home/icons/app-store.svg";
import facebook from "../assets/home/social/facebook.svg";
import instagram from "../assets/home/social/instagram.svg";
import twitter from "../assets/home/social/twitter.svg";
import youtube from "../assets/home/social/youtube.svg";

const FooterTop = () => {
  const footerAnchors = [
    {
      title: "লিংক",
      anchors: ["কোর্সসমূহ", "উদ্যোক্তা", "আমাদের সম্পর্কে", "ক্যারিয়ার"],
    },
    {
      title: "অন্যান্য",
      anchors: ["অফারসমূহ", "নোটস এবং গাইড", "ব্লগ", "ক্রাশ কোর্স"],
    },
  ];

  const socialIcons = [facebook, instagram, twitter, youtube];

  return (
    <div>
      <div className="container mx-auto text-white text-center lg:text-justify  pt-16">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div>
            <img className="pb-4 mx-auto lg:mx-0" src={logo} alt="" />
            <p className="pb-2">ইন্ডাস্ট্রি এবং একাডেমিক এক্সপার্টদের সঙ্গে </p>
            <p className="pb-4">আলোচনার মাধ্যমে সঠিক ডিসিশন টি পছন্দ করুন</p>

            <div className="text-2xl flex mb-12 justify-center gap-x-2 lg:justify-start">
              {socialIcons?.map((socialIcon, index) => (
                <a key={index} href="/" target={"_blank"} rel="noreferrer">
                  <img src={socialIcon} alt={`social-icon-${index}`} />
                </a>
              ))}
            </div>
          </div>

          {footerAnchors?.map((footerAnchor, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl pb-4">{footerAnchor.title}</h2>
              {footerAnchor.anchors?.map((anchor) => (
                <div className="flex flex-col gap-y-2">
                  <p>{anchor}</p>
                </div>
              ))}
            </div>
          ))}

          <div className="mb-12">
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
