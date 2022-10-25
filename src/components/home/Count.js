import React from "react";

const Count = () => {
  const allCount = [
    {
      number: "১৫০০",
      name: "তালিকাভুক্ত",
    },
    {
      number: "২৫০",
      name: "প্রশিক্ষক",
    },
    {
      number: "১৫০০",
      name: "শিক্ষার্থী",
    },
    {
      number: "১৫০০",
      name: "কার্যধারাগুলো",
    },
  ];
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-20 p-8">
      {allCount.map((count, index) => (
        <div
          key={index}
          className="bg-primary rounded-lg text-center py-8 text-white"
        >
          <h1 className="text-4xl font-bold pb-4">{count.number}</h1>
          <p>{count.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Count;
