
"use client"

import React from 'react'
import {heroSectionData} from '../../../utils/utilsData'
import Image from 'next/image'
import Sizes from '../../../components/General/Sizes'
import { AiOutlineArrowDown } from 'react-icons/ai'
import Carousel from '../../../components/General/Carousel'
import ProductNav from '@/components/Navbar/ProductNav'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import AddToCart from '../../../components/General/AddToCart'


const ProductDetails = ({params}) => {
const product = heroSectionData.find((product) => product.id === params.slug)
const pathname = usePathname();

if (!product) {
  return <div>Product Not Found</div>
}

  return (
  <div>
   <ProductNav/>
    <div className='ProductDetails'>
    <div>
 
    <div className='ProductDetailsTop flex flex-col medium:flex-row  w-full pt-4 medium:pt-10 px-4 medium:px-8'>
    <div className='left w-full pt-6  mx-auto items-center justify-center medium:w-[60%] medium:min-h-[80vh]  xl:ml-[12%]  flex '>
    <div className='flex gap-0 -mt-1 '>
       
    <div className='group relative '>
    <div className='annotation1 hidden  group-hover:block transition ease-in-out   absolute left-0  sm:-left-[20%] medium:left-0 lg:-left-[40%]  top-[35%] h-[1px] w-[60%] bg-[#000]'>
    <div className='flex flex-col text-[14px]'>
        <p className='font-courier pt-1 '>{product.name}</p>
        <p className='font-courier '>{product.text6}</p>
        </div>
      <div className="annotation-marker"></div>
      </div>
      <Image className='sm:w-[19rem] w-[23rem] ' src={product.img} alt={product.id}/>
    </div>

    <div className='relative group '>
    <div className="annotation-container  relative hidden group-hover:block">
        <div className="annotation-line ">
        <div className='flex text-[14px] flex-col absolute top-10 sm:top-2  left-[40%]'>
        <p className='font-courier  '>{product.name1}</p>
        <p className='font-courier  '>{product.text7}</p>
        </div>
        <div className="annotation-line-01 "><span ></span></div>
        <div className="annotation-line-02"><span></span></div>
        <div className="annotation-marker"></div>
      </div>
      </div>
      <Image className='sm:w-[19rem] w-[23rem] ' src={product.img1} alt={product.id}/>

    </div>

     </div> 
    </div>

    <div className='right pt-10 medium:pt-0 mx-auto font-space '>
    <div className="rightTop pb-3">
    <h1 className='uppercase text-[15px]'>{product.title} </h1>
    <p className='text-[14px] pt-4 pb-4'>{product.price} USD</p>
    <div className='text-[13px] flex flex-col gap-1'>
      <p>- {product.text1}</p>
      <p>- {product.text2}</p>
      <p>- {product.text3}</p>
      <p>- {product.text4}</p>
      <p>- {product.text5}</p>
    </div>
    </div>

    <div className="rightMid py-4 flex flex-col gap-5 ">

    <div className='pt-3'>
    <div className='grid grid-cols-5'>
    {product.colors.map((product) => {
    const isActive = pathname === product.href  
    return (
    <Link  key={product.id} href={product.href} className={isActive ? 'animate-customAnimation1 ' : '' } >
    <div className="color  ">
    <Image className='w-20 object-contain h-20' src={product.img} alt='img'/>
    </div>
    </Link>
    )
    })}
    </div>
    </div>

    <Sizes/>

    <div className=" pt-6">
    <AddToCart product={product} showQty={false} increasePerClick={true} redirect={true} />
    </div>

    </div>
    </div>
   </div>

   
   <div className='ProductDetailsBottom pt-14 pb-12 '>
   <h2 className='font-space text-[13px] px-8 flex flex-row items-center pb-12 gap-3 '>You might also like  <AiOutlineArrowDown/> </h2>
   <Carousel/>
   </div>

  </div>
</div>
  
   </div>
  )
}

export default ProductDetails


