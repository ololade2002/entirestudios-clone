"use client"

import Image from 'next/image';
import React from 'react'
import { useEffect, useState } from 'react'
import img from '@/public/Assets/es-11.webp'
import logo from '@/public/Assets/entirestudios-logo.webp'

const Preloader = ({ onShowContent }) => {
const [loading, setLoading] = useState(true);

useEffect(() => {
    // Simulate loading time (replace with actual loading logic)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed
  }, []);

  return (
   
    <div className={`preloader ${loading ? 'active' : ''}`}>
    <div className="preloader-content  ">
      <div className='absolute z-0 '>
        <Image className='h-[100vh]  object-cover' src={img} alt='img'/>
      </div>
      <div className='preloader-text z-50 flex flex-col '>
      
      <Image src={logo} className='w-[80%] pb-7' alt='logo'/>
      <button className='uppercase text-[12px]  hover:underline'
       onClick={onShowContent}>Click to enter</button>
      </div>
    </div>
  </div>
  )
}

export default Preloader