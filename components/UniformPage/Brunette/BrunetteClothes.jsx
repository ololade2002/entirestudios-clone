

import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { uniformSectionData } from '../../../utils/utilsData'

const BrunetteClothes = () => {
const brunetteClothes = uniformSectionData.slice(10,20)

  return (
    <div className=''>
     <div className="mx-auto pb-16 lg:pb-28 max-w-[55rem] ">
     <div className='grid grid-cols-3  gap-y-6 md:gap-y-10 md:grid-cols-4 lg:grid-cols-5' >
        {brunetteClothes.map((product) => (
            <Link href={`uniform/${product.id}`}>
            <div className="brunette-preview animate-customAnimation" key={product.id}>
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
            </Link>
        ))}
     </div>   
    </div>   
    </div>
  )
}

export default BrunetteClothes