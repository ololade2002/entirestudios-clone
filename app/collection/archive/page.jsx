
"use client"

import React from 'react'
import Navbar from './header'
import { archiveSectionData } from '@/utils/utilsData'
import Image from 'next/image'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const Archive = () => {
const router = useRouter()

  return (
    <div>
    <Navbar/>

    <div className='max-w-[55rem] smedium:pt-12  mx-auto'>
    <div className='grid grid-cols-3  gap-y-6 md:gap-y-10 md:grid-cols-4 lg:grid-cols-5'>  
    {archiveSectionData.map((product) => (
      <div className="archive-preview animate-customAnimation" key={product.id}>
      <div className='flex items-center min-h-[48vw] md:min-h-[25vw] xl:min-h-[18vw]'>
      <div className='relative'>
      <Image className='' src={product.img} alt='tar'/> 
      </div>
      </div>
      <div className='flex flex-col items-center text-center gap-1'>
      <h2 className='font-space text-[13px] sm:text-[14px] uppercase'>{product.title}</h2>
      <p className='font-space text-[13px] sm:text-[14px]'>{product.price}</p>
      </div>
      </div>
    ))} 
    </div>
    <div onClick={() => router.push('/')} className='mt-4  mb-16 flex items-center justify-center'>
    <button  className='l-btn font-space text-[13px] flex flex-row items-center gap-3'>More Collections  <AiOutlineArrowRight/>  </button>
    </div>
    </div>
    </div>
  )
}

export default Archive