import React from "react";

const CategoryBanner = () => {
  return (
    <section>
      <div className="categoryBg text-center bg-[#1A6241] p-32 mb-4 rounded">
        <div className="text-4xl text-white leading-relaxed font-bold">
          <h1>
            সঠিক ডিসিশন নাও, উন্নত <br /> ভবিষ্যত গড়{" "}
          </h1>
        </div>
        <p className="text-white py-8">
          আমাদের পরিসেবা আপনার জন্য সেরা দক্ষতা প্রকল্প এবং কোর্স নিয়ে <br />{" "}
          আসে। যা আপনার ভবিষ্যৎ গড়তে সঠিক পথ দেখায়।
        </p>
      </div>
    </section>
  );
};

export default CategoryBanner;
