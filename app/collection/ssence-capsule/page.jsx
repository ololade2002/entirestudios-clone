
import Navbar from '@/components/Navbar/Navbar'
import { heroSectionData } from '@/utils/utilsData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const ssence = () => {
const ssenceData = heroSectionData.slice(2,67)

  return (
    <div>
    <Navbar/> 
    <div className=' max-w-[50rem] mx-auto  '>
    <div className='grid grid-cols-5 '>
    {ssenceData.map((product) => (
    <Link key={product.id} href={`/product/${product.id}`}>
    <div className="product-preview" >
    <Image className='  ' src={product.img} alt={product.title} />
    </div>
    </Link>
    ))}
    </div>
    <Link href='/collection/archive' className='mt-12 mb-10 flex items-center justify-center'>
    <button className='l-btn font-space text-[13px] flex flex-row items-center gap-3'>More Collections  <AiOutlineArrowRight/>  </button>
    </Link>
    </div>
    </div>
  )
}

export default ssence