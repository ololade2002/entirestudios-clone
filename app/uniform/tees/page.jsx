"use client"

import Refine from '@/components/General/Refine'
import Header from '@/components/UniformPage/Header'
import { uniformSectionData } from '@/utils/utilsData'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineArrowRight } from 'react-icons/ai'

const selectedCategory = 'tees'

const tees = () => {
const filteredProducts = uniformSectionData.filter(product => 
product.category.some(subCategory => 
subCategory.includes(selectedCategory)) )

  return (

    <div className='tees'>
    <Header/>
    <Refine/>
    <div className='max-w-[55rem]  pb-12 smedium:pt-10  mx-auto'>

    <div className='grid grid-cols-3  gap-y-6 md:gap-y-10 md:grid-cols-4 lg:grid-cols-5'>
     {filteredProducts.map((product) => (
      <Link href={`/uniform/${product.id}`}>
  <div className="tops-preview animate-customAnimation" key={product.id}>
  <div className='flex  items-center min-h-[48vw] md:min-h-[25vw] xl:min-h-[18vw]'>
  <div className='relative'>
  <Image className='' src={product.img} alt='tar'/> 
  </div>
  </div>
  <div className='flex flex-col items-center text-center gap-1'>
  <h2 className='font-space text-[13px] sm:text-[14px] uppercase'>{product.title}</h2>
  <p className='font-space text-[13px] sm:text-[14px] '>{product.price} USD</p>
  </div>
  </div>
  </Link>
     ))} 
    </div>

<Link href='/uniform' className='mt-20 mb-6 flex items-center justify-center'>
<button className='l-btn font-space text-[13px] flex flex-row items-center gap-3'>More Collections  <AiOutlineArrowRight/>  </button>
</Link>

    </div>
    </div>
  )
}

export default tees