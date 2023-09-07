
"use client"

import Image from 'next/image'
import logo from '@/public/Assets/entirestudios-logo.webp'
import Link from 'next/link'
import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import Collection from '@/components/General/Collection'
import MobileNavigation from '@/components/General/MobileNavigation'

const Navbar = () => {

  
  return (
 <div>
    <MobileNavigation  />
    <header className=' max-w-full webNav  mx-auto  px-7 sm:pt-[2.2rem]'>
   <nav className='flex flex-row items-center  '>
   <div className='shop-uniform  flex-1 flex items-center '>
   <div className="fixed z-50">
   <button className='bg-secondary  f-btn font-space text-[13px] font-[400] drop-shadow-2xl '>
   <Link href='/uniform'>Shop <span className='uppercase'>Uniform</span></Link></button> 
   </div>
   </div>

   <div  className='flex-1 flex justify-center '>
   <Link href='/'>
   <Image className='object-cover w-40' src={logo} alt='logo'/>
   </Link>
   </div>

   <div className='flex-1 flex items-center justify-end'>
  <div className="fixed z-50">
  <div className='font-space text-[13px] flex flex-row gap-6'>
   <div className='f-btn bg-secodary '><Link href='/'> <Collection/> </Link></div>
   <button className='f-btn bg-secodary '><Link href='/cart'>Cart</Link></button>
   </div>
  </div>
  </div>

    </nav>
    <div className=' max-w-[62rem] invisible md:visible  py-4 mx-auto'>
    <div className='font-space text-[13px] flex flex-row justify-between'>
     <button className='l-btn px-[22px] py-[5px] fixed z-50 '><Link className='flex flex-row items-center gap-5' href='/info'>info  <AiOutlineArrowRight className=''/> </Link></button>
     <button className='l-btn py-[5px] px-[22px] fixed z-50 right-[100px] '><Link className='flex  flex-row items-center gap-5' href='/'>refine <AiOutlineArrowRight className=''/></Link></button>
    </div>
    </div>
   </header>  
 </div>
  )
}

export default Navbar