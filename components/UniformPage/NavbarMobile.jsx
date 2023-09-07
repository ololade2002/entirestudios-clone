"use client"
import React from 'react'
import Link from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Image from 'next/image'
import logo from '../../public/Assets/entirestudios-logo.webp';

const NavbarMobile = () => {
  return (
    <div className='mobileNav'>
     <div className='max-w-[62rem] px-3 sm:px-5 mt-[10px] py-4 mx-auto'>
         
   <div>
    
   <nav className='flex flex-row items-center'>
    
    <div className='flex-1 flex items-center flex-row gap-1.5  '>
    <div className='fixed z-50'>
    <div className='flex flex-row  gap-2'>
    <button className='bg-secondary  f-btn font-space text-[13px]  font-[400] drop-shadow-2xl '>
    <Link className='flex flex-row items-center gap-[0.5rem]' href='/uniform'> 
    <div className='flex flex-row items-center gap-2'>
    <AiOutlineArrowLeft className=''/>
    <h2>Uniform</h2> 
    </div>
     </Link>
     </button>

  
      </div>
    </div>

    </div>

    

    <div className='flex-1 flex items-center justify-end'>
     <div className='fixed z-50'>
     <div className=' font-space text-[13px] flex flex-row gap-3'>
    <button className='f-btn bg-secodary uppercase '>usd </button>
    <button className='f-btn bg-secodary '><Link href='/cart'>Cart</Link></button>
    </div>
     </div>
   </div>

    </nav>
   
    <div  className='flex-1 pt-14 sm:pt-10 flex justify-center '>
    <Link className='' href='/uniform'>
    <h1 className='text-[32px] font-space tracking-wide'>UNIFORM</h1>
    <Image className='object-cover w-[9rem]' src={logo} alt='logo'/>
    </Link>
    </div>

   </div>
    
         
      </div> 
    </div>
  )
}

export default NavbarMobile