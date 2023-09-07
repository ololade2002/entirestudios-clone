
import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Link from 'next/link'
import Rhino from '../../../components/UniformPage/Rhino/Rhino'
import RhinoClothes from './rhinoClothes'

const RhinoPage = () => {
  return (
    <div>
      <Navbar/>
      <div className="pt-4 md:pt-0">
      <Rhino/>
      <RhinoClothes/>
      <Link href='/uniform' className='mt-12 mb-10 flex items-center justify-center'>
    <button className='l-btn font-space text-[13px] flex flex-row items-center gap-3'>More Collections  <AiOutlineArrowRight/>  </button>
    </Link> 
      </div>
    </div>
  )
}

export default RhinoPage