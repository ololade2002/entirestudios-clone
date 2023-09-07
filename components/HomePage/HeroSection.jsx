

"use client"

import React from 'react'
import {heroSectionData} from '../../utils/utilsData'
import Image from 'next/image'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useRouter } from 'next/navigation'

const HeroSection = () => {
const router = useRouter()
  return (
   <div className='mt-6  lg:-mt-3'>
   
    <div className="hero max-w-[50rem] mx-auto">
    <div className='grid grid-cols-5 '>
     {heroSectionData.map((product) => (
     <div onClick={() => router.push(`product/${product.id}`)}  >
     <div className="hero-preview  " key={product.id}>
     <Image className='w-full h-auto transition  duration-1000 transform  cursor-pointer ' alt='image' src={product.img}/>
    
     </div>
     </div>
    
     ))}
    
    </div>
    <div onClick={() => router.push('/uniform')}  className='mt-12 mb-10 flex items-center justify-center'>
    <button className='l-btn font-space text-[13px] flex flex-row items-center gap-3'>More Collections  <AiOutlineArrowRight/>  </button>
    </div>
   </div>

 
   </div>
  )
}

export default HeroSection