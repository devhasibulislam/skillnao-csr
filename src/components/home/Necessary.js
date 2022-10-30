import React from 'react';
import package1 from "../../assets/home/necessary/package-1.svg";
import package2 from "../../assets/home/necessary/package-2.svg";
import package3 from "../../assets/home/necessary/package-3.svg";
import package4 from "../../assets/home/necessary/package-4.svg";
import Highlight from './Highlight';


const Necessary = () => {
    const necesities = [
        {
            picture:package1,
            content:"ইন্ডাস্ট্রি ও একাডেমিক এক্সপার্টদের কাছ থেকে দিকনির্দেশনা "
        },
        {
            picture:package2,
            content:"রোডম্যাপ প্রস্তুতিতে সহায়তা  "
        },
        {
            picture:package3,
            content:"ম্যাটেরিয়ালস বাছাই করে দেয়া "
        },
        {
            picture:package4,
            content:"এন্ড টু এন্ড মেন্টরশিপ"
        }
    ]
    return (
        <div className='bg-[#F0FCF7] py-12 my-20'>
            <h1 className='text-4xl text-center font-bold pb-8'>কেন আমাদের প্যাকেজগুলো <Highlight>কার্যকরী?</Highlight></h1>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8'>
            {
                necesities?.map((nesessary, index)=><div
                key={index}
                className='bg-white shadow p-8 rounded-lg'>
                    <img className='mx-auto pb-5' src={nesessary.picture} alt="" />
                    <p className='text-center text-[#4A4A4A]'>{nesessary.content}</p>
                </div>)
            }
            </div>
        </div>
    );
};

export default Necessary;