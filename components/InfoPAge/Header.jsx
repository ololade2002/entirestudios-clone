

import React from 'react'
import Image from 'next/image'
import logo from '../../public/Assets/entirestudios-logo.webp';
import Link from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai';
//import { AiOutlineArrowRight } from 'react-icons/ai';

const Header = () => {
  return (
    <header className=' max-w-full sticky top-0 z-50  mx-auto  px-7 sm:pt-[2rem]' >
    <nav className='flex flex-row items-center'>
    
    <div className='flex-1  '>
    <button className='bg-secondary f-btn font-space text-[13px]  font-[400] drop-shadow-2xl '>
    <Link className='flex flex-row items-center gap-[0.5rem]' href='/'> 
    <div className='flex flex-row items-center gap-2'>
    <AiOutlineArrowLeft className=''/>
    <h2>backto</h2> 
    </div>
    <Image className='width-f object-scale-down h-[0.8rem]' src={logo} alt='logo'/>
     </Link></button> 
    </div>

    <div  className='flex-1 flex justify-center '>
    <Link className='flex flex-col items-center' href='/'>
    <Image className='object-cover w-40' src={logo} alt='logo'/>
    </Link>
    </div>

    <div className='flex-1 flex justify-end'>
    <div className=' font-space text-[13px] flex flex-row gap-3'>
    <button className='l-btn bg-secodary '><Link href='/'>Browse</Link></button>
    <button className='f-btn bg-secodary '><Link href='/cart'>Cart</Link></button>
    </div>
   </div>

     </nav>
    
    </header>
  )
}

export default Header