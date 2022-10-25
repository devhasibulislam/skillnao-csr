import React from 'react';
import bl from "../../assets/home/partner/banglalink.svg";
import swap from "../../assets/home/partner/swap.svg";
import gp from "../../assets/home/partner/grameenphone.svg";
import bkash from "../../assets/home/partner/bkash.svg";
import Highlight from './Highlight';


const OurPartners = () => {
    const partners = [
        {
            picture:bl
        },
        {
            picture:swap
        },
        {
            picture:gp
        },
        {
            picture:bkash
        }
    ]
    return (
        <div>
            <h1 className='text-4xl text-center pb-12 font-bold'>আমাদের <Highlight>পার্টনার</Highlight> </h1>
           <div className='partner'>
           <div className='container mx-auto py-16 px-8 md:px-24 bg-[#F0FCF7] rounded-lg  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 shadow'>
                {
                    partners.map((partner, index) => 
                    <div
                    key={index}
                     className='bg-white shadow rounded-lg flex justify-center items-center'>
                    <img src={partner.picture} alt="" />
                </div>
                    )
                }
            </div>
           </div>
            
        </div>
    );
};

export default OurPartners;