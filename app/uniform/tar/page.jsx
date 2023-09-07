"use client"

import React from 'react'
import Tar from '@/components/UniformPage/Tar/Tar'
import Navbar from '@/components/Navbar/Navbar'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Link from 'next/link'
import TarClothes from './tarClothes'


const TarPage = () => {
  return (
<div>
    <Navbar/>
    <div className="pt-6 md:pt-0">
    <Tar/>
    <TarClothes/>
    <Link href='/uniform' className='mt-12 mb-10 flex items-center justify-center'>
    <button className='l-btn font-space text-[13px] flex flex-row items-center gap-3'>More Collections  <AiOutlineArrowRight/>  </button>
    </Link>
    </div>
    </div>
  )
}

export default TarPage