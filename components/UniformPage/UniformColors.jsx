"use client"

import Image from 'next/image'
import React from 'react'
import {AiOutlineArrowDown} from 'react-icons/ai'
import img1 from '../../public/Assets/entire-studios-tar-animated-army-player-6.webp'
import img2 from '../../public/Assets/entire-studios-brunette-animated-army-player-4.webp'
import img3 from '../../public/Assets/entire-studios-cork-animated-army-player-4.webp'
import img4 from '../../public/Assets/entire-studios-ink-animated-army-player-7.webp'
import img5 from '../../public/Assets/entire-studios-rhino-animated-army-player-6.webp'
//import Link from 'next/link'
import { useRouter } from 'next/navigation'

const UniformColors = () => {
const router = useRouter()

  return (
    <div>
    <div className="uniformColors px-4 medium:px-12 mx-auto">
    <div className='flex flex-row justify-start medium:justify-between'>
     <div className='medium:w-[77%] w-0 '></div>   
     <h2 className='medium:w-4/12 w-full text-[14px] gap-2 pb-4 flex font-space items-center'>Uniform Colors <AiOutlineArrowDown/> </h2>
    </div>
     
    <div className="uniformColors-body">
     <div className='grid grid-cols-5'>
   
    <div onClick={() => router.push('/uniform/tar')} >
    <div className="tarUnifrom">
     <Image className='w-[14rem]  h-auto hover:scale-[0.98] ' src={img1} alt='tarUniform'/>  
     </div>  
    </div>

    <div onClick={() => router.push('/uniform/brunette')} >
    <div className="BrunetteUnifrom">
     <Image className='w-[14rem] h-auto hover:scale-[0.98] ' src={img2} alt='tarUniform'/>  
     </div>  
    </div>

    <div onClick={() => router.push('/uniform/cork')} >
    <div className="CorkUnifrom">
     <Image className='w-[14rem] h-auto hover:scale-[0.98] ' src={img3} alt='tarUniform'/>  
     </div>  
    </div>

    <div onClick={() => router.push('/uniform/ink')}  >
    <div className="InkUnifrom">
     <Image className='w-[14rem] h-auto hover:scale-[0.98] ' src={img4} alt='tarUniform'/>  
     </div>  
    </div>

    <div onClick={() => router.push('/uniform/rhino')} >
    <div className="RhinoUnifrom">
     <Image className='w-[14rem] h-auto hover:scale-[0.98] ' src={img5} alt='tarUniform'/>  
     </div>  
    </div>

  
    </div> 
    </div>

    </div>
    </div>
  )
}

export default UniformColors