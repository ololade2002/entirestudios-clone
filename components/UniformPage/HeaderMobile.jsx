
"use client"

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '@/public/Assets/entirestudios-logo.webp'
import {AiOutlineArrowRight} from 'react-icons/ai'
import Collection from '@/components/General/Collection'

const HeaderMobile = () => {
  return (
    <div className='mobileNav'>
     <div className='max-w-[62rem] px-3 sm:px-5 mt-[10px] py-4 mx-auto'>
         
        <div className='flex flex-col gap-4'>
        <div className='flex flex-row font-space text-[13px] items-center justify-between'>
         <div className='f-btn bg-secodary '><Collection/> </div>
            <button className='f-btn  bg-secodary '><Link href='/cart'>Cart</Link></button>
         </div>

         <div className='flex flex-row font-space text-[13px] items-center justify-between'>
         <button className='l-btn  '><Link className='flex flex-row items-center gap-2' href='/info'>info  <AiOutlineArrowRight className=''/> </Link></button>
        
         </div>

         <div className='flex justify-center  items-center'>
          <Link href='/'>
          <h1 className='text-[32px] font-space tracking-wide'>UNIFORM</h1>  
          <Image className='object-cover  w-36 ' src={logo} alt='logo'/>
          </Link>  
         </div>
        </div>

        
     </div>   
    </div>
  )
}

export default HeaderMobile