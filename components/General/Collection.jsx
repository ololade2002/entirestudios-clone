
"use client"

import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import img3 from '../../public/Assets/uniform-campaign-web.jpg'
import img from '../../public/Assets/drop4-campaign-web.webp'
import img2 from '../../public/Assets/ssense-campaign.webp'
import img4 from '../../public/Assets/drop3-campaign-web.webp'
//import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Collection = () => {
const router = useRouter()  
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }

  return (
    <div>
    <div className=" inset-0  flex items-center justify-center">
    <button type="button" onClick={openModal} className="">
    Change Collection
    </button>
    </div>

    <Transition appear show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative z-50" onClose={closeModal}>
    <Transition.Child
    as={Fragment}
    enter="ease-out duration-300"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="ease-in duration-200"
    leaveFrom="opacity-100"
    leaveTo="opacity-0">
    <div className="fixed inset-0 bg-black bg-opacity-25" />
    </Transition.Child>

    <div className="fixed inset-0 w-full px-8 md:px-3  height-f top-[50%] left-[50%] -translate-x-[50%] -translate-y-[45%] sm:-translate-y-[40%] md:-translate-y-[50%]  overflow-y-auto">
    <div className="flex  items-center justify-center  text-center">
    <Transition.Child
    as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95" >
    <Dialog.Panel className="w-full max-w-full transform overflow-hidden   rounded-none  text-left align-middle  transition-all">
                
    <Dialog.Description>
    <div className='modal  justify-center grid grid-cols-2 md:grid-cols-4 gap-4 xl:gap-0 '>

     <div onClick={() => router.push('/')}  className='relative '>
     <div className='overflow-hidden relative   h-full md:w-full '>
      <Image className='object-contain   sm:h-[400px] md:h-[360px] w-full hover:scale-110 transition duration-[0.9s]  cursor-pointer'  src={img} alt='img'/>  
      </div>
      <div className='modal-text '>
      <h2 className='font-space text-white'>Drop 4</h2>
      </div>
     </div> 

     <div onClick={() => router.push('/collection/ssence-capsule')}   className='relative .cards-s ' >
      <div className='overflow-hidden relative h-full w-full '>
      <Image className='md:h-[360px]  sm:h-[400px]  w-full object-contain  hover:scale-110 transition duration-[0.9s] cursor-pointer'  src={img2} alt='img'/>  
      </div>
      <div className='modal-text '>
      <h2 className='font-space text-white'>ssence capsule</h2>
      </div>
     </div>

     <div onClick={() => router.push('/uniform')}  className='relative' >
      <div className='overflow-hidden relative h-full w-full '>
      <Image className='md:h-[360px] sm:h-[400px] w-[100%] object-contain  hover:scale-110 transition duration-[0.9s] cursor-pointer' src={img3} alt='img'/>  
      </div>
      <div className='modal-text '>
      <h2 className='font-space  text-white  '>Uniform</h2>
      </div>
     </div>

     <div onClick={() => router.push('/collection/archive')}  className='relative' >
      <div className='overflow-hidden relative h-full w-full '>
      <Image className='  md:h-[360px] sm:h-[400px] w-full object-contain hover:scale-110 transition duration-[0.9s] cursor-pointer'  src={img4} alt='img'/>  
      </div>
      <div className='modal-text '>
      <h2 className='font-space text-white'>Archive</h2>
      </div>
     </div>

  

    </div>
    </Dialog.Description>

    </Dialog.Panel>
    </Transition.Child>
    </div>
    </div>
    </Dialog>
    </Transition>
    </div>
  )
}

export default Collection


