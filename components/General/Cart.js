
import React from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineClose } from 'react-icons/ai'
import { addToCart, removeFromCart } from '@/redux/slices/cartSlice'

import Image from 'next/image'

const Cart = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const {  cartItems } = useSelector((state) => state.cart)

  const removeFromCartHandler = (id) => {
  dispatch(removeFromCart(id))
  }
  const addToCartHandler = async (product, qty) => {
  dispatch(addToCart({ ...product, qty }))
  }

  return (
    <div>
    <div className='mobileCart px-4'>
     {cartItems.map((item) => (
      <div key={item.id} className='flex flex-row justify-between items-center'>
      
      <div className=''>
      <div className='flex  '>
      <Image src={item.img} alt={item.name} width={40} height={40} className="" />
      <Image src={item.img1} alt={item.name} width={40} height={40} className="" />
      </div>    
      </div>

      <div className='flex flex-col items-start'>
      <h2 onClick={() => router.push(`/product/${item.id}`)} className='text-center uppercase font-space text-[14px]'> {item.title}</h2>
      <h2 className='text-center  font-space text-[14px]'>Price: ${item.price}</h2> 
      <div className='flex flex-row'>
      <h2 className='text-center  font-space text-[14px]'>Quantity :</h2>
      <select className='bg-transparent font-space text-[14px]' value={item.qty} onChange={(e) =>
      addToCartHandler(item, Number(e.target.value))
      }>
      {[...Array(item.countInStock).keys()].map((x) => (
      <option key={x + 1} value={x + 1}>
       {x + 1}
      </option>
       ))}
       </select>  
      </div> 
      </div>

      <div>
      <button className="default-button" onClick={() => removeFromCartHandler(item.id)}>
       <AiOutlineClose/>
      </button>
      </div>

      </div>
     ))}
      </div> 
    </div>
  )
}

export default Cart