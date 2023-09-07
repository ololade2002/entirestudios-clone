"use client"

import React from 'react'
import { addToCart, removeFromCart } from '@/redux/slices/cartSlice'
import Image from 'next/image'
import Link from 'next/link'
import CartHeader from '@/components/Navbar/CartHeader'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineClose } from 'react-icons/ai'
import CartNav from '@/components/General/Cart'

const Cart = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { loading, cartItems, itemsPrice } = useSelector((state) => state.cart)

  const removeFromCartHandler = (id) => {
  dispatch(removeFromCart(id))
  }
  const addToCartHandler = async (product, qty) => {
  dispatch(addToCart({ ...product, qty }))
  }

  return (
    <div>
     <CartHeader/>
     <div>
     <div className='py-6 smedium:pt-16 mx-auto'>
      {loading ? (
        <div>Loading...</div>
      ) : cartItems.length === 0 ? (
      <div className='font-space text-[13px] text-center'>
      There is nothing in your bag. <Link className='underline' href="/">Return to shop.</Link>
      </div>
      ) : (
     <div className='flex flex-col w-full xs:w-[90%] smedium:w-[70%] mx-auto '>

      <CartNav/>
      <div className='first-col webCart '>
      <div className="overflow-x-auto ">
      <table className="w-[100%] mx-auto">
      <thead className='border-b border-black'>
      <tr>
      <th className="px-5 py-5 text-center font-space font-normal text-[14px]"></th>
      <th className="px-5 py-5 text-center font-space font-normal text-[14px]">Product</th>
      <th className="px-5 py-5 text-center font-space font-normal text-[14px]">Quantity</th>
      <th className="px-5 py-5 text-center font-space font-normal text-[14px]">Price</th>  
      <th className="px-5 py-5 text-center font-space font-normal text-[14px]"></th>  
      </tr>
      </thead>

      <tbody>
      {cartItems.map((item) => (
      <tr key={item.id} className="">
      <td>
      <div className='flex pt-4 '>
      <Image src={item.img} alt={item.name} width={40} height={40} className="" />
      <Image src={item.img1} alt={item.name} width={40} height={40} className="" />
      </div>  
      </td>  

      <td>
      <Link href={`/product/${item.id}`} className="flex j justify-center items-center ">  
      
      <h2 className='text-center font-space text-[14px] uppercase'> {item.title}</h2>
      </Link>
      </td>
      <td className="p-5 text-center font-space text-[14px] ">
      <select className='bg-transparent font-space text-[14px]' value={item.qty} onChange={(e) =>
      addToCartHandler(item, Number(e.target.value))
      }>
      {[...Array(item.countInStock).keys()].map((x) => (
      <option key={x + 1} value={x + 1}>
       {x + 1}
      </option>
       ))}
       </select>
      </td>
      <td className="p-5 text-center font-space text-[14px]">${item.price}</td>
      <td className="p-5 text-center">
      <button className="default-button" onClick={() => removeFromCartHandler(item.id)}>
       <AiOutlineClose/>
      </button>
        </td>
        </tr>
        ))}
        </tbody>
      </table>
      </div>
      </div>

      <div >
      <div className="flex py-10 px-6 md:px-0 flex-col gap-3">
        <div className=" font-space text-[15px] uppercase ">
        <p>Subtotal : ${itemsPrice}</p> 
        </div>
        <div>
        <p className='font-space  text-[14px]'>Shipping calculated at checkout.</p> 
         <p className='font-space pt-1 text-[14px] 
         '>No holds in bag.</p> 
        </div>
        <button onClick={() => router.push('/shipping')} className=" mt-3 text-[14px]  font-space cart-btn w-[100%]">
          Proceed to checkout
        </button>
       
        </div>

      </div>
     </div>
      )}
    </div>
     </div>
    </div>
  )
}

export default Cart

