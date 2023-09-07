
import React from 'react'
import {  uniformSectionData } from '@/utils/utilsData'
import Link from 'next/link'
import Image from 'next/image'

const inkClothes = () => {
    
const inkClothes = uniformSectionData.slice(30,40)

  return (
    <div>
      <div className='max-w-[55rem] pb-4  mx-auto'>
     <div className='grid grid-cols-3  gap-y-6 md:gap-y-10 md:grid-cols-4 lg:grid-cols-5'>
    {inkClothes.map((product) => (
      <Link key={product.id} href={`/uniform/${product.id}`}>
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
      </Link>
    ))}
    </div>  
    </div> 
    </div>
  )
}

export default inkClothes