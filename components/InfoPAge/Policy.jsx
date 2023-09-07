
import React from 'react'
import {   AiOutlineArrowRight } from 'react-icons/ai'

const Policy = () => {
  return (
   <div>
    <div className=' max-w-[54rem] px-4 mx-auto pt-24 pb-8 '>
    
    <div className='font-space'>
     <h1 className='flex flex-row items-center gap-2 uppercase pb-2 '>Return Policy <AiOutlineArrowRight className='w-[0.8rem] mt-1 '/> </h1>   
    
    <div className='flex flex-col gap-3'>
    <div className='flex flex-col gap-2' >
     <h3 className='text-[15px] '>Returns & Exchange Policy</h3>
     <p className='text-[14px]'>Please contact us via info@entirestudios.com if you have any questions prior to purchase. We strongly advise consulting our size charts and hovering over the model for their size and height before making your order to ensure sizing satisfaction. Please carefully read through this returns policy as you are agreeing to this when you make a purchase from our website. </p>   
     </div>
     <div className='flex flex-col gap-2'>
     <h3 className='text-[15px] '>Returns & Exchanges</h3>
     <p className='text-[14px]'>We accept returns and exchanges for non-faulty items. Please contact  info@entirestudios.com with your order number and details of the return/exchange. Size exchanges are subject to availability. Returns, refunds and exchanges will only be processed once the item is received back in our warehouse in original condition, with original packaging and tags.</p>
     <p className='text-[14px]'>If you have a change of mind in respect of a purchase, we will accept a return within 14 days of purchase and provide you with a credit note or refund.</p>
     <p className='text-[14px]'>We have the right to refuse any returned item that does not meet it’s original condition. Please note we do not allow exchanges or returns on discounted/ sale products.</p>
     </div>    
    </div>
    </div>

    <div className='font-space pt-5'>
    <h1 className='flex flex-row items-center gap-2 uppercase pb-2'>Privacy <AiOutlineArrowRight className='w-[0.8rem] mt-1 '/></h1>
    <div>
    <h3 className='text-[15px] pb-2 '>Privacy </h3>
    <p  className='text-[14px]' >Your privacy & security is respected at Entire Studios. Please be aware that we keep any personal details fully confidential and will not be shared with any third parties. Entire Studios will keep any personal details in a secure database and will only be used for Entire Studios related communications only.</p>
    </div>
    </div>

    <div className='font-space pt-5'>
    <h1 className='flex flex-row items-center gap-2 font-space uppercase pb-2' >Shipping <AiOutlineArrowRight className='w-[0.8rem] mt-1 '/></h1>
    <div>
    <p className='text-[14px]'>During new range launches please allow 7 working days for order fulfilment notice and tracking information</p>     
    <p className='text-[14px]'>Upon placing your order, you will receive an order confirmation email. Once your order is packed you will receive a second email with tracking information. During times of high volume such as new drops, please allow 7 working days to receive your tracking information email.</p>
    <p className='text-[14px]'>All orders are shipped from our Hong Kong warehouse. We use a range of courier providers and aim to provide the fastest and most convenient shipping possible to each location. Our main carriers include FedEx, UPS, DHL and DPEX.</p>
    </div>
    </div>

    </div>
    </div>
  )
}

export default Policy