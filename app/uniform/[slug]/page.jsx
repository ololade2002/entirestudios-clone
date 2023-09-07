"use client"

import React from 'react'
import Image from 'next/image'
import { uniformSectionData} from '../../../utils/utilsData'
import Navbar from '@/components/UniformPage/Navbar'
import Sizes from '../../../components/General/Sizes'
import UniformColors from '../../../components/UniformPage/UniformColors'
import { AiOutlineArrowDown } from 'react-icons/ai'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import AddToCart from '../../../components/General/AddToCart'


const UniformDetails = ({params}) => {
const product = uniformSectionData.find((product) => product.id === params.slug)
const pathname = usePathname();

return (
<div>
<Navbar/>

<div className='uniformDetails '>
<div>

    <div className='uniformDetailsTop flex flex-col medium:flex-row   w-full xl:px-8'>
    <div className='left w-[100%] mx-auto medium:w-7/12 xl:w-8/12 medium:min-h-[80vh] xl:ml-[5%]  items-center flex xl:pl-16'>
    <div className='flex '>
       
    <div className=''>
      <Image className='w-full' src={product.img} alt={product.id}/>
    </div>

    <div className=''>
      <Image className='w-full' src={product.img1} alt={product.id}/>
    </div>

     </div>
    </div>

    <div className='right pt-6 medium:pt-8 font-space px-4 mx-auto  medium:w-5/12 xl:w-4/12 '>
    <div className="rightTop">
    <h1 className='uppercase text-[15px]'>{product.title} </h1>
    <p className='text-[14px] pt-4 pb-4'>{product.price} USD</p>
    <div className='text-[14px] flex flex-col gap-1'>
      <p>- {product.text1}</p>
      <p>- {product.text2}</p>
      <p>- {product.text3}</p>
      <p>- {product.text4}</p>
    </div>
    </div>

    <div className="rightMid  py-4 flex flex-col gap-5">

    <div className='pt-3'>
    <div className='grid grid-cols-5'>
    {product.colors.map((product) => {
    const isActive = pathname === product.href  
    return (
    <Link key={product.id}  href={product.href} className={isActive ? 'animate-customAnimation1 ' : '' } >
    <div className="color  " >
    <Image className='w-20 object-contain h-20 ' src={product.img} alt='img'/>
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

    <div className="rightEnd pt-12 medium:pt-6 py-6">
    <h2 className='text-[14px] flex flex-row items-center gap-3'>Styled with <AiOutlineArrowDown className='h-3 w-3'/> </h2>
    
    <div className='grid grid-flow-col grid-cols-4'>
    {product.styled.map((product) => {
    return (
    <Link href={product.href} className="styled-preview" key={product.id}>
    <Image className='w-20 h-20 o object-contain' src={product.img} alt='uniform' />
    </Link>
    )
    })} 
    </div>
    
   


    </div>
    </div>
   </div>
   
   <div className='uniformDetailsBottom medium:pt-6'>
   
     <UniformColors/>
   </div>

  </div>
</div>
</div>
  )
}

export default UniformDetails


