"use client"

import Image from 'next/image'
import React from 'react'
import logo from '@/public/Assets/entirestudios-logo.webp'
import img1 from '@/public/Assets/visa logo.png'
import img2 from '@/public/Assets/PayPal-Logo.png'
import img3 from '@/public/Assets/Google-Pay-logo.png'
import {  AiOutlineRight } from 'react-icons/ai'
import {useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

const Shipping = () => {
  const {
    cartItems,
    itemsPrice,
    shippingPrice,
    totalPrice,
    taxPrice,
    
  } = useSelector((state) => state.cart)
const router = useRouter()

  return (
    <div>
    <div className='mx-auto '>
    <div className='flex flex-col md:flex-row'>

      <div className='flex w-full md:w-7/12  flex-col  border-r-2 bg-white pt-14 px-4 xs:px-12 lg:px-20'>
      <div className=' lg:ml-8'>
      <div className='pb-4'>
      <Image className=' w-64' src={logo} alt='logo'/>  
      </div>

      <div className='pb-10'>
      <div className='flex items-center gap-2 text-[14px] font-space'>
       <h2 onClick={() => router.push('/cart')} className='hover:text-blue-600'>Cart</h2> 
       <AiOutlineRight className='h-3 w-3 '/>
       <h2 onClick={() => router.push('/shipping')} className='hover:text-blue-600'>Information</h2>
       <AiOutlineRight className='h-3 w-3 '/>
       <h2 onClick={() => router.push('/shipping')} className='hover:text-blue-600'>Shipping</h2>
       <AiOutlineRight className='h-3 w-3 '/>
       <h2 className='hover:text-blue-600'>Payment</h2>
      </div>  
      </div>


      <div className='pb-8'>
       <h2 className='font-space text-center pb-3 text-[13.2px]'>Express Checkout</h2> 
       <div className='flex flex-row  gap-2 '>
       <div className=' bg-black w-4/12 rounded-md flex items-center justify-center '>
       <Image className='w-20' src={img1} alt='express-logo'/> 
       </div>
       <div className='bg-amber-500 w-4/12 rounded-md flex items-center justify-center'>
       <Image className='w-20'  src={img2} alt='express-logo'/> 
       </div>
       <div className=' bg-indigo-700  w-4/12 rounded-md flex items-center justify-center'>
       <Image className='w-20'  src={img3} alt='express-logo'/> 
       </div>
       </div>
      </div>  

      <div className='flex items-center relative pb-12 '>
      <div className='absolute w-[45%] h-[1px] b bg-gray-300 top-0 left-0'/>  
      <h2 className='text-center mx-auto -mt-2.5 font-space'>OR</h2> 
      <div className='absolute w-[45%] h-[1px] b bg-gray-300 top-0 right-0'/>   
      </div>

      <div className='pb-8'>
       <h2 className='text-lg font-semibold font-space'>Contact</h2> 
       <form>
       <div className="">
        <div className="mt-2">
        <input type="text" name="email" id="email" placeholder='Email' autoComplete="email"
        className="block px-4 font-space w-full rounded-md border border-gray-300 py-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[15px]  placeholder:text-gray-800 focus:ring-1 f focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
         />
        </div>
        </div>
       
       <fieldset >
       <div className='flex gap-2 pt-3 '>
       <div className="flex h-6 items-center">
       <input  id="comments"  name="comments"  type="checkbox"  className="h-4 w-4 rounded border-gray-300 text-black focus:ring-indigo-600"/>
       </div>  
       <legend className='font-space'>Email me with news and offers</legend>
       </div>   
       </fieldset>

       </form>
      </div>

       <div className="shipping-address">
        <h2 className='text-lg font-semibold font-space pb-3'>Shipping Address</h2>
       <div>
       <form className='gap-5 flex flex-col'>
       <div className="">
        <label htmlFor="country" className="block f font-space text-[16px] font-medium leading-6 text-black"> Country/Region </label>
        <div className="mt-2">
        <input type="text" name="country" id="country" autoComplete="country-name"
        className="block px-3 font-space w-full rounded-md border border-gray-300 py-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 f focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"/>
        </div>
        </div> 
        
        <div className='flex flex-row gap-4 '>
        <div className="w-6/12">
        <label htmlFor="first-name" className="block f font-space text-[17px] font-medium leading-6 text-black"> First name </label>
        <div className="mt-2">
        <input type="text" name="first-name" id="first-name" autoComplete="given-name"
        className="block px-3 font-space w-full rounded-md border border-gray-300 py-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 f focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"/>
        </div>
        </div> 

        <div className="w-6/12">
        <label htmlFor="last-name" className="block f font-space text-[16px] font-medium leading-6 text-black"> Last name </label>
        <div className="mt-2">
        <input type="text" name="last-name" id="last-name" autoComplete="family-name"
        className="block px-3 font-space w-full rounded-md border border-gray-300 py-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 f focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"/>
        </div>
        </div> 
        </div>

        <div className="">
        <label htmlFor="street-address" className="block f font-space text-[16px] font-medium leading-6 text-black"> Address </label>
        <div className="mt-2">
        <input type="text" name="street-address" id="street-address" autoComplete="street-address"
        className="block px-3 font-space w-full rounded-md border border-gray-300 py-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 f focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"/>
        </div>
        </div> 

        <div className="">
        <label htmlFor="apartment" className="block f font-space text-[16px] font-medium leading-6 text-black"> Apartment (optional) </label>
        <div className="mt-2">
        <input type="text" name="apartment" id="apartment" autoComplete="street-address"
        className="block px-3 font-space w-full rounded-md border border-gray-300 py-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 f focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"/>
        </div>
        </div> 

        <div className='flex flex-row gap-2'>
        <div className="w-4/12">
        <label htmlFor="city" className="block f font-space text-[16px] font-medium leading-6 text-black"> City </label>
        <div className="mt-2">
        <input type="text" name="city" id="city" autoComplete="address-level2"
        className="block px-3 font-space w-full rounded-md border border-gray-300 py-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 f focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"/>
        </div>
        </div> 

        <div className="w-4/12">
        <label htmlFor="region" className="block f font-space text-[16px] font-medium leading-6 text-black"> Region </label>
        <div className="mt-2">
        <input type="text" name="region" id="region" autoComplete="address-level1"
        className="block px-3 font-space w-full rounded-md border border-gray-300 py-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 f focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"/>
        </div>
        </div> 

        <div className="w-4/12">
        <label htmlFor="zip" className="block f font-space text-[16px] font-medium leading-6 text-black"> Postal Code </label>
        <div className="mt-2">
        <input type="text" name="zip" id="zip" autoComplete="postal-code"
        className="block px-3 font-space w-full rounded-md border border-gray-300 py-3 py-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 f focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"/>
        </div>
        </div> 
        </div>

        <div className="">
        <label htmlFor="phone" className="block f font-space text-[17px] font-medium leading-6 text-black"> Phone </label>
        <div className="mt-2">
        <input type='text' name="phone" id="phone" autoComplete="phone"
        className="block px-3 font-space w-full rounded-md border border-gray-300 py-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 f focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"/>
        </div>
        </div> 

       </form> 
       </div>
       
       <div className='flex justify-end pt-8 md:mb-12'>
       <button onClick={() => router.push('/payment')} className='font-space px-8 rounded-md py-4 text-[14px] bg-black hover:bg-gray-950 text-white'>Continue to payment</button>
       </div>

       <div className='border-t md:visible invisible '>
       <div className='flex md:pt-8 pb-2 flex-row gap-3 justify-start'>
       <p className='font-space text-[12px] underline '>Refund Policy</p> 
       <p className='font-space text-[12px] underline '>Shipping Policy</p> 
       <p className='font-space text-[12px] underline '>Privacy Policy</p> 
       <p className='font-space text-[12px] underline '>Terms of service</p> 
       </div> 
       </div>

       </div>

      </div> 
      </div>


     <div className='flex w-full md:w-5/12 flex-col bg bg-[rgb(241,240,240)] pt-14 px-4 lg:px-12 xl:px-20'>

      {cartItems.map((item) => (
      <div className="preview flex flex-col xs:flex-row md:flex-col medium:flex-row pb-5 justify-between" key={item.id}>
     <div className='flex flex-col xs:flex-row gap-2 xs:gap-4'>
     <div className='flex  border-gray-200 border-2 width-f rounded-md '>
      <Image src={item.img} alt={item.name} width={40} height={40} className=" rounded-tl w-auto h-auto rounded-bl " />
      <Image src={item.img1} alt={item.name} width={40} height={40}  className=" rounded-tr w-auto h-auto rounded-br" />
      </div>  
      <p className='uppercase font-space  font-medium pt-2'>{item.title}</p>  
     </div>
     <div >
      <p className='pt-2 uppercase font-space '>${item.price}</p> 
      </div>
     
      </div>
      ))}
      
      <div className='flex pt-5 gap-2 sm:gap-3 '>
       <input className='w-9/12 py-4 px-4 border font-space rounded' placeholder='Discount Code'/>  
       <button className='w-3/12 rounded font-space border bg-[rgb(204,202,202)]'>Apply</button>
      </div>

      <div className='flex justify-between pt-5'>
       <h2 className='font-space '>Subtotal</h2>
       <p className='font-space  font-semibold'>${itemsPrice}</p>  
      </div>

      <div className='flex justify-between'>
       <h2 className='font-space'>Shipping</h2>  
       <p className='font-space'>${shippingPrice}</p>
      </div>
      
      <div className=' flex justify-between '>
       <h2 className='font-space '>Tax Price</h2>
       <p className='font-space'>${taxPrice}</p> 
      </div>

      <div className='pt-6 pb-10 flex justify-between text-lg'>
       <h2 className='font-space font-semibold'>Total</h2>
       <p className='font-bold font-space' > ${totalPrice}</p> 
      
      </div>
    
     </div>
    

    </div>
    </div>
    </div>
  )
}

export default Shipping