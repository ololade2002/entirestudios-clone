"use client"

import React from 'react'
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import {BsBagCheckFill} from 'react-icons/bs'
import { useRouter } from 'next/navigation';

const Payment = () => {
    const router = useRouter()
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0,
      });
      const [isClient, setClient] = useState(false);
      useEffect(() => {
        const { innerWidth: width, innerHeight: height } = window;
        setDimensions({
          width,
          height,
        });
        setClient(true);
      }, []);

  return (
    <div className='bg-white relative  h-screen overflow-y-hidden'>
    {isClient && (
    <Confetti width={dimensions.width} height={dimensions.height} />
    )}
   <div className='w-[94%]  px-4 md:w-[70%] py-20 rounded-md  absolute mx-auto left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] '>
   <div className='mx-auto flex justify-center items-center flex-col'>
    <BsBagCheckFill className='w-16   text-lime-600 h-16'/>
    <h2 className='pt-4  text-2xl font-space text-center'>Thank You For Your Purchase</h2>    
    <p className='pt-3 pb-3 font-space text-center'>Check your email inbox for the receipt</p>
    <p className='pt-4 pb-3 font-space text-center'>If you have any question,please email <span className='underline text-gray-700'>entireestudios@gmail.com</span> </p>
    <button onClick={() => router.push('/')} className='mt-6 py-3 text-[14px] px-8 font-space text-white bg-gray-700 rounded-md'>Continue Shopping</button>
   </div>
   </div>
    </div>
  )
}

export default Payment


