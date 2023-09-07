"use client"

import React from 'react'
import Image from 'next/image'
import logo from '../../../public/Assets/entirestudios-logo.webp';
import Link from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

const HeaderMobile = () => {
  return (
    <div className='mobileNav'>
    <div className='max-w-[62rem] px-3 sm:px-5 mt-[10px] py-4 mx-auto'>
      
    <nav className='flex flex-row items-center'>
    <div className='flex-1 flex items-center flex-row gap-1.5  '>
    <div className=' fixed z-50'>
    <div className='flex flex-row  gap-2'>
    <button className='bg-secondary f-btn font-space text-[13px]  font-[400] drop-shadow-2xl '>
    <div onClick={() => router.push('/')} className='flex flex-row items-center gap-[0.5rem]' > 
    <div className='flex flex-row items-center gap-2'>
    <AiOutlineArrowLeft className=''/>
    <h2>backto</h2> 
    </div>
    <Image className='width-f object-scale-down h-[0.8rem]' src={logo} alt='logo'/>
     </div></button> 
      </div>
    </div>

    </div>

    <div className='flex-1 flex items-center justify-end'>
     <div className='fixed z-50'>
     <div className=' font-space text-[13px] flex flex-row gap-3'>
    
    <button className='f-btn bg-secodary '><Link href='/cart'>Cart</Link></button>
    </div>
     </div>
   </div>

     </nav>

     <div  className='flex-1 pt-16 flex justify-center '>
    <div onClick={() => router.push('/collection/archive')} className='flex flex-col gap-2' >
    <Image className='object-cover w-[9rem]' src={logo} alt='logo'/>
    <h2 className=' border border-black text-[14px] py-1 text-center font-space'>archive</h2>
    </div>
    </div>

    </div>
    </div>
  )
}

export default HeaderMobile