"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { uniformSectionData } from '../../../utils/utilsData'
import { useRouter } from 'next/navigation'

const RhinoClothes = () => {
const rhinoClothes = uniformSectionData.slice(40,50)
const router = useRouter()
//href={`uniform/${product.id}`}

  return (
    <div>
      <div className='max-w-[55rem]  mx-auto'>
     <div className='grid grid-cols-3  gap-y-6 md:gap-y-10 md:grid-cols-4 lg:grid-cols-5'>
    {rhinoClothes.map((product) => (
      <div key={product.id} onClick={() => router.push(`uniform/${product.id}`)} >
      <div className="tar-preview animate-customAnimation" >
      <div className='flex items-center min-h-[48vw] md:min-h-[25vw] xl:min-h-[18vw]'>
      <div className='relative'>
      <Image className='' src={product.img} alt='tar'/> 
      </div>
      </div>
      <div className='flex flex-col items-center text-center gap-1'>
      <h2 className='font-space text-[13px] sm:text-[14px] uppercase'>{product.title}</h2>
      <p className='font-space text-[13px] sm:text-[14px]'>{product.price} USD</p>
      </div>
      </div>
      </div>
    ))}
    </div> 
    <div className='mt-16 mb-12 flex items-center justify-center'>
    <button className='l-btn font-space text-[13px] flex flex-row items-center gap-3'>More Collections  <AiOutlineArrowRight/>  </button>
    </div> 
    </div> 
    </div>
  )
}

export default RhinoClothes