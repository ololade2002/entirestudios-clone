"use client"

import React from 'react'
import Image from 'next/image'
import logo from '../../public/Assets/entirestudios-logo.webp';
import Link from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { heroSectionData } from '@/utils/utilsData';


const ProductNavMobile = () => {
  return (
    <div className='mobileNav'>
    <div className='max-w-[62rem] px-3 sm:px-5 mt-[10px] py-4 mx-auto'>
    <div className='flex flex-row items-center justify-between'>

    <button className='bg-secondary  f-btn font-space text-[13px]  font-[400] drop-shadow-2xl '>
    <Link className='flex flex-row items-center gap-[0.5rem]' href='/'> 
   <div className='flex flex-row items-center gap-2'>
   <AiOutlineArrowLeft className=''/>
   <h2>backto</h2> 
   </div>
   <Image className='width-f object-scale-down h-[0.8rem]' src={logo} alt='logo'/>
    </Link>
    </button>
    
   <div className=' font-space text-[13px] flex flex-row gap-3'>
   <button className='f-btn bg-secodary '><Link href='/cart'>Cart</Link></button>
   </div>
    </div>

    <div className='flex justify-center pt-12 -mb-6 items-center'>
          <Link href='/'>
          <Image className='object-cover  w-36 ' src={logo} alt='logo'/>
          </Link>  
         </div>

   
    </div>
    </div>
  )
}

export default ProductNavMobile