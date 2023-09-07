"use client"

import React from 'react'
import Link from 'next/link'
import { Menu } from '@headlessui/react'
import { AiOutlineArrowDown, AiOutlineClose } from 'react-icons/ai'
import { useRouter } from 'next/navigation'
 
const Refine = () => {
const router = useRouter()
  return (
  
   <div className='refine-btn z-50'>
     <div className='font-space'>
    <Menu>
    <div className='flex flex-col justify-end items-end'>
   <div className='smedium:fixed smedium:top-[88px] smedium:right-[100px] z-50   -translate-y-[137px] -translate-x-3 smedium:translate-y-0 smedium:-translate-x-6 medium:translate-x-0 medium:translate-y-0 '>
   <Menu.Button className='flex flex-row   items-center gap-1 l-btn mb-3 text-[14px]' >refine <AiOutlineArrowDown/> </Menu.Button>
   </div>
    
    <div className='fixed z-50 top-[130px] right-[40px] smedium:right-[120px]'>
    <Menu.Items   className='flex z-50  bg-[#82837d] flex-col border border-black min-w-[180px] pl-2 py-2 '>
    <div className='flex flex-row items-center justify-between pr-3 pb-1 '>
    <h2 className='text-[13px]' >all</h2>
    <AiOutlineClose/>
    </div>
    
    <Menu.Item>
    <Link href="#tar" className='flex flex-row gap-2 items-center'>
    <div className='w-[12px] h-[12px] bg-[#000] ' />
     <h2 className='hover:underline text-[13px]'>Tar</h2>
    </Link>
    </Menu.Item>

    <Menu.Item>
    <Link href="#brunette" className='flex flex-row gap-2 items-center'>
    <div className='w-[12px] h-[12px] bg-[#554b47]' />
    <h2 className='hover:underline text-[13px]'>Brunette</h2>
    </Link>
    </Menu.Item>

    <Menu.Item>
    <Link href="#cork" className='flex flex-row gap-2 items-center'>
    <div className='w-[12px] h-[12px] bg-[#d1ba8f]' />
    <h2 className='hover:underline text-[13px]'>Cork</h2>
    </Link>
    </Menu.Item>

    <Menu.Item>
    <Link href="#ink" className='flex flex-row gap-2 items-center'>
    <div className='w-[12px] h-[12px] bg-[#3e3c47]' />
    <h2 className='hover:underline text-[13px]'>Ink</h2>
    </Link>
    </Menu.Item>

    <Menu.Item>
    <Link href="#rhino" className='flex flex-row gap-2 items-center'>
    <div className='w-[12px] h-[12px] bg-[#9a9b9f]' />
    <h2 className='hover:underline text-[13px]'>Rhino</h2>
    </Link>
    </Menu.Item>

    <div className='fixed top-[280px] right-[16px] smedium:right-[50px] z-50  '>
    <Menu.Items  className='flex flex-col bg-[#82837d] border border-black min-w-[160px] pl-2 py-1 '>
    <div className='flex flex-row items-center justify-between pr-3  '>
    <h2 className='text-[13px] font-space' >all</h2>
    </div>
    
    <Menu.Item>
    <div onClick={() => router.push('/uniform/bottoms') }  className='flex flex-row gap-2 items-center'>
     <h2 className='hover:underline font-space text-[13px]'>Bottoms</h2>
    </div>
    </Menu.Item>

    <Menu.Item>
    <div  onClick={() => router.push('/uniform/tops')}  className='flex flex-row gap-2 items-center'>
    <h2 className='hover:underline text-[13px] font-space'>Tops</h2>
    </div>
    </Menu.Item>

    <Menu.Item>
    <div  onClick={() => router.push('/uniform/sweats')}  className='flex flex-row gap-2 items-center'>
    <h2 className='hover:underline text-[13px] font-space'>Sweats</h2>
    </div>
    </Menu.Item>

    <Menu.Item>
    <div  onClick={() => router.push('/uniform/tees') } className='flex flex-row gap-2 items-center'>
    <h2 className='hover:underline  text-[13px] font-space'>Tees</h2>
    </div>
    </Menu.Item>

    </Menu.Items>
    </div>

    
    </Menu.Items>
    </div>

   

    </div>
    </Menu>
    </div>

  
   </div>
    
  )
}

export default Refine


