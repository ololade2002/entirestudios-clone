import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Link from 'next/link'
import Cork from '../../../components/UniformPage/Cork/Cork'
import CorkClothes from './corkClothes'

const CorkPage = () => {
  return (
    <div>
      <Navbar/>
     <div className="pt-4 md:pt-0">
     <Cork/>
      <CorkClothes/>
      <Link href='/uniform' className='mt-12 mb-10 flex items-center justify-center'>
    <button className='l-btn font-space text-[13px] flex flex-row items-center gap-3'>More Collections  <AiOutlineArrowRight/>  </button>
    </Link>
     </div>
    </div>
  )
}

export default CorkPage