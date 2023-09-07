
'use client'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { hideLoading } from '@/redux/slices/cartSlice'


export default function App({ children }) {
 const dispatch = useDispatch()

 useEffect(() => {
 dispatch(hideLoading())
 }, [dispatch])


  return (
    <div>
      <div>
      <main>{children}</main>
      </div>
    </div>
  )
}
