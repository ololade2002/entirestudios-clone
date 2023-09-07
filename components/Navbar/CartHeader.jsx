"use client"

import React from 'react'
import CartHeaderMobile from '@/components/Navbar/CartHeaderMobile'
import { useRouter } from 'next/navigation'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import Image from 'next/image'
import logo from '@/public/Assets/entirestudios-logo.webp'
import Link from 'next/link'

const CartHeader = () => {
const router = useRouter()

  return (
    <div >
    <CartHeaderMobile/>    
    <header className=' max-w-full webNav  mx-auto  px-7 sm:pt-[2.2rem]'>
   <nav className='flex flex-row items-center  '>
   <div className='shop-uniform  flex-1 flex  items-center '>
   <div className="fixed z-50">
   <div className="flex items-center flex-row gap-4">
   <button className='bg-secondary  l-btn font-space text-[13px] font-[400] drop-shadow-2xl '>
   <div className='flex flex-row-reverse items-center gap-2 uppercase' onClick={() => router.push('/uniform')} > Uniform <AiOutlineArrowLeft/>  </div>
   </button> 
   <h2 className='font-space text-[13px]'>no holds in bag</h2>
   </div>
   </div>
   </div>

   <div  className='flex-1 flex justify-center '>
   <Link href='/'>
   <Image className='object-cover w-40' src={logo} alt='logo'/>
   </Link>
   </div>

   <div className='flex-1 flex items-center justify-end'>
   <div className="fixed z-50">
   <div className='font-space text-[13px] flex flex-row gap-3'>
   <button className='bg-secondary  l-btn font-space text-[13px] font-[400] drop-shadow-2xl '>
   <div onClick={() => router.push('/')} > <span className=''>ssence capsule</span></div></button> 
  

   <button className='f-btn bg-secodary '><div onClick={() => router.push('/cart')}>Cart</div></button>
   </div>
  </div>
  </div>

    </nav>
   </header> 
    </div>
  )
}

export default CartHeader