import React from "react";
import Carousel from "react-multi-carousel";
import person from "../../assets/home/review/man1.svg";
import quotation from "../../assets/home/review/quatation.svg";
import star from "../../assets/home/review/star.svg";

import "react-multi-carousel/lib/styles.css";
import Highlight from "./Highlight";

const Review = () => {
  const reviews = [
    {
      name: "আবরার হোসেন",
      picture: person,
      opinion:
        "“আমি BCS কমপ্লিট করার পর ক্যারিয়ার ডিসিশন নিয়ে খুব ডিপ্রেসড দিলাম। এ সময়ে স্কিলনাও এর IELTS 9.0 প্রোগ্রামটি করি এই কম্প্রিহেনসিভ প্রোগ্রামের মাধ্যমে এক সপ্তাহেই IELTS প্রিপারেশন নিয়ে 8.00 Score অর্জন করেছি।“ ",
      qualification: "পিএইচডি, ইউনিভার্সিটি",
      ratings: 5,
    },
    {
      name: "আবরার হোসেন",
      picture: person,
      opinion:
        "“আমি BCS কমপ্লিট করার পর ক্যারিয়ার ডিসিশন নিয়ে খুব ডিপ্রেসড দিলাম। এ সময়ে স্কিলনাও এর IELTS 9.0 প্রোগ্রামটি করি এই কম্প্রিহেনসিভ প্রোগ্রামের মাধ্যমে এক সপ্তাহেই IELTS প্রিপারেশন নিয়ে 8.00 Score অর্জন করেছি।“ ",
      qualification: "পিএইচডি, ইউনিভার্সিটি",
      ratings: 3
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container mx-auto my-12">
      <h1 className="text-4xl text-center font-bold pb-12">
        সেবা গ্রহণকারীদের <Highlight>মতামত</Highlight>
      </h1>
      <Carousel
        swipeable="true"
        responsive={responsive}
        // autoPlay={true}
        // autoPlaySpeed={5000}
        infinite={true}
      >
        {reviews?.map((review, index) => (
          <div
            key={index}
            className="grid grid-cols-1 p-8 md:grid-cols-2 md:gap-2 gap-12 items-center"
          >
            <div className="reviewBg w-3/4 lg:block md:block hidden">
              <img className="mx-auto" src={review.picture} alt="" />
            </div>
            <div>
              <div className="flex -mb-4 ml-8">
                {" "}
                <img className="mr-2" src={quotation} alt="" />
                <img src={quotation} alt="" />
              </div>
              <div className="shadow-2xl rounded-lg p-8">
                <p className="text-[#4A4A4A] leading-10 pb-4">
                  {review.opinion}
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="border-2 border-[#007f7b] h-20 w-20 object-cover rounded-full lg:hidden md:hidden block">
                      <img
                        className="mx-auto max-w-full h-20 w-20 object-cover lg:hidden md:hidden block rounded-full"
                        src={review.picture}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-3 text-end">
                    <div className="flex justify-end">
                      {[...Array(review.ratings).keys()]?.map((rating) => (
                        <img key={rating} src={star} alt="" />
                      ))}
                    </div>
                    <p>{review.name}</p>
                    <p className="text-[#8C8C8C]">{review.qualification}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Review;
