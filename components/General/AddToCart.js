'use client'

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { addToCart } from '@/redux/slices/cartSlice'
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function AddToCart({
  product,
  showQty = true,
  redirect = false,
  increasePerClick = false,
}) {
  const dispatch = useDispatch()

  const { cartItems } = useSelector((state) => state.cart)
  const router = useRouter()
  const [qty, setQty] = useState(1)

  const addToCartHandler = () => {
    let newQty = qty
    if (increasePerClick) {
      const existItem = cartItems.find((x) => x.id === product.id)
      if (existItem) {
        if (existItem.qty + 1 <= product.countInStock) {
          newQty = existItem.qty + 1
        } else {
          return alert('No more product exist')
        }
      }
    }
    dispatch(addToCart({ ...product, qty: newQty }))

    if (redirect) router.push('/cart')
  }

  return (
    <>
      {product.countInStock > 0 && showQty && (
        <div className="mb-2 flex justify-between">
          <div>Qty</div>
          <div>
            <select
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
            >
              {[...Array(product.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>{' '}
          </div>
        </div>
      )}
      <div>
        {product.countInStock > 0 ? (
          <button className="c-btn py-3 items-center text-[15px] gap-4 w-[100%] md:w-[70%] justify-center flex" onClick={addToCartHandler}>
            Add to cart  <AiOutlineArrowRight className='w-3 h-3'/>
          </button>
        ) : (
          <button disabled>Out of stock</button>
        )}
      </div>
    </>
  )
}
