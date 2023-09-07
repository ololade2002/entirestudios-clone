
import React from 'react'
import Image from 'next/image'
import logo from '../../public/Assets/entirestudios-logo.webp';
import Link from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Collection from '@/components/General/Collection'
import HeaderMobile from './HeaderMobile';

const Header = () => {
  return (
 <div>
  <HeaderMobile/>
     <header className=' max-w-full webNav  mx-auto  px-7 sm:pt-[1.4rem]' >
    <nav className='flex flex-row items-center'>
    
   <div className='flex-1 flex items-center'>
   <div className='fixed  z-[1000] '>
    <button className='bg-secondary f-btn font-space text-[13px]  font-[400] drop-shadow-2xl '>
    <Link className='flex flex-row items-center gap-[0.5rem]' href='/'> 
    <div className='flex flex-row items-center gap-2'>
    <AiOutlineArrowLeft className=''/>
    <h2>backto</h2> 
    </div>
    <Image className='width-f object-scale-down h-[0.8rem]' src={logo} alt='logo'/>
     </Link></button> 
    </div>

   </div>
   
    <div  className='flex-1 flex justify-center '>
    <Link className='flex flex-col items-center' href='/uniform'>
    <h1 className='text-[32px] font-space tracking-wide'>UNIFORM</h1>
    <Image className='object-cover w-[6.8rem]' src={logo} alt='logo'/>
    </Link>
    </div>

    <div className='flex-1 flex  items-center justify-end'>
    <div className="fixed z-[1000]">
    <div className=' font-space text-[13px] flex flex-row  gap-6'>
    <div className='f-btn bg-secodary  '><Collection/></div>
    <button className='f-btn bg-secodary '><Link href='/cart'>Cart</Link></button>
    </div>
    </div>
   </div>

     </nav>
     <div className='max-w-[62rem]  py-1 mx-auto'>
    <div className="fixed z-[100] ">
   
      <button className='l-btn'><Link className='flex text-[14px] flex-row items-center gap-3' href='/info'>info  <AiOutlineArrowRight className=''/> </Link></button>
    
    </div>
     </div>
    </header>
 </div>
  )
}

export default Header